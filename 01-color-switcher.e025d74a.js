const t=document.querySelector("body");t.innerHTML='<p><a href="index.html">Go back</a></p>\n    <div class="button" style = "margin: 0; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">\n      <button type="button" data-start>Start</button>\n      <button type="button" data-stop disabled>Stop</button>\n    </div>\n    <script src="js/01-color-switcher.js" type="module"><\/script>';const e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");e.setAttribute("style","width: 100px; height: 50px; font-size: 24px; text-transform: uppercase"),o.setAttribute("style","width: 100px; height: 50px;font-size: 24px; text-transform: uppercase");let n=null;function s(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(function(){e.disabled=!0,o.disabled=!1,n=setInterval((()=>{let e=s();t.style.backgroundColor=e,console.log(s())}),1e3)})),o.addEventListener("click",(function(){n&&(e.disabled=!1,o.disabled=!0,clearInterval(n),console.log("stop"))}));
//# sourceMappingURL=01-color-switcher.e025d74a.js.map
