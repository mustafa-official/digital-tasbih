let initialValue1 = 0;
let initialValue2 = 0;
let initialValue3 = 0;
let subhanallahCounter = document.getElementById('subhanallah-counter');
let alhamdulillahCounter = document.getElementById('alhamdulillah-counter');
let allahuakbarCounter = document.getElementById('allahuakbar-counter');
// subhanallah-increment
document.getElementById('subhanallah-increment').addEventListener('click', function () {
    if (initialValue1 === 33) {
        let audio = new Audio('subhanallah.mp3');
        audio.play();
        return alert('Subhanallah complete. Please start Alhamdulillah');
        
    }
    const counter = document.getElementById('subhanallah-counter');
    initialValue1++;
    counter.innerText = initialValue1;


})

// subhanallah-decrement
document.getElementById('subhanallah-decrement').addEventListener('click', function () {
    if (initialValue1 <= 0) {
        return alert('Negative value not allow');
    }
    const counter = document.getElementById('subhanallah-counter');
    initialValue1--;
    counter.innerText = initialValue1;

})

// Alhamdulillah-increment
document.getElementById('alhamdulillah-increment').addEventListener('click', function () {
    if (initialValue2 === 33) {
        return alert('Alhamdulillah complete. Please start Allahuakbar');
    }
    const counter = document.getElementById('alhamdulillah-counter');
    initialValue2++;
    counter.innerText = initialValue2;

})

// Alhamdulillah-decrement
document.getElementById('alhamdulillah-decrement').addEventListener('click', function () {
    if (initialValue2 <= 0) {
        return alert('Negative value not allow');
    }
    const counter = document.getElementById('alhamdulillah-counter');
    initialValue2--;
    counter.innerText = initialValue2;

})

// allahuakbar-increment
document.getElementById('allahuakbar-increment').addEventListener('click', function () {
    if (initialValue3 === 34) {
        return alert('Allahuakbar complete');
    }
    const counter = document.getElementById('allahuakbar-counter');
    initialValue3++;
    counter.innerText = initialValue3;

})

// allahuakbar-decrement
document.getElementById('allahuakbar-decrement').addEventListener('click', function () {
    if (initialValue3 <= 0) {
        return alert('Negative value not allow');
    }
    const counter = document.getElementById('allahuakbar-counter');
    initialValue3--;
    counter.innerText = initialValue3;

})

// reset button 
document.getElementById('reset-btn').addEventListener('click', function () {

    subhanallahCounter.innerText = 0;
    alhamdulillahCounter.innerText = 0;
    allahuakbarCounter.innerText = 0;
    initialValue = 0;
    location.reload()

})


