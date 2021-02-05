var moment = require('moment');
moment.locale('es');
let ahora = moment().format();

let febrero = moment("2020-02-29").isValid();
//console.log("AHORA ", ahora);
//console.log("Febrero", febrero);
let hoy = moment().format('ddd');
//console.log(hoy);

////////////////////////////////////////////////////////////
//1 Mostrar fecha mes(nombre) dia año
let fecha_hoy = moment().format("MMMM ddd YYYY");
console.log("Fecha Hoy: ", fecha_hoy);

//2. Mostrar que dia fue el dia que naci
let fecha_nacimiento = moment("1990-02-04").format("dddd");
console.log("dia en que naci: ", fecha_nacimiento);

//3. Mostrar hace cuantos años naciste
let a = moment([2021, 2, 4]);
let b = moment([1990, 2, 4]);
console.log("Nací hace", a.diff(b, 'days') + ' días');
console.log("Nací hace", a.diff(b, 'years') + ' años');

//4. Mostrar que fecha sera en 258 dias
let fecha_mas_258 = moment().add(258, 'days').format("d-M-Y");
console.log("Fecha en 258 dias: ", fecha_mas_258);

//5. Mostrar que fecha sera en 4 semanas
let fecha_4_semanas = moment().add(4, 'weeks').format("d-M-Y");
console.log("Fecha en 4 semanas: ", fecha_4_semanas);