let q = document.getElementById('q');
let w = document.getElementById('w');
let e = document.getElementById('e');
let r = document.getElementById('r');
let t = document.getElementById('t');
let y = document.getElementById('y');
let u = document.getElementById('u');
let i = document.getElementById('i');
let o = document.getElementById('o');
let p = document.getElementById('p');
let a = document.getElementById('a');
let s = document.getElementById('s');
let d = document.getElementById('d');
let f = document.getElementById('f');
let g = document.getElementById('g');
let h = document.getElementById('h');
let j = document.getElementById('j');
let k = document.getElementById('k');
let l = document.getElementById('l');
let z = document.getElementById('z');
let x = document.getElementById('x');
let c = document.getElementById('c');
let v = document.getElementById('v');
let b = document.getElementById('b');
let n = document.getElementById('n');
let m = document.getElementById('m');
let del = document.getElementById('Del');
let enter = document.getElementById('Enter');


let row1 = document.getElementById('row1');
let row2 = document.getElementById('row2');
let row3 = document.getElementById('row3');
let row4 = document.getElementById('row4');
let row5 = document.getElementById('row5');
let row6 = document.getElementById('row6');

let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');
let s4 = document.getElementById('s4');
let s5 = document.getElementById('s5');
let s6 = document.getElementById('s6');
let s7 = document.getElementById('s7');
let s8 = document.getElementById('s8');
let s9 = document.getElementById('s9');
let s10 = document.getElementById('s10');
let s11 = document.getElementById('s11');
let s12 = document.getElementById('s12');
let s13 = document.getElementById('s13');
let s14 = document.getElementById('s14');
let s15 = document.getElementById('s15');
let s16 = document.getElementById('s16');
let s17 = document.getElementById('s17');
let s18 = document.getElementById('s18');
let s19 = document.getElementById('s19');
let s20 = document.getElementById('s20');
let s21 = document.getElementById('s21');
let s22 = document.getElementById('s22');
let s23 = document.getElementById('s23');
let s24 = document.getElementById('s24');
let s25 = document.getElementById('s25');
let s26 = document.getElementById('s26');
let s27 = document.getElementById('s27');
let s28 = document.getElementById('s28');
let s29 = document.getElementById('s29');
let s30 = document.getElementById('s30');
let array = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30];
let num = 0;
let array1 = [];

q.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Q";
  num = num+1;
  array1.push('Q');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Q";
  num = num+1;
  array1.push('Q');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Q";
  num = num+1;
  array1.push('Q');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Q";
  num = num+1;
  array1.push('Q');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Q";
  num = num+1;
  array1.push('Q');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Q";
  num = num+1;
  array1.push('Q');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

w.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "W";
  num = num+1;
  array1.push('W');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "w";
  num = num+1;
  array1.push('W');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "W";
  num = num+1;
  array1.push('W');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "W";
  num = num+1;
  array1.push('W');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "W";
  num = num+1;
  array1.push('W');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "W";
  num = num+1;
  array1.push('W');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

e.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "E";
  num = num+1;
  array1.push('E');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "E";
  num = num+1;
  array1.push('E');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "E";
  num = num+1;
  array1.push('E');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "E";
  num = num+1;
  array1.push('E');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "E";
  num = num+1;
  array1.push('E');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "E";
  num = num+1;
  array1.push('E');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

r.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "R";
  num = num+1;
  array1.push('R');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "R";
  num = num+1;
  array1.push('R');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "R";
  num = num+1;
  array1.push('R');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "R";
  num = num+1;
  array1.push('R');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "R";
  num = num+1;
  array1.push('R');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "R";
  num = num+1;
  array1.push('R');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

t.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "T";
  num = num+1;
  array1.push('T');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "T";
  num = num+1;
  array1.push('T');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "T";
  num = num+1;
  array1.push('T');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "T";
  num = num+1;
  array1.push('T');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "T";
  num = num+1;
  array1.push('T');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "T";
  num = num+1;
  array1.push('T');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

y.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Y";
  num = num+1;
  array1.push('Y');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Y";
  num = num+1;
  array1.push('Y');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Y";
  num = num+1;
  array1.push('Y');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Y";
  num = num+1;
  array1.push('Y');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Y";
  num = num+1;
  array1.push('Y');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Y";
  num = num+1;
  array1.push('Y');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

u.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "U";
  num = num+1;
  array1.push('U');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "U";
  num = num+1;
  array1.push('U');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "U";
  num = num+1;
  array1.push('U');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "U";
  num = num+1;
  array1.push('U');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "U";
  num = num+1;
  array1.push('U');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "U";
  num = num+1;
  array1.push('U');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

i.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "I";
  num = num+1;
  array1.push('I');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "I";
  num = num+1;
  array1.push('I');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "I";
  num = num+1;
  array1.push('I');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "I";
  num = num+1;
  array1.push('I');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "I";
  num = num+1;
  array1.push('I');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "I";
  num = num+1;
  array1.push('I');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

o.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "O";
  num = num+1;
  array1.push('O');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "O";
  num = num+1;
  array1.push('O');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "O";
  num = num+1;
  array1.push('O');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "O";
  num = num+1;
  array1.push('O');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "O";
  num = num+1;
  array1.push('O');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "V";
  num = num+1;
  array1.push('V');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

p.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "P";
  num = num+1;
  array1.push('P');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "P";
  num = num+1;
  array1.push('P');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "P";
  num = num+1;
  array1.push('P');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "P";
  num = num+1;
  array1.push('P');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "P";
  num = num+1;
  array1.push('P');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "P";
  num = num+1;
  array1.push('P');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

a.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "A";
  num = num+1;
  array1.push('A');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "A";
  num = num+1;
  array1.push('A');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "A";
  num = num+1;
  array1.push('A');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "A";
  num = num+1;
  array1.push('A');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "A";
  num = num+1;
  array1.push('A');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "A";
  num = num+1;
  array1.push('A');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

s.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "S";
  num = num+1;
  array1.push('S');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "S";
  num = num+1;
  array1.push('S');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "S";
  num = num+1;
  array1.push('S');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "S";
  num = num+1;
  array1.push('S');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "S";
  num = num+1;
  array1.push('S');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "S";
  num = num+1;
  array1.push('S');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

d.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "D";
  num = num+1;
  array1.push('D');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "D";
  num = num+1;
  array1.push('D');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "D";
  num = num+1;
  array1.push('D');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "D";
  num = num+1;
  array1.push('D');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "D";
  num = num+1;
  array1.push('D');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "D";
  num = num+1;
  array1.push('D');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

f.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "F";
  num = num+1;
  array1.push('F');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "F";
  num = num+1;
  array1.push('F');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "F";
  num = num+1;
  array1.push('F');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "F";
  num = num+1;
  array1.push('F');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "F";
  num = num+1;
  array1.push('F');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "F";
  num = num+1;
  array1.push('F');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

g.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "G";
  num = num+1;
  array1.push('G');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "G";
  num = num+1;
  array1.push('G');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "G";
  num = num+1;
  array1.push('G');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "G";
  num = num+1;
  array1.push('G');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "G";
  num = num+1;
  array1.push('G');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "G";
  num = num+1;
  array1.push('G');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

h.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "H";
  num = num+1;
  array1.push('H');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "H";
  num = num+1;
  array1.push('H');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "H";
  num = num+1;
  array1.push('H');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "H";
  num = num+1;
  array1.push('H');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "H";
  num = num+1;
  array1.push('H');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "H";
  num = num+1;
  array1.push('H');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

j.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "J";
  num = num+1;
  array1.push('J');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "J";
  num = num+1;
  array1.push('J');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "J";
  num = num+1;
  array1.push('J');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "J";
  num = num+1;
  array1.push('J');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "J";
  num = num+1;
  array1.push('J');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "J";
  num = num+1;
  array1.push('J');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

k.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "K";
  num = num+1;
  array1.push('K');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "K";
  num = num+1;
  array1.push('K');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "K";
  num = num+1;
  array1.push('K');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "K";
  num = num+1;
  array1.push('K');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "K";
  num = num+1;
  array1.push('K');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "K";
  num = num+1;
  array1.push('K');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

l.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "L";
  num = num+1;
  array1.push('L');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "L";
  num = num+1;
  array1.push('L');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "L";
  num = num+1;
  array1.push('L');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "L";
  num = num+1;
  array1.push('L');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "L";
  num = num+1;
  array1.push('L');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "L";
  num = num+1;
  array1.push('L');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

z.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Z";
  num = num+1;
  array1.push('Z');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Z";
  num = num+1;
  array1.push('Z');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Z";
  num = num+1;
  array1.push('Z');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Z";
  num = num+1;
  array1.push('Z');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Z";
  num = num+1;
  array1.push('Z');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "Z";
  num = num+1;
  array1.push('Z');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

x.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "X";
  num = num+1;
  array1.push('X');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "X";
  num = num+1;
  array1.push('X');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "X";
  num = num+1;
  array1.push('X');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "X";
  num = num+1;
  array1.push('X');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "X";
  num = num+1;
  array1.push('X');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "X";
  num = num+1;
  array1.push('X');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

c.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "C";
  num = num+1;
  array1.push('C');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "C";
  num = num+1;
  array1.push('C');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "C";
  num = num+1;
  array1.push('C');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "C";
  num = num+1;
  array1.push('C');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "C";
  num = num+1;
  array1.push('C');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "C";
  num = num+1;
  array1.push('C');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

v.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "V";
  num = num+1;
  array1.push('V');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "V";
  num = num+1;
  array1.push('V');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "V";
  num = num+1;
  array1.push('V');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "V";
  num = num+1;
  array1.push('V');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "V";
  num = num+1;
  array1.push('V');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "V";
  num = num+1;
  array1.push('V');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

b.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "B";
  num = num+1;
  array1.push('B');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "B";
  num = num+1;
  array1.push('B');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "B";
  num = num+1;
  array1.push('B');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "B";
  num = num+1;
  array1.push('B');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "B";
  num = num+1;
  array1.push('B');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "B";
  num = num+1;
  array1.push('B');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

n.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable = 0;
  if (row1bool === true && variable===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "N";
  num = num+1;
  array1.push('N');
    variable = variable+1;
  } else if (row2bool === true && variable===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "N";
  num = num+1;
  array1.push('N');
    variable = variable + 1;
  } else if (row3bool === true && variable === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "N";
  num = num+1;
  array1.push('N');
    variable = variable + 1;
  } else if (row4bool === true && variable === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "N";
  num = num+1;
  array1.push('N');
    variable = variable + 1;
  } else if (row5bool === true && variable === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "N";
  num = num+1;
  array1.push('N');
    variable = variable + 1;
  } else if (row6bool === true && variable === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "N";
  num = num+1;
  array1.push('N');
    variable = variable + 1;
  } else {
    console.log('dont, just dont');
  }
})

//m.addEventListener('click', function onClick() {
//  number = array[num];
//  console.log(number);
//  number.innerHTML = "M";
//  num = num+1;
//  array1.push('M');
//})

m.addEventListener('click', function onClick() {
  let row1bool = false;
let row2bool = false;
let row3bool = false;
let row4bool = false;
let row5bool = false;
let row6bool = false;
  let variable1 = 0;
  if (row1bool === true && variable1===0 || num<=4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "M";
  num = num+1;
  array1.push('M');
    variable1 = variable1+1;
  } else if (row2bool === true && variable1===1 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "M";
  num = num+1;
  array1.push('M');
    variable1 = variable1 + 1;
  } else if (row3bool === true && variable1 === 2 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "M";
  num = num+1;
  array1.push('M');
    variable1 = variable1 + 1;
  } else if (row4bool === true && variable1 === 3 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "M";
  num = num+1;
  array1.push('M');
    variable1 = variable1 + 1;
  } else if (row5bool === true && variable1 === 4 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "M";
  num = num+1;
  array1.push('M');
    variable1 = variable1 + 1;
  } else if (row6bool === true && variable1 === 5 || num <= 4) {
    number = array[num];
  console.log(num);
  number.innerHTML = "M";
  num = num+1;
  array1.push('M');
    variable1 = variable1 + 1;
  } else {
    console.log('dont, just dont');
  }
})

del.addEventListener('click', function onClick() {
  number = array[num-1];
  number.innerHTML = "";
  array1.splice(num-1, 1);
  num = num-1;
})


//Game
/*
let wordArr = ['DAIRY', 'CANAL', 'ZYGOT', 'BITCH', 'FUCKS', 'MOUSE'];
let ivx = Math.floor(Math.random()*5);
let word = wordArr[ivx];
*/
var words = window.prompt("Enter a Five Letter Word");

let word = words.toUpperCase();

let heading = document.getElementById('heading');

let display = document.getElementById('display');

let row = 1;

function determineRow() {
  if (num === 0 || num === 1 || num === 2 || num === 3 || num === 4 || num === 5) {
    row = 1;
    return 1;
  } else if (num === 5 || num === 6 || num === 7 || num === 8 || num === 9 || num === 10) {
    row = 2;
    return 2;
  } if (num === 10 || num === 11 || num === 12 || num === 13 || num === 14 || num === 15) {
    row = 3;
    return 3;
  } else if (num === 15 || num === 16 || num === 17 || num === 18 || num === 19) {
    row = 4;
    return 4;
  } else if (num === 20 || num === 21 || num === 22 || num === 23 || num === 24) {
    row = 5;
    return 5;
  } else if (num === 25 || num === 26 || num === 27 || num === 28 || num === 29) {
    row = 6;
    return 6;
}
}

let wordArray = word.split("");
console.log(wordArray);

function generateFirstGuess() {
  let firstGuess = array1[0] + array1[1] + array1[2] + array1[3] + array1[4];
  if (firstGuess === word) {
    console.log("congrats, you got the answer");
    console.log(array1);
    display.innerHTML = "Congrats, thats the answer";
    array1 = [];
    array = [];
    s1.style.background = 'green';
    s2.style.background = 'green';
    s3.style.background = 'green';
    s4.style.background = 'green';
    s5.style.background = 'green'; 
  } else {
    let arrays = [s1, s2, s3, s4, s5];
        for(i=0; i<=4; i++) {
      if (array1[i] === word[i]) {
        arrays[i].style.background = 'green';
      } else if (wordArray.includes(array1[i]) === true) {
        arrays[i].style.background = 'yellow';
      } else {
        arrays[i].style.background = 'gray';
      }
    }
    console.log("nope, thats not it");
    console.log(array1);
    display.innerHTML = 'Sorry, thats not the answer';
    array1 = [];
  }
}

function generateSecondGuess() {
  let secondGuess = array1[0] + array1[1] + array1[2] + array1[3] + array1[4];
  if (secondGuess === word) {
    console.log("congrats, you got the answer");
    console.log(array1);
    display.innerHTML = "Congrats, thats the answer";
    array1 = [];
    array = [];
    s6.style.background = 'green';
    s7.style.background = 'green';
    s8.style.background = 'green';
    s9.style.background = 'green';
    s10.style.background = 'green'; 
  } else {
        let arrays2 = [s6, s7, s8, s9, s10];
        for(i=0; i<=4; i++) {
      if (array1[i] === word[i]) {
        arrays2[i].style.background = 'green';
      } else if (wordArray.includes(array1[i]) === true) {
        arrays2[i].style.background = 'yellow';
      } else {
        arrays2[i].style.background = 'gray';
      }
    }
    console.log("nope, thats not it");
    console.log(array1);
    display.innerHTML = 'Sorry, thats not the answer';
    array1 = [];
  }
}

function generateThirdGuess() {
  let thirdGuess = array1[0] + array1[1] + array1[2] + array1[3] + array1[4];
  if (thirdGuess === word) {
    console.log("congrats, you got the answer");
    console.log(array1);
    display.innerHTML = "Congrats, thats the answer";
    array1 = [];
    array = [];
    s11.style.background = 'green';
    s12.style.background = 'green';
    s13.style.background = 'green';
    s14.style.background = 'green';
    s15.style.background = 'green'; 
  } else {
        let arrays3 = [s11, s12, s13, s14, s15];
        for(i=0; i<=4; i++) {
      if (array1[i] === word[i]) {
        arrays3[i].style.background = 'green';
      } else if (wordArray.includes(array1[i]) === true) {
        arrays3[i].style.background = 'yellow';
      } else {
        arrays3[i].style.background = 'gray';
      }
    }
    console.log("nope, thats not it");
    console.log(array1);
    display.innerHTML = 'Sorry, thats not the answer';
    array1 = [];
  }
}

function generateFourthGuess() {
  let fourthGuess = array1[0] + array1[1] + array1[2] + array1[3] + array1[4];
  if (fourthGuess === word) {
    console.log("congrats, you got the answer");
    console.log(array1);
    display.innerHTML = "Congrats, thats the answer";
    array1 = [];
    array = [];
    s16.style.background = 'green';
    s17.style.background = 'green';
    s18.style.background = 'green';
    s19.style.background = 'green';
    s20.style.background = 'green'; 
  } else {
        let arrays4 = [s16, s17, s18, s19, s20];
        for(i=0; i<=4; i++) {
      if (array1[i] === word[i]) {
        arrays4[i].style.background = 'green';
      } else if (wordArray.includes(array1[i]) === true) {
        arrays4[i].style.background = 'yellow';
      } else {
        arrays4[i].style.background = 'gray';
      }
    }
    console.log("nope, thats not it");
    console.log(array1);
    display.innerHTML = 'Sorry, thats not the answer';
    array1 = [];
  }
}

function generateFifthGuess() {
  let fifthGuess = array1[0] + array1[1] + array1[2] + array1[3] + array1[4];
  if (fifthGuess === word) {
    console.log("congrats, you got the answer");
    console.log(array1);
    display.innerHTML = "Congrats, thats the answer";
    array1 = [];
    array = [];
    s21.style.background = 'green';
    s22.style.background = 'green';
    s23.style.background = 'green';
    s24.style.background = 'green';
    s25.style.background = 'green'; 
  } else {
        let arrays5 = [s21, s22, s23, s24, s25];
        for(i=0; i<=4; i++) {
      if (array1[i] === word[i]) {
        arrays5[i].style.background = 'green';
      } else if (wordArray.includes(array1[i]) === true) {
        arrays5[i].style.background = 'yellow';
      } else {
        arrays5[i].style.background = 'gray';
      }
    }
    console.log("nope, thats not it");
    console.log(array1);
    display.innerHTML = 'Sorry, thats not the answer';
    array1 = [];
  }
}

function generateSixthGuess() {
  let sixthGuess = array1[0] + array1[1] + array1[2] + array1[3] + array1[4];
  console.log(sixthGuess);
  if (sixthGuess === word) {
    console.log("congrats, you got the answer");
    console.log(array1);
    display.innerHTML = "Congrats, thats the answer";
    array1 = [];
    array = [];
    s26.style.background = 'green';
    s27.style.background = 'green';
    s28.style.background = 'green';
    s29.style.background = 'green';
    s30.style.background = 'green'; 
  } else {
        let arrays6 = [s26, s27, s28, s29, s30];
        for(i=0; i<=4; i++) {
      if (array1[i] === word[i]) {
        arrays6[i].style.background = 'green';
      } else if (wordArray.includes(array1[i]) === true) {
        arrays6[i].style.background = 'yellow';
      } else {
        arrays6[i].style.background = 'gray';
      }
    }
    console.log("nope, thats not it");
    console.log(array1);
    display.innerHTML = 'Sorry, thats not the answer';
    array1 = [];
    display.innerHTML = "You Lose, the word is " + word;
    }
}

//disable the varubael, if that does not work, and youhave tried the other varibale, you might jsut have to resort to the cloning(prob increase length by antoehr 100); 



enter.addEventListener('click', function guessGuess(){
  if (num === 5 || num === 10 || num === 15 || num === 20 || num === 25 || num === 30) {
    if (row === 1) {
    generateFirstGuess();
    var news1 = s1.cloneNode(true);
    s1.parentNode.replaceChild(news1, s1);
    var news2 = s2.cloneNode(true);
    s2.parentNode.replaceChild(news2, s2);
    var news3 = s3.cloneNode(true);
    s3.parentNode.replaceChild(news3, s3);
    var news4 = s4.cloneNode(true);
    s4.parentNode.replaceChild(news4, s4);
    var news5 = s5.cloneNode(true);
    s5.parentNode.replaceChild(news5, s5);
    array.splice(0, 5);
    num = 0;
    row = row + 1;
    console.log(row);
    row1bool = true;
  } else if (row === 2) {
    generateSecondGuess();
    var news6 = s6.cloneNode(true);
    s6.parentNode.replaceChild(news6, s6);
    var news7 = s7.cloneNode(true);
    s7.parentNode.replaceChild(news7, s7);
    var news8 = s8.cloneNode(true);
    s8.parentNode.replaceChild(news8, s8);
    var news9 = s9.cloneNode(true);
    s9.parentNode.replaceChild(news9, s9);
    var news10 = s10.cloneNode(true);
    s10.parentNode.replaceChild(news10, s10);
    array.splice(0, 5);
    num = 0;
    row = row + 1;
    console.log(row);
      row2bool = true;
  } else if (row === 3) {
    generateThirdGuess();
    var news11 = s11.cloneNode(true);
    s11.parentNode.replaceChild(news11, s11);
    var news12 = s12.cloneNode(true);
    s12.parentNode.replaceChild(news12, s12);
    var news13 = s13.cloneNode(true);
    s13.parentNode.replaceChild(news13, s13);
    var news14 = s14.cloneNode(true);
    s14.parentNode.replaceChild(news14, s14);
    var news15 = s15.cloneNode(true);
    s15.parentNode.replaceChild(news15, s15);
    array.splice(0, 5);
    num = 0;
    row = row + 1;
    console.log(row);
    row3bool = true;
  } else if (row === 4) {
    generateFourthGuess();
    var news16 = s16.cloneNode(true);
    s16.parentNode.replaceChild(news16, s16);
    var news17 = s17.cloneNode(true);
    s17.parentNode.replaceChild(news17, s17);
    var news18 = s18.cloneNode(true);
    s18.parentNode.replaceChild(news18, s18);
    var news19 = s19.cloneNode(true);
    s19.parentNode.replaceChild(news19, s19);
    var news20 = s20.cloneNode(true);
    s20.parentNode.replaceChild(news20, s20);
    array.splice(0, 5);
    num = 0;
    row = row + 1;
    console.log(row);
    row4bool = true;
  } else if (row === 5) {
    generateFifthGuess();
    var news21 = s21.cloneNode(true);
    s21.parentNode.replaceChild(news21, s21);
    var news22 = s22.cloneNode(true);
    s22.parentNode.replaceChild(news22, s22);
    var news23 = s23.cloneNode(true);
    s23.parentNode.replaceChild(news23, s23);
    var news24 = s24.cloneNode(true);
    s24.parentNode.replaceChild(news24, s24);
    var news25 = s25.cloneNode(true);
    s25.parentNode.replaceChild(news25, s25);
    array.splice(0, 5);
    num = 0;
    row = row + 1;
    console.log(row);
      row5bool = true;
  } else if (row === 6) {
    generateSixthGuess();
    var news26 = s26.cloneNode(true);
    s26.parentNode.replaceChild(news26, s26);
    var news27 = s27.cloneNode(true);
    s27.parentNode.replaceChild(news27, s27);
    var news28 = s28.cloneNode(true);
    s28.parentNode.replaceChild(news28, s28);
    var news29 = s29.cloneNode(true);
    s29.parentNode.replaceChild(news29, s29);
    var news30 = s30.cloneNode(true);
    s30.parentNode.replaceChild(news30, s30);
    num = 0;
    console.log(row);
    console.log(array1);
    row6bool = true;
  } else {
    //display.innerHTML = "Please Enter the full row";
    console.log("enter a valid word");
  }
  }
}); 


//Also add code that hinders the user to enter words beyond the word. 
//Finally, just add the colors and style and animate it and it would be a perfect wordle. (or quotle!!!). 
//you also nee dthe random word function and the word list function so you only enter valid words. Good liuck!.
