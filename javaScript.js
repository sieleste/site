let helper = 2;
let blocks = document.querySelectorAll('.blockField');
let move = document.querySelector('#move');
const plusScore_X = document.querySelector('#plusScore-X');
const plusScore_O = document.querySelector('#plusScore-O');
const O_Score = document.querySelector('#O-Score');
const X_Score = document.querySelector('#X-Score');
let score_o = 0;
let score_x = 0;
const resetBtn = document.querySelector('#resetBtn');
let idHelp = 0;
let winner = document.querySelector('#winner');
let afterWin = document.querySelector('#afterWin');
let table = document.querySelector('#table');
let tableField = document.querySelector('.tableField');

document.addEventListener('DOMContentLoaded', () => {
  blocks.forEach(function(element) {
    element.addEventListener('click', change);
  });
});

function change(){
  if(helper % 2 == 0){
    X.call(this);
    helper++;
  }
  else {
    O.call(this);
    helper++;
  }

  if(blocks[0].innerHTML === blocks[1].innerHTML &&  blocks[1].innerHTML === blocks[2].innerHTML){
    win(0)
    if (parseInt(window.getComputedStyle(document.body).width) >= 580) {
      winLine('53px', '23px', '0', '280');
    } else {
      winLine('40px', '55px', '0', '190');
    }
  }
  if(blocks[3].innerHTML === blocks[4].innerHTML &&  blocks[4].innerHTML === blocks[5].innerHTML){
    win(3)
    if (parseInt(window.getComputedStyle(document.body).width) >= 580) {
      winLine('161px', '23px', '0', '280');
    } else {
      winLine('117px', '55px', '0', '190');
    }
  }
  if(blocks[6].innerHTML === blocks[7].innerHTML &&  blocks[7].innerHTML === blocks[8].innerHTML){
    win(6)
    if (parseInt(window.getComputedStyle(document.body).width) >= 580) {
      winLine('269px', '23px', '0', '280');
    } else {
      winLine('195px', '55px', '0', '190');
    }
  }

  if(blocks[0].innerHTML === blocks[3].innerHTML &&  blocks[3].innerHTML === blocks[6].innerHTML){
    win(0)
    if (parseInt(window.getComputedStyle(document.body).width) >= 580) {
      winLine('158px', '-85px', '90', '280');
    } else {
      winLine('116px', '-18px', '90', '190');
    }
  }
  if(blocks[1].innerHTML === blocks[4].innerHTML &&  blocks[4].innerHTML === blocks[7].innerHTML){
    win(1)
    if (parseInt(window.getComputedStyle(document.body).width) >= 580) {
      winLine('158px', '23px', '90', '280');
    } else {
      winLine('116px', '54px', '90', '190');
    }
  }
  if(blocks[2].innerHTML === blocks[5].innerHTML &&  blocks[5].innerHTML === blocks[8].innerHTML){
    win(2)
    if (parseInt(window.getComputedStyle(document.body).width) >= 580) {
      winLine('158px', '131px', '90', '280');
    } else {
      winLine('116px', '127px', '90', '190');
    }
  }

  if(blocks[0].innerHTML === blocks[4].innerHTML &&  blocks[4].innerHTML === blocks[8].innerHTML){
    win(0)
    if (parseInt(window.getComputedStyle(document.body).width) >= 580) {
      winLine('154px', '-33px', '45', '375');
    } else {
      winLine('115px', '18px', '45', '260');
    }
  }
  if(blocks[2].innerHTML === blocks[4].innerHTML &&  blocks[4].innerHTML === blocks[6].innerHTML){
    win(2)
    if (parseInt(window.getComputedStyle(document.body).width) >= 580) {
      winLine('165px', '-27px', '-45', '375');
    } else {
      winLine('118px', '18px', '-45', '260');
    }
  }
}

function X(){
  if(this.innerHTML != `<p class="X">X</p>` && this.innerHTML != `<p class="O">O</p>`){
    this.innerHTML = `<p class="X">X</p>`;
    move.innerText = 'Ход: O';
    move.style.backgroundColor = 'rgba(0, 136, 255, 0.453)';
  } else 
  helper++;
}

function O(){
  if(this.innerHTML != `<p class="X">X</p>` && this.innerHTML != `<p class="O">O</p>`){
    this.innerHTML = `<p class="O">O</p>`;
    move.innerText = 'Ход: X';
    move.style.backgroundColor = 'rgba(255, 0, 0, 0.42)';
  } else 
  helper++;
}

resetBtn.addEventListener('click', function(){
  blocks.forEach(function(element) {
    idHelp++;
    element.innerHTML = `
    <p id="${idHelp}"></p>`;
    move.innerText = `Ход: X`;
    tableField.innerHTML = ``
    tableField.style.zIndex = '-1';

    helper = 2;
  });

  afterWin.style.display = "none";
  
});

function win(i){
  if(blocks[i].innerHTML == `<p class="X">X</p>`){
    move.innerText = "победитель X";
    move.style.backgroundColor = "rgba(255, 0, 0, 0.42)";
    score_x++;
    X_Score.innerText = score_x;

    afterWin.style.display = "block";
  }
  else{
    move.innerText = "победитель O";
    move.style.backgroundColor = "rgba(0, 136, 255, 0.453)";
    score_o++;
    O_Score.innerText = score_o;

    afterWin.style.display = "block";
  }

  helper = 0;
}

function winLine(top, left, rotate, size){
  tableField.innerHTML += `<div class="hr"></div>`
  let hr = document.querySelector('.hr');
  tableField.style.position = 'absolute';
  hr.style.position = 'absolute';
  hr.style.height ='3.5px';
  hr.style.backgroundColor = 'black'
  tableField.style.zIndex = '10';

  hr.style.width = size + 'px';
  hr.style.left = left;
  hr.style.top = top;
  hr.style.transform = `rotate(${rotate}deg)`;
}




