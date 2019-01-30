function toggle (kategori) {

	if (kategori == "ICM") {
		var x = document.querySelectorAll("#ICM");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}

		var x = document.querySelectorAll("#SIDE");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}

		var x = document.querySelectorAll("#TELE");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}
	}
	else if (kategori == "SIDE") {
		var x = document.querySelectorAll("#SIDE");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}

		var x = document.querySelectorAll("#ICM");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}

		var x = document.querySelectorAll("#TELE");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}
	}
	else if (kategori == "TELE") {
		var x = document.querySelectorAll("#TELE");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}

		var x = document.querySelectorAll("#ICM");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}

		var x = document.querySelectorAll("#SIDE");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}
	}
	else if (kategori == "all") {
		var x = document.querySelectorAll("#SIDE");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}

		var x = document.querySelectorAll("#ICM");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}

		var x = document.querySelectorAll("#TELE");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}
	}
}