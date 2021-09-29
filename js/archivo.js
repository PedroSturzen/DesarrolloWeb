
// ! Clase 3 (Ciclos/iteraciones)

/* function bucleFor (num) {    


    for(let i=1; i<=num; i++) {        

        console.log("Esta es la interacción número " + i + " de su ciclo");        

        document.write(i)    }

    }

let num = parseInt(prompt("Cuantas iteracciones desea realizar?"))

bucleFor(num); 
*/

// ! Clase 4 (FUNCIONES)

/* const IVA = 1.21;
let precio;
function mostarDatos(a){
    console.log(`Si le sumamos el IVA el valor de su producto es ${a}`)
}
function calcularIVA(precio){
    calculoIVA = IVA * precio;    
    mostarDatos(calculoIVA);
}
function pedirDatos(){
    precio = parseInt(prompt("Ingrese el precio del producto"));
    calcularIVA(precio)
    alert("El precio total del producto con IVA es " + precio * IVA);
}

pedirDatos()
*/

// ! Clase 5 (OBJETOS)

/*
let nombreProducto = prompt("Ingrese nombre del producto");
let tipoProducto = prompt ("Ingrese el tipo de producto");
let cantidad = prompt ("ingrese cantidad");

class Producto {
    constructor (nombreProducto, tipoProducto, cantidad) {
        this.nombre = nombreProducto;
        this.tipo = tipoProducto;
        this.cantidad = cantidad;
    }
    guardar(){
        console.log("Producto ingresado: ", this.nombre);
        console.log("El tipo de producto es : ", this.tipo);
        console.log("La cantidad es: ", this.cantidad);
    }

}
document.write("El nombre del alimento es: " + nombreProducto + "<br>");
document.write("El tipo de producto es: " + tipoProducto + "<br>");
document.write("La cantidad de producto es: " + cantidad + "<br>");

const producto1 = new Producto(nombreProducto, tipoProducto, cantidad);
producto1.guardar();
*/

// ! Clase 6 (ARRAYS)

class Producto {
    constructor(nombre, precio, tipo) {
        this.nombre = nombre;
        this.precio = precio;
        this.materia = tipo;
    }
}
//? productos
const producto1 = new Producto("cheeseburguer", 650, "vacuna");
const producto2 = new Producto("completa", 520, "vacuna");
const producto3 = new Producto("diry", 550 , "vacuna");
const producto4 = new Producto("extraHuevo", 690 , "vacuna");
const producto5 = new Producto("onion", 710 , "vacuna");
const producto6 = new Producto("cheeseStick", 710 , "vacuna");
const producto7 = new Producto("picada", 410 , "vacuna");

// ejemplo array de objetos cargado de forma directo
const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]
console.log(productos);


//? otra forma de cargar un array
//creo un array vacio
const misProductos=[]
//uso método push para ir agregando mis objetos al array
misProductos.push(producto1);
misProductos.push(producto2);
misProductos.push(producto3);
misProductos.push(producto4);
misProductos.push(producto5);
misProductos.push(producto6);
misProductos.push(producto7);

//? ordenar por precio ascendiente
misProductos.sort((a, b) => a.precio - b.precio) ;
console.log(misProductos);

//? ordenar por precio descendiente
misProductos.sort(function (a, b){
    return (b.precio - a.precio);
})
console.log(misProductos);



console.log(misProductos);
