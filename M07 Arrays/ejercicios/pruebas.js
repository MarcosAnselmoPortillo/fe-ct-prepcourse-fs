var array = [2,1];
var mayorTemporal = 0;
var indiceMayor = -1;
array.forEach(encontrarMayor); 

function encontrarMayor (elemento, indice){
    if (elemento > mayorTemporal){
        mayorTemporal = elemento;
        indiceMayor = indice
    }
}

console.log (mayorTemporal,indiceMayor);