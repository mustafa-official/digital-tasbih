let initialValue = 0;
let subhanallahCounter = document.getElementById('subhanallah-counter');
let alhamdulillahCounter = document.getElementById('alhamdulillah-counter');
let allahuakbarCounter = document.getElementById('allahuakbar-counter');
// subhanallah-increment
document.getElementById('subhanallah-increment').addEventListener('click', function () {
    if (initialValue === 33) {
        return alert('Subhanallah complete. Please start Alhamdulillah');
    }
    const counter = document.getElementById('subhanallah-counter');
    initialValue++;
    counter.innerText = initialValue;

})

// subhanallah-decrement
document.getElementById('subhanallah-decrement').addEventListener('click', function () {
    if (initialValue <= 0) {
        return alert('Negative value not allow');
    }
    const counter = document.getElementById('subhanallah-counter');
    initialValue--;
    counter.innerText = initialValue;

})

// Alhamdulillah-increment
document.getElementById('alhamdulillah-increment').addEventListener('click', function () {
    if (initialValue === 33) {
        return alert('Alhamdulillah complete. Please start Allahuakbar');
    }
    const counter = document.getElementById('alhamdulillah-counter');
    initialValue++;
    counter.innerText = initialValue;

})

// Alhamdulillah-decrement
document.getElementById('alhamdulillah-decrement').addEventListener('click', function () {
    if (initialValue <= 0) {
        return alert('Negative value not allow');
    }
    const counter = document.getElementById('alhamdulillah-counter');
    initialValue--;
    counter.innerText = initialValue;

})

// allahuakbar-increment
document.getElementById('allahuakbar-increment').addEventListener('click', function () {
    if (initialValue === 33) {
        return alert('Allahuakbar complete');
    }
    const counter = document.getElementById('allahuakbar-counter');
    initialValue++;
    counter.innerText = initialValue;

})

// allahuakbar-decrement
document.getElementById('allahuakbar-decrement').addEventListener('click', function () {
    if (initialValue <= 0) {
        return alert('Negative value not allow');
    }
    const counter = document.getElementById('allahuakbar-counter');
    initialValue--;
    counter.innerText = initialValue;

})

// reset button 
document.getElementById('reset-btn').addEventListener('click', function () {

    subhanallahCounter.innerText = 0;
    alhamdulillahCounter.innerText = 0;
    allahuakbarCounter.innerText = 0;
    initialValue = 0;

})


