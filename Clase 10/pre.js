
let a = 3, b = 2, c = 1, d = 4;
let s = 3, f = 2, g = 1, h = 4;
// el orden de como efectua es de izquierda a derecha
//Primero multiplicacion , y luego division y al final suma 
let z = a * b + c / d;
console.log(z);

//Primero multiplica s * f, luego divide el resultado de s*f con h y al final suma 
// el resultado de las dos operaciones anteriores con g
let m = g + s * f /h;
console.log(m);


// Prioridad por signos de agrupacion 

w = (c+a) * b / c;
console.log(w);