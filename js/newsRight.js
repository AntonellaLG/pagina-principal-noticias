//Capturar los elementos
let newsRight=document.querySelector('.column-right')
//console.log(newsRight)

fetch('/data/news-right.json')
.then((respuesta) => {
    return respuesta.json()
})

.then((newsR)=>{
    //console.log(newsR);
    //Separo el último para que no tenga división
    for (let i = 0; i < newsR.length; i++){
        if(i!=newsR.length-1){
            newsRight.innerHTML += `
            <div class='new-right'>
                <h5 class='subtitle-right'>${newsR[i].title}</h5>
                <p>${newsR[i].paragraph}</p>
                <hr>
            </div>
            `
        }else{
            newsRight.innerHTML += `
            <div class='new-right'>
                <h5 class='subtitle-right'>${newsR[i].title}</h5>
                <p>${newsR[i].paragraph}</p>
            </div>
            `
        }
    };
})

.catch((error)=>{ //Atrapo posible error
    console.log('Ha ocurrido un error ' +error)
})