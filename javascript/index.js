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

/*almacenamiento de los pedidos*/
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];


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

/*Llamando a los productos*/ 

const mostrarTragos = () => {
    const cajaDeTragos = document.getElementById("tragos");
    tragos.forEach(trago => {
        const tragoElement = document.createElement("div");
        tragoElement.innerHTML = `
            <p>${trago.trago} - Precio: $${trago.Precio}</p>
            <button onclick="agregarAlCarrito('${trago.trago}', ${trago.Precio})">Agregar al carrito</button>
        `;
        cajaDeTragos.appendChild(tragoElement);
    });
}

const agregarAlCarrito = (trago, precio) => {
    const item = { trago, precio };
    carrito.push(item);
    mostrarCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const mostrarCarrito = () => {
    const carro = document.getElementById("carro");
    carro.innerHTML = "";
    carrito.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.innerText = `${item.trago} - Precio: $${item.precio}`;
        carro.appendChild(itemElement);
    });
}

const finalizarCompra = () => {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio;
    });
    alert(`Compra finalizada Waaaghhh!!! ¡AHORA A PAGAR!: $${total}`);
}




//orden de las funciones 

/*1*/ test_de_edad ();
/*2*/ mostrarTragos();




