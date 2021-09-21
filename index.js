let reviewBtn=document.getElementById("review-btn");
let infoText="This is a fun game where you are supposed to discover the hidden word. during the game you have 5 attempts to guess the correct letters in the word. but not everything is that simple there is a man up to you.Every mistake you make, bringing him to hanging death, you have only 5 mistakes to save him<br><br><span id='note'>NOTE : </span>After 3 mistakes you have the option to use the hint button that will appear on the screen.<br><br>The vocabulary is from the QA world  ";
reviewBtn.setAttribute("onclick","review()");
function back(){
    
    document.getElementById("reviewBox").remove();
};


function review(){

    // create review-box for info link at main element
    let menu= document.getElementById("main");
    let reviewBox = document.createElement("div");
    reviewBox.setAttribute("id","reviewBox");
    menu.appendChild(reviewBox);
    
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

    //delay for create gradual opacity
   setTimeout(() => {
    document.getElementById("reviewBox").style.opacity=1;
   }, 100);
}
