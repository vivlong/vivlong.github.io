function externalLinks() {
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<ANCHORS.LENGTH; i++) {
		var anchor = anchors;
		if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "external"
			anchor.target = "_blank";
	}
}
window.onload = externalLinks;
