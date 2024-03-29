let newsBelow = document.querySelector('.container-below')
//console.log(newsBelow);

fetch('/data/news-below.json')
.then((respuesta)=>{
    return respuesta.json()
})

.then((newsB)=>{
    //console.log(newsB);
    newsB.forEach(belowNew => {
        newsBelow.innerHTML += `
        <div class='new-below'>
            <div>
                <img class='img-new-below' src='${belowNew.img}' alt='Imagen de la noticia ${belowNew.number}'>
            </div>
            <div class='text-new-below'>
                <h3 class='number-new-below'>${belowNew.number}</h3>
                <h4 class='title-new-below'>${belowNew.title}</h4>
                <p class='paragraph-new-below'>${belowNew.paragraph}</p> 
            </div>
      </div>
      `
    });
})

.catch((error) =>{
    console.log('Ha ocurrido un error ' +error);
})