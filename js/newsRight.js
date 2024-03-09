//Capturar los elementos
let newsRight=document.querySelector('.column-right')
//console.log(newsRight)

fetch('/data/news-right.json')
.then((respuesta) => {
    return respuesta.json()
})

.then((newsR)=>{
    //console.log(newsR);
    newsR.forEach(rightNew => {
        newsRight.innerHTML += `
        <div class='new-right'>
            <h5 class='subtitle-right'>${rightNew.title}</h5>
            <p>${rightNew.paragraph}</p>
        </div>
        `
    });
})

.catch((error)=>{ //Atrapo posible error
    console.log('Ha ocurrido un error ' +error)
})