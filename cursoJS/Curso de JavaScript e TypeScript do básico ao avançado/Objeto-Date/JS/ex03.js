let data = new Date('2023-03-22 15:03:13')

console.log('Dia do mes',data.getDate())
console.log('Mes',data.getMonth()) // Mes começa no zero
console.log('Ano',data.getFullYear())
console.log('Hora',data.getHours())
console.log('Minuto',data.getMinutes())
console.log('Segundos',data.getSeconds())
console.log('Milisegundos',data.getMilliseconds())
console.log('Dia da semana', data.getDay()) //0-Domingo a 6-Sabado

console.log(data.toString())