(() => {
	// make the connections to the elements on the page
	// that we want the user to interact with
	const theButtons = document.querySelectorAll("#buttonHolder img"),
				theGameBoard = document.querySelector(".puzzle-board");

	// theButtons becomes thisL
	// [
	// <img>
	// <img>
	// <img>
	// <img>
	// ]

	function changeBgImg() {
		// debugger; // payse our code execution at this point
		// let key = this.dataset.bgref;
		// console.log(key);

		// theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
			 theGameBoard.style.backgroundImage = `url(images/backGround${ths.dataset.bgref}.jpg)`;

			 // `` => this is a javascript template string. You can use it to write a bit of
			 // inline javascrip which will be intepreted at runtime
			 // search for MDN JavaScript Template String
	}

	// these are the "triggers" wwe want the user to use to fire off event 
	theButtons.forEach(button => button.addEventListener("click", changeBgImg));

})();
