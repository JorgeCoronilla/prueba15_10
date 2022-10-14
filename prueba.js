/*
1. Usando la API de emojis de GitHub muestra todos los emojis (su imagen) 
que contengan una "y" en su nombre (las claves del JSON de respuesta 
contienen los nombres de los emojis)

URL API: https://api.github.com/emojis


2. Usando flexbox coloca los 3 primeros emojis de manera que queden 
pegados al margen derecho y de arriba a abajo (3, 2 y 1). Debes traer 
esos tres emojis de la API. */
getEmojis();
function getEmojis () {
    fetch('https://api.github.com/emojis')
        .then(res => res.json())
        .then(datos => {
            busca(datos);
        })
}

function busca(datos) {
        var arrayNombres=Object.keys(datos);
        var arrayDirecciones=Object.values(datos);
        var emojiY=[];
        arrayNombres.forEach((elemento, indice) =>{
            if (elemento.includes('y')) {emojiY.push(arrayDirecciones[indice])}
        });
        pinta(arrayDirecciones);
    }

    function pinta(lista) {
        
        for (let i=0;i<3;i++){
            document.querySelectorAll('img')[i].src=lista[i];
        }
    }

  

