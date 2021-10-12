/*Arrays: colecciones de datos. Listas. Objeto que almacena datos, incluso listas. Los valores pueden ser distintos y puedo agregar y quitar datos en cualquier momento. Los elementos se encuentran en forma ordenanda en forma númerica ascendente de forma que el primero es 0.
Para acceder a los elementos se realiza a través de su indice*/

//let test = new Array/String/etc. Mala práctica, alarga tiempo de ejecución

let test = ["hola" , 1 , true , "chau"]; //Se puede declarar como Array vacío. No permiten asignación directa. Para modificarlos hay que elegir que posición se va a asignar
console.log(test);
console.log(test.length);
console.log(test[0]);
console.log(test[3]);
test[2]=false;
console.log(test);

let test2 = ["no", 3, "tal vez", 8, 16, [4, 5, 48]];
console.log(test2);
console.log(test2.length);
console.log(test2[5][2]);
console.log(test2[5]);
console.log(test2[1]+test2[5][1]);
test2[5]=false;
console.log(test2);
test2[7]=test;
console.log(test2);

//Recorrido de un Array: Se utiliza el metodo length y un for
console.log("test2 tiene " + test2.length + " elementos");
for(let i=0; i < test2.length; i++){
    console.log(test2[i]);
}

//Métodos para Arrays:
test2.push("Pepe");//agrega elementos al final del arreglo
test2.push(99);
console.log(test2);

test2.pop();//saca el último elemento del arreglo
console.log(test2);

test2.shift();//remueve primer elemento del Array
console.log(test2);

test2.unshift("Salame");//agrega un elemento al principio del Array
console.log(test2);

console.log(test2.toString());//convierte todo el Array en un string
console.log(test2.join(" el caracter que se te ocurra "))//une todo el array separandolo con el caracter elegido
//Metodo .concat, .slice (no toma en cuenta el punto de corte)

//for of: (for let "variable" of "array") la variable se utiliza para almacenar la información de cada elemento a recorrer. El for hará una vuelta por cada elemento del arreglo
//.typeof: permite saber de que tipo de dato se trata
//.find: busca el primer valor que corresponde con la búsqueda y lo devuelve. Utiliza una función
//.filter: filtra el arreglo, guarda y devuelve los valores que correspondan a la búsqueda. Utiliza una función
//.map: crea un nuevo Array con los elementos del Array original transformados según las operaciones de la función utilizada como parámetro
