console.log("Welcome to my portfolio site!");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

$('#click_advance').click(function() {
    $('#display_advance').toggle('1000');
    $("i", this).toggleClass("fas fa-bars fas fa-x");
});

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
});