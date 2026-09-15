const cfg = window.ANNACH_CONFIG || {};
const menuToggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open?'true':'false')});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-business-email]').forEach(el=>{if(cfg.businessEmail)el.innerHTML=`<a href="mailto:${cfg.businessEmail}">${cfg.businessEmail}</a>`});
document.querySelectorAll('[data-product]').forEach(link=>link.addEventListener('click',()=>{const select=document.getElementById('productSelect');if(select)select.value=link.dataset.product}));
