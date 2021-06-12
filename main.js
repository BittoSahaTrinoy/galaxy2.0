
//******mode change*********//

function v(){
  
  
  alert("Not available now!");
  
}

//*-******mode change *****--**//


function about(){
  
  alert("Showing a dummy text!");
}

function calc(){
  
  alert("Not yet created!");
}

function place(){

const input = document.getElementById("search").value;
document.getElementById("late").innerHTML = input;
};



//initializing voice recognition

const  buttonIcon = document.getElementById("c");
const Iconcontent = document.getElementById("hero");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
function mbbs(){

  recognition.start();
  buttonIcon.style.color = "beige";


};




recognition.onstart = function() {

  console.log("voic recognition started successfully! speak on your microphoneee!!!");
}
if(!SpeechRecognition){
  
  
  console.error("sorry!!!!");
}

  recognition.onresult = function(event) {

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    Iconcontent.value = transcript;

    buttonIcon.style.color = "lightsalmon";
    
}

//initializing search..


let input = document.querySelector("input");
let emptyArray = [];

let allList = document.getElementById("ul").querySelectorAll("li");
for (let i = 0; i < allList.length; i++) {
  //adding onclick attribute in all li tag
  allList[i].setAttribute("onclick", "select(this)");
}


function select(element){
    let selectData = element.textContent;
    let inputBox = document.querySelector("input");
    inputBox.value = selectData;
}




input.onkeyup = (e)=>{
  
  var userVal = e.target.value;
  if(userVal.toLocaleLowerCase().includes("how")){
    document.getElementById("li").innerHTML = "how to become a self taught software engineer";
    document.getElementById("li2").innerHTML = "how to make cake at home";
    document.getElementById("li3").innerHTML = "how to draw a sketch";
    document.getElementById("li4").innerHTML = "how to learn something fast";
    document.getElementById("li5").innerHTML = "how to develop my english skills";
    document.getElementById("li6").innerHTML = "how to make oxygen at home";
    document.getElementById("li7").innerHTML = "how many country in the world";
    document.getElementById("li8").innerHTML = "how to be a genius";
    document.getElementById("li4").innerHTML = "how create my own doll house";
    document.getElementById("li5").innerHTML = "how to make april fool";
    
  }
  if(userVal.toLocaleLowerCase() == ""){
    document.getElementById("ul").style.display="none";
  }
  if(userVal.toLocaleLowerCase().includes("facebook") || userVal.toLocaleLowerCase().includes("fb")){
    document.getElementById("li").innerHTML = "open facbook";
    document.getElementById("li2").innerHTML = "facbook works";
    document.getElementById("li3").innerHTML = "facebook pages";
    document.getElementById("li4").innerHTML = "instagram";
    document.getElementById("li5").innerHTML = "whats app";
    document.getElementById("li6").innerHTML = "youtube";
    document.getElementById("li7").innerHTML = "wikipedia";
    document.getElementById("li8").innerHTML = "facbook authentication";
    document.getElementById("li4").innerHTML = "i have lost my facebook password";
    document.getElementById("li5").innerHTML = "facebook id tips and trics";
    
    
    
  }
  if (userVal.toLocaleLowerCase().includes("bangladesh") || userVal.toLocaleLowerCase().includes("bd")) {
    document.getElementById("li").innerHTML = "liberation war 1971";
    document.getElementById("li2").innerHTML = "bangladeshi national website";
    document.getElementById("li3").innerHTML = "ebook bd";
    document.getElementById("li4").innerHTML = "konnect app";
    document.getElementById("li5").innerHTML = "mujib 100 quize";
    document.getElementById("li6").innerHTML = "sheikh hasina - the prime minister of bangladesh";
    document.getElementById("li7").innerHTML = "news 24 bd";
    document.getElementById("li8").innerHTML = "bangladesh news";
    document.getElementById("li4").innerHTML = "bangladesh sports";
    document.getElementById("li5").innerHTML = "corona news bd";
  
  
  
  }
  if (userVal.toLocaleLowerCase().includes("messi") || userVal.toLocaleLowerCase().includes("argentina") || userVal.toLocaleLowerCase().includes("football") || userVal.toLocaleLowerCase().includes("brazil")) {
    document.getElementById("li").innerHTML = "lionel messi";
    document.getElementById("li2").innerHTML = "football";
    document.getElementById("li3").innerHTML = "ICC";
    document.getElementById("li4").innerHTML = "BCCI";
    document.getElementById("li5").innerHTML = "neymar";
    document.getElementById("li6").innerHTML = "brazil";
    document.getElementById("li7").innerHTML = "argentina";
    document.getElementById("li8").innerHTML = "bangladesh football";
    document.getElementById("li4").innerHTML = "bangladesh sports";
    document.getElementById("li5").innerHTML = "fc barcelona";
  
  
  
  }
}



document.querySelector("input").addEventListener("click", ()=>{
  
  document.getElementById("ul").style.display="initial";
});



