// Lista de tragos en objetos

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
];

// Almacenamiento local

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Formulario para preguntar la edad

const formularioEdad = document.getElementById("formulario-edad");
formularioEdad.addEventListener("submit", function(event) {
    event.preventDefault();
    const edad = parseInt(document.getElementById("edad").value);
    if (edad >= 18) {
        document.getElementById("mensaje-bienvenida").innerText = "¡Bienvenido zeaz!";
    } else {
        document.getElementById("mensaje-bienvenida").innerText = "¡No puedez pazar zhiko!";
        window.close();
    }
});

// Tragos a elegir 

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

// Carrito 

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

// Finalizar la compra

const finalizarCompra = () => {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio;
    });
    document.getElementById("total a pagar").innerText = (`Compra finalizada Waaaghhh!!! ¡AHORA A PAGAR!: $${total}`);
}


//llamado de funciones 

mostrarTragos();