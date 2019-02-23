var player1 = document.getElementsByClassName('button1'),
 player2 = document.getElementsByClassName('button2'),
 reset = document.getElementsByClassName('reset'),
 player1change = document.getElementsByClassName('p1Score'),
 player2change = document.getElementsByClassName('p2Score'),
 p1 = 0, p2 = 0,
 reset = document.getElementById('reset'),
plyto = document.getElementById('plyto'),
playto = document.getElementById('playto'),
gameEnd = false,
scoreToWin;
plyto.textContent = playto.value;
scoreToWin = playto.value;
playto.addEventListener('change', function () {
  if (!gameEnd) {
    plyto.textContent = playto.value;
    scoreToWin = playto.value;

  }

});

player1[0].addEventListener('click', function () {if (!gameEnd) {
    playto.disabled = true;
    p1++;
    player1change[0].textContent = p1;
    if (p1 == scoreToWin) {
      gameEnd = true;
      player2change[0].style.color = 'Red';
      player1change[0].style.color = 'rgb(64, 101, 4)';

    }
  }
});

player2[0].addEventListener('click', function () {if (!gameEnd) {
    playto.disabled = true;
    p2++;
    player2change[0].textContent = p2;
    if (p2 == scoreToWin) {
      gameEnd = true;
      player1change[0].style.color = 'Red';
      player2change[0].style.color = 'rgb(64, 101, 4)';
    }
  }
});

reset.addEventListener('click', function () {
    player1change[0].style.color = 'black';
    player2change[0].style.color = 'black';
    gameEnd = false;
    p2 = 0;
    p1 = 0;
    player1change[0].textContent = 0;
    player2change[0].textContent = 0;
    plyto.textContent = playto.value;
    scoreToWin = playto.value;
    playto.disabled = false;

  });
