let t=document.getElementById("level");t.addEventListener("click",async e=>{let l=e.target.value;localStorage.setItem("level",l),document.location.href="#lobby",location.reload()});
