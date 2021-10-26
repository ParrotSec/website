image:
	podman build -t website .

build: image
	podman run --rm -ti -v $(shell pwd):/website website yarn install

test: build
	podman run --rm -ti --network host -v $(shell pwd):/website website yarn dev
