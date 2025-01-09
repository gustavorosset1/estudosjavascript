let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A


//formaantiga
const varATemp = varA
varA = varB
varB = varC
varC = varATemp

//formanova1

[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC)


// 100 - 12,75%
// 115 - x

x = 115 * 0.1275 
y = 25000 * 0.02

console.log(x, y)
