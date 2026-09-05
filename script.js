document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-toggle'); const nav=document.querySelector('.nav');
  menu.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
  document.getElementById('year').textContent=new Date().getFullYear();
  document.getElementById('quoteForm').addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.getElementById('name').value.trim();
    const phone=document.getElementById('phone').value.trim();
    const email=document.getElementById('email').value.trim();
    const req=document.getElementById('requirements').value.trim();
    const msg=`Hello Northland Building Materials,\n\nI would like to request a quotation.\n\nName / Company: ${name}\nPhone / WhatsApp: ${phone}\nEmail: ${email || 'Not provided'}\nRequirements: ${req}\n\nThank you.`;
    window.open('https://wa.me/971502835275?text='+encodeURIComponent(msg),'_blank');
  });
});
