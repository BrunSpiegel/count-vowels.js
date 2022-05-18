const text1 = "eu vou para a escola";
const text2 = "o dia esta lindo hoje";
 
const vogais = ['a','e','i','o','u']

function contaVogais() {
  let contador = 0
  let contador2 = 0

  for(let i = 0; i < text1.length; i++) {
    if (text1[i] == vogais[0]) contador++ 
  } 
  for(let i = 0; i < text1.length; i++) {
    if (text1[i] == vogais[1]) contador++ 
  } 
  for(let i = 0; i < text1.length; i++) {
    if (text1[i] == vogais[2]) contador++ 
  } 
  for(let i = 0; i < text1.length; i++) {
    if (text1[i] == vogais[3]) contador++ 
  } 
  for(let i = 0; i < text1.length; i++) {
    if (text1[i] == vogais[4]) contador++ 
  }
  
  console.log(contador)

  for(let i = 0; i < text2.length; i++) {
    if (text2[i] == vogais[0]) contador2++ 
  } 
  for(let i = 0; i < text2.length; i++) {
    if (text2[i] == vogais[1]) contador2++ 
  } 
  for(let i = 0; i < text2.length; i++) {
    if (text2[i] == vogais[2]) contador2++ 
  } 
  for(let i = 0; i < text2.length; i++) {
    if (text2[i] == vogais[3]) contador2++ 
  } 
  for(let i = 0; i < text2.length; i++) {
    if (text2[i] == vogais[4]) contador2++ 
  }

  console.log(contador2)
}


contaVogais()