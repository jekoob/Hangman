
let words=[{word:"usability",hint:"Testing that checks if the user interface is easy to use and understand"},
           {word:"regressing",hint:"Testing which verifies that software previously developed and tested still performs correctly after it was changed or interfaced with other software."},
           {word:"interface",hint:"Testing  that checks to evaluate whether systems or components pass data and control correctly to one another"},
           {word:"Love",hint:"This is the most vital reason for the existence of humanity"}];
let infoText="This is a fun game where you are supposed to discover the hidden word. during the game you have 5 attempts to guess the correct letters in the word. but not everything is that simple there is a man up to you.Every mistake you make, bringing him to hanging death, you have only 5 mistakes to save him<br><br><span id='note'>NOTE : </span>After 3 mistakes you have the option to use the hint button that will appear on the screen.<br><br>The vocabulary is from the QA world  ";
let chosenWord=words[Math.floor(Math.random()*words.length)];
let miss=0;
let lost = chosenWord.word.length;
let myRight=[];
function refresh(){
    window.location.reload();
};

function back(){
    
    document.getElementById("reviewBox").remove();
    document.getElementById("info-btn").setAttribute("onclick","infoBtn()")
};

function infoBtn(){
    let game = document.getElementById("game");

   /* closeIcon = document.createElement("i");
    closeIcon.setAttribute("class","fa fa-times");
    document.getElementById("game").appendChild(closeIcon);*/

    let reviewBox = document.createElement("div");
    reviewBox.setAttribute("id","reviewBox");
    game.appendChild(reviewBox);
    document.getElementsByClassName("fa-info-circle")[0].removeAttribute("onclick");


    
    //create close-btn and add to review-box 
    closeBtn = document.createElement("div");
    closeBtn.setAttribute("id","close-btn");
    closeBtn.setAttribute("onclick","back()");
    document.getElementById("reviewBox").appendChild(closeBtn);

    //create icon close and add to close-btn
    closeIcon = document.createElement("i");
    closeIcon.setAttribute("class","fa fa-times");
    document.getElementById("close-btn").appendChild(closeIcon);
    
    //create a paragraph add to review-box
    reviewParagraph = document.createElement("p");
    reviewParagraph.setAttribute("id","info-pa");
    document.getElementById("reviewBox").appendChild(reviewParagraph);
    document.getElementById("info-pa").innerHTML=infoText;
};


function returnBtn(){
    let game = document.getElementById("game");
    let returnBtn = document.createElement("div");
    returnBtn.setAttribute("id","returnBtn");
    game.appendChild(returnBtn);
    let returnIcon = document.createElement("i");
    returnIcon.setAttribute("class","fa fa-undo");
    returnIcon.setAttribute("aria-hidden","true");
    returnIcon.setAttribute("onclick","refresh()");
    document.getElementById("returnBtn").appendChild(returnIcon);

};

//Align the row of deleted char from the keybord.
function alingRow(element){
    let tr=document.getElementById(element).parentElement;
    document.getElementById(element.toUpperCase()).remove();
    let childsCounter =tr.childElementCount;
    console.log(childsCounter);
    childsCounter=30*(9-childsCounter)+"px";
    tr.style.marginLeft=childsCounter;
    tr.style.marginRight=childsCounter;
}

function hint(){
    let arrOFsameChar=[];

    // check it there is the same char in the chosen word.
    for(i=0;i<chosenWord.word.length;i++){
        for(j=0;j<chosenWord.word.length;j++){
            if(chosenWord.word[i]==chosenWord.word[j] && i!=j){
                for(k=0;k<2;k++){
                    arrOFsameChar[k]=chosenWord.word[i];
                }
            }
        }
    }


    console.log("check 3 : "+arrOFsameChar.length + arrOFsameChar);

    // If there is the same char in the chosen word,it checks if the user have already guessed it.
    if(arrOFsameChar.length!=0){


                for(j=0;j<myRight.length;j++){
                    for(k=0;k<arrOFsameChar.length;k++){
                        if(myRight[j]==arrOFsameChar[k] && arrOFsameChar[1] == arrOFsameChar[0]){
                            arrOFsameChar=[];
                        }
                    }
                }
                console.log(myRight);
                console.log("check 4 : " + arrOFsameChar.length);
    }

    // it works if the user still not guess the twise-char.
    if(arrOFsameChar.length!=0){
        for(i=0;i<chosenWord.word.length;i++){
            if(arrOFsameChar[0]==chosenWord.word[i] && arrOFsameChar[0] == arrOFsameChar[1] ){
             document.getElementsByTagName("td")[i].innerHTML=chosenWord.word[i].toUpperCase();
            
            }
       }

       
        //Align the row of deleted char from the keybord.
        alingRow(arrOFsameChar[0].toUpperCase());
    }

    // It works noly if the user have gueseed the char.
    else{
        let lettter; // Pointing the position of ungueseed char int the chosen word
        let count=0;
       
        do {
            lettter = Math.floor(chosenWord.word.length*Math.random());
            console.log(lettter);
            count++;
        }
        while (myRight.indexOf(chosenWord.word[lettter]) !=-1 && lost != 0);//This condition for finding an unguessed char in the chosen word.
        
        alingRow(chosenWord.word[lettter].toUpperCase());
         document.getElementsByTagName("td")[lettter].innerHTML=chosenWord.word[lettter].toUpperCase();
         for(i=0;i<chosenWord.word.length;i++){
             if(chosenWord.word[lettter] == chosenWord.word[i] && lettter!= i ){
                document.getElementsByTagName("td")[i].innerHTML=chosenWord.word[i].toUpperCase();
             }
         }
        // document.getElementById(chosenWord.word[lettter].toUpperCase()).remove();
         console.log("check 5 "+count +arrOFsameChar);
    }
    document.getElementById("hint").style.opacity=0;
    document.getElementById("hint").removeAttribute("onclick");
    setTimeout(() => {
        document.getElementById("hint").remove();
   }, 1200);   
};

function keyword(){
    document.getElementById("keyWord").style.border="2px solid white";
    let keyWord=document.getElementById("keyWord");
     let cover=document.createElement("div");
         cover.setAttribute("id","cover");
         cover.style.zIndex=-1;
         cover.style.transition="1s opacity"
         keyWord.appendChild(cover);
          
let asciiLetter =65;
document.getElementById("keyWord").style.opacity=1;
for(let i=1;i<4;i++){
    for(let j=0;j<9;j++){
        if(i===1 && j<8){
            
                let td=document.createElement("td");
                td.setAttribute("class","letter");
                td.setAttribute("id",String.fromCharCode(asciiLetter));
                td.setAttribute("onclick","compare(this.id)");

                let keyWord=document.getElementsByTagName("tr")[i];
                keyWord.style.marginLeft="30px";
                keyWord.style.marginRight="30px";
                keyWord.appendChild(td);
                td.innerHTML=String.fromCharCode(asciiLetter);
                asciiLetter++;
            
        }
        if(i!==1){
                let td=document.createElement("td");
                td.setAttribute("class","letter");
                td.setAttribute("id",String.fromCharCode(asciiLetter));
                td.setAttribute("onclick","compare(this.id)");
                let keyWord=document.getElementsByTagName("tr")[i];
                keyWord.appendChild(td);
                td.innerHTML=String.fromCharCode(asciiLetter);
                asciiLetter++;
        }
    }
    
}
};
function drawHang(canvas,ctx){
    let i=1;
    ctx.strokeStyle="white";
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(0,canvas.height-10);

    let interval = setInterval(function(){
        if(i<50){
        ctx.lineTo(i,canvas.height-10);
        ctx.stroke();
        i++;
        }

       if(i>49  && i<170){
               if(i==50){
               ctx.moveTo(50,canvas.height-10);
             }
            ctx.lineTo(50,canvas.height-10-i+50);
            ctx.stroke();
            i++;
        }
        if(i>169&&i<270){
            if(i===170){
            ctx.moveTo(50,canvas.height-128);
            }
            ctx.lineTo(i-120,canvas.height-128);
            ctx.stroke();
            i++;
        }

        if(i>269&&i<280){
            if(i===270){
            ctx.moveTo(149,canvas.height-128);
            }
            ctx.lineTo(149,canvas.height-128+i-269);
            ctx.stroke();
            i++;
        }
       if(i>279&&i<365){
           if(i===280){
            ctx.moveTo(148,canvas.height-118);
        }	
            ctx.lineTo(148-i+279,canvas.height-118);
            ctx.stroke();
            i++;
        }

      if(i>364&&i<473){
           if(i===365){
            ctx.moveTo(62,canvas.height-118);
        }	
            ctx.lineTo(62,canvas.height-118+i-364);
            ctx.stroke();
            i++;
        }
       if(i>472&&i<673){
           if(i===473){
            ctx.moveTo(62,canvas.height-10);
        }	
            ctx.lineTo(62+i-472,canvas.height-10);
            ctx.stroke();
            i++;
        }
       if(i>672&&i<700){
               if(i===673){
                   ctx.moveTo(140,canvas.height-118);
               }
               ctx.lineTo(140,canvas.height-118+i-673);
            ctx.stroke();
            i++;
       }

       if(i===700){
            clearInterval(interval);
            console.log(canvas.height);	
            keyword();
            p1=document.getElementById("p1");
            p1.innerHTML=chosenWord.hint;
            p1.style="opacity:0.8";
        }
    },1);

 }
 function drawThemissingLetter(id){
     
     if(miss===1){
         ctx.fillStyle="white";
        ctx.font = "13px Arial";
        ctx.fillText(id, 250, 66);
        let i=0;
        let inter=setInterval(function(){

                    ctx.strokeStyle="white";
                    if(i===0){
                    ctx.beginPath();
                    ctx.moveTo(264,60);
                    }
                    if(i<18){
                        ctx.lineTo(264-i,60);
                        ctx.stroke();
                        console.log(id);
                        i++;
                     }
                     if(i>=18&&i<30){
                         if(i==18){
                         ctx.beginPath();
                         ctx.moveTo(128,canvas.height-30);
                        }
                        ctx.lineTo(128+(i-18),canvas.height-30-(i-18)*1.6);
                        ctx.stroke();
                        console.log(id);
                        i++;
                     }
                     if(i>=30&&i<42){
                         if(i===30){
                             ctx.moveTo(139,canvas.height-48.5);
                         }
                        ctx.lineTo(139+(i-30),canvas.height-48.5+(i-30)*1.6);
                        ctx.stroke();
                        i++;
                     }
                     if(i===42){
                         clearInterval(inter);
                         document.getElementById("cover").style.zIndex=-1;
                     }
            },50);

     }
     if(miss===2){
         ctx.fillStyle="white";
        ctx.font = "13px Arial";
        ctx.fillText(id, 250, 82);
        console.log(id);
        let i=0;
        let inter=setInterval(function(){

                    ctx.strokeStyle="white";
                    if(i===0){
                    ctx.beginPath();
                    ctx.moveTo(264,76);
                    }
                    if(i<18){
                        ctx.lineTo(264-i,76);
                        ctx.stroke();
                        console.log(id);
                        i++;
                     }
                     if(i>=18&&i<44){
                         if(i===18){
                             ctx.beginPath();
                             ctx.moveTo(139,canvas.height-46);
                             ctx.lineWidth=3;
                         }
                         ctx.lineTo(139,canvas.height-46-i+18);
                         ctx.stroke();
                         i++;
                     }
                     if(i===44){
                         clearInterval(inter);
                         ctx.lineWidth=2;
                         document.getElementById("cover").style.zIndex=-1;
                     }
            },50);


     }

     if(miss===3){
         ctx.fillStyle="white";
        ctx.font = "13px Arial";
        ctx.fillText(id, 250, 98);
        let i=0;
        let inter=setInterval(function(){
                    if(i===0){
                    ctx.strokeStyle="white";
                    ctx.beginPath();
                    ctx.moveTo(264,92);
                    }
                    if(i<18){
                        ctx.lineTo(264-i,92);
                        ctx.stroke();
                        console.log(id);
                        i++;
                     }
                    if(i>=18 && i<30){
                        if(i===18){
                            ctx.beginPath();
                            ctx.moveTo(128,canvas.height-56.8);
                        }
                        ctx.lineTo(128+(i-18),canvas.height-56.8-(i-18));
                        ctx.stroke();
                        i++;
                    }
                    if(i>=30 && i< 43){
                        if(i===30){
                            ctx.beginPath();
                            ctx.moveTo(139,canvas.height-68.8);
                        }
                        ctx.lineTo(139+(i-30),canvas.height-68.8+(i-30));
                        ctx.stroke();
                        i++;
                    }
                     if(i===43){
                         clearInterval(inter);
                         document.getElementById("cover").style.zIndex=-1;
                     }
            },50);			
            let counter=0;
            document.getElementById("hint").style.opacity=1;
            document.getElementById("hint").style.cursor="pointer";
            document.getElementById("hint").setAttribute("onclick","hint()");
        }
     if(miss===4){
         ctx.fillStyle="white";
        ctx.font = "13px Arial";
        ctx.fillText(id, 250, 114);
        console.log(id);
        let i=0;
        let inter=setInterval(function(){
                    if(i===0){
                    ctx.strokeStyle="white";
                    ctx.beginPath();
                    ctx.moveTo(264,108);
                    }
                    if(i<18){
                        ctx.lineTo(264-i,108);
                        ctx.stroke();
                        console.log(id);
                        i++;
                     }
                         if(i===18){
                         ctx.beginPath();
                         ctx.arc(140,70,10,0,Math.PI*(2*i*0.1));
                         ctx.stroke();
                         i++;
                         clearInterval(inter);
                         document.getElementById("cover").style.zIndex=-1;
                        }
                     

            },50);	

     }

    if(miss===5){
         ctx.fillStyle="white";
        ctx.font = "13px Arial";
        ctx.fillText(id, 250, 130);
        let i=0;
        let inter=setInterval(function(){
                    if(i===0){
                    ctx.strokeStyle="white";
                    ctx.beginPath();
                    ctx.moveTo(264,124);
                    }
                    if(i<18){
                        ctx.lineTo(264-i,124);
                        ctx.stroke();
                        console.log(id);
                        i++;
                     }

                     if(i===18){
                         ctx.fillStyle="white";
                        ctx.font = "9px Arial";
                        ctx.fillText("x", 134, 70);
                        ctx.fillText("x", 142, 70);
                         clearInterval(inter);
                         let div =document.getElementById("game");
                         let h2=document.createElement("h2");
                         h2.setAttribute("id","gameOver");
                         h2.innerHTML="Game over";
                         div.appendChild(h2);
                         
                         let counter=0;
                         let setI=setInterval(function(){
                        counter+=0.1;
                        h2.style="opacity:"+counter;
                        if(counter>1){
                            clearInterval(setI);
                        }
                       
                },100);
                setTimeout(() => {
                    returnBtn();
                }, 1000);
                
                        
                     }

        },50);

        console.log(id);
        document.getElementById("keyWord").remove();
      
     }
 }



//Tracking string.
for(let i=0;i<chosenWord.word.length;i++){
    let td=document.createElement("td");
    td.setAttribute("class","theLetter");
    let theWord=document.getElementsByTagName("tr")[0];
    theWord.appendChild(td);
    //document.getElementsByClassName("theLetter")[i].style.fontSize=0;
    //document.getElementsByTagName("td")[i].innerHTML=chosenWord.word[i].toUpperCase();

    //adding an hint lamp at the end of the string.
    if(i+1==chosenWord.word.length){
        let mainBox = document.getElementsByTagName("tr")[0];
        let hint = document.createElement("td");
        hint.setAttribute("id","hint");
        mainBox.appendChild(hint);
        
        let lightIcon = document.createElement("i");
        lightIcon.setAttribute("class","far fa-lightbulb");
        document.getElementById("hint").appendChild(lightIcon);
          
    }
}

function compare(id){

    let count=0;
    alingRow(id);
    for(let i=0;i<chosenWord.word.length;i++){
        if(id===chosenWord.word[i].toUpperCase()){
            //console.log(document.getElementsByTagName("td").length);
            myRight[myRight.length]=chosenWord.word[i];
           document.getElementsByTagName("td")[i].innerHTML=chosenWord.word[i].toUpperCase();
            lost--;
           // levelUp();
            document.getElementById("cover").style.zIndex=1;
            setTimeout(function(){
                if(lost!==0){
                document.getElementById("cover").style.zIndex=-1
               };
            },1000);
            if(lost===0){
                        document.getElementById("keyWord").remove();
                        
                        let div=document.getElementById("game");
                         let h2=document.createElement("h2");
                         h2.setAttribute("id","win");
                         h2.innerHTML="You win";
                         div.appendChild(h2);
                         let counter=0;
                         let setI=setInterval(function(){
                            counter+=0.1;
                            h2.style="opacity:"+counter;
                            if(counter>1){
                                
                                clearInterval(setI);
                                
                            }
                            
                           
                        },100);
                        setTimeout(() => {
                            returnBtn();
                        }, 1000);
            }
        }
        else{
            count++;
        }
        if(count===chosenWord.word.length){
            miss++;
         //   clickLetter();
            document.getElementById("cover").style.zIndex=2;
            drawThemissingLetter(id);
        }

    }

}

let canvas=document.getElementById("canvas");
let ctx =canvas.getContext("2d");
drawHang(canvas,ctx);


