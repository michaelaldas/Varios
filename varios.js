const vector=[10,20,30,40,50];

vector.forEach((data, indice, array) => {
    console.log(data, indice, array, array[0]);
})


//Se tiene un array de nombres de personas.
//Se pide devolver el arraay que incluya unicamente
//los nombres que tienen una palabra
const nombres = ["Juan", "Pedro", "Maria", "Héctor Pérez", "Jose de la Cuadra"];
//resultado esperado ["Juan", "Pedro", "Maria"] 

function getNombresDeUnaPalabras(array){
    return array.filter (data => {  
        return data.indexOf(' ')==-1;
    })
}

const nom = getNombresDeUnaPalabras(nombres);
console.log(nom);


//Una funcion recibe una cadena de caracteres. 
//Se pide que la funcion devuleva la palabra ingresada sin consonantes.
//Por ejemplo: Universidad
//Resulatado esperado: uieia
//ayuda: indexOf, split

function soloVocales(array){
        var vocales = ['a','e','i','o','u']

        return array.split("").filter ( data => {
            return vocales.indexOf(data.toLowerCase()) !=-1;
        }).join(' ');
}

const pi=soloVocales("Universidad");
console.log(p1);
console.log(soloVocales("Juanito"));

//Una duncióon recibe un array de palabras.
//Se pide que la funcion devuelva las palabras que tienen la misma vocal
//Entradda: ["amalgam", "zoom", "casa", "jinete", "iglesia"]
//Salida:["amalgam", "zoom", "casa"]

etrada = ["amalgam", "zoom", "casa", "jinete", "iglesia", "Panamá", "Ecuador"]
function palabrasMismaVocal(array){
    return array.filter( data => {  
        const strvocales = soloVocales(data);
        //console.log(strvocales);
        return strvocales.split("").every((item, index, array)=> {
           // console.log(item);
            return item==array[0];
        })
    })
}

const x1=palabrasMismaVocal

palabrasMismaVocal(entrada);