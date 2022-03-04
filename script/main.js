(() => {
	// make the connections to the elements on the page
	// that we want the user to interact with
	let theButtons = document.querySelectorAll("#buttonHolder img"),
				puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
				dropZones = document.querySelectorAll(".drop-zone"),
				theGameBoard = document.querySelector(".puzzle-board");

	const piecePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// theButtons becomes thisL
	// [
	// <img>
	// <img>
	// <img>
	// <img>
	// ]

	function changeImageSet() {
		// debugger; // payse our code execution at this point
		// let key = this.dataset.bgref;
		// console.log(key);

		// theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
			 theGameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

			 piecePaths.forEach ((piece, index) => {
				 puzzlePieces[index].src = `images/${piece + this.dataset.bgref}.jpg `
			 })

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
		// get zone number: topLeft = 0, topRight = 1, bottomLeft = 2, bottomRight = 3
		let zoneNumber = this.classList[2];
		console.log("zone number: " + zoneNumber);

		// get the position of the zone
		let zonePosition = piecePaths[zoneNumber];
		console.log("What is matched?: " + zonePosition);

		let currentEl = event.dataTransfer.getData("draggedElement");
		console.log(`dropped this element:`, currentEl);

		//check if position of zone and puzzle piece match with each other
		if (currentEl == zonePosition) {
			// appendChild (add child) is a built-in JavaSrcipt method that
			// adds an element to a containing (parent) element

			// the "this" keyword is a reference to the element you're dropping onto (or into)
			this.appendChild(document.querySelector(`#${currentEl}`));
			console.log("Result: allowed");
		} else {
			console.log("Result: denied");
			return;
		}
	}

	// these are the "triggers" we want the user to use to fire off event
	theButtons.forEach(button => button.addEventListener("click", changeImageSet));
	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", handleDrop);
	});
})();
