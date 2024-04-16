function tekVeMenfiEdedlerinCemi(arr) {
    let cem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 || arr[i] < 0) {
            cem += arr[i];
        }
    }
    return cem;
}

let massiv = [1, 3, -1, 5, 7, 8, 12, -6, 3, 9];
let cem = tekVeMenfiEdedlerinCemi(massiv);
console.log(cem); // Output: 21


function silTəkMenfi(massiv) {
    let təmizlenmişMassiv = massiv.filter(x => x % 2 === 0 && x > 0);
    return təmizlenmişMassiv;
}

let verilmişmassiv = [1, 3, -1, 5, 7, 8, 12, -6, 3, 9];
let nəticə = silTəkMenfi(verilmişmassiv);
console.log(nəticə);

let verilmismassiv = [1, 3, -1, 5, 7, 8, 12, -6, 3, 9];

let enKiçik = Math.min(...verilmişmassiv);
let enBöyük = Math.max(...verilmişmassiv);

console.log("en kiçik:", enKiçik, ", en büyük:", enBöyük);


let verilmişMassiv = [1, 3, -1, 5, 7, 8, 12, -6, 3, 9];

// Diziyi sırala
verilmişMassiv.sort((a, b) => a - b);

let ortaIndex = Math.floor(verilmişMassiv.length / 2);
let ortaQiymət;

// Dizinin uzunluğuna göre orta değeri hesapla
if (verilmişMassiv.length % 2 === 0) {
    ortaQiymət = (verilmişMassiv[ortaIndex - 1] + verilmişMassiv[ortaIndex]) / 2;
} else {
    ortaQiymət = verilmişMassiv[ortaIndex];
}

console.log("Massivin orta qiyməti:", ortaQiymət);


let anaMassiv = [1, 3, -1, 5, 7, 8, 12, -6, 3, 9];
let cütEdedlerMassivi = [];

for (let i = 0; i < anaMassiv.length; i++) {
    if (anaMassiv[i] % 2 === 0) {
        cütEdedlerMassivi.push(anaMassiv[i]);
    }
}

console.log("Ana massivdəki cüt ədədlər:", cütEdedlerMassivi);


let anaDizi = [1, "apple", "banana", 5, "orange", 8, "pear", -6, "kiwi", 9];
let stringDegerlerDizisi = [];

for (let i = 0; i < anaDizi.length; i++) {
    if (typeof anaDizi[i] === "string") {
        stringDegerlerDizisi.push(anaDizi[i]);
    }
}

console.log("Ana dizideki string değerler:", stringDegerlerDizisi);


let telebeler = [
    {
        ad: "Ali",
        yaş: 20,
        məktəb: "Bakı Dövlət Universiteti",
        şöbə: "İnformatika"
    },
    {
        ad: "Ayşe",
        yaş: 21,
        məktəb: "Xarici Universitet",
        şöbə: "İş Administrasiyası"
    },
    {
        ad: "Mehmet",
        yaş: 19,
        məktəb: "Gənclər Universiteti",
        şöbə: "Elektronika"
    }
];

for (let i = 0; i < telebeler.length; i++) {
    let telebe = telebeler[i];
    console.log("Ad:", telebe.ad);
    console.log("Yaş:", telebe.yaş);
    console.log("Məktəb:", telebe.məktəb);
    console.log("Şöbə:", telebe.şöbə);
    console.log("-------------------------");
}


let meyveler = ["apple", "banana", "cherry", "orange"];

meyveler.sort();

console.log("Meyveler (əlifba sirasi ilə):", meyveler);


let metin = "Salam usaqlar";
let harf = "a";
let sayac = 0;

for (let i = 0; i < metin.length; i++) {
    if (metin[i] === harf) {
        sayac++;
    }
}

console.log("'" + harf + "' harfi " + sayac + " kez geçiyor.");


function topla(a, b) {
    return a + b;
}

let eded1 = 5;
let eded2 = 7;

let cemi = topla(eded1, eded2);
console.log("Toplam:", cemi);


function tersineCevir(str) {
    let tersStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        tersStr += str[i];
    }
    return tersStr;
}

let verilmisSetir = "Merhaba Dünya!";
let tersSetir = tersineCevir(verilmisSetir);
console.log("Ters setir:", tersSetir);




