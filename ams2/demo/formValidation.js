function validateForm() {
	var x = document.forms["myForm"]["username"].value;
	var valid = 1;
	if (x == null || x == "") {
		alert("username must be filled out");
		valid = 0;
	}
	var y = document.forms["myForm"]["pwd1"].value;
	if (y == null || y == "") {
		alert("password must be filled out");
		valid = 0;
	}

	var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[^a-zA-Z0-9])(.{6,})$/;
	if (!regex.test(y)) {
		alert("password must be valid");
		valid = 0;
	}

	var z = document.forms["myForm"]["firstname"].value;
	if (z == null || z == "") {
		alert("first name must be filled out");
		valid = 0;
	}
	var w = document.forms["myForm"]["lastname"].value;
	if (w == null || w == "") {
		alert("last name must be filled out");
		valid = 0;
	}

	var v = document.forms["myForm"]["email"].value;
	if (v == null || v == "") {
		alert("email must be filled out");
		valid = 0;
	}
	var u = document.forms["myForm"]["tel"].value;
	if (u == null || u == "") {
		alert("phone must be filled out");
		valid = 0;
	}

	var birthday = document.forms["myForm"]["birthday"].value;
	if (underAgeValidate(birthday) == false) {
		alert("You are under aged!");
		valid = 0;
	}
	else {
		alert("you are not under aged")
	}

	function underAgeValidate(birthday) {
		// it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
		var optimizedBirthday = birthday.replace(/-/g, "/");

		//set date based on birthday at 01:00:00 hours GMT+0100 (CET)
		var myBirthday = new Date(optimizedBirthday);

		// set current day on 01:00:00 hours GMT+0100 (CET)
		var currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';

		// calculate age comparing current date and borthday
		var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));

		if (myAge < 18) {
			return false;
		} else {
			return true;
		}

	}

	if (valid == 0)
		return false;
	else
		return true;


}