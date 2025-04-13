//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript');

//Si has encontrado el mensaje puedes continuar con los ejercicios

//CONDICIONALES

//Ejercicio 1: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'

let age = 18;
if(age >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('No eres aún mayor de edad');
}

//Ejercicio 2: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.

let age2 = 12;
if(age2 >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('No eres aún mayor de edad');
}

//Ejercicio 3: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"

const pet = "perro";
if (pet === "perro") {
    console.log('Tengo un perro');
} else if (pet === "gato") {
    console.log('Tengo un gato');
} else if (pet === "pajaro") {
    console.log('Tengo un pajaro');
} else {
    console.log('No tengo una mascota convencional');
}


//Ejercicio 4: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.

const pet2 = "serpiente";
if (pet2 === "perro") {
    console.log('Tengo un perro');
} else if (pet2 === "gato") {
    console.log('Tengo un gato');
} else if (pet2 === "pajaro") {
    console.log('Tengo un pajaro');
} else {
    console.log('No tengo una mascota convencional');
}


//Ejercicio 5: Haz el mismo ejercicio 3, pero con el condicional switch.

const pet3 = "perro";
switch (pet) {
case "perro":
    console.log('Tengo un perro');
    break
case "gato":
    console.log('Tengo un gato');
    break
case "pajaro":
    console.log('Tengo un pajaro');
    break
    default:
        console.log('No tengo una mascota convencional');    
}


//Ejercicio 6: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"

const weather = "soleado";
const result = weather === "soleado" 
  ? "Me vestiré con un vestido" 
  : "Me vestiré con un pantalón";
  console.log(result);


//Ejercicio 7: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.

const weather2 = "frío";
const result2 = weather2 === "soleado" 
  ? "Me vestiré con un vestido" 
  : "Me vestiré con un pantalón";
console.log(result2);


//Ejercicio 8: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.

const value = '1';
const result3 = typeof value === 'number'
  ? "Es un número"
  : typeof value === 'string'
    ? "Es un string"
    : "No es ni número ni string";
console.log(result3);


//BUCLES

//Ejercicio 9: Imprime en consola una lista del 0 al 10 con el bucle for

for (let step=0; step <= 10; step++) {
    console.log(step);
    }


//Ejercicio 10: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 

const programmers = [
    {
        name: 'Ada',
        lastname: 'Lovelace',
        knowledge: 'la máquina analítica'
    },
    {
        name: 'Margaret',
        lastname: 'Hamilton',
        knowledge: 'el programa espacial Apolo'
    },
    {
        name: 'Grace',
        lastname: 'Hopper',
        knowledge: 'el lenguaje Cobol'
    },
    {
        name: 'Hedy',
        lastname: 'Lamarr',
        knowledge: 'el wifi'
    }     
]
console.log(
    programmers[0].name, 
    programmers[0].lastname, 
    ", su aporte fue", 
    programmers[0].knowledge
);
console.log(
    programmers[1].name, 
    programmers[1].lastname, 
    ", su aporte fue", 
    programmers[1].knowledge
);
console.log(
    programmers[2].name, 
    programmers[2].lastname, 
    ", su aporte fue", 
    programmers[2].knowledge
);
console.log(
    programmers[3].name, 
    programmers[3].lastname, 
    ", su aporte fue", 
    programmers[3].knowledge
);


//Ejercicio 11: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.

const names = ['Carla', 'Alex', 'Judith', 'Maria', 'Noelia'];

for (const name of names) {
    console.log("Hola, mi nombre es " + name);
}


//Ejercicio 12: Con un bucle while imprime en consola una lista del 1 al 5.

let i = 1;
let text = '';

while (i <= 5) {
  console.log(i); 
  text += i;
  i++;
}

//Ejercicio 13: Realiza el mismo ejercicio anterior pero con un bucle do while.

let i2 = 1;
let text2 = '';

do {
    console.log(i2); 
    text2 += i2;
    i2++;
  }
  while (i2 <= 5);

//Ejercicio 14: Saludo Personalizado

//Crea una función llamada saludar que tome un parámetro llamado nombre y devuelva un saludo personalizado. Luego, llama a la función con diferentes nombres y muestra el resultado en la consola.

function saludar(nombreamigo) {
    return "Hola " + nombreamigo;
    }
    
    console.log(saludar("Marta"));
    console.log(saludar("Paula"));
    console.log(saludar("Lima"));


//Ejercicio 15: Calcular el Área de un Rectángulo
//Crea una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y alto) y devuelva el área del rectángulo. Luego, llama a la función con diferentes valores de ancho y alto y muestra el resultado en la consola.

function calcularAreaRectangulo(ancho, alto) {
    return ancho * alto;
}

console.log("Área de 3x2:", calcularAreaRectangulo(3, 2));
console.log("Área de 5x8:", calcularAreaRectangulo(5, 8));