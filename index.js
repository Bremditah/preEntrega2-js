const productos = [
    { nombre: "Piedra chica ", precio: 3550 },
    { nombre: "piedra mediana ", precio: 5400 },
    { nombre: "piedra grande ", precio: 8900 },
];


let carrito = []

let seleccion = prompt("¿Desea comprar alguna de nuestras excelentes piedras? seleccione si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("por favor seleccione si o no")
    seleccion = prompt("¿Desea comprar si o no?, no es muy dificil escriba si o no")

}

if (seleccion == "si") {
    alert("seleccione que piedra desea obtener")
    let productosDisponibles = productos.map((producto) => producto.nombre + "" + producto.precio + "$");
    alert(productosDisponibles.join(" - "))
}
else if (seleccion == "no") {
    alert("Entonces no se para que me hace perder tiempo, salga de mi página xD")
}

while (seleccion != "no") {
    let producto = prompt("mete la piedra en el changuito")
    let precio = 0

    if (producto == "piedra chica" || producto == "piedra mediana" || producto == "piedra grande") {
        switch (producto) {
            case "piedra chica":
                precio = 3550
                break;

            case "piedra mediana":
                precio = 5400
                break;

            case "piedra grande":
                precio = 8900
                break;

            default: break;
        }
        let unidades = parseInt(prompt("¿cuantas piedras desea comprar?"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    }
    else {
        alert("no hay producto disponible, vuelva otro día.")
    }
    seleccion = prompt("¿vas a seguir comprando? si o no")

    while (seleccion === "no") {
        alert("Gracias por comprar piedras de mar")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total de los productos es ${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;
    }

}


const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total de la compra es de: ${total}`)

