(()=>{"use strict";function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("img");return n.src="images/chefs.png",n.alt="Chefs",e.appendChild(t("Best Amala Joint in town")),e.appendChild(t("Iya Basira style since 2002")),e.appendChild(n),e.appendChild(t("Order online or visit us!")),e}())};function n(t,e){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=t;const d=document.createElement("p");d.textContent=e;const c=document.createElement("img");return c.src=`images/foods/${t.toLowerCase()}.png`,c.alt="${name}",n.appendChild(c),n.append(a),n.appendChild(d),n}function a(){const t=document.createElement("header");t.classList.add("header");const a=document.createElement("h1");return a.classList.add("restaurant-name"),a.textContent="Amala Joint",t.appendChild(a),t.appendChild(function(){const t=document.createElement("nav"),a=document.createElement("button");a.classList.add("button-nav"),a.textContent="Home",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(d(a),e())}));const c=document.createElement("button");c.classList.add("button-nav"),c.textContent="Menu",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(d(c),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(n("Amala Ibadan","Amala, Gbegiri, Ewedu, Shaki, Fuku, Ishan")),t.appendChild(n("Amala Ilorin","Amala, Gbegiri, Ewedu, Shaki, Wara, ponmon")),t.appendChild(n("Iyan Ijesha","Pounded yam, Efo riro,  Shaki, Round-about, Edo")),t.appendChild(n("Iyan Ekiti","Pounded yam, Ewedu, Shaki, Fuku, Ishan")),t.appendChild(n("Ofada","Ofada rice, Ofada sauce, Boiled Egg")),t.appendChild(n("Jollof Rice","Jollof Rice, Plantain, Moinmoin, Chicken")),t}())}())}));const o=document.createElement("button");return o.classList.add("button-nav"),o.textContent="Contact",o.addEventListener("click",(t=>{t.target.classList.contains("active")||(d(o),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("p");e.textContent="📞 0801 234 5678";const n=document.createElement("p");return n.textContent="🏠 11 Ladoke Akintola Boulevard, Garki, Abuja, Nigeria",t.appendChild(e),t.appendChild(n),t}())}())})),t.appendChild(a),t.appendChild(c),t.appendChild(o),t}()),t}function d(t){document.querySelectorAll(".button-nav").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(a()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");e.textContent=`Copyright © ${(new Date).getFullYear()} Yusuf. Images courtesy of Google`;const n=document.createElement("a");n.href="https://github.com/yyusbel";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),t.appendChild(e),t.appendChild(n),t}()),d(document.querySelector(".button-nav")),e()}()})();