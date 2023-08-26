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
    updateHomeParagraph()
    updateImage();
    updateAboutImage1();
    updateAboutImage2();
    updateAboutImage3();
    updateAboutParagraph()
    addNewCard();
    updateHours();
    updateContact();

    // Retrieve the card data from Local Storage
    const newImageUrl = localStorage.getItem("newCardImageUrl");
    const newCardTitle = localStorage.getItem("newCardTitle");
    const newCardSubtitle = localStorage.getItem("newCardSubtitle");

    // Check if the card data exists and call addNewCard if it does
    if (newImageUrl && newCardTitle && newCardSubtitle) {
        addNewCard(newImageUrl, newCardTitle, newCardSubtitle);
        
        // Clear the card data from Local Storage to avoid reusing it
        localStorage.removeItem("newCardImageUrl");
        localStorage.removeItem("newCardTitle");
        localStorage.removeItem("newCardSubtitle");
    }

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

function updateHomeParagraph() {
    const storedHomeParagraph = localStorage.getItem("editable-home-paragraph");
    if (storedHomeParagraph) {
        const editableHomeElement = document.querySelector("p#editable-home-paragraph");
        if (editableHomeElement) {
            editableHomeElement.textContent = storedHomeParagraph;
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

// update text
function updateAboutParagraph() {
    const storedAboutParagraph = localStorage.getItem("editable-about-paragraph");
    if (storedAboutParagraph) {
        const editableAboutElement = document.querySelector("p#editable-about-paragraph");
        if (editableAboutElement) {
            editableAboutElement.textContent = storedAboutParagraph;
        }
    }
}



function addNewCard(newImageUrl, newCardTitle, newCardSubtitle) {
    // Check if the image URL is empty or null
    if (!newImageUrl || newImageUrl.trim() === "") {
        return;
    }

    // Create a new card element
    var newCard = document.createElement("li");
    newCard.className = "card";

    // Add the image to the new card
    var newImage = document.createElement("div");
    newImage.className = "img";
    newImage.innerHTML = '<img src="' + newImageUrl + '" alt="img" draggable="false">';
    newCard.appendChild(newImage);

    // Add the title to the new card (use <h2> for card title)
    var newTitleElement = document.createElement("h2");
    newTitleElement.textContent = newCardTitle;
    newCard.appendChild(newTitleElement);

    // Add the subtitle to the new card
    var newSubtitleElement = document.createElement("span");
    newSubtitleElement.textContent = newCardSubtitle;
    newCard.appendChild(newSubtitleElement);

    // Get the gallery section element
    var gallerySection = document.getElementById("gallery");

    // Get the carousel element within the gallery section
    var carousel = gallerySection.querySelector(".carousel");

    // Insert the new card before the last card in the carousel
    var lastCard = carouselChildrens[carouselChildrens.length - 1];
    carousel.insertBefore(newCard, lastCard);

    // Update the carouselChildrens array with the new card
    carouselChildrens.push(newCard);

    // Calculate the new cardPerView value
    cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Scroll the carousel to the right to show the new card
    carousel.scrollLeft += firstCardWidth;

    // Remove the transition class to prevent jumping back to the first picture
    carousel.classList.remove("no-transition");
}

// hours

function updateHours() {
    const storedMonday = localStorage.getItem("monday");
    if (storedMonday) {
        const editableMondayElement = document.querySelector("span#monday");
        if (editableMondayElement) {
            editableMondayElement.textContent = storedMonday;
        }
    }

    const storedTuesday = localStorage.getItem("tuesday");
    if (storedTuesday) {
        const editableTuesdayElement = document.querySelector("span#tuesday");
        if (editableTuesdayElement) {
            editableTuesdayElement.textContent = storedTuesday;
        }
    }

    const storedWednesday = localStorage.getItem("wednesday");
    if (storedWednesday) {
        const editableWednesdayElement = document.querySelector("span#wednesday");
        if (editableWednesdayElement) {
            editableWednesdayElement.textContent = storedWednesday;
        }
    }

    const storedThursday = localStorage.getItem("thursday");
    if (storedThursday) {
        const editableThursdayElement = document.querySelector("span#thursday");
        if (editableThursdayElement) {
            editableThursdayElement.textContent = storedThursday;
        }
    }

    const storedFriday = localStorage.getItem("friday");
    if (storedFriday) {
        const editableFridayElement = document.querySelector("span#friday");
        if (editableFridayElement) {
            editableFridayElement.textContent = storedFriday;
        }
    }

    const storedSaturday = localStorage.getItem("saturday");
    if (storedSaturday) {
        const editableSaturdayElement = document.querySelector("span#saturday");
        if (editableSaturdayElement) {
            editableSaturdayElement.textContent = storedSaturday;
        }
    }

    const storedSunday = localStorage.getItem("sunday");
    if (storedSunday) {
        const editableSundayElement = document.querySelector("span#sunday");
        if (editableSundayElement) {
            editableSundayElement.textContent = storedSunday;
        }
    }
}

function updateContact() {
    const storedPhone = localStorage.getItem("phone");
    if (storedPhone) {
        const editablePhoneElement = document.querySelector("span#phone");
        if (editablePhoneElement) {
            editablePhoneElement.textContent = storedPhone;
        }
    }

    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
        const editableEmailElement = document.querySelector("span#email");
        if (editableEmailElement) {
            editableEmailElement.textContent = storedEmail;
        }
    }

}