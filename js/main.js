var emailPlaceholder = "Your e-mail";
var passwordPlaceholder = "Your password";

$(document).ready(function () {
	
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

	$(".loginForm .password").focus(function () {
		// empty the input and change type to password
		if ($(this).val().indexOf(passwordPlaceholder) === 0) {
			$(this).val("");
			$(this).attr("type", "password");
		}
	});

	$(".loginForm .email").blur(function () {
		if (!$(this).val()) {
			$(this).val(emailPlaceholder);
		}
	});

	$(".loginForm .password").blur(function () {
		if (!$(this).val()) {
			$(this).val(passwordPlaceholder);
			$(this).attr("type", "text");
		}
	});

	// listen for banner slide show prev/next events
	$(".headerContainer .slideShowControlContainer #next").click(function () {
		$slideShow = $(".headerContainer .slideShow");

		// move slider to the right
		if (!$slideShow.is(":animated")) {
			$slideShow.animate({
				"margin-left": "0px"
			}, 500, function () {
				$slideShow.css("margin-left", "-920px");
				$slideShow.find(".slide:last").after($slideShow.find(".slide:first"));
			});
		}
	});

	$(".headerContainer .slideShowControlContainer #prev").click(function () {
		$slideShow = $(".headerContainer .slideShow");

		if (!$slideShow.is(":animated")) {
			$slideShow.css("margin-left", "0px");
			$slideShow.find(".slide:last").after($slideShow.find(".slide:first"));
			$slideShow.animate({
				"margin-left": "-920px"
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
		} else {
			// hide all opened detail views
			$(".bigButtonContainer .bigButton").removeClass("active");
			$(".bigButtonContainer .bigButtonDetails").hide();
			// show the clicked detail view
			$(this).addClass("active");
			$detailView.show();
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
});