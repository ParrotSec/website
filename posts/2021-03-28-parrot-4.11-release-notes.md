---
title: "Parrot 4.11 Release Notes"
date: 2021-03-28T11:30:12+02:00
author: palinuro
image: /assets/blog/4.11/parrot-4.11.jpg
description: "Parrot 4.11 is now available for download, read the release notes"
---

We are proud to announce the release of Parrot OS 4.11.
This new version includes many important updates to make the distribution more reliable and more secure.

# Where to get it

You can download Parrot OS from our [official download page](https://parrotsec.org/download), and we invite you to never trust third party and unofficial sources.

We also provide official torrent files in case direct downloads don't work for you.

# How to upgrade from a previous version

Parrot OS is a rolling release distribution, and updates flow in the repo as soon as they prove to be stable and reliable.

Version numbers (like 4.10 or 4.11) are just tags that we assign to the current state of the project every time we think there are enough updates accumulated in the repo to justify a refresh of the ISO files. In fact every Parrot version represents exactly a refresh of our ISO files to collect all the updates together into something ready to install and properly tested.

You can upgrade an existing system via APT using one of the following commands:

`sudo parrot-upgrade`

or

`sudo apt update && sudo apt full-upgrade`

but we recommend to do a backup and re-install the latest version to have a cleaner and more reliable user experience, especially if you come from a very old version of parrot that were not updated for a long while.e

# What's new

## Debian freezing and LTS plans

Debian is in “feature freeze” state to prepare for the new stable release.
Parrot 4.11 will benefit from this, and all the updates from now on will be subject to more tests.

We will catch the opportunity of a new Debian release to convert the current branch into a Long Term Support branch with fewer updates for a very reliable user experience.
The Long Term Support conversion plan will also re-introduce ARM support and init freedom.

We are evaluating the idea of continuing to provide a Rolling Release branch along side the LTS one.

## Important updates

Linux 5.10 is the default kernel of this new Parrot version, with better hardware support for very recent hardware.
We plan to release Linux 5.11 as soon as possible as a later update.

We have finally purged many old, broken and unmaintained tools, and revisited many of the existing ones. Our tool metapackages were revisited as well to reflect this little revolution.
Parrot 4.11 provides cleaner metapackages, updated tools and a more consistent repository.

Previous Parrot versions used to have un-needed services shut down by default, but such services happened to re-enable randomly after system updates. We have enforced some systemd rules to prevent this happening.

Certain tools used for Linux local privilege escalation represented a security hazard for parrot, so we have disabled and unarmed them (i.e. xspy is no longer an executable file in /usr/bin).


## Alternate Editions

Kde Plasma now works again as expected, and it was updated to provide a better look and feel.

XFCE has been updated with several improvements and fixes.

## Noticeable updates for pentesters

Metasploit framework was updated to 6.0.36, and we keep updating it weekly.

Bettercap has finally been updated to 2.29, and 2.30 is coming very soon.

Pompem was patched from Parrot team to properly handle down services and use the new wpvulndb server.

Routersploit was updated to make it work with python 3.9.

Xspy was patched to not be executable on host system.

Fish and Zsh support is now available in our skel, including the latest zsh-autocomplete version.


We can't report all the updates done to our tools here. If you are interested in a particular package, please read its specific changelog in /usr/share/doc/packagename to know more.


## Noticeable updates for developers

VSCodium, the open-source binary distribution of VSCode with telemetry removed at source level, is still our default development tool, and it was updated to its latest version (1.54). Geany (with some Parrot customizations) is also pre-installed for those running on less powerful hardware.

Parrot now ships with Python 3.9. Python 2 is finally deprecated, and /usr/bin/python now points to /usr/bin/python3 by default.

Parrot also includes Go 1.15, and Go 1.16 will come very soon.

The default Gcc version is  10.2.1.

Open a terminal window, type sudo apt show parrot-devel- and press TAB a couple of times to get the list of available packages from the bash autocompletion.

Complete the command with the package of your choice to know more about the features delivered (i.e. apt show parrot-devel-golang).

Additional metapackages for developers will come soon.



## Other updates from upstream providers

As always, this version ships with all the latest updates from our upstream sources (mostly Debian), and every new fix, improvement (or bug) is now included in Parrot 4.11 as well.

From the firefox browser to the mate desktop environment, all the awesome upates and security fixes from upstream sources since the previous release are now part of the Parrot repository and hence part of this new release.






Happy hacking
