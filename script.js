console.log("JavaScript file is loaded");

function resizeIframeContent(iframe) {
    const iframeWindow = iframe.contentWindow;
    const iframeDoc = iframeWindow.document;
    const iframeBody = iframeDoc.body;
    const iframeHtml = iframeDoc.documentElement;

    const iframeContentWidth = Math.max(iframeBody.scrollWidth, iframeBody.offsetWidth, iframeHtml.clientWidth, iframeHtml.scrollWidth, iframeHtml.offsetWidth);
    const iframeContentHeight = Math.max(iframeBody.scrollHeight, iframeBody.offsetHeight, iframeHtml.clientHeight, iframeHtml.scrollHeight, iframeHtml.offsetHeight);

    const containerWidth = iframe.parentElement.clientWidth;
    const containerHeight = iframe.parentElement.clientHeight;

    console.log(`iframeContentWidth: ${iframeContentWidth}, iframeContentHeight: ${iframeContentHeight}`);
    console.log(`containerWidth: ${containerWidth}, containerHeight: ${containerHeight}`);

    const scaleWidth = containerWidth / iframeContentWidth;
    const scaleHeight = containerHeight / iframeContentHeight;
    const scale = Math.min(scaleWidth, scaleHeight);

    console.log(`scaleWidth: ${scaleWidth}, scaleHeight: ${scaleHeight}, scale: ${scale}`);

    // Apply the scaling transformation
    iframe.style.transform = `scale(${scale})`;
    iframe.style.transformOrigin = 'top left';

    // Adjust the iframe dimensions and position
    iframe.style.width = `${iframeContentWidth}px`;
    iframe.style.height = `${iframeContentHeight}px`;

    // Center the iframe if necessary
    const offsetX = (containerWidth - (iframeContentWidth * scale)) / 2;
    const offsetY = (containerHeight - (iframeContentHeight * scale)) / 2;

    iframe.style.position = 'absolute';
    iframe.style.left = `${offsetX}px`;
    iframe.style.top = `${offsetY}px`;

    console.log(`iframe.style.transform: ${iframe.style.transform}`);
    console.log(`iframe.style.width: ${iframe.style.width}, iframe.style.height: ${iframe.style.height}`);
    console.log(`iframe.style.left: ${iframe.style.left}, iframe.style.top: ${iframe.style.top}`);
}

function resizeIframes() {
    console.log("resizeIframes function is called");
    const iframes = document.querySelectorAll('.app');
    iframes.forEach(iframe => {
        iframe.addEventListener('load', () => {
            resizeIframeContent(iframe);
            console.log("Iframe loaded and resized.");
        });
        if (iframe.contentDocument.readyState === 'complete') {
            resizeIframeContent(iframe);
        }
    });
}

window.addEventListener('resize', () => {
    setTimeout(resizeIframes, 100); // Short delay to ensure correct dimensions after resize
});

window.addEventListener('load', () => {
    for (var i = 0; i < 10; i++) {
        resizeIframes();
    }
});
