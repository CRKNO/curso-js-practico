const sumando1 = document.querySelector("#sumando-1");
const sumando2 = document.querySelector("#sumando-2");
const btn = document.querySelector("#btn-calcular");
const pResultado = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

/* btn.addEventListener("click", btnOnClick); //agregamos un escuchador de evento tipo click al boton.

function btnOnClick(){
    console.log(`El resultado de ${sumando1.value} + ${sumando2.value} = ${Number(sumando1.value) + Number(sumando2.value)}`);
    pResultado.innerText = `El resultado de ${sumando1.value} + ${sumando2.value} = ${Number(sumando1.value) + Number(sumando2.value)}`;
} */


form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event){
    console.log(event);
    event.preventDefault(); //previene que haga el comportamiento por default, en este caso sería recargar la pagina.
    pResultado.innerText = `El resultado de ${sumando1.value} + ${sumando2.value} = ${Number(sumando1.value) + Number(sumando2.value)}`;
}
/* lo del prevent es porque el formulario asume  que el boton es de tipo submit por estar al final de un form,
tambien se podría evitar indicando desde html que el boton es de tipo button
"type = 'button'" */