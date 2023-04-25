const title = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log({
    title,
    p,
    parrafito,
    pid,
    input
})
console.log(input.value);

title.innerHTML = "Titulo  </br> modificado";
title.innerText = "Titulo  </br> modificado";

console.log(parrafito.getAttribute("class")); 
console.log(parrafito.getAttribute("marca")); //nos devuelve el valor del atributo (marca es uno inventado por mi)

parrafito.setAttribute("class", "parrafo"); //establece atributos, pero si tenia uno antes lo remplaza.

parrafito.classList.add("parcela"); //agrega una clase
parrafito.classList.remove("parrafo"); //remueve una clase
parrafito.classList.toggle("parrafo"); //agrega o remueve una clase dependiendo si el elemento la posee o no.
parrafito.classList.contains("parcela"); //devuleve un valor booleando dependiendo si contiene o no la clase.

input.value = "Ejemplo"; //cambio de atributo value a input(variable ya creada)

const imagen = document.createElement("img");
const imagen2 = document.createElement("img");
imagen.setAttribute("src", "https://static.platzi.com/media/platzi-isotipo@2x.png")
imagen2.setAttribute("src", "https://static.wikia.nocookie.net/sono-bisque-doll-wa-koi-wo-suru/images/3/3c/Kitagawa_Marin_~_Anime.jpg/revision/latest?cb=20220227174558&path-prefix=es")

pid.append(imagen); //agrega elemento despues del contanido anterior
pid.append(imagen2); //innerHTML lo remplaza