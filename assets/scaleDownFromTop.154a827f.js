import{_ as o}from"./index.1fb66ddd.js";const n=(t,a)=>{const r=t[a];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((s,e)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+a)))})},m=async t=>{let a=document.getElementById("lobbypage");const r=document.getElementById(t);let s=(await n(Object.assign({"../pages/Categories.js":()=>o(()=>import("./index.1fb66ddd.js").then(e=>e.C),["assets/index.1fb66ddd.js","assets/index.e01fc8ab.css"]),"../pages/Home.js":()=>o(()=>import("./index.1fb66ddd.js").then(e=>e.H),["assets/index.1fb66ddd.js","assets/index.e01fc8ab.css"]),"../pages/Levels.js":()=>o(()=>import("./index.1fb66ddd.js").then(e=>e.a),["assets/index.1fb66ddd.js","assets/index.e01fc8ab.css"]),"../pages/Lobby.js":()=>o(()=>import("./index.1fb66ddd.js").then(e=>e.L),["assets/index.1fb66ddd.js","assets/index.e01fc8ab.css"]),"../pages/NbQuestions.js":()=>o(()=>import("./index.1fb66ddd.js").then(e=>e.N),["assets/index.1fb66ddd.js","assets/index.e01fc8ab.css"]),"../pages/Questions.js":()=>o(()=>import("./index.1fb66ddd.js").then(e=>e.Q),["assets/index.1fb66ddd.js","assets/index.e01fc8ab.css"]),"../pages/Result.js":()=>o(()=>import("./index.1fb66ddd.js").then(e=>e.R),["assets/index.1fb66ddd.js","assets/index.e01fc8ab.css"]),"../pages/Timer.js":()=>o(()=>import("./index.1fb66ddd.js").then(e=>e.T),["assets/index.1fb66ddd.js","assets/index.e01fc8ab.css"])}),`../pages/${p(t)}.js`)).default;r.innerHTML=await s.render(),await s.after_render(),a.classList.add("pt-page","pt-page-current","pt-page-ontop","pt-page-scaleDown"),r.classList.add("pt-page-moveFromBottom","pt-page","pt-page-current","pt-page-ontop"),await i(1e3)};let i=t=>new Promise(a=>{setTimeout(()=>{a()},t)}),p=t=>t.charAt(0).toUpperCase()+t.slice(1);export{m as default};
