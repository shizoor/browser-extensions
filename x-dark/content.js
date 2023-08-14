// Create a div to display 'hi there'
const div = document.createElement('div');
div.textContent = 'hi there';
div.style.fontSize = '24px';
div.style.fontWeight = 'bold';
div.style.position = 'fixed';
div.style.top = '0';
div.style.left = '0';
div.style.backgroundColor = 'yellow';
div.style.zIndex = '9999';
document.body.insertBefore(div, document.body.firstChild);

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