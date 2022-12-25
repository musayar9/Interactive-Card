const backNumber = document.querySelector('.backNumber');
const cvc = document.querySelector("#cvc")
const cvcİnput = document.querySelector(".cvcİnput")


const cardNum = document.querySelector('.cardNum');
const cardNumber = document.querySelector('#cardNumber')
const errorNumber = document.querySelector(".errorNumber")


const personName = document.querySelector(".personName");
const cardName = document.querySelector('#cardName')
const errorName = document.querySelector(".name-error")

const month = document.querySelector(".month");
const cardMonth = document.querySelector("#mm")
const yearMonth = document.querySelector(".yearMonth")


const year = document.querySelector(".year");
const yearCard = document.querySelector('#yy')


const confirmBtn = document.querySelector("#confirm");
const contBtn = document.querySelector("#continue")
const attribution = document.querySelector(".attribution")


const cardFooter = document.querySelector(".cardFooter")
const cardForm = document.querySelector(".cardForm")


confirmBtn.addEventListener("click", function () {


    if( displayCardName() !== false &&
        displayCardNumber() !== false && 
        displayMonth() !== false &&
        displayYear() !== false &&
        displayCvc() !== false )
        
        {

        displayCardName();
        displayCardNumber();
        displayMonth();
        displayYear();
        displayCvc()

        cardForm.style.display="none";
        cardFooter.style.display="block"
        attribution.style.display="none"

    }else {
      displayCardName();
      displayCardNumber();
      displayMonth();
      displayYear();
      displayCvc();
    }

});


const displayCardName = () => {
    if (cardName.value == "") {
        errorName.style.display = "block";
        cardName.style.borderColor = "hsl(0, 100%, 66%)"
        return false
    } else {
        personName.innerText = cardName.value
        errorName.style.display = "none";
        cardName.style.borderColor = "hsl(249, 99%, 64%)"
        return true
    }
}

const displayCardNumber = () => {
    if (cardNumber.value == "" || cardNumber.value.length != 16) {
        errorNumber.style.display = "block"
        cardNumber.style.borderColor = "hsl(0, 100%, 66%)"
        return false
    } else {
        cardNum.innerText = cardNumber.value
        errorNumber.style.display = "none"
        cardNumber.style.borderColor = "hsl(249, 99%, 64%)"
        return true
    }
}


const displayMonth = () => {
    if (cardMonth.value == " " || cardMonth.value.length != 2 || cardMonth.value > 12) {
        yearMonth.style.display = "block"
        cardMonth.style.borderColor = "hsl(0, 100%, 66%)"
        return false
    } else {
        yearMonth.style.display = "none"
        month.innerText = cardMonth.value
        cardMonth.style.borderColor = "hsl(249, 99%, 64%)"
        return true
    }
}

const displayYear = () => {
    if (yearCard.value == " " || yearCard.value.length != 2) {
        yearMonth.style.display = "block"
        yearCard.style.borderColor = "hsl(0, 100%, 66%)"
        return false
    } else {
        yearMonth.style.display = "none"
        year.innerText = yearCard.value
        yearCard.style.borderColor = "hsl(249, 99%, 64%)"
        return true
    }
}

const displayCvc = () => {
    if (cvc.value == "" || cvc.value.length != 3) {
        cvcİnput.style.display = "block"
        cvc.style.borderColor = "hsl(0, 100%, 66%)"
        return false

    } else {
        backNumber.innerText = cvc.value
        cvcİnput.style.display = "none"
        cvc.style.borderColor = "hsl(249, 99%, 64%)"
    !   false
    }
}


contBtn.addEventListener("click",function()
{
    cardForm.style.display="flex";
    cardFooter.style.display="none"


    cardName.value="";
    cardNumber.value="";
    cardMonth.value="";
    yearCard.value="";
    cvc.value=""


    personName.innerText="Jane Applessed";
    cardNum.innerText ="0000 0000 0000 0000";
    month.innerText="00";
    year.innerText="00";
    backNumber.innerText="000";

    cardNumber.style.borderColor = ""
    cardMonth.style.borderColor = ""
    cvc.style.borderColor = ""
    yearCard.style.borderColor = ""
    cardName.style.borderColor =""

    errorName.style.display = "none";
    errorNumber.style.display = "none"
    yearMonth.style.display = "none"
    cvcİnput.style.display = "none"

})