let nome = 'Luana'
let xp = 5001
let frase = 'O Herói de nome ' + nome + ' está no nível de '

if (xp <= 1000) {
    console.log(frase + 'Ferro')
} else if (xp <= 2000) {
    console.log(frase + 'Bronze')
} else if (xp <= 5000) {
    console.log(frase + 'Prata')
} else if (xp <= 7000) {
    console.log(frase + 'Ouro')
} else if (xp <= 8000) {
    console.log(frase + 'Platina')
} else if (xp <= 9000) {
    console.log(frase + 'Ascendente')
} else if (xp <= 10000) {
    console.log(frase + 'Imortal')
} else if (xp > 10000) {
    console.log(frase + 'Radiante')
}