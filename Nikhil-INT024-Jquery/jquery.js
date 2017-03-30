$(document).ready(function() {


	$("#chckbox").on('click', function() {
		if ($('#chckbox').is(':checked')) {

			var ptad = $("#addressp").val();

			$("#addressc").val(ptad);
			$("#addressc").attr("disabled", true);

		}
	});

	$("#eid").on('change', function() {

		var email = $("#eid").val();
		var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if (reg.test(email)) {
			return (true)
		} else {
			alert("You have entered an invalid email address!")
			return (false)
		}

	});

	$('#pnum').on('change', function() {
		var phone = $('#pnum').val();
		var reg = /^\d{10}$/;

		if (!reg.test(phone)) {
			alert("no spaces, special characters or alphabets are allowed ");
			return false;
		}
	});

	$('#txtpassword').on('change', function() {

		var password = $('#txtpassword').val();
		if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(txtpassword.value)) {
			return (true)

		} else {
			alert("False password-Try Again")
			return (false)
		}
	});

	$("#txtconfirmpassword").on('change', function() {


		var password = $('#txtpassword').val();

		var cpassword = $('#txtconfirmpassword').val();


		if (password != cpassword) {
			alert("Passwords do not match.");
			return false;
		}
		return true;
	});

	$("#register").on('click', function() {

		var fname = $("#frstname").val();
		var lname = $("#lstname").val();
		var email = $("#eid").val();
		$("#parent-div").append(fname + " " + lname + "<br>").attr('title', email).addClass("dashboardfonts");;
	});


	$("myDropdown").on('click', function() {
		$('#myDropdown').toggleClass('show');

		window.onclick = function(event) {
			if (!event.target.matches('.dropbtn')) {

				var dropdowns = document.getElementsByClassName("dropdown-content");
				var i;
				for (i = 0; i < dropdowns.length; i++) {
					var openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('show')) {
						openDropdown.classList.remove('show');
					}
				}
			}
		}
	});

});