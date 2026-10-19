const menu=document.querySelector('.menu'),nav=document.querySelector('header nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.textContent=open?'Close −':'Menu +';nav.classList.toggle('open',open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Menu +'}));
document.querySelector('[data-contact]')?.addEventListener('click',e=>{const panel=document.querySelector('.contact-details');panel.hidden=!panel.hidden;e.currentTarget.setAttribute('aria-expanded',String(!panel.hidden))});
// Progressive enhancement: content remains visible when JavaScript is unavailable.
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if(!reduceMotion.matches&&'IntersectionObserver' in window){
 const reveals=document.querySelectorAll('.about-grid,.craft-grid,.timeline article,.download-card,.screen-story');
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:0.08});
 reveals.forEach(el=>{el.classList.add('reveal-ready');revealObserver.observe(el)});
 reduceMotion.addEventListener('change',event=>{if(event.matches){reveals.forEach(el=>el.classList.add('is-visible'));revealObserver.disconnect()}});
}
const progress=document.createElement('div');progress.className='scroll-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
let progressPending=false;
function updateProgress(){const available=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform='scaleX('+Math.max(0,Math.min(1,available>0?window.scrollY/available:0))+')';progressPending=false}
window.addEventListener('scroll',()=>{if(!progressPending){progressPending=true;requestAnimationFrame(updateProgress)}},{passive:true});window.addEventListener('resize',updateProgress);updateProgress();

// One menu state for pointer, keyboard, navigation and responsive changes.
function closeMenu(returnFocus=false){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation');if(menu)menu.textContent='Menu +';if(returnFocus)menu?.focus()}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true')closeMenu(true)});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu()});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
window.matchMedia('(min-width: 601px)').addEventListener('change',()=>closeMenu());
// Native fragments retain URL history; focus follows keyboard and pointer navigation.
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{const target=document.getElementById(link.hash.slice(1));if(target){target.setAttribute('tabindex','-1');requestAnimationFrame(()=>target.focus({preventScroll:true}))}}));
const trackLinks=[...document.querySelectorAll('header nav a[href^="#"],.case-nav a[href^="#"]')];
function updateLocation(){const offset=(document.querySelector('header')?.offsetHeight||80)+48;let current=null;for(const link of trackLinks){const target=document.getElementById(link.hash.slice(1));if(target&&target.getBoundingClientRect().top<=offset)current=link}trackLinks.forEach(link=>{const active=link===current;link.classList.toggle('is-current',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')})}
let navFrame;window.addEventListener('scroll',()=>{if(!navFrame)navFrame=requestAnimationFrame(()=>{updateLocation();navFrame=null})},{passive:true});window.addEventListener('resize',updateLocation);updateLocation();
const topButton=document.querySelector('.back-top');function showTop(){if(topButton)topButton.hidden=window.scrollY<600}window.addEventListener('scroll',showTop,{passive:true});showTop();topButton?.addEventListener('click',()=>{window.scrollTo({top:0,behavior:reduceMotion.matches?'instant':'smooth'});document.querySelector('.brand')?.focus({preventScroll:true})});
// Keyboard-accessible screen gallery.
const viewer=document.querySelector('#viewer'),shots=[...document.querySelectorAll('[data-image]')];let shotIndex=0,viewerTrigger;
function showShot(index){shotIndex=(index+shots.length)%shots.length;const shot=shots[shotIndex],img=viewer.querySelector('img');img.src=shot.dataset.image;img.alt=shot.dataset.alt;viewer.querySelector('[data-viewer-count]').textContent=`${shotIndex+1} / ${shots.length}`;viewer.scrollTop=0}
shots.forEach((button,index)=>button.addEventListener('click',()=>{viewerTrigger=button;showShot(index);viewer.showModal()}));viewer?.querySelector('[data-viewer-close]').addEventListener('click',()=>viewer.close());viewer?.querySelector('[data-viewer-prev]').addEventListener('click',()=>showShot(shotIndex-1));viewer?.querySelector('[data-viewer-next]').addEventListener('click',()=>showShot(shotIndex+1));viewer?.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();showShot(shotIndex-1)}if(e.key==='ArrowRight'){e.preventDefault();showShot(shotIndex+1)}});viewer?.addEventListener('click',e=>{if(e.target===viewer)viewer.close()});viewer?.addEventListener('close',()=>viewerTrigger?.focus());
if(matchMedia('(hover:hover) and (pointer:fine)').matches){document.querySelectorAll('.download-card,.project-visual').forEach(card=>{card.addEventListener('pointermove',e=>{if(reduceMotion.matches)return;const b=card.getBoundingClientRect();card.style.transform=`perspective(1200px) rotateX(${-(e.clientY-b.top-b.height/2)/b.height*3}deg) rotateY(${(e.clientX-b.left-b.width/2)/b.width*3}deg)`});card.addEventListener('pointerleave',()=>card.style.transform='')})}
