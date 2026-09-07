
document.querySelector(".menu")?.addEventListener("click",()=>{
 const links=document.querySelector(".links");
 links.style.display=links.style.display==="flex"?"none":"flex";
 links.style.position="absolute"; links.style.top="82px"; links.style.right="4%";
 links.style.background="#fff"; links.style.padding="20px"; links.style.flexDirection="column";
 links.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";
});
