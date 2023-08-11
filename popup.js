let popup = document.getElementById("popup");

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from being submitted

    // Show the popup
    openPopup();

    // You can perform any form validation or other actions here before redirecting
}

function openPopup(){
    popup.classList.add('open-popup')
}

function closePopup(){
    popup.classList.remove('open-popup')
}

function closePopupAndRedirect() {
    closePopup();
    window.location.href = "membership.html";
}