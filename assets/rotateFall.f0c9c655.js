import{_ as a}from"./index.1fb66ddd.js";const r=async()=>{let e=document.getElementById("homepage");document.getElementById("lobby").innerHTML=await(await a(()=>import("./index.1fb66ddd.js").then(t=>t.L),["assets/index.1fb66ddd.js","assets/index.e01fc8ab.css"])).default.render(),e.classList.add("pt-page","pt-page-current","pt-page-ontop","pt-page-rotateFall"),await o(1500),location.hash="#lobby"};let o=e=>new Promise(t=>{setTimeout(()=>{t()},e)});export{r as default};