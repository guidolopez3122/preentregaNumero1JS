//menu de tienda de ropa con descuentos del 20% llevando 3 prendas//


//camiseta $20  pantalon $30  campera $50  short $15

let prenda;
let total = 0;
let maxPrendas = 4;
let contadorPrendas = 0;

function descuento(total, cantidadPrendas) {
    if (cantidadPrendas >= 3) {
        total *= 0.8;  
        alert("Se ha aplicado un descuento del 20% por comprar 3 o más prendas.");
    }
    return total;
}



alert("bienvenido a nuestra tienda online, con descuentos del 20% en la compra minima de 3 prendas")

while (contadorPrendas < maxPrendas) {
    let prenda = prompt("tienda online\n\n elija los articulos deseados \n\n camiseta $20 \n pantalon $30 \n campera $50 \n short $15\n para salir, ingrese salir").toLowerCase();
    
    if(prenda === "camiseta"){
        total += 20;
        contadorPrendas++;
        alert("tenes una camiseta en el carrito, valor $20");
    }
    else if(prenda === "pantalon"){
        total += 30;
        contadorPrendas++;
        alert("tenes un pantalon en el carrito, valor $30")
    }
    else if(prenda === "campera"){
        total += 50;
        contadorPrendas++;
        alert("tenes una campera en el carrito, valor $50")
    }
    else if(prenda === "short"){
        total += 15;
        contadorPrendas++;
        alert("tenes un short en el carrito, valor $15")
    }
    else if(prenda === "salir"){
        break;
    }
    else {
        alert("ingresa una prenda en stock")

    };

}

total = descuento(total, contadorPrendas);

alert("el valor de tus prendas en el carrito es de: $ " + total);
    
alert("gracias por elegirnos!");
   
    







    




