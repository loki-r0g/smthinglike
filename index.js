let alpha=0X1F600;

function togglefunc(event){
var x = document.getElementById("mydiv");
var ax= event.offsetX;
var ay= event.offsetY;

console.log(ax ,ay)

var tex = document.getElementById("myText");
tex.innerHTML = String.fromCodePoint(`${alpha}`);
// tex.innerText = `${alpha}`;
tex.style.margin = `${ay}px 0px 0px ${ax}px`  ;
// tex.style.margin = `${ay}px`;
alpha+=1;
if(alpha==0X1F648){alpha=0X1F600}
}

var body= document.getElementById("bdy");


function ryt(event){
            //  this.stopPropagation();
            if (event.currentTarget !== event.target) {
               return; // clicked a sub-element
             }
             var sites=[
                "https://youtu.be/5VAznIsh9es" ,//vs42
                "https://youtu.be/6zoD2FNvCIo",//main bola hey
                "https://youtu.be/GxldQ9eX2wo",//until i found you
                "https://youtu.be/nLnp0tpZ0ok",//make you mine
                "https://youtu.be/sFMRqxCexDk",//aalas
                "https://youtu.be/PyfihxeFE14",//Glimpse
                "https://youtu.be/DqgK4llE1cw",//fire again
                "https://youtu.be/h7MYJghRWt0",//die for you   
                "https://youtu.be/SlHnlxDt2TQ",//man mera
                "https://youtu.be/qR6dzwQahOM",//L
                "https://youtu.be/fPO76Jlnz6c",//gansta paradise

               
               ];

             var r = Math.random() * sites.length;
             var r = parseInt(r,10);
            //  console.log(r);    
             window.open( ` ${sites[r]}` );


   }

