// assigning variables to DOM elements
var clock = document.querySelector(".fDiv");
console.log(clock);
var hou = document.querySelector("#hour"); 
//var min = document.querySelector("#minute"); 
//var sec = document.querySelector("#seconds"); 
var btn = document.querySelector(".btns");
console.log(btn);



// functions to perform
function time(){   
    const date =new Date();
    hours = date.getHours();
    min = date.getMinutes()
    sec = date.getSeconds();
    document.getElementById("hourr").innerHTML = hours + ":";
    document.getElementById("minute").innerHTML = min +  ":";
    document.getElementById("seconds").innerHTML = sec;
    var t = setTimeout(function(){ time() }, 1000); /* setting timer */
}


function greet(){
    var greet = "";
    const Time ={ morning:"maakye in Twi\nbueno diaz in Spanish\nGoodMorning in English",
                  afternoon:"maaha in Twi\nbuenas tardes in Spanish\nGoodAfternoon in English",
                  evening:"maadwo in Twi\nbuena noches in Spanish\nGoodEvening in English"
    } ;
    for(const time in Time){
        console.log(Time[time])
    }

//     console.log(Time);  
//     for(let i=0; i <= Time.length; i++){           
//         if(hours < 12){ 
//             greet += Time[i];              
//          document.getElementById("display").innerHTML  = greet;
//     }else if (hours > 12 && hours < 6){        
//          document.getElementById("display").innerHTML = b4Noon.afternoon ;
//     }else {document.getElementById("display").innerHTML = b4Noon.evening};
// }
}

btn.addEventListener("click", greet);
time();









