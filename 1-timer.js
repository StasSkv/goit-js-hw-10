import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as b,i as p}from"./assets/vendor-BbbuE1sJ.js";const C=document.querySelector("main");C.insertAdjacentHTML("beforebegin",'<a href="./index.html" class="link-back-to-home">go home</a>');const t=document.querySelector("#datetime-picker");t.classList.add("input");t.addEventListener("focus",()=>t.style.borderColor="#4e75ff");t.addEventListener("blur",()=>t.style.borderColor="#808080");const o=document.querySelector("button");o.classList.add("btn");o.disabled=!0;let l;const u={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,locale:{firstDayOfWeek:1,weekdays:{shorthand:["Su","Mo","Tu","We","Th","Fr","Sa"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},onClose(e){const s=u.defaultDate.getTime(),n=e[0].getTime();s>e[0].getTime()?(p.show({title:"Hey!",message:"Please choose a date in the future",iconUrl:"../img/x.svg",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",iconColor:"#fff",progressBarColor:"#b51b1b",closeColor:"#fff",class:"iziToast-dark"}),o.disabled=!0,o.classList.remove("btn-active")):(l=n,o.disabled=!1,o.classList.add("btn-active"))},onOpen(){setTimeout(()=>{document.querySelectorAll(".flatpickr-day.selected").forEach(e=>{e.classList.remove("selected")})},0)}};b("#datetime-picker",u);function g(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:y,seconds:h}}const r=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),c=document.querySelector("[data-seconds]");function a(e){return e.toString().padStart(2,"0")}function v(){t.classList.add("input-disabled"),o.classList.remove("btn-active"),o.disabled=!0,t.disabled=!0;const e=setInterval(()=>{const s=l-new Date,n=g(s);r.textContent=a(n.days),d.textContent=a(n.hours),i.textContent=a(n.minutes),c.textContent=a(n.seconds),s<=0&&(clearInterval(e),t.disabled=!1,t.classList.remove("input-disabled"),r.textContent="00",d.textContent="00",i.textContent="00",c.textContent="00")},1e3)}o.addEventListener("click",v);
//# sourceMappingURL=1-timer.js.map
