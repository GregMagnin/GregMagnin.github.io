import{_ as a}from"./index.7ae50f2e.js";const l=async()=>{let e=document.getElementById("lobbypage");document.getElementById("timer").innerHTML=await(await a(()=>import("./index.7ae50f2e.js").then(t=>t.T),["assets/index.7ae50f2e.js","assets/index.e01fc8ab.css"])).default.render(),e.classList.add("pt-page","pt-page-current","pt-page-ontop","pt-page-rotateFall-left"),await o(1e3),location.hash="#timer"};let o=e=>new Promise(t=>{setTimeout(()=>{t()},e)});export{l as default};
