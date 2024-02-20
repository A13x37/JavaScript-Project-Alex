// Shows popup for placing an order
const popupBox = document.querySelector("#popupBox");
function openPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = "<img src='./images/checkmark.png' style='height: 35px; width: 35px;'> Order Placed Successfully!";
    popupBox.appendChild(popup);

    // Closes popup after x amount of time
    setTimeout(() => {
        popup.remove();
    }, 3000);
}


// Order Side Bar
const sideBarBox = document.querySelector("#sideBar");
let isOpen = false;
function openSideBar() {
    if (isOpen == false) {
        sideBarBox.classList.remove('closeBar');
        sideBarBox.classList.add('openBar');
        isOpen = true;
    }
}
function closeSideBar() {
    if (isOpen == true) {
        sideBarBox.classList.remove('openBar');;
        sideBarBox.classList.add('closeBar');
        isOpen = false;
    }
}


// Adds order to list
