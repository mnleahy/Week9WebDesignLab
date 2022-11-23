/*
script.js
N Leahy
21 Nov 22
Questions 1 and 2
*/

// Question 1: Create a web page that prints all of the lyrics to '99 bottles of beer'

function beerWallLyrics(){
    for(i=99;i>=1;i=i-1){
        document.getElementById("bottles").innerHTML+=i+" bottles of beer on the wall, "+i+" bottles of beer! Take one down, pass it around, "+[i-1]+" bottles of beer on the wall!<br>";
    }
    document.getElementById("bottles").innerHTML+="No bottles of beer on the wall, no bottles of beer, go to the store and buy some more, 99 bottles of beer on the wall.";
}


/* Question 2: Q2: Take the previously created Rock Paper Scissors application and allow the user to play 3 times.
Bonus: The game should stop if the user wins
Bonus: The computer should change their guess each time
*/

function check(){
    var userPick = document.querySelector('input[name="game"]:checked').value;
    var compPick = Math.floor(Math.random() * 3)+1;
    console.log(compPick);


    for(i=0;i<3;i=i+1){
        if(userPick==compPick){
            document.getElementById("rps").innerHTML="Computer picked no."+compPick+", you draw.";
        }
        //user picks rock
        else if(userPick==1){
            if(compPick==2){
                document.getElementById("rps").innerHTML="Computer picked number "+compPick+", you lose.";
            }
            else{
                document.getElementById("rps").innerHTML="Computer picked number "+compPick+", you win. The game stops.";
                hide();
            }
        }
        //user picks paper
        else if(userPick==2){
            if(compPick==3){
                document.getElementById("rps").innerHTML="Computer picked number "+compPick+", you lose.";
            }
            else{
                document.getElementById("rps").innerHTML="Computer picked number "+compPick+", you win. The game stops.";
                hide();
            }
        }
        //user picks scissors
        else if(userPick==3){
            if(compPick==1){
                document.getElementById("rps").innerHTML="Computer picked number "+compPick+", you lose.";
            }
            else{
                document.getElementById("rps").innerHTML="Computer picked number "+compPick+", you win. The game stops.";
                hide();
            }
        }
    }
}

function hide(){
    document.getElementById("rpsform").style.display="none";
}

