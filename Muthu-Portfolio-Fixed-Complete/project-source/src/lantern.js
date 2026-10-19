import * as THREE from 'three';
const canvas=document.querySelector('#lantern-canvas');
if(canvas){
const stage=canvas.parentElement,pause=document.querySelector('[data-object-pause]');
let angle=.3,tilt=0,drag=false,lastX=0,lastY=0,paused=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fallback=document.createElement('div');fallback.className='css-lantern-view';fallback.setAttribute('aria-hidden','true');fallback.innerHTML='<div class="css-lantern"><div class="lantern-roof"></div><div class="lantern-paper"><i></i><i></i><i></i><i></i></div><div class="lantern-base"></div><div class="lantern-foot"></div></div>';stage.prepend(fallback);
function sync(){pause.textContent=paused?'Resume rotation':'Pause rotation';pause.setAttribute('aria-pressed',String(paused))}sync();
stage.addEventListener('pointerdown',e=>{drag=true;lastX=e.clientX;lastY=e.clientY;stage.setPointerCapture(e.pointerId)});stage.addEventListener('pointermove',e=>{if(drag){angle+=(e.clientX-lastX)*.009;tilt=Math.max(-.35,Math.min(.35,tilt+(e.clientY-lastY)*.004));lastX=e.clientX;lastY=e.clientY}});for(const event of ['pointerup','pointercancel','lostpointercapture'])stage.addEventListener(event,()=>drag=false);
document.querySelectorAll('[data-orbit]').forEach(b=>b.addEventListener('click',()=>angle+=Number(b.dataset.orbit)*.4));document.querySelector('[data-object-reset]').addEventListener('click',()=>{angle=.3;tilt=0});pause.addEventListener('click',()=>{paused=!paused;sync()});matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',e=>{if(e.matches){paused=true;sync()}});
let fallbackTime=0;function animateFallback(time){requestAnimationFrame(animateFallback);const dt=Math.min((time-fallbackTime)/1000,.04);fallbackTime=time;if(canvas.hidden&&!document.hidden){if(!paused&&!drag)angle+=dt*.2;fallback.firstElementChild.style.transform=`rotateX(${tilt*57.3}deg) rotateY(${angle*57.3}deg)`}}requestAnimationFrame(animateFallback);
function useFallback(){canvas.hidden=true;fallback.hidden=false;document.querySelector('.object-fallback').hidden=true}
try{
const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.outputEncoding=THREE.sRGBEncoding;
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,1,.1,60);camera.position.set(0,1.1,7.5);camera.lookAt(0,0,0);
scene.add(new THREE.AmbientLight(0xc3dce4,.8));const key=new THREE.DirectionalLight(0xffdcab,2);key.position.set(3,4,5);scene.add(key);const rim=new THREE.DirectionalLight(0x759cae,1);rim.position.set(-3,2,-3);scene.add(rim);
const lantern=new THREE.Group();scene.add(lantern);const bronze=new THREE.MeshStandardMaterial({color:0x645348,metalness:.8,roughness:.33}),paper=new THREE.MeshStandardMaterial({color:0xe6b26c,emissive:0xffa24a,emissiveIntensity:.65,roughness:.8});
function cylinder(radiusTop,radiusBottom,height,y,material=bron){const m=new THREE.Mesh(new THREE.CylinderGeometry(radiusTop,radiusBottom,height,6),material);m.position.y=y;lantern.add(m);return m}
cylinder(.64,.64,1.45,0,paper);cylinder(.85,.75,.16,-.84);cylinder(.77,.85,.17,.83);cylinder(.12,1.05,.48,1.12);cylinder(.08,.15,.16,1.44);cylinder(.72,.85,.13,-1.01);cylinder(.3,.45,.28,-1.21);
for(let i=0;i<6;i++){const a=i*Math.PI/3;const rail=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,1.7,8),bronze);rail.position.set(.65*Math.sin(a),0,.65*Math.cos(a));lantern.add(rail)}
const ring=new THREE.Mesh(new THREE.TorusGeometry(.17,.028,8,32),bronze);ring.position.y=1.68;lantern.add(ring);
const floor=new THREE.Mesh(new THREE.CylinderGeometry(1.5,1.6,.09,64),new THREE.MeshStandardMaterial({color:0x192c35,metalness:.4,roughness:.55}));floor.position.y=-1.42;scene.add(floor);
let visible=true,frame=0;
function resize(){const rect=canvas.parentElement.getBoundingClientRect();renderer.setSize(rect.width,rect.height,false);camera.aspect=rect.width/rect.height;camera.updateProjectionMatrix()}new ResizeObserver(resize).observe(canvas.parentElement);resize();new IntersectionObserver(entries=>{visible=entries[0].isIntersecting}).observe(canvas);
let previous=0;function draw(time){frame=requestAnimationFrame(draw);const dt=Math.min((time-previous)/1000,.04);previous=time;if(!visible||document.hidden)return;if(!paused&&!drag)angle+=dt*.2;lantern.rotation.set(tilt,angle,0);renderer.render(scene,camera)}renderer.render(scene,camera);fallback.hidden=true;frame=requestAnimationFrame(draw);canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(frame);useFallback()});
}catch(error){useFallback()}}
