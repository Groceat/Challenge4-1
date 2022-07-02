var quizbt = document.querySelector(".Startbutton");
var link = document.querySelector(".scores");
var quiztxt = document.querySelector(".Quiz-text");
var Timercont = document.createElement("div");
document.body.appendChild(Timercont);
var scorecont = document.createElement("div");
document.body.appendChild(scorecont);

var newarr1 = JSON.parse(localStorage.getItem("Score"));
var newarr2 = JSON.parse(localStorage.getItem("Name"));
var printem = document.querySelector(".scorelist");
var Scoresarr = JSON.parse(localStorage.getItem("Score"));
var Namesarr = JSON.parse(localStorage.getItem("Name"));
console.log(window.location.pathname);
if(Namesarr!==null&&window.location.pathname=="/Challenge4-1/scores.html"){
for(var i =0; i<Scoresarr.length; i++){
  var scorediv = document.createElement("p");
  scorediv.textContent=Namesarr[i]+":"+Scoresarr[i];
  console.log(scorediv.textContent);
 document.body.appendChild(scorediv);
}
}


var timee=60;
var Name="";

var Game = {
  score: 0,
  questionnum:0,
  questions:[
  "What is JQuery?",
  "What does one use to style a page?",
  "What does addEventListner do?", 
  "Can you create html elements in Javascript?", 
  "Can you write scripts on the HTML file?",
  "What does console.log() do?", 
],

questionsA:[
  "A Javascript Library",
  "HTML",
  "Creates an Action Which looks for the event",
  "True",
  "True",
  "Write to Console", 
],
Answers:[
  ["A Javascript Library", "Toast","A React Component","Bread"],
  ["A Javascript Library", "HTML","Creates an Action Which looks for the event","Bread"],
  ["A Javascript Library", "Toast","A React Component","Creates an Action Which looks for the event"],
  ["True","False"],
  ["True","False"],
  ["A Javascript Library", "Write to Console","A React Component","Bread"]
],

  Score(){
this.score++;
this.questionnum++;
scorecont.textContent="Score: " + this.score;
  },
  fail(){
    this.questionnum++;
  },
  CreateQuestion(){
  this.Popquestions(this.questionnum);
  quiztxt.textContent = this.questions[this.questionnum];
  
},

Popquestions(num){
for(var i=0;i<4;i++){
  var quizlst = document.querySelector(".options");
 var listitem = document.createElement("li");
 listitem.textContent=this.Answers[num][i];
quizlst.appendChild(listitem);

}},



}


function Time(){
Timercont.textContent=timee;
timee-=1;
}

var set;
if(quizbt!==null){
quizbt.addEventListener("click", function() {
  quizbt.remove();
  Game.CreateQuestion();
  var quizlst = document.querySelector(".options");
  
 set = setInterval(Time,1000);

quizlst.addEventListener("click", function(event){
  var element = event.target;
quizlst.innerHTML='';

if(Game.questionnum===Game.questions.length-1){
  leave();
}
if(element.textContent===Game.questionsA[Game.questionnum]){
  Game.Score();
  console.log(Game.score)
}
else{
  Game.fail();
  timee-=15;
}

console.log("clicked");
Game.CreateQuestion();
});
  // TODO: Complete function
});
}
console.log("end");
function leave(){
  clearInterval(checkinterval);
  clearInterval(set);
  Timercont.textContent="";
  var quizlst = document.querySelector(".options");
  quizlst.innerHTML='';
  var form = document.createElement("form");
  var finput = document.createElement("input");
  var scorebt = document.createElement("button");
  form.appendChild(scorebt);
  form.appendChild(finput);
  document.body.appendChild(form);
  quiztxt.textContent = "Enter your Intials to save your score!";
scorebt.addEventListener("click",function(event){
  event.preventDefault();
var scoreslist = JSON.parse(localStorage.getItem("Score"));
if(scoreslist===null){
  console.log("first one");
  var scoref = [Game.score];

  var arrn=[finput.value];
  localStorage.setItem("Score", JSON.stringify(scoref));
  localStorage.setItem("Name", JSON.stringify(arrn));
}
else{
  console.log("2nd one");
  var newarr1 = JSON.parse(localStorage.getItem("Score"));
  var newarr2 = JSON.parse(localStorage.getItem("Name"));
  console.log(newarr1);
  console.log(newarr2);
  newarr1.push(Game.score);
  newarr2.push(finput.value);
  localStorage.setItem("Score", [JSON.stringify(newarr1)]);
  localStorage.setItem("Name", [JSON.stringify(newarr2)]);
}
})

}
function checkend(){
if(timee<1){
  leave();
}
}
checkinterval = setInterval(checkend,100);
//localStorage.setItem("Score", JSON.stringify(Game.score));


