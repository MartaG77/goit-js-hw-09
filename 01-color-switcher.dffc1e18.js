const e=()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`},t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;t.addEventListener("click",(()=>{t.disabled=!0,d.disabled=!1,a=setInterval((()=>{e()}),1e3)})),d.addEventListener("click",(()=>{t.disabled=!1,d.disabled=!0,clearInterval(a)})),d.disabled=!0;
//# sourceMappingURL=01-color-switcher.dffc1e18.js.map