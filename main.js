function _load() {
	const rootDiv = document.getElementById("root");

	const numberOfGridItems = 3;

	const gridItemHTML = `
		<div
			class="grid-item"
		>
		</div>
	`;

	for (let index = 0; index < numberOfGridItems; index++) {
		rootDiv.insertAdjacentHTML("beforeend", gridItemHTML);
	}
}

window.addEventListener("load", _load);
