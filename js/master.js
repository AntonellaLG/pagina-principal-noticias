//Capturar los elementos
let newsRight=document.querySelector('.news-right')
//console.log(newsRight)

fetch('/data/news-right.json')
.then((respuesta) => {
    return respuesta.json()
})

.then((news)=>{
    //console.log(news);
    let newsRight= document.querySelector('.column-right')
    news.forEach(rightNew => {
        newsRight.innerHTML += `
        <div class='new-right'>
            <h5 class="subtitle-right">${rightNew.title}</h5>
            <p>${rightNew.paragraph}</p>
        </div>
        `
    });
})

.catch((error)=>{ //Atrapo posible error
    console.log("Ha ocurrido un error " +error)
})
/*
.then((productos)=>{
    //console.log(productos)
    //Creo las tarjetas con los productos
    let tarjetas = document.querySelector('#tarjetas')
    productos.forEach(producto => {
        //Varío contenido de un elemento capturado en js
        //class="w-100" en img va a ser el 100 del tamaño de su caja
        tarjetas.innerHTML += ` 
        <div class="card text-center" style="margin:10px;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
            <div class="card-body">
                <h2 class="card-titulo">${producto.titulo}</h2>
                <h6 class="card-detalle">${producto.detalle}</h6>
                <h6 class="card-precio">${producto.precio}</h6>
                <a class="btn btn-primary boton-ver-mas" id="${producto.codigo}" href="./detalleProducto.html?codigo=${producto.codigo}" style="background-color:teal; border-color:teal; color:whitesmoke;">Ver más</a>
            </div>
        </div>
        `
    })


    //Guardo el producto clickeado en el Local Storage
    const cards=document.getElementsByClassName('boton-ver-mas')
    //console.log(cards);
    Array.from(cards).forEach(tarjeta=>
        tarjeta.addEventListener('click',()=>{
        //console.log(tarjeta);
        let codigo=tarjeta.id;
        //console.log(codigo);
        let nuevoProducto=productos.find(producto=>producto.codigo==codigo)
    
    localStorage.setItem('producto',JSON.stringify(nuevoProducto));
    window.location.href = './detalleProducto.html';
    }))
})

.catch((error)=>{ //Atrapo el error en el caso en que hubiera
    console.log("Ha ocurrido un error " +error)
})


//Idea: Guardar los datos del producto que corresponda en el localStorage según el boton VerMas seleccionado (dependiendo del id del botón). Desde el localStorage, copiar en el body de detalleProducto.html la informacion necesaria (para hacer esto pasarlo a objeto literal antes). Programar los botones verMas de modo que si los selecciono, vacío el localStorage de la info previa para guardar un nuevo producto
*/