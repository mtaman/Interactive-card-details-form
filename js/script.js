// Card Dispaly
const cardDNum = document.getElementById("dcardnum");
const cardDName = document.getElementById("dcardname");
const cardDMM = document.getElementById("dcardMM");
const cardDYY = document.getElementById("dcardYY");
const cardCVC = document.getElementById("dcardcvc");

// FORM INPUT
const fName = document.getElementById("cardHoldername");
const fNum = document.getElementById("cardNum");
const fDMM = document.getElementById("expairdat");
const fDYY = document.getElementById("expairdatY");
const fDCvc = document.getElementById("cardCvc");

// Button
const bConfirm = document.getElementById("submit");
const bThank = document.getElementById("thank");

// Aria
const form = document.getElementById("detailsForm");
const thanks = document.getElementById("thankYOU");

// Vars
let myCardName = null;
let myCardNumber = null;
let myCardMM = null;
let myCardYY = null;
let myCardCvc = null;

// Error
let naameErro = document.getElementById("errorMassage");
let numberErro = document.getElementById("numerrorMasg");
let MMrrorMasg = document.getElementById("MMDaterrorMasg");
let YYrrorMasg = document.getElementById("YYDaterrorMasg");
let cvcrrorMasg = document.getElementById("cvcDaterrorMasg");

// functions

function inputCardHoldername() {
    cardDName.innerHTML = fName.value || "JANE APPLESEED";

    (fName.value) ? myCardName = true : myCardName = false;
}

//credit Card
function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || '';
    var parts = [];
    for (i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
        return parts.join(' ');
    } else {
        return value;
    }
}

function inputcardNumber() {

    let numerrorMasg = numberErro;
    let val = fNum.value;

    fNum.maxLength = 16;

    if (isNaN(val)) {
        numerrorMasg.innerHTML = "Wrong format numbers only";
        numerrorMasg.style.display = "block";
        fNum.classList.add('error');
        cardDNum.innerHTML = "0000 0000 0000 0000";
    } else {
        numerrorMasg.style.display = "none";
        fNum.classList.remove('error');
        myCardNumber = true;
    }
    cardDNum.innerHTML = cc_format(val) || "0000 0000 0000 0000";



}
function inputMM() {

    let numerrorMasg = MMrrorMasg;
    fDMM.maxLength = 2;
    let val = fDMM.value;

    if (isNaN(val)) {
        numerrorMasg.innerHTML = "Wrong format numbers only";
        numerrorMasg.style.display = "block";
        fDMM.classList.add('error');
        cardDMM.innerHTML = "00";
    } else {
        numerrorMasg.style.display = "none";
        fDMM.classList.remove('error');
    }


    if (val.length < 2 && val != "") {
        cardDMM.innerHTML = "0" + fDMM.value || "00";
    } else {
        cardDMM.innerHTML = fDMM.value || "00";
    }

    (val) ? myCardMM = true : myCardMM = false;
    dateEx(val, null);

}

function inputYY() {
    fDYY.maxLength = 2;
    let val = fDYY.value;
    if (isNaN(val)) {
        YYrrorMasg.innerHTML = "Wrong format numbers only";
        YYrrorMasg.style.display = "block";
        fDYY.classList.add('error');
        cardDYY.innerHTML = "00";
    } else {
        YYrrorMasg.style.display = "none";
        fDYY.classList.remove('error');
    }
    cardDYY.innerHTML = val || "00";

    (val) ? myCardYY = true : myCardYY = false;
    dateEx(null, val);
}

function dateEx(inM = null, inY = null) {
    let MM = fDMM.value;
    let YY = fDYY.value;
    let Y = new Date().getFullYear().toString().substr(-2);
    let M = new Date().getMonth() + 1;

    if (inM != null) {

        if (MM > 12) {
            MMrrorMasg.innerHTML = "Wrong forma";
            MMrrorMasg.style.display = "block";
            fDMM.classList.add('error');
            myCardMM = false;
        } else {
            MMrrorMasg.style.display = "none";
            fDMM.classList.remove('error');
        }

    }
    if (inY != null) {
        if (Y > YY) {
            YYrrorMasg.innerHTML = "Expired";
            YYrrorMasg.style.display = "block";
            fDYY.classList.add('error');
            myCardYY = false;
        } else {
            YYrrorMasg.style.display = "none";
            fDMM.classList.remove('error');
        }

    }


    console.log(M);

}

function inputCvc() {
    fDCvc.maxLength = 3;
    let val = fDCvc.value;
    if (isNaN(val)) {
        cvcrrorMasg.innerHTML = "Wrong format numbers only";
        cvcrrorMasg.style.display = "block";
        fDCvc.classList.add('error');
        cardCVC.innerHTML = "00";
    } else {
        cvcrrorMasg.style.display = "none";
        fDCvc.classList.remove('error');
    }
    cardCVC.innerHTML = val || "000";
    if (val.length != 3) {
        myCardCvc = false;
    } else {
        (val) ? myCardCvc = true : myCardCvc = false;
    }



}


// Buttons
let bConfirmClick = () => {

    if (!myCardName) {
        naameErro.innerHTML = "Please Inter Your Name";
        fName.classList.add('error');
        naameErro.style.display = "block";
        fName.classList.add('error');
    }

    if (!myCardNumber) {
        numberErro.innerHTML = "Can`t be blank";
        fNum.classList.add('error');
        numberErro.style.display = "block";
        fNum.classList.add('error');
    }

    if (!myCardMM) {
        MMrrorMasg.innerHTML = "MM Can`t be blank";
        MMrrorMasg.style.display = "block";
        fDMM.classList.add('error');
    }

    if (!myCardYY) {
        YYrrorMasg.innerHTML = "YY Can`t be blank";
        YYrrorMasg.style.display = "block";
        fDYY.classList.add('error');
    }

    if (!myCardCvc) {
        cvcrrorMasg.innerHTML = "Can`t be blank";
        cvcrrorMasg.style.display = "block";
        fDCvc.classList.add('error');
    }
    if (myCardNumber && myCardMM && myCardYY && myCardCvc) {
        form.classList.add("hiden");
        thanks.classList.remove("hiden");
    }

};
bConfirm.addEventListener('click', bConfirmClick);
bThank.addEventListener("click", () => {

    form.classList.remove("hiden");
    thanks.classList.add("hiden");
    form.reset();
});


