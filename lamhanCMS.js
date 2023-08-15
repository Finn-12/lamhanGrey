// HOME
// adding online delivery buttons
        // Function to get URL parameter by name
        function getUrlParameter(name) {
            var urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Get the value of the "newButtonName" and "newButtonHref" parameters from the URL
        var newButtonName = getUrlParameter("newButtonName");
        var newButtonHref = getUrlParameter("newButtonHref");

        // If there is a new button name and href, add the new button to the existing button container
        if (newButtonName && newButtonHref) {
            var newButton = document.createElement("button");
            newButton.className = "btn";
            newButton.innerHTML = `<a href="${newButtonHref}" target="_blank">${newButtonName}</a>`;

            var existingContainer = document.querySelector(".button-container");
            existingContainer.appendChild(newButton);
        }

        // Get the value of the "removeButton" parameter from the URL
        var removeButtonIndex = parseInt(getUrlParameter("removeButton"));

        // If there is a button index to remove, remove the corresponding button from the existing button container
        if (!isNaN(removeButtonIndex)) {
            var existingContainer = document.querySelector(".button-container");
            var buttonsToRemove = existingContainer.querySelectorAll(".btn");
            if (removeButtonIndex >= 0 && removeButtonIndex < buttonsToRemove.length) {
                existingContainer.removeChild(buttonsToRemove[removeButtonIndex]);
            }
        }

document.addEventListener("DOMContentLoaded", function() {
    updateHeading();
    updateImage();
    updateAboutImage1();
    updateAboutImage2();
    updateAboutImage3();

});

 
function updateHeading() {
    const storedHeading = localStorage.getItem("editable-heading");
    if (storedHeading) {
        const editableHeadingElement = document.querySelector("h2#editable-heading");
        if (editableHeadingElement) {
            editableHeadingElement.textContent = storedHeading;
        }
    }
}

function updateImage() {
    const newImageSrc = localStorage.getItem('newImageSrc');
    if (newImageSrc) {
        const aboutImage = document.getElementById('about-image');
        aboutImage.src = newImageSrc;
        localStorage.removeItem('newImageSrc');
    }
}

// ABOUT

function updateAboutImage1() {
    const newImageAbout1 = localStorage.getItem('newImageAbout1');
    if (newImageAbout1) {
        const aboutImage = document.getElementById('about-image1');
        aboutImage.src = newImageAbout1;
        localStorage.removeItem('newImageAbout1');
    }
}
function updateAboutImage2() {
    const newImageAbout2 = localStorage.getItem('newImageAbout2');
    if (newImageAbout2) {
        const aboutImage = document.getElementById('about-image2');
        aboutImage.src = newImageAbout2;
        localStorage.removeItem('newImageAbout2');
    }
}
function updateAboutImage3() {
    const newImageAbout3 = localStorage.getItem('newImageAbout3');
    if (newImageAbout3) {
        const aboutImage = document.getElementById('about-image3');
        aboutImage.src = newImageAbout3;
        localStorage.removeItem('newImageAbout3');
    }
}
