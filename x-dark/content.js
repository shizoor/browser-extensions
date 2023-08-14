// Create a div to display Dark Brandon
const img = document.createElement('img');

img.style.position = 'fixed';
img.style.top = '0';
img.style.left = '0';
img.style.pointerEvents="none";
img.style.zIndex = '9999';
img.src = chrome.runtime.getURL('images/darkbrandon.png');
document.body.insertBefore(img, document.body.firstChild);

function setbgblack(){
    document.body.style.backgroundColor = "#000000";
    console.log("setbgblack called");
}


// Invert page colors
const invertStyle = document.createElement('style');
invertStyle.innerHTML = `
      body {
        filter: invert(1);
        background-color: white; // This ensures that the background remains consistent after inverting.
      }

      /* Inverting again any images or videos to keep them in original color */
      img, video {
        filter: invert(1);
      }
    `;
document.head.appendChild(invertStyle);

document.body.style.backgroundColor = "#000000";
setTimeout("setbgblack()", 500);

// For specific sites like Twitter, you might need to directly modify the background color after DOM is loaded
if (window.location.hostname === "twitter.com") {
    document.body.style.backgroundColor = "#000000";
    setTimeout("setbgblack()", 500);
}




console.log("script ended");