image:
	podman build -t website .

prepare: image
	podman run --rm -ti -v $(shell pwd):/website website yarn install

test: prepare
	podman run --rm -ti --network host -v $(shell pwd):/website website yarn dev

build: prepare
	podman run --rm -ti --network host -v $(shell pwd):/website website yarn next build
	podman run --rm -ti --network host -v $(shell pwd):/website website yarn next export -o _build

publish: build
	rclone sync --progress --delete-after _build/ linode-frankfurt:parrot-website/