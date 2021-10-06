/*Objeto: colección de datos relacionados con funcionalidad. Estructuras de datos. Consta de variables llamadas propiedades y funciones asociadas llamadas métodos. Puedo obtener valores dentro del objeto llamando a sus propiedades con la notación dot o ".": "objeto.propiedad". Si se llama una propiedad que no existe da indefinido
Objetos literales: Manera abreviada de declarar un objeto. Dentro de un objeto se asigna con ":" y las propiedades se separan con ",". Singletone cuando se actualiza algo se actualiza todo, puede existir solo una instancia del objeto*/

/*const alumno = {nombre: "Diego", edad: 30, pelo: "no"};
console.log(alumno);
console.log(alumno.nombre);
console.log(alumno["nombre"]); //notación que permite tener espacios en los nombres de las propiedades*/

/*Mutación: asignar nuevos valores a las propiedades*/

/*alumno.nombre = "Pablo";
console.log(alumno.nombre);*/

/*Se puede asignar nuevas propiedades llamandolas y asignandoles un valor
Constantes se pueden mutar pero nor reasignar*/

/*alumno.nota = 9;
console.log (alumno.nota);
console.log(alumno);*/

/*Función constructora: permite tener múltiples instancias de un objeto. Utiliza "new" y "this"(referencia objeto que se está creando; cada instancia del objeto)*/

/*function alumnoDos (nombre, edad, pelo){
    this.nombre=nombre;
    this.edad=edad;
    this.pelo=pelo;
    this.saludo= function (){
        console.log ("Hola mi nombre es " + this.nombre);
    }
}

const Diego = new alumnoDos("Diego", 30, "no");
const Pedro = new alumnoDos("Pedro", 20, "si");
console.log(Diego);
console.log(Pedro);
console.log(Diego.edad);
console.log(Pedro.nombre);*/

/*Metodo: funciones que se limitan a ser ejecutadas dentro del objeto*/

/*Diego.saludo();*/

/*Metodos en strings (objeto string)
string.length
string.toLowerCase()
string,toUpperCase()*/

/*Clases: forma de declarar objetos con la función constructora, pero más simple y claro. Blueprint para cada objeto*/

/*function producto (id, nombre, valor, stock){
    this.idProducto=id;
    this.nombreProducto=nombre;
    this.valorProducto=valor;
    this.stockProducto=stock;
}

const Radio= new producto (1, "radio", 300, 100);
const Lavarropas= new producto (2, "lavarropas", 50000, 5);
console.log (Radio);
console.log(Lavarropas);*/

class productoDos{
    constructor(id, nombre, valor, stock){
        this.idProductoDos=id;
        this.nombreProductoDos=nombre;
        this.valorProductoDos=valor;
        this.stockProductoDos=stock;
    }
    precioFinal(){
        return this.valorProductoDos*1.21;
    }
    getstockProductoDos(){
        return this.stockProductoDos;
    }
    modifystockProductoDos(){
        this.stockProductoDos=this.stockProductoDos-1;
    }
}

const tele = new productoDos (3, "televisión", 100000, 6);
console.log(tele);
console.log(tele.getstockProductoDos());
tele.modifystockProductoDos();
console.log(tele);
console.log(tele.precioFinal());
console.log(tele.getstockProductoDos());
tele.modifystockProductoDos();
tele.modifystockProductoDos();
console.log(tele.getstockProductoDos());

/* Operador in: "propiedad in objeto" para saber si una propiedad existe dentro de un objeto*/