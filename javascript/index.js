/*Objetos de tragos*/

const tragos = [
    {
        "trago": "Zerveza Kryztal",
        "Precio": 1000,
    },
    {
        "trago": "Vino Orko",
        "Precio": 2000,
    },
    {
        "trago": "Dakka Kola",
        "Precio": 500,
    },
    {
        "trago": "Fernet Garrapato",
        "Precio": 1000,
    },
]

console.log(tragos);

/*Objetos de Comida*/

const comida = [
    {
        "comida": "Garrapato Azado",
        "precio": 3000,
    },
    {
        "comida": "Lobo Espacial Azado",
        "precio": 5000,
    },
    {
        "comida": "Empanada",
        "precio": 1000,
    },
    {
        "comida": "Paztel de Dakka",
        "precio": 6000,
    },
]

console.log(comida);

/*almacenamiento de los pedidos*/
let tragoElegido;
let platoElegido;


/*DESDE AQUÍ ES DONDE EMPIEZA A EJECUTARSE EL CODIGO*/

/*confirmar edad*/
alert("Bienvenido al Bar Orko. Te debo hacer unas preguntas");

const test_de_edad = () => {

    let prueba_de_edad = parseInt(prompt("¿Kual ez tu edad?"));
  
    if (prueba_de_edad >= 18) {
        alert("¡Bienvenido zeaz!");
        } 
    else {
            alert("¡No puedez pazar zhiko!");
            window.close();
        }
}



//orden de las funciones 

/*1*/ test_de_edad ();




