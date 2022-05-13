// //     /*
// Metody do wykorzystania:
// charAt()
// includes()
// replace()* podchwytliwe 🙂 
// slice()
// split()
// toLowerCase()
// toUpperCase()
// */

const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

new_text1 = text1.toUpperCase();
new_text2 = text2.toLowerCase();
new_text3 = text3.slice(6);
new_text4 = text4.includes('czy');
new_text5 = text5.charAt(2);
new_text6 = text6.replaceAll('pies', 'kot');
new_text7 = text7.split(',');

console.log(new_text1);
console.log(new_text2);
console.log(new_text3);
console.log(new_text4);
console.log(new_text5);
console.log(new_text6);
console.log(new_text7);