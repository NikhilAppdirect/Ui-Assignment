	function checkAddress(c) {
		if (c.filling.checked == true) {
			c.caddress.value = c.paddress.value;
		}
	}


	function passwordMatch() {
		var password = document.getElementById("txtpassword").value;
		var confirmPassword = document.getElementById("txtconfirmpassword").value;
		if (password != confirmPassword) {
			alert("Passwords do not match.");
			return false;
		}
		return true;

	}

	function checkEmail(eid) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eid.value)) {
			return (true)
		} else {
			alert("You have entered an invalid email address!")
			return (false)
		}
	}

	function checkphone(pnum) {
		var val = pnum.value
		if (/^\d{10}$/.test(val)) {
			return true;
		} else {
			alert("Invalid number; numeric & must be ten digits")
			return false;
		}
	}

	function register() {
		var fname = document.getElementById("frstname").value;
		var lname = document.getElementById("lstname").value;
		var email = document.getElementById("eid").value;
		dashboard(fname, lname, email);
	}

	function dashboard(fname, lname, email) {
		var nameNode = document.createTextNode(fname + " " + lname);
		var li = document.createElement("li");
		li.setAttribute("class", "section-div-title-menu-item-name");
		li.setAttribute("title", email);
		li.appendChild(nameNode);
		var parentElement = document.getElementById("section-div-title-menu");
		parentElement.appendChild(li);

	}


	function dropdown() {
		document.getElementById("myDropdown").classList.toggle("show");
	}
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