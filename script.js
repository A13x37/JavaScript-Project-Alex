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
let list = document.querySelector("#list");

let alfredoPrice = 0;
let alfredoQuantity = 0;

let pizzaPrice = 0;
let pizzaQuantity = 0;

let spagettyPrice = 0;
let spagettyQuantity = 0;

let cakePrice = 0;
let cakeQuantity = 0;


function addOrder(image, name) {
    let item = document.createElement('div');

    if (name == 'Chicken Alfredo') {
        alfredoPrice += 6.98;
        alfredoQuantity++;
        item.innerHTML = `<div style="display: flex; justify-content: space-evenly; margin-top: 15px;">
                            <img src="./images/${image}" style="height: 100px; width: 100px; object-fit: cover;">
                            <div>
                            <h3>${name}</h3>
                            <p style="margin-top: 10px;">Price: $${alfredoPrice}</p>
                            <p style="margin-top: 10px;">Quantity: ${alfredoQuantity}
                            </div></div>`;
    } else if (name == 'Pizza') {
        pizzaPrice += 8.98;
        pizzaQuantity++;
        item.innerHTML = `<div style="display: flex; justify-content: space-evenly; margin-top: 15px;">
                        <img src="./images/${image}" style="height: 100px; width: 100px; object-fit: cover;">
                        <div>
                        <h3>${name}</h3>
                        <p style="margin-top: 10px;">Price: $${pizzaPrice}</p>
                        <p style="margin-top: 10px;">Quantity: ${pizzaQuantity}
                        </div></div>`;
    } else if (name == 'Spagetty') {
        spagettyPrice += 6.98;
        spagettyQuantity++;
        item.innerHTML = `<div style="display: flex; justify-content: space-evenly; margin-top: 15px;">
                        <img src="./images/${image}" style="height: 100px; width: 100px; object-fit: cover;">
                        <div>
                        <h3>${name}</h3>
                        <p style="margin-top: 10px;">Price: $${spagettyPrice}</p>
                        <p style="margin-top: 10px;">Quantity: ${spagettyQuantity}
                        </div></div>`;
    } else if (name == 'Lemon Cheesecake') {
        cakePrice += 4.59;
        cakeQuantity++;
        item.innerHTML = `<div style="display: flex; justify-content: space-evenly; margin-top: 15px;">
                        <img src="./images/${image}" style="height: 100px; width: 100px; object-fit: cover;">
                        <div>
                        <h3>${name}</h3>
                        <p style="margin-top: 10px;">Price: $${cakePrice}</p>
                        <p style="margin-top: 10px;">Quantity: ${cakeQuantity}
                        </div></div>`;
    }

    removeItem();
    list.appendChild(item);
}

function removeItem() {
    if (alfredoQuantity > 1) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
          }
    } else if (pizzaQuantity > 1) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
          }
    } else if (spagettyQuantity > 1) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
          }
    } else if (cakeQuantity > 1) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
          }
    }
}
