//function to scroll to the top of the page
	function scrolltoTop() {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}

//show the "Return to Top" button when scrolling down
	window.onscroll = function(){
		var button = document.getElementById('return-to-top');
		if (document.body.scrollTop > 20 || document.documentElementry.scrollTop > 20) { button.style.display = "block";} else { button.style.display = "none";
	 }
	};