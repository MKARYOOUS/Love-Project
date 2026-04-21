// قلوب متحركة
for(let i=0;i<25;i++){
    let h=document.createElement("div");
    h.className="heart-bg";
    h.style.left=Math.random()*100+"%";
    h.style.fontSize=(10+Math.random()*30)+"px";
    h.style.animationDuration=(3+Math.random()*5)+"s";
    h.innerHTML="❤️";
    document.getElementById("hearts").appendChild(h);
}

// التنقل
function goToScreen2(){
    document.getElementById("screen1").classList.remove("active");
    document.getElementById("screen2").classList.add("active");
    typeText("text1","Mariam Is My Queen ❤️👑");
}

function goToScreen3(){
    document.getElementById("screen2").classList.remove("active");
    document.getElementById("screen3").classList.add("active");
    typeText("text2","مني نجفة 😂😂");
}

// كتابة تدريجية
function typeText(id, text){
    let i=0;
    let el=document.getElementById(id);
    el.innerHTML="";

    function typing(){
        if(i<text.length){
            el.innerHTML+=text.charAt(i);
            i++;
            setTimeout(typing,120); // أبطأ
        }
    }
    typing();
}