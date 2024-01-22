document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".interactive"),t=0,n=0,o=0,r=0;window.addEventListener("mousemove",e=>{o=e.clientX,r=e.clientY}),function a(){t+=(o-t)/20,n+=(r-n)/20,e.style.transform=`translate(${Math.round(t)}px, ${Math.round(n)}px)`,requestAnimationFrame(()=>{a()})}()});
//# sourceMappingURL=index.56cc554a.js.map
