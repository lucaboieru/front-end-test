var emailPlaceholder = "Your e-mail";
var passwordPlaceholder = "Your password";
var bannerWidth;
var contentSliderWidth;

function resizeSliders () {
	// get slider width for both sliders and update slide size
	bannerWidth = $(".headerContainer .slideShowContainer").width();
	contentSliderWidth = $(".contentSlideShow").width();
	$(".headerContainer .slideShowContainer .slide").css("width", bannerWidth);
	$(".headerContainer .slideShow").css("margin-left", -bannerWidth);
	$(".contentSlideShow .slide").css("width", contentSliderWidth);
	$(".contentSlideShow .slideShow").css("margin-left", -contentSliderWidth);
}

$(document).ready(function () {

	resizeSliders();

	$(window).resize(function () {
		resizeSliders();
	});
	
	// listen for show/hide login form event
	$(".headerContainer .loginBar a.login").click(function () {
		$(".loginFormContainer").toggleClass("notShown");
	});

	// login form validation
	$(".loginForm .email").focus(function () {
		// empty the input
		if ($(this).val().indexOf(emailPlaceholder) === 0)
			$(this).val("");
	});

	$(".loginForm").on("focus", ".password", function () {
		// empty the input and change type to password
		if ($(this).val().indexOf(passwordPlaceholder) === 0) {
			$passwordInput = $("<input type='password' name='password' class='formField password'/>");
			$(this).replaceWith($passwordInput);
			// hack for IE (reference: http://stackoverflow.com/a/2600261/2621606)
			setTimeout(function () {
				$(".loginForm .password")[0].focus();
			}, 10);
		}
	});

	$(".loginForm .email").blur(function () {
		if (!$(this).val()) {
			$(this).val(emailPlaceholder);
		}
	});

	$(".loginForm").on("blur", ".password", function () {
		if (!$(this).val()) {
			$textInput = $("<input type='text' name='password' class='formField password'/>");
			$(this).replaceWith($textInput);
			$(".loginForm .password").val(passwordPlaceholder);
		}
	});

	// listen for banner slide show prev/next events
	$(".headerContainer #next").click(function () {
		$slideShow = $(".headerContainer .slideShow");

		// move slider to the right
		if (!$slideShow.is(":animated")) {
			$slideShow.animate({
				"margin-left": "0px"
			}, 500, function () {
				$slideShow.css("margin-left", "-" + bannerWidth + "px");
				$slideShow.find(".slide:last").after($slideShow.find(".slide:first"));
			});
		}
	});

	$(".headerContainer #prev").click(function () {
		$slideShow = $(".headerContainer .slideShow");

		if (!$slideShow.is(":animated")) {
			$slideShow.css("margin-left", "0px");
			$slideShow.find(".slide:last").after($slideShow.find(".slide:first"));
			$slideShow.animate({
				"margin-left": "-" + bannerWidth + "px"
			}, 500);
		}
	});

	// listen for view more event
	$(".smallButtonContainer .viewMore").click(function () {
		$("#viewMoreContent").show();
	});

	// listen for big button dropdown event
	$(".bigButtonContainer .bigButton").click(function () {
		var $detailView = $(this).siblings(".bigButtonDetails");
		
		if ($(this).hasClass("active")) {
			// hide detail view
			$(this).removeClass("active");
			$detailView.hide();
			$(this).find(".plusButton").html("+");
		} else {
			// hide all opened detail views
			$(".bigButtonContainer .bigButton").removeClass("active");
			$(".bigButtonContainer .bigButtonDetails").hide();
			$(".bigButtonContainer .bigButton .plusButton").html("+");
			// show the clicked detail view
			$(this).addClass("active");
			$detailView.show();
			$(this).find(".plusButton").html("-");
		}
	});

	// listen for small button dropdown event
	$(".smallButtonContainer .smallButton").click(function () {
		var $detailView = $(this).siblings(".smallButtonDetails");

		if ($(this).hasClass("active")) {
			// hide detail view
			$(this).removeClass("active");
			$detailView.hide();
			$(this).find(".plusButton").html("+");
		} else {
			// hide all opened detail views
			$(".smallButtonContainer .smallButton").removeClass("active");
			$(".smallButtonContainer .smallButtonDetails").hide();
			$(".smallButtonContainer .smallButton .plusButton").html("+");
			// show the clicked detailview
			$(this).addClass("active");
			$detailView.show();
			$(this).find(".plusButton").html("-");
		}
	});

	// listen for content slide show prev/next events
	$(".contentSlideShow #next").click(function () {
		$slideShow = $(".contentSlideShow .slideShow");

		// move slider to the right
		if (!$slideShow.is(":animated")) {
			$slideShow.animate({
				"margin-left": "0px"
			}, 500, function () {
				$slideShow.css("margin-left", "-" + contentSliderWidth + "px");
				$slideShow.find(".slide:last").after($slideShow.find(".slide:first"));
			});
		}
	});

	$(".contentSlideShow #prev").click(function () {
		$slideShow = $(".contentSlideShow .slideShow");

		if (!$slideShow.is(":animated")) {
			$slideShow.css("margin-left", "0px");
			$slideShow.find(".slide:last").after($slideShow.find(".slide:first"));
			$slideShow.animate({
				"margin-left": "-" + contentSliderWidth + "px"
			}, 500);
		}
	});
});