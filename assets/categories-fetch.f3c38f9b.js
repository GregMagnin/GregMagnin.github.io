let a=document.getElementById("categories");a.addEventListener("click",async e=>{let t=e.target.value;localStorage.setItem("categorie",t),document.location.href="#lobby",location.reload()});
