!function(){var t=function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))},e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),d=null;e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,d=setInterval((function(){t()}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,n.disabled=!0,clearInterval(d)})),n.disabled=!0}();
//# sourceMappingURL=01-color-switcher.e3735d21.js.map