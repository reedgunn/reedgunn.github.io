function resizeIframeContent(iframe) {
    const iframeWindow = iframe.contentWindow;
    const iframeDoc = iframeWindow.document;
    const iframeBody = iframeDoc.body;
    const iframeHtml = iframeDoc.documentElement;

    const iframeContentWidth = Math.max(iframeBody.scrollWidth, iframeBody.offsetWidth, iframeHtml.clientWidth, iframeHtml.scrollWidth, iframeHtml.offsetWidth);
    const iframeContentHeight = Math.max(iframeBody.scrollHeight, iframeBody.offsetHeight, iframeHtml.clientHeight, iframeHtml.scrollHeight, iframeHtml.offsetHeight);

    const containerWidth = iframe.parentElement.clientWidth;
    const containerHeight = iframe.parentElement.clientHeight;

    const scaleWidth = containerWidth / iframeContentWidth;
    const scaleHeight = containerHeight / iframeContentHeight;
    const scale = Math.min(scaleWidth, scaleHeight);

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
}

function resizeIframes() {
    const iframes = document.querySelectorAll('.app');
    iframes.forEach(iframe => {
        iframe.addEventListener('load', () => {
            resizeIframeContent(iframe);
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

function clearFormFields() {
    const inputs = document.querySelectorAll('#gform input[type="text"], #gform textarea');
    let all_questions_answered = true;
    inputs.forEach(input => {
        if (input.value == "") {
            all_questions_answered = false;
        }
    });
    if (all_questions_answered) {
        inputs.forEach(input => {
            input.value = '';
        });
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('gform');

    form.addEventListener('submit', (event) => {
        // Allow the form submission to complete before clearing the fields
        setTimeout(clearFormFields, 1000); // Adjust the timeout as necessary
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.getElementById("local-nav").querySelectorAll("li > a");
    let lastClickedLink = document.getElementById("home-link");
    links.forEach(link => {
        link.addEventListener("click", function() {
            if (lastClickedLink) {
                lastClickedLink.classList.remove("active");
            }
            link.classList.add("active");
            lastClickedLink = link;
        });
    });
});