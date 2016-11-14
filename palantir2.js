var images = document.images;

images[0].src = chrome.extension.getURL('miki.jpg');
images[0].srcset = "";

if (images.length > 1) {
	for (var i = 1; i < images.length; i++) {
		images[i].src = chrome.extension.getURL('palantir.jpg');
		images[i].srcset = "";
	}
}

var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

for (var i = 0; i < headings.length; i += 3) {
	headings[i].innerHTML = "Mickey 'Neveranswer' Danka 4 CEO & President!";
}

if (headings.length > 1) {
	for (var i = 1; i < headings.length; i += 3) {
		headings[i].innerHTML = "Palantir is among the greatest software companies.";
	}
}

if (headings.length > 2) {
	for (var i = 2; i < headings.length; i += 3) {
		headings[i].innerHTML = "With 15 offices around the world! The one in London is the best... you know why!";
	}
}

document.title = "Palantir RULEZ!";