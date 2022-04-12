'use strict'

const btn = document.getElementById('btn');

var turn = true;

// 0 corresponds to not sleected. 1 is black. 2 is white.


var index = document.getElementById('img');



let b11 = 0;
btn.addEventListener('click', function onClick() {
  if (turn === true) {
  btn.style.backgroundColor = 'black';
  btn.style.color = 'white';
  turn = false;
  b11 = 1;
  winGame();
  btn.removeEventListener('click', onClick);
  } else {
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
    turn = true;
    b11 = 2;
    winGame();
    btn.removeEventListener('click', onClick);
  }
});

const b2 = document.getElementById('b2');
let b12 = 0;
b2.addEventListener('click', function onClick() {
  if (turn === true) {
  b2.style.backgroundColor = 'black';
  b2.style.color = 'white';
  turn = false;
  b12 = 1;
    winGame();
    b2.removeEventListener('click', onClick);
  } else {
    b2.style.backgroundColor = 'white';
    b2.style.color = 'black';
    turn = true;
    b12 = 2;
    winGame();
    b2.removeEventListener('click', onClick);
  }

});
//rgb (20, 30, 50);

const b3 = document.getElementById('b3');
let b13 = 0;
b3.addEventListener('click', function onClick() {
  if (turn === true) {
  b3.style.backgroundColor = 'black';
  b3.style.color = 'white';
    turn = false;
    b13 = 1;
    winGame();
    b3.removeEventListener('click', onClick);
  } else {
    b3.style.backgroundColor = 'white';
    b3.style.color = 'black';
    turn = true;
    b13 = 2;
    winGame();
    b3.removeEventListener('click', onClick);
  }

});


const b4 = document.getElementById('b4');
let b14 = 0;
b4.addEventListener('click', function onClick() {
  if (turn === true) {
  b4.style.backgroundColor = 'black';
  b4.style.color = 'white';
  turn = false;
  b14 = 1;
    winGame();
    b4.removeEventListener('click', onClick);
  } else {
    b4.style.backgroundColor = 'white';
    b4.style.color = 'black';
    turn = true;
    b14 = 2;
    winGame();
    b4.removeEventListener('click', onClick);
  }

});


const b5 = document.getElementById('b5');
let b15 = 0;
b5.addEventListener('click', function onClick() {
  if (turn === true) {
  b5.style.backgroundColor = 'black';
  b5.style.color = 'white';
  turn = false;
  b15 = 1;
    winGame();
    b5.removeEventListener('click', onClick);
  } else {
    b5.style.backgroundColor = 'white';
    b5.style.color = 'black';
    turn = true;
    b15 = 2;
    winGame();
    b5.removeEventListener('click', onClick);
  }

});


const b6 = document.getElementById('b6');
let b16 = 0;
b6.addEventListener('click', function onClick() {
  if (turn === true) {
  b6.style.backgroundColor = 'black';
  b6.style.color = 'white';
  turn = false;
  b16 = 1;
    winGame();
    b6.removeEventListener('click', onClick);
  } else {
    b6.style.backgroundColor = 'white';
    b6.style.color = 'black';
    turn = true;
    b16 = 2;
    winGame();
    b6.removeEventListener('click', onClick);
  }

});


const b7 = document.getElementById('b7');
let b17 = 0;
b7.addEventListener('click', function onClick() {
  if (turn === true) {
  b7.style.backgroundColor = 'black';
  b7.style.color = 'white';
  turn = false;
  b17 = 1;
    winGame();
    b7.removeEventListener('click', onClick);
  } else {
    b7.style.backgroundColor = 'white';
    b7.style.color = 'black';
    turn = true;
    b17 = 2;
    winGame();
    b7.removeEventListener('click', onClick);
  }

});


const b8 = document.getElementById('b8');
let b18 = 0;
b8.addEventListener('click', function onClick() {
  if (turn === true) {
  b8.style.backgroundColor = 'black';
  b8.style.color = 'white';
  turn = false;
  b18 = 1;
    winGame();
    b8.removeEventListener('click', onClick);
  } else {
    b8.style.backgroundColor = 'white';
    b8.style.color = 'black';
    turn = true;
    b18 = 2;
    winGame();
    b8.removeEventListener('click', onClick);
  }

});


const b9 = document.getElementById('b9');
let b19 = 0;
b9.addEventListener('click', function onClick() {
  if (turn === true) {
  b9.style.backgroundColor = 'black';
  b9.style.color = 'white';
  turn = false;
  b19 = 1;
    winGame();
    b9.removeEventListener('click', onClick);
  } else {
    b9.style.backgroundColor = 'white';
    b9.style.color = 'black';
    turn = true;
    b19 = 2;
    winGame();
    b9.removeEventListener('click', onClick);
  }
});


let id = document.getElementById('heading');
function winGame() {
  if (b11 === 1 && b12 === 1 && b13 === 1) {
    id.innerHTML = 'Black Wins';
    console.log('black wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b11 === 2 && b12 === 2 && b13 === 2) {
    id.innerHTML = 'White Wins'
    console.log('white wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b14 === 1 && b15 === 1 && b16 === 1) {
    id.innerHTML = 'Black Wins';
    console.log('black wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b14 === 2 && b15 === 2 && b16 === 2) {
    id.innerHTML = 'White Wins'
    console.log('white wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
} else if (b17 === 1 && b18 === 1 && b19 === 1) {
    id.innerHTML = 'Black Wins';
    console.log('black wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b17 === 2 && b18 === 2 && b19 === 2) {
    id.innerHTML = 'White Wins'
    console.log('white wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b11 === 1 && b14 === 1 && b17 === 1) {
    id.innerHTML = 'Black Wins';
    console.log('black wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b11 === 2 && b14 === 2 && b17 === 2) {
    id.innerHTML = 'White Wins'
    console.log('white wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b12 === 1 && b15 === 1 && b18 === 1) {
    id.innerHTML = 'Black Wins';
    console.log('black wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b12 === 2 && b15 === 2 && b18 === 2) {
    id.innerHTML = 'White Wins'
    console.log('white wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b13 === 1 && b16 === 1 && b19 === 1) {
    id.innerHTML = 'Black Wins';
    console.log('black wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b13 === 2 && b16 === 2 && b19 === 2) {
    id.innerHTML = 'White Wins'
    console.log('white wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b11 === 1 && b15 === 1 && b19 === 1) {
    id.innerHTML = 'Black Wins';
    console.log('black wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b11 === 2 && b15 === 2 && b19 === 2) {
    id.innerHTML = 'White Wins'
    console.log('white wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b13 === 1 && b15 === 1 && b17 === 1) {
    id.innerHTML = 'Black Wins';
    console.log('black wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if (b13 === 2 && b15 === 2 && b17 === 2) {
    id.innerHTML = 'White Wins'
    console.log('white wins');
    var newbtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newbtn, btn);
    var newb2 = b2.cloneNode(true);
    b2.parentNode.replaceChild(newb2, b2);
    var newb3 = b3.cloneNode(true);
    b3.parentNode.replaceChild(newb3, b3);
    var newb4 = b4.cloneNode(true);
    b4.parentNode.replaceChild(newb4, b4);
    var newb5 = b5.cloneNode(true);
    b5.parentNode.replaceChild(newb5, b5);
    var newb6 = b6.cloneNode(true);
    b6.parentNode.replaceChild(newb6, b6);
    var newb7 = b7.cloneNode(true);
    b7.parentNode.replaceChild(newb7, b7);
    var newb8 = b8.cloneNode(true);
    b8.parentNode.replaceChild(newb8, b8);
    var newb9 = b9.cloneNode(true);
    b9.parentNode.replaceChild(newb9, b9);
  } else if ((b11 === 1||b11===2) && (b12 === 1||b12===2) && (b13 === 1 || b13 === 2) && (b14 === 1 || b14===2) && (b15 === 1||b15===2) && (b16 === 1 || b16 === 2) && (b17 === 1 || b17 === 2) && (b18 === 1 || b18 === 2) && (b19 === 1 || b19 === 2)) {
    id.innerHTML = 'DRAW, just like the korean war';
    console.log('draw');
  }
}

winGame();


