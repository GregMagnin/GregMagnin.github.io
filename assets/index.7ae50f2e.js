(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const O="modulepreload",T=function(s){return"/"+s},p={},a=function(i,o,r){if(!o||o.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=T(e),e in p)return;p[e]=!0;const n=e.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(!!r)for(let c=t.length-1;c>=0;c--){const d=t[c];if(d.href===e&&(!n||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${u}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":O,n||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),n)return new Promise((c,d)=>{l.addEventListener("load",c),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i())},v={render:async()=>`
        <section class="homepage" id="homepage">
        <div class="square"></div>
        <div class="circle"></div>
        <h1>
            <img src="assets/quizzos.png" alt="" />
        </h1>
        <img src="./assets/maskotte.png" alt="le gros cerveau" />
        <div class="get-started">
            <a href="#" id="started"> GET STARTED</a>
        </div>
        <img class="arrow" src="assets/fleche.svg" alt="la fleche" />
    </section>
    <div id="lobby"></div> 
`,after_render:async()=>{let s=await a(()=>import("./jaw.bdb0e742.js"),[]),i=document.getElementById("homepage");i.innerHTML+=s.default;let o="?OpeningAnimation",r=document.location.search;if(await a(()=>import("./openingPageAnimation.1438cee1.js"),["assets/openingPageAnimation.1438cee1.js","assets/index.88fa00fc.js"]),location.href="#",r!==o){const n=document.querySelector(".teeth-form-up"),u=document.querySelector(".rectangle-form-top"),_=document.querySelector(".teeth-form-down"),l=document.querySelector(".rectangle-form-bottom");n.style.display="none",_.style.display="none",u.style.display="none",l.style.display="none"}let t=document.getElementById("started"),e=await a(()=>import("./rotateFall.06667e00.js"),[]);t.addEventListener("click",async()=>{await e.default()})}},S=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),y={render:async()=>`
<section id="lobbypage" class="lobby-page">
    <div class="square"></div>
    <div class="circle"></div>
    <ul>
      <li id="category"><a>CATEGORY</a></li>
      <li id="difficulty"><a>DIFFICULTY</a></li>
      <li id="numbers-of-questions"><a>NUMBERS OF QUESTIONS</a></li>
      <li id="start-quiz">START</li>
    </ul>
</section>
<div id="categories"></div>
<div id="levels"></div>
<div id="nbQuestions"></div>
<div id="timer"></div>


`,after_render:async()=>{let s=document.getElementById("category"),i=document.getElementById("difficulty"),o=document.getElementById("numbers-of-questions"),r=await a(()=>import("./scaleDownFromTop.6828ec61.js"),[]);s.addEventListener("click",async()=>{await r.default("categories")}),i.addEventListener("click",async()=>{await r.default("levels")}),o.addEventListener("click",async()=>{await r.default("nbQuestions")});let t=document.getElementById("start-quiz"),e=await a(()=>import("./rotateFallLeft.f9754abd.js"),[]);t.addEventListener("click",async n=>{await e.default()})}},R=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),f={render:async()=>`
<section id='level' class="level-page">
  <div class="green-circle-top-left"></div>
  <div class="green-circle-right"></div>
  <div class="green-circle-bottom-left"></div>

  <div class="title-box-level">
    <h2>Choose your level</h2>
  </div>
  <div id="level">
  <input type="button" class="level-box" id="easy" value="Easy" />
  <input type="button" class="level-box" id="medium" value="Medium" />
  <input type="button" class="level-box" id="hard" value="Hard" />
  <input type="button" class="level-box" id="legend" value="Legend" />
  </div>
</section>

`,after_render:async()=>{await a(()=>import("./level-fetch.7cbefdb9.js"),[]);let s=document.getElementsByClassName("level-box"),i=await a(()=>import("./scaleDownFromBottom.4a95a743.js"),[]);Array.from(s).forEach(o=>{o.addEventListener("click",async()=>{await i.default("levels")})})}},P=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),g={render:async()=>`
<section id="number-question-page" class="number-question-page">
   <div class="background-blue-rectangle"></div>
   <div class="background-pink-rectangle"></div>
   <div class="title-box">
   <h2>How many questions do you want ?</h2>
 </div>
 <div id="nbquestion">
 <input type="button" class="questions-box" id="5" value="5">
 <input type="button" class="questions-box" id="10" value="10">
 <input type="button" class="questions-box" id="15" value="15">
 <input type="button" class="questions-box" id="20" value="20">
</div>
 </section>
`,after_render:async()=>{await a(()=>import("./nb-questions-fetch.946a1e4d.js"),[]);let s=document.getElementsByClassName("questions-box"),i=await a(()=>import("./scaleDownFromBottom.4a95a743.js"),[]);Array.from(s).forEach(o=>{o.addEventListener("click",async()=>{await i.default("nbQuestions")})})}},A=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),b={render:async()=>`
<section class="category-page">
  <div class="rect right"></div>
  <div class="rect left"></div>
  <div class="separator"></div>
  <div class="title-categories">What\u2019s your favorite category ?</div>
  <div class="categories" id="categories">
    <input type="button" class="category" id="Linux" value="Linux">
    <input type="button" class="category" id="DevOps" value="DevOps">
    <input type="button" class="category" id="Code" value="Code">
    <input type="button" class="category" id="Bash" value="Bash">
    <input type="button" class="category" id="Uncategorized" value="Uncategorized">
    <input type="button" class="category" id="Docker" value="Docker">
    <input type="button" class="category" id="SQL" value="SQL">
    <input type="button" class="category" id="CMS" value="CMS">
  </div>
</section>
`,after_render:async()=>{await a(()=>import("./categories-fetch.f3c38f9b.js"),[]);let s=document.getElementsByClassName("category"),i=await a(()=>import("./scaleDownFromBottom.4a95a743.js"),[]);Array.from(s).forEach(o=>{o.addEventListener("click",async()=>{await i.default("categories")})})}},D=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),E={render:async()=>`
<section class="question-page">
    <div class="ellipsis"></div>
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="timer" id="timer"></div>
    <div class="questions">
        <span class="number-question">Question <span id="iteration_question"></span>:</span>
        <span class="question" id="question"></span>
    </div>
    <span id="remaining_questions"></span>
    <div class="answers" id="answers"></div>
    <div class="loader"></div>
</section>
`,after_render:async()=>{await(await a(()=>import("./questions.9b451b7a.js"),[])).default()}},I=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),h={render:async()=>`
        <section class="result" id="js-result-section">
          <div class="result__preview">
            <p>RESULT</p>
            <div class="result__circle-progress-bar" id="js-progress-bar">
              <div class="result__circle-progress-bar__value" id="js-value-progress-bar">
                0%
              </div>
            </div>
            <span class="result__nb-good-answer"><span id="goodAnswer"></span> out of <span id="nbOfQuestions"></span></span>
          </div>
          <a class="result__btn">BACK TO HOME</a>
          <div class="result__oval-form-middle"></div>

          <div class="result__img">
            <img src="assets/quizzosResult.svg" alt="quizzos mascot representing a brain">
          </div>
        </section>
        `,after_render:async()=>{let s=await a(()=>import("./jaw.bdb0e742.js"),[]),i=document.getElementById("js-result-section");i.innerHTML+=s.default,await a(()=>import("./progressBar.cdaf516b.js"),[]),await a(()=>import("./closingPageAnimation.68206698.js"),["assets/closingPageAnimation.68206698.js","assets/index.88fa00fc.js"])}},k=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),w={render:async()=>`
      <section class="timer-page" id="timer">
    <div class="square-top"></div>
    <div class="square-bottom"></div>
        <div class="counter" data-animation>
  <svg id="tracker">
    <circle id="outer_circle" class="st0" cx="50%" cy="50%"  fill="none"  />
    <circle id="circle" class="circle_animation" cx="50%" cy="50%"  stroke="black" fill="none" />
    <circle id="inner_circle" class="st0" cx="50%" cy="50%"  fill="none" stroke="black" />
  </svg>
  <span data-repetition=""></span>
</div>
</section>
   `,after_render:async()=>{await a(()=>import("./timer.40b6cfcf.js"),[]),await a(()=>import("./start-quiz.2d8d7c36.js"),[])}},j=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),m={"/":v,home:v,lobby:y,levels:f,nbquestion:g,categories:b,questions:E,result:h,timer:w},q=document.getElementById("app"),L=async()=>{let s=location.hash.split("#")[1]||"/";q.innerHTML=await m[s].render(),await m[s].after_render()};window.addEventListener("hashchange",async()=>{await L()});window.addEventListener("load",async()=>{await L()});export{D as C,S as H,R as L,A as N,I as Q,k as R,j as T,a as _,P as a};
