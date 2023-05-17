let name = prompt("Adınız?",);
let merhaba = document.querySelector(".merhaba");
merhaba.innerHTML += ` ${name}! Hoş geldiniz!`;

let clock = new Date().toLocaleString('tr-TR');
    let date = new Date();
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    document.querySelector(".clock-day").innerHTML = clock.substr(11,18) +" " + gunler[date.getDay()] ;

function saat() {
    let clock = new Date().toLocaleString('tr-TR');
    let date = new Date();
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    document.querySelector(".clock-day").innerHTML = clock.substr(11,18) +" " + gunler[date.getDay()] ;
}
setInterval(saat, 1000); 

