let score= JSON.parse(localStorage.getItem('score'))||{
  wins: 0,
  losses:0
};
// updateScore();
/*if(!score){
score={
  wins: 0,
  losses:0
};
}*/
function resetScore(){
score.wins=0;
score.losses=0;
localStorage.removeItem('score');
}

function updateScore(){
document.querySelector('.js-score-button')
.innerHTML=`Wins : ${score.wins}  Losses : ${score.losses}`;
}

function getComputerMove(){
  const computerChoice=Math.random();
  let computerMove='';

  if(computerChoice<1/2){
  computerMove='Head';
  }
  else{
    computerMove='Tail';
  }
  return computerMove;
}

  let isautoPlaying=false;
  let intervalId;
  function autoPlay(){

    if(!isautoPlaying){
    intervalId = setInterval(function(){
      const myChoice=getComputerMove();
      getResult(myChoice);
    },1000);
    isautoPlaying=true;
  } else{
    clearInterval(intervalId);
    isautoPlaying=false;
  }
}
function getResult(myChoice){
const computerChoice=Math.random();
  computerMove=getComputerMove();
  if(computerMove===myChoice){
    result='You Won';
  }
  else{
    result='You Lost';  
  }
  if(result==='You Won'){
    score.wins+=1;
  }
  else{
    score.losses+=1;
  }
  localStorage.setItem('score',JSON.stringify(score));
  
updateScore(); 
document.querySelector('.js-result-button')
.innerHTML=`${result}`;
document.querySelector('.js-resultDetails-button')
.innerHTML=`You
<img class="Result-icon" src="${myChoice}-icon.png">
<img class="Result-icon" src="${computerMove}-icon.png">
 Computer`;
}