document.addEventListener("DOMContentLoaded", () =>{
    if(window.location.pathname.includes("index")){
        mostrarTodosLosProductos()
    }
})

const api = 'https://fakestoreapi.com/products'

const cargarData = async() => {
    try {
        const data = await fetch(api)
        if (data.ok){
            dataJson = await data.json()
            return dataJson
        }else{
            throw new Error ("Error conectando a la API: "+ data.statusText)
        }
    } catch (error) {
        console.error(error)
    }
}

const mostrarTodosLosProductos = async() => {
    try {
        const data = await cargarData()
        console.log(data)
        let contenedor = document.getElementById("contenedorProductos");
        let html = ""
        data.forEach(dato => {
            info = `<div class="productoContainer">
            <img class="imagenProducto" src="${dato.image}" alt= "Imagen del producto">
            <h1 class="productoNombre">${dato.title}</h1>
            <p class="productoDescrip">${dato.description}<p>
            <p class="productoRate">Calificación: ${dato.rating.rate}<p>
            <p class="productoPrecio">${dato.price}<p>
            </div>`
            html += info
            contenedor.innerHTML = html
        });
    } catch (error) {
        console.error(error)
    }
}
