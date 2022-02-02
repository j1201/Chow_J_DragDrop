(() => {
	// make the connections to the elements on the page
	// that we want the user to interact with
	const theButtons = document.querySelectorAll("#buttonHolder img"),
				puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
				dropZones = document.querySelectorAll(".drop-zone"),
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
			 theGameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

			 // `` => this is a javascript template string. You can use it to write a bit of
			 // inline javascrip which will be intepreted at runtime
			 // search for MDN JavaScript Template String
	}

	function startDrag(event) {
		// save a reference to the element we're dragging
		event.dataTransfer.setData("draggedElement", event.target.id);
	}

	//preventDefault prevent the default event function
	function draggedOver(event) {
		// event is the user event (a click, a drag, a drop)
		// some elements have default behaviour (like an anchor tag) -> we need to block that behaviour
		//and script our own
		// that's what event.preventDefault() does -> override the default behaviour (block it)
		event.preventDefault();
	}

	function handleDrop(event) {
		event.preventDefault();
		let currentEl = event.dataTransfer.getData("draggedElement");
		console.log(`dropped this element:`, currentEl);

		// appendChild (add child) is a built-in JavaSrcipt method that
		// adds an element to a containing (parent) element

		// the "this" keyword is a reference to the element you're dropping onto (or into)
		this.appendChild(document.querySelector(`#${currentEl}`));
	}

	// these are the "triggers" wwe want the user to use to fire off event
	theButtons.forEach(button => button.addEventListener("click", changeBgImg));
	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", handleDrop);
	});
})();
