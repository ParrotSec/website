---
title: "A hidden gem from a technical POV"
date: 2022-07-08T11:03:14+02:00
author: Dm Knght
image: /assets/blog/a_hidden_gem/a_hidden_gem.png
description: "An overview of our updater"
---

## How do you check for an update?

The answer is straightforward `sudo apt update`. It’s the default used in the Debian documentation (technically apt is different from apt-get and aptitude but the method is similar):

[https://www.debian.org/doc/manuals/debian-faq/uptodate.en.html](https://www.debian.org/doc/manuals/debian-faq/uptodate.en.html)

## So, how does it work ?
The user must open a terminal, type "sudo apt update", press enter,  enter the user password then press enter again.
In the previous versions of Parrot, we had an “update reminder” that launches `sudo apt update` from the menu, so the user just needed to click and type the password.

![1](/assets/blog/a_hidden_gem/1.png)

We are going to the point where “apt update” runs:

1. The tool parses the repository addresses from “source lists” (we’ll go into more depth later)
2. “apt” connects to the repository and downloads index files (screenshot below)

![2](/assets/blog/a_hidden_gem/2.png)

The downloaded data from the central repository is quite large (18.9 MB). For Debian, it should be more than 12MB. If you have a low-speed internet connection or limited bandwidth, this is not a nice thing.

It can also add repositories for other architectures (i386 for example), which cause more files to be downloaded, even going so far as to download over 30 MB. The more repositories you have, and the more architecture you have, the more data you have to spend. 30 MB is not very nice, huh?

Luckily, if you downloaded the latest index files, you don’t have to download them again.

![3](/assets/blog/a_hidden_gem/3.png)

So why and how? (We’ll into this later. For now, I would like to point out some problems :)

1. The downloaded data is too big if you just want to know about available updates
2. It’s slow (well, not really, but can we make it faster?)
3. sudo password everytime. Can we just check for updates without it but at the same time not compromise security policies?

## APT and repository address behind the scene

[https://wiki.debian.org/DebianRepository/Format#Overview](https://wiki.debian.org/DebianRepository/Format#Overview)

![4](/assets/blog/a_hidden_gem/4.png)

From reading the documentation and screenshot above, it’s a little hard to understand. So let’s try with Parrot’s repository.

![5](/assets/blog/a_hidden_gem/5.png)

Let’s try with URL, I’m using [https://deb.parrot.sh/parrot](https://deb.parrot.sh/parrot)

![6](/assets/blog/a_hidden_gem/6.png)

Where is the value “parrot” as “distribution”? Isn’t it a URL mapping? Well… yes, it’s in dist.
![7](/assets/blog/a_hidden_gem/7.png)

Now you can see “parrot”. But hold on, let me show you the “pool” first:

What’s in “pool”? Only branches. What does it contain? It has everything about a package:
compiled deb files, source code, etc.

![8](/assets/blog/a_hidden_gem/8.png)

![9](/assets/blog/a_hidden_gem/9.png)

Looks like “pool” is the most important thing on the repository. But why is there a “dists”?

Inside “dist” of distribution “parrot” (we’d like to call it a branch instead of distribution), there are component folders and 3 files:

1. InRelease
2. Release
3. Release.gpg, which should be the GPG key

![10](/assets/blog/a_hidden_gem/10.png)

Let's see what it contains. First with *Release*:

![11](/assets/blog/a_hidden_gem/11.png)

And then *InRelease*:

![12](/assets/blog/a_hidden_gem/12.png)

These 2 files look similar. The difference is as follows. *InRelease* also contains a GPG key-value, whereas *Release* has only regular metadata. So why do we have to read all of this? Either Release or InRelease has section Date.

![13](/assets/blog/a_hidden_gem/13.png)

By assuming all files are generated every time the repository has a new update, we can use it to do checks for update.

Let’s check the components in "dists". We have architectures, and in each architecture directory, we have files that look like this:

![14](/assets/blog/a_hidden_gem/14.png)

The file Release doesn’t have much info.

![15](/assets/blog/a_hidden_gem/15.png)

Meanwhile, Packages contain everything about packages. It’s like you are using `apt show`:

![16](/assets/blog/a_hidden_gem/16.png)

What are these used for?

1. Folder pool contains packages (compiled .deb, source code, debianize, etc).
2. Folder "dists" contains metadata of packages.
3. Release and InRelease contains core information: release date, architecture, etc. and a checksum of all Package files.
4. All Package files in components contain information of packages: name,version, depends, etc. Basically it’s a database of `apt show`.

We need a method to use either Release or InRelease, which costs only 14KB to check for a new update.

## A hidden apt spot in your system and the way to use it

Now we know Packages files are basically a “database” of apt. So where is it in the system?

It’s at `/var/lib/apt/lists/`.

![17](/assets/blog/a_hidden_gem/17.png)

Again, we have to reuse the source list:

![18](/assets/blog/a_hidden_gem/18.png)

File names in this directory are like this (notice that <address> is converted to <domain>_<path>)<address>_<dists>_<distribution>_
In the screenshot, we can see many things:

- InRelease: The metadata file.
- The _Packages, which is the actual database, contains components in the name. By the keyword binary, we can assume it’s about compiled packages (.deb file), and we have source for “apt source” which should have a different name.
- Each repository and each branch has a different InRelease file.

Now we can fully understand the workflow of `sudo apt update`.

1. Read the source list, parse addresses.
2. Convert address to actual repository address, download InRelease (which contains a GPG key), and then all Packages files (which are much larger than only InRelease).
3. Convert the actual URL to file name, save in `/var/lib/apt/lists/`.
4. DO NOT download everything if the local file is the latest. I haven’t checked the source code of apt, but I assume it’s sort of checking “Date” in the InRelease file. Well, it’s easy and simple to understand.

So we are having everything we need. So, the scope of the update-reminder is:

1. Only check if a new update is available. We do not compare packages to know what can be upgraded, what will be removed, etc…
2. Save A LOT of network data (about 14KB for a branch/distribution, seriously?).
3. Save A LOT of time by very small data to download (About 70 KB).
4. In the update-reminder, I do parse the section Date and compare date, which should make the code do less comparison.

![19](/assets/blog/a_hidden_gem/19.png)
