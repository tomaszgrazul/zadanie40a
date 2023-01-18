let but = document.querySelector('button');
but.onclick = function() 
{
    let imie = document.getElementById("imie");
    console.log(imie.value);
    let parname = document.querySelector("p[id='name']");
    parname.textContent = imie.value;

    let nazwisko = document.getElementById("nazwisko");
    console.log(nazwisko.value);
    let parsurname = document.querySelector("p[id='surname']");
    parsurname.textContent = nazwisko.value;

    let numertel = document.getElementById("numertel");
    console.log(numertel.value);
    let parnumertel = document.querySelector("p[id='phone']");
    parnumertel.textContent = numertel.value;
}

