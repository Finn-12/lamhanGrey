//Update Image
const newImageSrc = localStorage.getItem('newImageSrc');
if (newImageSrc) {
    const aboutImage = document.getElementById('about-image');
    aboutImage.src = newImageSrc;
    localStorage.removeItem('newImageSrc');
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