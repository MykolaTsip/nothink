responsiveVoice.setDefaultVoice("Ukrainian Female");

let texth1 = 'ОКУЛЯРИ від найкращих\n' +
    'іноземних партнерів';
let texth3 = 'Купляйте у наc найкращі товари від виробників з понад 10 країн світу\n' +
    'якісна сировина та найкращі сучасні технології та технології\n' +
    'перевірені часом.';


function num() {
    if(navigator.clipboard) {
     navigator.clipboard.writeText('380672662963');
   alert('НОМЕР СКОПІЙОВАНО УСПІШНО')
    
    }

}

function num1() {
    if(navigator.clipboard) {
        navigator.clipboard.writeText('380664653278');
        alert('НОМЕР СКОПІЙОВАНО УСПІШНО')
    }


}





function getSelectionText() {

    let text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();

    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}


        setTimeout(function() {
            responsiveVoice.cancel();
            responsiveVoice.speak(getSelectionText());
        }, 1);



function inst() {
        responsiveVoice.speak('Для озвучення тексту достатньо виділити потрібний текст. Для введення голосом тексту в поле введення потрібно натиснути на поле введення інформації, та дозволити запис для запису синтезу  вашої вимови'
        )
}

function head1() {
    responsiveVoice.speak(texth1)
}
function head2() {
    responsiveVoice.speak(texth3)
}





