function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth()+1)
    const ano = zeroEsquerda(data.getFullYear())

    return`${dia}/${mes}/${ano}`;

};

const data = new Date('2022-09-06T16:55:49')

const dataFormatada = formataData(data)

console.log(dataFormatada)