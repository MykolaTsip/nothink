responsiveVoice.setDefaultVoice("Ukrainian Female");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


let massZ = [];

let modal = document.getElementById('container')

let span = document.getElementsByClassName("close")[0];

let btn = document.getElementById('btn');


let zamov = document.getElementById('zam');


let first = document.getElementById('fname').value;

let last = document.getElementById('lname').value;


let number = document.getElementById('numb').value;




let first1 = document.getElementById('fname');

let last1 = document.getElementById('lname');

let number1 = document.getElementById('numb');






btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
       modal.style.display = 'none';
}

zamov.onclick = function () {

    massZ.push(first);
    massZ.push(last);
    massZ.push(number);

    alert('УСПІШНО!');

    responsiveVoice.speak('Дякуємо! Ви замовили зворотній дзвінок!');


    setTimeout(() => {
        modal.style.display = 'none';
    }, 1000)

}


const recognition = new SpeechRecognition();

recognition.interimResults = true;


first1.onclick = function() {

    recognition.start();

    recognition.onresult = function(event) {
        first1.value = event.results[0][0].transcript;
    };
}

last1.onclick = function() {

    recognition.start();

    recognition.onresult = function(event) {
        last1.value = event.results[0][0].transcript;
    };
}

number1.onclick = function() {

    recognition.start();

    recognition.onresult = function(event) {
        number1.value = event.results[0][0].transcript;
    };
}