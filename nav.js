// Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

// (function() {
// 	scrollTo();
// })();

// function scrollTo() {
// 	const links = document.querySelectorAll('.ul_second li a');
// 	links.forEach(each => (each.onclick = scrollAnchors));
// }

// function scrollAnchors(e, respond = null) {
// 	const distanceToLeft = el => Math.floor(el.getBoundingClientRect().left);
// 	e.preventDefault();
// 	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
//     const targetAnchor = document.querySelector(targetID);
//     console.log(targetID);
// 	if (!targetAnchor) return;
// 	const originalLeft = distanceToLeft(targetAnchor);
// 	window.scrollBy({ left: originalLeft, top: 0, behavior: 'smooth' });
// 	const checkIfDone = setInterval(function() {
// 		const atRight = window.innerWidth + window.pageXOffset >= document.body.offsetWidth - 2;
// 		if (distanceToLeft(targetAnchor) === 0 || atRight) {
// 			targetAnchor.tabIndex = '-1';
// 			targetAnchor.focus();
// 			window.history.pushState('', '', targetID);
// 			clearInterval(checkIfDone);
// 		}
// 	}, 100);
// }