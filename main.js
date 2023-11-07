// [[[[[[[[[[[abrir/cerrrar la ventana del carrito]]]]]]]]]]]
let btnver = document.getElementById("btnver");
let btnvaciar = document.getElementById("btnvaciar");
let carrito = document.getElementById("carrito");
let tabla = document.querySelector("#tabla tbody");
let packs = document.getElementById("listapacks");
let comida = document.getElementById("listacomidas");

btnver.addEventListener("click", compras);

function compras() {

    if (btnver.className == "btn__ver open"){
        btnver.className = "btn__ver small";
        btnver.innerHTML = "X"
    } else {
        btnver.className = "btn__ver open";
        btnver.innerHTML = "Ver carrito"
    }

    if (carrito.className == "carrito close"){
        carrito.className = "carrito open";
    } else {
        carrito.className = "carrito close";
    }

}

// [[[[[[[[[[[[[[eventos al comprar un producto]]]]]]]]]]]]]]

// se activa la funcion
carritoevento()

// se declaran las funciones adicionales para el funcionamiento de los eventos
function carritoevento(){
    comida.addEventListener('click', comprarProducto);
    packs.addEventListener('click', comprarProducto);
    tabla.addEventListener('click', eliminarProducto);
    btnvaciar.addEventListener('click', eliminarProductos);
}

// se selecionan los elementos para agregarlos
function comprarProducto(e){
    e.preventDefault()
    if(e.target.classList.contains('btnagregar')){
        const producto = e.target.parentElement;
        leerDatosProducto(producto);

    }

}

// se lee la informacion de los elementos para agregarlos al carrito
function leerDatosProducto(producto){
    const productoDescripcion = {
        imagen: producto.querySelector('.imagen').src,
        titulo: producto.querySelector('.titulo').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('.boton').getAttribute('data-id')
    }

    productoAgregar(productoDescripcion)

}
// se agregan los elementos al carrito
function productoAgregar(producto){
    const fila = document.createElement('tr');
    fila.innerHTML =`
    <td>
        <img src="${producto.imagen}"  style="height:40px; object-fit:contain;">
    </td>
    <td>
        ${producto.titulo}
    </td>
    <td>
        ${producto.precio}
    </td>
    <td>
        <a href="#" class="borrar" data-id="${producto.id}">x</a>
    `

    tabla.appendChild(fila)
} 

function eliminarProducto(e){

    e.preventDefault();
    
    if(e.target.classList.contains('borrar')){

        e.target.parentElement.parentElement.remove();

    }
}

function eliminarProductos(){

    while (tabla.firstChild){
        tabla.removeChild(tabla.firstChild);
    }

    return false;
}