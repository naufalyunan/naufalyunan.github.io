

let board=document.getElementById('boundary');
board.style.zIndex=1;
let kotak;
let tulisan;
let baris;
let tulisanBaris;
let musuh1;
let musuh2;
let musuh3;
let musuh4;
let lokasiBarisMusuh1=Math.ceil(Math.random()*10);
let lokasiKolomMusuh1=Math.ceil(Math.random()*10);
let lokasiBarisMusuh2=Math.ceil(Math.random()*8);
let lokasiKolomMusuh2=Math.ceil(Math.random()*10);
let lokasiBarisMusuh3=Math.ceil(Math.random()*6);
let lokasiKolomMusuh3=Math.ceil(Math.random()*10);
let lokasiBarisMusuh4=Math.ceil(Math.random()*4);
let lokasiKolomMusuh4=Math.ceil(Math.random()*10);
//NGEBUAT BARIS
for (let i = 1; i <= 10; i++) {
    baris=document.createElement('div');
    board.appendChild(baris);
    baris.classList.add('row');
    for (let j = 1; j <= 10; j++) {
        kotak=document.createElement('div');
        tulisan=document.createTextNode(`(${i})   ,  (${j})`);
        baris.appendChild(kotak);
        kotak.classList.add('cell');
        if (i===1 &&j===1) {
            kotak.setAttribute('id','end')
            // kotak.classList.replace('cell','utama');
        }else if (i===10&&j===10) {
            kotak.setAttribute('id','start')
        }else if (i===lokasiBarisMusuh1 && j===lokasiKolomMusuh1) {
            kotak.setAttribute('id','musuh1')
        }else if (i===lokasiBarisMusuh2 && j===lokasiKolomMusuh2) {
            kotak.setAttribute('id','musuh2')
        }else if (i===lokasiBarisMusuh3 && j===lokasiKolomMusuh3) {
            kotak.setAttribute('id','musuh3')
        }else if (i===lokasiBarisMusuh4 && j===lokasiKolomMusuh4) {
            kotak.setAttribute('id','musuh4')
        }
    }
}

let sel=document.getElementsByClassName('cell');
let brs=document.getElementsByClassName('row');
//atur baris
for (let l = 0; l < brs.length; l++) {
    // brs[l].style.border='1px solid red';
    brs[l].style.height='10%';
    brs[l].style.width='100%';
    brs[l].style.display='block';
    brs[l].style.zIndex=2;
}
//atur kotak
for (let k = 0; k < sel.length; k++) {
    
    // sel[k].style.border='1px solid black';
    sel[k].style.margin='0px';
    sel[k].style.padding='0px';
    sel[k].style.height='100%';
    sel[k].style.width='10%';
    sel[k].style.display='inline-block';  
    sel[k].style.zIndex=3; 
    // sel[k].style.backgroundColor='red' 
}


let end=document.getElementById('end');
end.style.backgroundImage='url("./img/bgrfinish.jpg")';
end.style.backgroundSize='cover';
end.style.opacity='0.5';
end.style.borderRadius='10px';
musuh1=document.getElementById('musuh1');
musuh2=document.getElementById('musuh2');
musuh3=document.getElementById('musuh3');
musuh4=document.getElementById('musuh4');

let divButton=document.getElementById('forButton');
let BarisMusuh1;
let KolomMusuh1;
let BarisMusuh2;
let KolomMusuh2;
let BarisMusuh3;
let KolomMusuh3;
let BarisMusuh4;
let KolomMusuh4;
if (musuh1!==null) {
    musuh1.style.backgroundImage='url(./img/Westerling.jpg)';
    musuh1.style.borderRadius='100px';
    musuh1.style.borderStyle='solid';
    musuh1.style.borderWidth='2px';
    musuh1.style.borderColor='red white blue'
    musuh1.style.backgroundSize='cover';
    musuh1.style.position='absolute';
    musuh1.style.margin='0px';
    musuh1.style.padding='0px';
    musuh1.style.height='10%';
    musuh1.style.width='10%';
    //buat mekanik musuh1
    let parMusuh1=document.createElement('p');
    let buttonMusuh1=document.createElement('button');
    let textButtonMusuh1=document.createTextNode('Click to move Westerling Bot');
    buttonMusuh1.appendChild(textButtonMusuh1)
    parMusuh1.appendChild(buttonMusuh1);
    divButton.appendChild(parMusuh1);
    buttonMusuh1.setAttribute('onclick','gerakMusuh1()');
    buttonMusuh1.style.position='relative';
    buttonMusuh1.style.display='flex';
    buttonMusuh1.style.zIndex=5;
    buttonMusuh1.style.width='100px';
    buttonMusuh1.style.height='50px';
    buttonMusuh1.style.borderRadius='10px';
    buttonMusuh1.style.padding='10px';
    buttonMusuh1.style.margin='0px 30px 0px 30px';
    
    function gerakMusuh1() {
        let elemen = document.getElementById("musuh1");   
        let kolom= lokasiKolomMusuh1*65-65;
        let posisi = lokasiBarisMusuh1*65-65;
        setInterval(frame,1);
        let kondisi=true;
        function frame() {
            if (posisi == 0) {
                // clearInterval(id);
                kondisi=false;
                // posisi == lokasiBarisMusuh1*65-(2*65)
            }
            if (kondisi===true) {
                posisi--; 
                elemen.style.top = posisi + "px"; 
                // elemen.style.left = posisi + "px"; 
            }
            if (posisi == 10*65-65) {
                // clearInterval(id);
                kondisi=true;
            }
            if (kondisi===false) {
                posisi++; 
                elemen.style.top = posisi + "px"; 
                // elemen.style.left = posisi + "px"; 
                // console.log(elemen);
            }
            BarisMusuh1=posisi;
            KolomMusuh1=kolom;
        }
    }
}
if (musuh2!==null) {
    musuh2.style.backgroundImage='url(./img/Daendels.jpg)';
    musuh2.style.backgroundSize='cover';
    musuh2.style.borderStyle='solid';
    musuh2.style.borderWidth='2px';
    musuh2.style.borderColor='red white blue'
    musuh2.style.borderRadius='100px';
    musuh2.style.position='absolute';
    musuh2.style.margin='0px';
    musuh2.style.padding='0px';
    musuh2.style.height='10%';
    musuh2.style.width='10%';
    //Buat Mekanik Musuh 2
    let parMusuh2=document.createElement('p');
    let buttonMusuh2=document.createElement('button');
    let textButtonMusuh2=document.createTextNode('Click to move Daendels Bot');
    buttonMusuh2.appendChild(textButtonMusuh2)
    parMusuh2.appendChild(buttonMusuh2);
    divButton.appendChild(parMusuh2);
    buttonMusuh2.setAttribute('onclick','gerakMusuh2()');
    buttonMusuh2.style.position='relative';
    buttonMusuh2.style.display='flex';
    buttonMusuh2.style.zIndex=5;
    buttonMusuh2.style.width='100px';
    buttonMusuh2.style.height='50px';
    buttonMusuh2.style.borderRadius='10px';
    buttonMusuh2.style.padding='10px';
    buttonMusuh2.style.margin='0px 30px 0px 30px';
    
    function gerakMusuh2() {
      let elemen = document.getElementById("musuh2");  
      let baris= lokasiBarisMusuh2*65-65; 
      let posisi = lokasiKolomMusuh2*65-65;
      setInterval(frame, 1);
      let kondisi=true;
      function frame() {
      if (posisi == 0) {
          // clearInterval(id);
          kondisi=false;
      }
      if (kondisi===true) {
          posisi--; 
          elemen.style.left = posisi + "px"; 
          // elemen.style.left = posisi + "px"; 
      }
      if (posisi == 10*65-65) {
          // clearInterval(id);
          kondisi=true;
          posisi = 10*65-65;
      }
      if (kondisi===false) {
          posisi++; 
          elemen.style.left = posisi + "px"; 
          elemen.style.left = posisi + "px"; 
      }
      BarisMusuh2=baris;
      KolomMusuh2=posisi;
      }
    }
} 
if(musuh3!==null) {
    musuh3.style.backgroundImage='url(./img/Cornelis.jpg)';
    musuh3.style.backgroundSize='cover';
    musuh3.style.borderStyle='solid';
    musuh3.style.borderWidth='2px';
    musuh3.style.borderColor='red white blue'
    musuh3.style.borderRadius='100px';
    musuh3.style.position='absolute';
    musuh3.style.margin='0px';
    musuh3.style.padding='0px';
    musuh3.style.height='10%';
    musuh3.style.width='10%';
    //Buat Mekanik Musuh 3
    let parMusuh3=document.createElement('p');
    let buttonMusuh3=document.createElement('button');
    let textButtonMusuh3=document.createTextNode('Click to move Cornelis Bot');
    buttonMusuh3.appendChild(textButtonMusuh3)
    parMusuh3.appendChild(buttonMusuh3);
    divButton.appendChild(parMusuh3);
    buttonMusuh3.setAttribute('onclick','gerakMusuh3()');
    buttonMusuh3.style.position='relative';
    buttonMusuh3.style.display='flex';
    buttonMusuh3.style.zIndex=6;
    buttonMusuh3.style.width='100px';
    buttonMusuh3.style.height='50px';
    buttonMusuh3.style.borderRadius='10px';
    buttonMusuh3.style.padding='10px';
    buttonMusuh3.style.margin='0px 30px 0px 30px';
    function gerakMusuh3() {
        let elemen = document.getElementById("musuh3");   
        let kolom= lokasiKolomMusuh3*65-65;
        let posisi = lokasiBarisMusuh3*65-65;
        setInterval(frame, 1);
        let kondisi=true;
        function frame() {
            if (posisi == 0) {
                // clearInterval(id);
                kondisi=false;
            }
            if (kondisi===true) {
                posisi--; 
                elemen.style.top = posisi + "px"; 
                // elemen.style.left = posisi + "px"; 
            }
            if (posisi == 10*65-65) {
                // clearInterval(id);
                kondisi=true;
            }
            if (kondisi===false) {
                posisi++; 
                elemen.style.top = posisi + "px"; 
                // elemen.style.left = posisi + "px"; 
            }
            BarisMusuh3=posisi;
            KolomMusuh3=kolom;
        }
      }
}
if (musuh4!==null) {
    musuh4.style.backgroundImage='url(./img/Spoor.jpeg)';
    musuh4.style.borderRadius='100px';
    musuh4.style.borderStyle='solid';
    musuh4.style.borderWidth='2px';
    musuh4.style.borderColor='red white blue'
    musuh4.style.backgroundSize='cover';
    musuh4.style.position='absolute';
    musuh4.style.margin='0px';
    musuh4.style.padding='0px';
    musuh4.style.height='10%';
    musuh4.style.width='10%';
    //Buat Mekanik Musuh 4
    //Buat Mekanik Musuh 2
    let parMusuh4=document.createElement('p');
    let buttonMusuh4=document.createElement('button');
    let textButtonMusuh4=document.createTextNode('Click to move Spoor Bot');
    buttonMusuh4.appendChild(textButtonMusuh4)
    parMusuh4.appendChild(buttonMusuh4);
    divButton.appendChild(parMusuh4);
    buttonMusuh4.setAttribute('onclick','gerakMusuh4()');
    buttonMusuh4.style.position='relative';
    buttonMusuh4.style.display='flex';
    buttonMusuh4.style.zIndex=5;
    buttonMusuh4.style.width='100px';
    buttonMusuh4.style.height='50px';
    buttonMusuh4.style.borderRadius='10px';
    buttonMusuh4.style.padding='10px';
    buttonMusuh4.style.margin='0px 30px 0px 30px';
    function gerakMusuh4() {
      let elemen = document.getElementById("musuh4");   
      let baris= lokasiBarisMusuh4*65-65; 
      let posisi = lokasiKolomMusuh4*65-65;
      setInterval(frame, 1);
      let kondisi=true;
      function frame() {
      if (posisi == 0) {
          // clearInterval(id);
          kondisi=false;
      }
      if (kondisi===true) {
          posisi--; 
          elemen.style.left = posisi + "px"; 
          // elemen.style.left = posisi + "px"; 
      }
      if (posisi == 10*65-65) {
          // clearInterval(id);
          kondisi=true;
      }
      if (kondisi===false) {
          posisi++; 
          elemen.style.left = posisi + "px"; 
          // elemen.style.left = posisi + "px"; 
      }
      BarisMusuh4=baris;
      KolomMusuh4=posisi;
      }
    }
}

let semuaMusuh=document.createElement('p');
    let buttonsemuaMusuh=document.createElement('button');
    let textButtonSemuaMusuh=document.createTextNode('Click to move All Bot');
    buttonsemuaMusuh.appendChild(textButtonSemuaMusuh)
    semuaMusuh.appendChild(buttonsemuaMusuh);
    divButton.appendChild(semuaMusuh);
    buttonsemuaMusuh.setAttribute('onclick','gerakMusuh4(),gerakMusuh3(),gerakMusuh2(),gerakMusuh1(),startGameMusic()');
    buttonsemuaMusuh.style.position='relative';
    buttonsemuaMusuh.style.border='2px solid red';
    buttonsemuaMusuh.style.display='flex';
    buttonsemuaMusuh.style.zIndex=5;
    buttonsemuaMusuh.style.width='100px';
    buttonsemuaMusuh.style.height='50px';
    buttonsemuaMusuh.style.borderRadius='10px';
    buttonsemuaMusuh.style.padding='10px';
    buttonsemuaMusuh.style.margin='0px 30px 0px 30px';


//atur start dan end dan mekanik musuh
let start=document.getElementById('start');
start.style.backgroundImage='url(./img/JendSoedirman.jpg)';
start.style.borderRadius='100px';
start.style.backgroundSize='cover';
start.style.borderWidth='2px';
start.style.borderStyle='solid';
start.style.borderColor='white';
start.style.borderTopColor='red';
start.style.position='absolute';
start.style.height='10%';
start.style.width='10%';
//register arrowkey
let posisiJend=10*65-65;
let posisiJendHor=10*65-65;
let posisi;
function moveUp(){
    let elemen = document.getElementById("start");   
        let posisi = posisiJend;
        let id = setInterval(frame, 0.001);
        function frame() {
            if (posisi == posisiJend-65) {
                clearInterval(id);
                posisiJend=posisi;

            }else{
                posisi--; 
                elemen.style.top = posisi + "px"; 
                // elemen.style.left = posisi + "px"; 
            }
            
        
        }

}
function moveDown(){
    let elemen = document.getElementById("start");   
        let posisi = posisiJend;
        let id = setInterval(frame, 0.001);
        function frame() {
            if (posisi == posisiJend+65) {
                clearInterval(id);
                posisiJend=posisi;
    
            }else{
                posisi++; 
                elemen.style.top = posisi + "px"; 
                // elemen.style.left = posisi + "px"; 
            }
        }

}
function moveLeft(){
    let elemen = document.getElementById("start");   
        let posisi = posisiJendHor;
        let id = setInterval(frame, 0.001);
        let kondisi=true;
        function frame() {
            if (posisi == posisiJendHor-65) {
                clearInterval(id);
                posisiJendHor=posisi;
    
            }else{
                posisi--; 
                // elemen.style.top = posisi + "px"; 
                elemen.style.left = posisi + "px"; 
            }
        }

}
function moveRight(){
    let elemen = document.getElementById("start");   
        let posisi = posisiJendHor;
        let id = setInterval(frame, 0.001);
        function frame() {
            if (posisi == posisiJendHor+65) {
                clearInterval(id);
                posisiJendHor=posisi;
    
            }else{
                posisi++; 
                // elemen.style.top = posisi + "px"; 
                elemen.style.left = posisi + "px"; 
            }
        }

}
//cek menang
let countSteps=0;
document.onkeyup = function(e) {
    switch (e.keyCode) {
        case 37:
            if (posisiJendHor>0){ 
            moveLeft();
            countSteps++;
            }else{}
            // console.log(countSteps);
            break;
            case 38:
            if (posisiJend>0){
            moveUp();
            countSteps++;
            }else{}
            // console.log(countSteps);
            break;
            case 39:
            if (posisiJendHor<650-65){   
            moveRight();
            countSteps++;
            }else{}
            // console.log(countSteps);
            break;
            case 40:
            if (posisiJend<650-65){
            moveDown();
            countSteps++;
            }else{}
            // console.log(countSteps);
            break;
      
            }
            
        };


let cek= setInterval(checkWin,1);
function checkWin(){
    if (countSteps>50) {
        Lose();
        loseMusic();
    }
    if (posisiJend===0 && posisiJendHor===0) {
        modalWinner();
        winMusic();
        clearInterval(cek);
    }
    if (posisiJend===BarisMusuh1 && posisiJendHor===KolomMusuh1) {
        // alert('Jenderal terbunuh oleh Raymon Westerling')
        Lose();
        loseMusic();
    }
    if (posisiJend===BarisMusuh2 && posisiJendHor===KolomMusuh2) {
        // alert('Jenderal terbunuh oleh Daendels')
        Lose();
        loseMusic();
    }
    if (posisiJend===BarisMusuh3 && posisiJendHor===KolomMusuh3) {
        // alert('Jenderal terbunuh oleh Cornelis de Houtman')
        Lose();
        loseMusic();
    }
    if (posisiJend===BarisMusuh4 && posisiJendHor===KolomMusuh4) {
        // alert('Jenderal terbunuh oleh General Spoor')
        Lose();
        loseMusic();
    }
}
//tutup modal opening
function closeTelegram(){
    let modal=document.getElementById('modal')
    modal.style.display='none';
    // openingMusic.pause();
}

//mainkan musik pembuka dan mulaigame
let openingMusic=document.getElementById('openingMusic');
openingMusic.play();
function startGameMusic(){
    let trumpetStart=document.getElementById('startGameMusic');
    trumpetStart.play();
}
//mainkan musik kalah
function loseMusic(){
    let loseMusic=document.getElementById('musikKalah');
    loseMusic.src="./music/Gunshot.mp3"
    openingMusic.pause();
    loseMusic.play();
    
}
function loseMusicStop(){
    let loseMusic=document.getElementById('musikKalah');
    loseMusic.pause();
}
//mainkah musik kalah karena jumlah steps
function winMusic(){
    let winMusic=document.getElementById('winningMusic');
    openingMusic.pause();
    winMusic.play();
}
//tampilkan modal kalah
function Lose(){
    let modalKalah=document.getElementById('modalKalah')
    modalKalah.style.display='flex';
}
//tampilkan modal menang
function modalWinner(){
    let modalMenang=document.getElementById('modalMenang')
    modalMenang.style.display='flex';
}

function reset(){
    window.location.reload();
}
