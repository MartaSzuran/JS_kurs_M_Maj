let v = '123';
let m = "to jest długi tekst";
let newmsg = "blr blr dadgag";

console.log(v);

console.log(typeof v);

console.log(v.length);

console.log(m.toUpperCase());

let new_m = newmsg.toUpperCase();

console.log(new_m.toUpperCase());
// to jest tylko operacja jednorazowa
console.log(new_m.toLowerCase());

console.log(new_m);

// jest też metoda toLocaleLowerCase() - odpowiednio też UpperCase
// uzywa się ją gdy zmieniamy format np.daty w związku z konwencjami

const date = new Date();
console.log(date.toLocaleDateString('pl'));
console.log(date.toLocaleDateString('en'));

const username = 'maciej';
const newUsername = username.charAt(0).toUpperCase() + username.slice(1);
console.log(username.slice(1));
console.log(newUsername);
