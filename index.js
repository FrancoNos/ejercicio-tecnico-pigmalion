/*Dada la siguiente problemática: ¿puede un número X formarse
usando la suma de 2 elementos de un array?
Ejemplo 1
Input: nums = [1,4,3,9], requiredSum = 8
Output: False
Ejemplo 2
Input: nums = [1,2,4,4], requiredSum = 8
Output: True
Desarrolle (en pseudo código o su lenguaje de preferencia):
1. Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse el
programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más
importante es realizar el desarrollo en el menor tiempo posible.
2. Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado,
que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante.
Ante cualquier duda o ambigüedad en el enunciado, es libre de hacer todas las suposiciones
necesarias, siempre y cuando las especifique.*/

const requiredSum = 8;

function debeSumar8(nums, requiredSum) {
    for (let i = 0; i < nums.length; i++) {  //lo primero que hacemos es recorrer los números
        for (let j = i + 1; j < nums.length; j++) {  // después, comparamos el número actual con el que viene después
            if (nums[i] + nums[j] === requiredSum) { // para hacer la suma entre el número i y el número j
                return true;  //si da el resultado esperado devolvemos true
            }
        }
    }
    return false;  // si el número que da resultado entre i y j no da el 8 que es el requiredSum te devuelve falso
};

console.log(debeSumar8([1,4,3,9], 8));
console.log(debeSumar8([1,2,4,4], 8));


function debeSumar8Eficiente(nums, requiredSum) {

  const complementos = new Set(); //lo primero que hice fue pensar en los complementos y guardarlos en un Set

  for (let i = 0; i < nums.length; i++) { //acá recorremos todos los numeros del array de números
    const numeroActual = nums[i];  //guardamos el numeroactual en donde estamos parados.

    if (complementos.has(numeroActual)) {  //si vi el complemento en el array devuelvo true 
      return true;
    }
    const faltante = requiredSum - numeroActual;  // acá creo una constante que se llama faltante para calcular cual es el número que necesito
    complementos.add(faltante); // y lo guardo
  }
  return false;  // si no encontramos ninguna pareja entonces devuelvo falso
};

console.log(debeSumar8Eficiente([1,2,4,4], 8));


/* Si en el primer ejemplo la required sum es 1.000.000 y el array de números incluyen tantos números para que por fin sumen un millón con, por ejemplo, los nums 499.999 y 500.001 entonces se desperdiciarían muchos recursos.

En cambio con el segundo en el instante donde se encuentra el complemento de, por ejemplo, 500.001 ya retorna automáticamente. */
