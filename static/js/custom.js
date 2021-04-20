	/*	copy function */
	$(document).ready(
		function() {
			$('.btn-copy').on("click", 
			function() {
				value = $(this).data('clipboard');
				let $tmp = $("<input>");
				$("body").append($tmp);
				$tmp.val(value).select();
				document.execCommand("copy");
				$(this).text('copied!');
				$tmp.remove();
			})
		})

	/* ParticlesJS */
	particlesJS.load('particles-js', '../plugins/particles/particles.json');

	/* Add active class to the first element */
	$('.carousel-item').first().addClass('active')