/*En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente, 
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y 
sexo (F - M). 
Considerando que los datos de los profesores se cargan en un array de objetos (Ej. 
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que 
retorne otro arreglo de objetos con solamente los profesores de una categoría dada. 
Función: profesoresCategoria. 
Parámetros: profesores (array de objetos profesor), categoria (un número). 
Retorno: array de objetos profesor que pertenecen a la categoría indicada. 
 */ 
let  profesoresCategoria = (profesores, categoria) => {
    let profesoresCategoria = [];
    profesores.forEach((profesores) => {
        if (profesores.categoria == categoria) {
            profesoresCategoria.push(profesores);
        }
    });
    return profesoresCategoria;
}
let profesores = [
    { categoria: 1, cedula: "111" ,nombre: 'Ana', sexo: 'F' },
    { categoria: 2, cedula: "222" ,nombre: 'Luis', sexo: 'M' },
    { categoria: 3, cedula: "333" ,nombre: 'Maria', sexo: 'F' },
    { categoria: 4, cedula: "444" ,nombre: 'Pedro', sexo: 'M' },
    { categoria: 5, cedula: "555" ,nombre: 'Luisa', sexo: 'F' },
    { categoria: 1, cedula: "666" ,nombre: 'Juan', sexo: 'M' },
    { categoria: 1, cedula: "777" ,nombre: 'Gonzo', sexo: 'M' },
    { categoria: 3, cedula: "888" ,nombre: 'Roberto', sexo: 'M' },
    { categoria: 5, cedula: "999" ,nombre: 'Rosa', sexo: 'F' },
];

let salida = document.getElementById("salida");
let profC1 = profesoresCategoria(profesores, 1);
let profC2 = profesoresCategoria(profesores, 2);
let profC3 = profesoresCategoria(profesores, 3);
let profC4 = profesoresCategoria(profesores, 4);
let profC5 = profesoresCategoria(profesores, 5);

salida.innerHTML = `Profesores de categoria Instructor: <br>`;
profC1.forEach((profesores) => {
    salida.innerHTML += `Cedula: ${profesores.cedula} - Nombre: ${profesores.nombre} - Sexo: ${profesores.sexo} <br>`;
});

salida.innerHTML += `<br>Profesores de categoria Asistente: <br>`;
profC2.forEach((profesores) => {
    salida.innerHTML += `Cedula: ${profesores.cedula} - Nombre: ${profesores.nombre} - Sexo: ${profesores.sexo} <br>`;
});

salida.innerHTML += `<br>Profesores de categoria Agrgado: <br>`;
profC3.forEach((profesores) => {
    salida.innerHTML += `Cedula: ${profesores.cedula} - Nombre: ${profesores.nombre} - Sexo: ${profesores.sexo} <br>`;
});

salida.innerHTML += `<br>Profesores de categoria Asociado: <br>`;
profC4.forEach((profesores) => {
    salida.innerHTML += `Cedula: ${profesores.cedula} - Nombre: ${profesores.nombre} - Sexo: ${profesores.sexo} <br>`;
});

salida.innerHTML += `<br>Profesores de categoria Titular: <br>`;
profC5.forEach((profesores) => {
    salida.innerHTML += `Cedula: ${profesores.cedula} - Nombre: ${profesores.nombre} - Sexo: ${profesores.sexo} <br>`;
});




