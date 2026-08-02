const tombol = document.getElementById("startBtn");

const music = document.getElementById("music");

const loading = document.querySelector(".loading-screen");

const welcome = document.getElementById("welcomePage");

const typing = document.getElementById("typing");

const message=document.getElementById("message");

const nextBtn=document.getElementById("nextBtn");

const text = "Hai Gidy...🤍";
const paragraf=

"kalau gidyy lagii bukaa halaman ini...<br><br>berarti hari ini tepat <b>9 bulan</b> gidyy bareng liaa.🤍";

let i = 0;

tombol.onclick = function(){

music.play();

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";

welcome.style.display="block";

typeWriter();

},1000);

}

function typeWriter(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,120);

}

else{

setTimeout(function(){

message.innerHTML=paragraf;

nextBtn.style.display="inline-block";

},800);

}

}

nextBtn.onclick=function(){

welcome.style.display="none";

galleryPage.style.display="flex";

showPhoto();

}

/* ===========================
   GALERI FOTO
=========================== */

const galleryPage = document.getElementById("galleryPage");

const galleryImage = document.getElementById("galleryImage");

const caption = document.getElementById("caption");

const photoNumber = document.getElementById("photoNumber");

const prevBtn = document.getElementById("prevBtn");

const nextPhotoBtn = document.getElementById("nextPhotoBtn");

const storyBtn=document.getElementById("storyBtn");

const timelinePage=document.getElementById("timelinePage");

const photos = [

"images/1.jpg",

"images/2.jpg",

"images/3.jpg",

"images/4.jpg",

"images/5.jpg"

];

const captions = [

"kiyowooo.🤍",

"temen hidup liaa",

"i love u.❤️",

"mancungkuuu.",

"I'll always choose you.🤍"

];

let currentPhoto = 0;

function showPhoto(){

galleryImage.style.opacity="0";

setTimeout(function(){

galleryImage.src=photos[currentPhoto];

galleryImage.style.animation="none";

setTimeout(function(){

galleryImage.style.animation="zoomPhoto 8s ease-in-out infinite";

},20);

caption.innerHTML=captions[currentPhoto];

photoNumber.innerHTML=currentPhoto+1;

galleryImage.style.opacity="1";

},300);

}

nextPhotoBtn.onclick=function(){

currentPhoto++;

if(currentPhoto>=photos.length){

currentPhoto=0;

}

showPhoto();

}

prevBtn.onclick=function(){

currentPhoto--;

if(currentPhoto<0){

currentPhoto=photos.length-1;

}

showPhoto();

}

setInterval(function(){

if(galleryPage.style.display=="flex"){

currentPhoto++;

if(currentPhoto>=photos.length){

currentPhoto=0;

}

showPhoto();

}

},4000);

/* ===== Falling Hearts ===== */

const hearts = document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("floating-heart");

heart.innerHTML="🤍";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,300);

/* ===========================
   SPARKLE MOUSE
=========================== */

document.addEventListener("mousemove",function(e){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=e.clientX+"px";

sparkle.style.top=e.clientY+"px";

document.body.appendChild(sparkle);

setTimeout(function(){

sparkle.remove();

},800);

});

storyBtn.onclick=function(){

galleryPage.style.display="none";

timelinePage.style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

}

const items=document.querySelectorAll(".timeline-item");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

items.forEach(item=>{

observer.observe(item);

});

const letterBtn=document.getElementById("letterBtn");

const letterPage=document.getElementById("letterPage");

letterBtn.onclick=function(){

timelinePage.style.display="none";

letterPage.style.display="flex";

}

const openLetter = document.getElementById("openLetter");

openLetter.onclick=function(){

openLetter.classList.add("open");

setTimeout(function(){

typeLetter();

},900);

setTimeout(function(){

const btn=document.createElement("button");

btn.innerHTML="Continue ❤️";

btn.style.marginTop="25px";

btn.onclick=function(){

letterPage.style.display="none";

reasonPage.style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

};

letterPaper.appendChild(btn);

},12000);

   document.querySelector(".flap").style.transform = "rotateX(180deg)";
   setTimeout(() => {
    document.querySelector(".flap").style.zIndex = "0";
}, 400);

}

const letterText=document.getElementById("letterText");

const fullLetter=`untuk gidyy🤍

makasii udaa jadi bagian
dari cerita liaa selama 9 bulan ini.
banyak hal yang udaa kita lewati,
mulai dari senang, sedih,
dan semua cerita kecil kita.

mungkin perjalanan kita belum sempurna.
masih ada salah paham.
masih ada tangisan.
tapi...
kalau disuruh mengulang semuanya lagi...
liaa tetap akan milih bertemu gidyy.

makasii udaa tetap ada
dan menjadi seseorang yang spesial
buat liaa. semoga perjalanan kita masih punya
banyak halaman indah berikutnya.

with love,
liaa🤍`;

function typeLetter(){

let i=0;

letterText.innerHTML="";

const typing=setInterval(function(){

letterText.innerHTML+=fullLetter.charAt(i);

i++;

if(i>=fullLetter.length){

clearInterval(typing);

}

},35);

}

const reasonPage=document.getElementById("reasonPage");
const gamePage = document.getElementById("gamePage");

const cards=document.querySelectorAll(".reason-card");

cards.forEach(card=>{

card.onclick=function(){

const text=this.querySelector("p");

text.style.display="block";

}

});

const finalCard = document.getElementById("finalCard");
const continueBtn = document.getElementById("continueBtn");

finalCard.addEventListener("click", function () {
    continueBtn.onclick = function(){

    reasonPage.style.display = "none";

    gamePage.style.display = "block";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

    document.querySelectorAll(".reason-card").forEach(card => {

        if (card !== finalCard) {
            card.style.opacity = "0";
            card.style.pointerEvents = "none";
        }

    });

    finalCard.classList.add("active");

    continueBtn.style.display = "inline-block";

});

continueBtn.onclick = function () {

    reasonPage.style.display = "none";

    gamePage.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

let totalHeart = 0;

const messages = [

"🤍 you are my favorite person.",

"🤍 mancungkuuu.",

"🤍 gidyy kiyowooo.",

"🤍 i loveee uuuu byy.",

"🤍 liaa sayang egidion.",

"🤍 kitaa bareng bareng terus ya.",

"🤍 temen hidup liaa.",

"🤍 tipe gidyy davina karamoy.",

"🤍 i love you more than words can say."

];

function findHeart(el){

if(el.classList.contains("found")) return;

el.classList.add("found");

alert(messages[totalHeart]);

totalHeart++;

document.getElementById("score").innerHTML = totalHeart + " / 9 ❤️";

if(totalHeart == 9){

document.getElementById("nextGameBtn").style.display = "inline-block";

}

}

const nextGameBtn = document.getElementById("nextGameBtn");
const countdownPage = document.getElementById("countdownPage");

nextGameBtn.onclick = function () {

    gamePage.style.display = "none";

    countdownPage.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

const targetDate = new Date("August 9, 2026 00:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

if(distance<=0){

document.getElementById("days").innerHTML=0;
document.getElementById("hours").innerHTML=0;
document.getElementById("minutes").innerHTML=0;
document.getElementById("seconds").innerHTML=0;

document.getElementById("lastBtn").style.display="inline-block";

}

},1000);

const endingPage = document.getElementById("endingPage");
const endingPhoto = document.getElementById("endingPhoto");
const endingTitle = document.getElementById("endingTitle");
const endingMessage = document.getElementById("endingMessage");
const replayBtn = document.getElementById("replayBtn");

const titleText = "Makasii 9 Bulan Ini Yaa Gidyy🤍";

const finalText = `
to my favorite person...
thank you for staying.
thank you for choosing me.
thank you for loving me.
thank you for being my safest place.
i hope this isn't only
9 months...
i hope one day...
we'll celebrate
forever.

with all my love,
liaaa🤍
`;

lastBtn.onclick=function(){

countdownPage.style.display="none";

endingPage.style.display="block";

setTimeout(function(){

endingPhoto.style.opacity="1";

endingPhoto.style.transform="scale(1)";

},500);

let i=0;

const typeTitle=setInterval(function(){

endingTitle.innerHTML+=titleText.charAt(i);

i++;

if(i>=titleText.length){

clearInterval(typeTitle);

let j=0;

const typeMessage=setInterval(function(){

endingMessage.innerHTML+=finalText.charAt(j);

j++;

if(j>=finalText.length){

    clearInterval(typeMessage);

    // ❤️ Bonus: hujan hati saat pesan selesai
    for(let i=0; i<80; i++){

        setTimeout(function(){

            createHeart();

        }, i*120);

    }

    replayBtn.style.display="inline-block";

}

},35);

}

},80);

}

replayBtn.onclick=function(){

location.reload();

}

function launchFireworks(){

const box=document.getElementById("fireworks");

for(let i=0;i<120;i++){

const dot=document.createElement("div");

dot.className="firework";

dot.style.left=(40+Math.random()*20)+"%";

dot.style.top=(20+Math.random()*25)+"%";

dot.style.setProperty("--x",(Math.random()*500-250)+"px");

dot.style.setProperty("--y",(Math.random()*500-250)+"px");

box.appendChild(dot);

setTimeout(()=>{

dot.remove();

},1500);

}

}

function shootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.left=Math.random()*30+"%";

star.style.top=Math.random()*20+"%";

document.getElementById("endingPage").appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

}

