function _load() {
	const rootDiv = document.getElementById("root");

	const numberOfGridItems = 5;

	const gridItemHTML = `
		<div
			class="grid-item"
		></div>
	`;

	for (let index = 0; index < numberOfGridItems; index++) {
		rootDiv.insertAdjacentHTML("beforeend", gridItemHTML);
	}

	const gridItems = document.querySelectorAll(".grid-item");

	const gridAreas = ["header", "nav", "main", "aside", "footer"];

	gridItems.forEach(function (item, index) {
		item.classList.add(gridAreas[index]);
	});
}

window.addEventListener("load", _load);
