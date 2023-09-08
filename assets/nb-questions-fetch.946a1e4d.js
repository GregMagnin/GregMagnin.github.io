let n=document.getElementById("nbquestion");n.addEventListener("click",async e=>{let t=e.target.value;localStorage.setItem("questions",t),document.location.href="#lobby",location.reload()});
