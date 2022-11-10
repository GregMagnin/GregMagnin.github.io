let o=document.getElementById("js-progress-bar"),r=document.getElementById("js-value-progress-bar"),t=parseInt(localStorage.getItem("number_good_answers")),s=parseInt(localStorage.getItem("questions")),l=document.getElementById("goodAnswer");l.innerText=localStorage.getItem("number_good_answers");let a=document.getElementById("nbOfQuestions");a.innerText=localStorage.getItem("questions");let e=0,g=Math.trunc(t/s*100),d=25;if(t>0){let n=setInterval(()=>{e++,r.textContent=`${e}%`,o.style.background=`conic-gradient(
            #ED8681 ${e*3.6}deg,
            #e0d3d5 ${e*3.6}deg
        )`,e==g&&clearInterval(n)},d)}
