console.log("Welcome to Tic Tac Toe");

let music=new Audio("music.mp3");
let audioTurn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";  
//Function to change the turn

let isgameover=false;

const changeTurn=()=>{              //created a function
    return turn==="X"?"0":"X";
}

let seq=[];

//Function to check for a Win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    //boxtext will return array of 9 divs of our game
    let wins=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText !=='-' && (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText= boxtext[e[1]].innerText + " Won";
            isgameover=true;
            document.querySelector('.imagebox img').style.width="200px";
            let box=document.querySelectorAll('.box');
            // console.log(box);
            e.forEach(elem=>{
                box[elem].style.backgroundColor="orange";
            })
        }
        else
        {
            if(isgameover)
            {
                for(let i=0;i<9;i++)
                {
                    if(boxtext[i].innerText!=="X" && boxtext[i].innerText!=="0" )
                    {
                        boxtext[i].innerText='-';
                    }
                }
            }
        }
    })
}

if(isgameover)
{
    document.querySelector('.endmsg').innerText="game is over Restart to play again";
    
}

let boxes=document.querySelectorAll('.box');
boxes.forEach(function(e){
    e.addEventListener('click',()=>{
        let boxtext=e.querySelector('.boxtext');
        seq.push(e);
        // console.log(seq);
        if(seq.length>6 && (boxtext.innerText!=="X" && boxtext.innerText!=="0"))
        {
            let temp=seq.shift();
            // console.log(temp);
            temp.innerHTML = `<span class="boxtext"> </span>`;
            // console.log(temp);
        }
    })
})

//Game Logic
// let boxes=document.getElementsByClassName("box"); 
Array.from(boxes).forEach(element=>{
    // console.log(element); 
    element.addEventListener('click',()=>{
        let boxtext=element.querySelector('.boxtext');
        if(boxtext.innerText!=="X" && boxtext.innerText!=="0"){
            element.innerHTML = `<span class="boxtext">${turn}</span>`;
            console.log(element);
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }   
            // music.play();
        }
    })

})


let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText="";
    });

    let boxes=document.querySelectorAll('.box');
    boxes.forEach(e=>{
        e.style.removeProperty('background-color');
    })
    turn="X";
    isgameover=false;
    document.querySelector('.info').innerText="Turn For "+turn;
    document.querySelector('.imagebox img').style.width="0px";    
    seq=[];

})







