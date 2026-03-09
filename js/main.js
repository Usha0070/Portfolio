/* ═══ CURSOR ═══ */
const cur=document.getElementById('cur'),cur2=document.getElementById('cur2');
let mx=0,my=0,fx=0,fy=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;});
(function t(){fx+=(mx-fx)*.11;fy+=(my-fy)*.11;cur2.style.transform=`translate(${fx}px,${fy}px) translate(-50%,-50%)`;requestAnimationFrame(t);})();

/* ═══ PROGRESS ═══ */
window.addEventListener('scroll',()=>{document.getElementById('progress').style.width=(scrollY/(document.body.scrollHeight-innerHeight)*100)+'%';},{passive:true});

/* ═══ REVEAL ═══ */
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('on');}),{threshold:.1});
document.querySelectorAll('.rv,.rv-l,.t-item,.proj-card,.edu-c').forEach(el=>io.observe(el));
document.querySelectorAll('.t-item').forEach((el,i)=>el.style.transitionDelay=i*.08+'s');
document.querySelectorAll('.proj-card').forEach((el,i)=>el.style.transitionDelay=i*.07+'s');

/* ═══ ACTIVE NAV ═══ */
document.querySelectorAll('section[id]').forEach(s=>new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){document.querySelectorAll('#nav-links a').forEach(l=>l.classList.remove('active'));const a=document.querySelector(`#nav-links a[href="#${x.target.id}"]`);if(a)a.classList.add('active');}}),{threshold:.35}).observe(s));

/* ═══ MOBILE MENU ═══ */
const mobBtn=document.getElementById('mob-btn'),mobMenu=document.getElementById('mob-menu');
let mobOpen=false;
const YT_ICON=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>`;
const FB_ICON=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;
function buildMobMenu(){
  const cvHref=window._dev?'assets/Usha_Khan_Dev_CV.docx':'assets/Usha_Khan_Teaching_CV.pdf';
  const cvLabel=window._dev?'Developer CV':'Teaching CV';
  const ytHref=window._dev?'https://www.youtube.com/@mdushakhan3461':'https://www.youtube.com/@chemputerstudio';
  const ytLabel=window._dev?'Personal YT':'Chemputer Studio';
  const fbHref=window._dev?'https://www.facebook.com/usha.khan.50596/':'https://www.facebook.com/profile.php?id=61578619766107';
  const fbLabel=window._dev?'Facebook':'Teaching Page';
  mobMenu.innerHTML=`
    <nav class="mm-links">
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#gallery">Gallery</a>
      <a href="#skills">Skills</a>
      <a href="#education">Education</a>
      <a href="#philosophy">The Story</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="mm-socials">
      <a href="https://github.com/Usha0070" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>GitHub</a>
      <a href="https://www.linkedin.com/in/mdushakhan007/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>LinkedIn</a>
      <a href="https://www.instagram.com/m.u.khan007/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>Instagram</a>
      <a href="https://x.com/md_usha20760" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>Twitter</a>
      <a href="${ytHref}" target="_blank" rel="noopener" data-social="yt">${YT_ICON}<span data-social-label>${ytLabel}</span></a>
      <a href="${fbHref}" target="_blank" rel="noopener" data-social="fb">${FB_ICON}<span data-social-label>${fbLabel}</span></a>
    </div>
    <a href="${cvHref}" download class="mm-cv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>${cvLabel}</a>
  `;
  mobMenu.querySelectorAll('.mm-links a').forEach(a=>a.addEventListener('click',()=>{mobOpen=false;mobMenu.classList.remove('open');mobBtn.setAttribute('aria-expanded','false');}));
}
if(mobBtn){
  buildMobMenu();
  mobBtn.addEventListener('click',()=>{
    mobOpen=!mobOpen;
    mobMenu.classList.toggle('open',mobOpen);
    mobBtn.setAttribute('aria-expanded',mobOpen);
  });
}
document.addEventListener('click',e=>{if(mobOpen&&mobMenu&&!mobMenu.contains(e.target)&&!mobBtn.contains(e.target)){mobOpen=false;mobMenu.classList.remove('open');mobBtn.setAttribute('aria-expanded','false');}});

/* ═══ TOGGLE PILL ═══ */
function posPill(dev){
  const tog=document.getElementById('toggle'),pill=document.getElementById('tgl-pill');
  if(!tog||!pill)return;
  const r=tog.getBoundingClientRect(),opt=dev?tog.querySelector('.devt'):tog.querySelector('.inst'),or=opt.getBoundingClientRect();
  pill.style.left=(or.left-r.left-4)+'px';pill.style.width=(or.width+8)+'px';
}
window.addEventListener('load',()=>posPill(false));
window.addEventListener('resize',()=>posPill(window._dev||false));

/* ═══ GLITCH ═══ */
const glitch=document.getElementById('glitch'),gss=glitch.querySelectorAll('.gs');
function runGlitch(cb){
  gss.forEach((s,i)=>{s.classList.remove('in','out');void s.offsetWidth;s.style.animationDelay=i*.028+'s';s.classList.add('in');});
  setTimeout(cb,320);
  setTimeout(()=>{gss.forEach((s,i)=>{s.style.animationDelay=i*.022+'s';s.classList.add('out');});setTimeout(()=>gss.forEach(s=>s.classList.remove('in','out')),520);},380);
}

/* ═══ MODE DATA ═══ */
const MODES={
  inst:{ew:'Science Instructor · CS Developer · BUET',ln2:'Khan',tag:'I shape minds through science and build systems from first principles. Chemistry instructor at 10 Minute School. CS student at BUET.',st:'Available for Collaboration',em:'together',sub:"Whether you need a Chemistry instructor, an e-learning content developer, or a CS collaborator — I'm open to conversations that matter.",img:'assets/images/img_professional.png',cv:'assets/Usha_Khan_Teaching_CV.pdf',cvLabel:'Teaching CV'},
  dev:{ew:'CS Developer · IEEE CS BUET · Science Educator',ln2:'Khan_',tag:"Building systems from first principles. BSc CSE at BUET, IEEE CS Executive Member — the rare developer who can explain quantum chemistry to a 10th grader.",st:'Open to Dev Projects',em:'something great',sub:"Looking for a CS collaborator or a developer who communicates with clarity? Let's build together.",img:'assets/images/img_buet_cse.png',cv:'assets/Usha_Khan_Dev_CV.docx',cvLabel:'Developer CV'}
};

// Social links per mode
const SOCIAL_SETS={
  inst:{
    yt:{href:'https://www.youtube.com/@chemputerstudio',label:'Chemputer Studio'},
    fb:{href:'https://www.facebook.com/profile.php?id=61578619766107',label:'Teaching Page'}
  },
  dev:{
    yt:{href:'https://www.youtube.com/@mdushakhan3461',label:'Personal YouTube'},
    fb:{href:'https://www.facebook.com/usha.khan.50596/',label:'Facebook'}
  }
};

let _dev=false;window._dev=false;
function applyMode(dev){
  const k=dev?'dev':'inst',c=MODES[k],s=SOCIAL_SETS[k];
  const $=id=>document.getElementById(id);
  $('ew-el').textContent=c.ew;$('ln2-el').textContent=c.ln2;$('hero-tag').textContent=c.tag;$('st-main').textContent=c.st;$('ct-em').textContent=c.em;$('ct-sub').textContent=c.sub;
  const cvBtn=$('cv-btn');cvBtn.href=c.cv;cvBtn.setAttribute('download','');$('cv-label').textContent=c.cvLabel;
  // swap mode-aware social links (YT + FB)
  const ytLinks=document.querySelectorAll('[data-social="yt"]');
  const fbLinks=document.querySelectorAll('[data-social="fb"]');
  ytLinks.forEach(el=>{el.href=s.yt.href;const lbl=el.querySelector('[data-social-label]');if(lbl)lbl.textContent=s.yt.label;});
  fbLinks.forEach(el=>{el.href=s.fb.href;const lbl=el.querySelector('[data-social-label]');if(lbl)lbl.textContent=s.fb.label;});
  const hi=$('hero-img');hi.style.opacity='0';setTimeout(()=>{hi.src=c.img;setTimeout(()=>hi.style.opacity='1',60);},360);
  if(dev)document.body.classList.add('dev');else document.body.classList.remove('dev');
  $('toggle').setAttribute('aria-checked',dev);
  posPill(dev);window._dev=dev;
  // rebuild mobile menu social links
  if(typeof buildMobMenu==='function')buildMobMenu();
  // scene swap
  document.getElementById('ci').style.opacity=dev?'0':'0.9';
  document.getElementById('cd').style.opacity=dev?'0.9':'0';
  // skills swap
  const isMob=window.innerWidth<=900;
  if(isMob){
    $('sk-inst').classList.toggle('mob-hidden',dev);
    $('sk-dev').classList.toggle('mob-active',dev);
  } else {
    // Desktop: opacity crossfade. Measure heights by temporarily making both visible
    const skInst=$('sk-inst'), skDev=$('sk-dev'), skWrap=$('sk-wrap');
    // Temporarily make both full opacity to measure
    skDev.style.cssText='position:absolute;inset:0;width:100%;opacity:1;transform:none;pointer-events:none;transition:none';
    skInst.style.cssText='position:absolute;inset:0;width:100%;opacity:1;transform:none;pointer-events:none;transition:none';
    requestAnimationFrame(()=>{
      const h=dev?skDev.scrollHeight:skInst.scrollHeight;
      skWrap.style.minHeight=Math.max(h,200)+'px';
      // Now apply the real states with transitions
      skInst.style.cssText=dev
        ?'position:absolute;inset:0;width:100%;opacity:0;transform:translateY(14px);pointer-events:none;transition:opacity .45s ease,transform .45s ease'
        :'position:absolute;inset:0;width:100%;opacity:1;transform:none;pointer-events:all;transition:opacity .45s ease,transform .45s ease';
      skDev.style.cssText=dev
        ?'position:absolute;inset:0;width:100%;opacity:1;transform:none;pointer-events:all;transition:opacity .45s ease,transform .45s ease'
        :'position:absolute;inset:0;width:100%;opacity:0;transform:translateY(14px);pointer-events:none;transition:opacity .45s ease,transform .45s ease';
    });
  }
}

const tog=document.getElementById('toggle');
function doToggle(){runGlitch(()=>{_dev=!_dev;applyMode(_dev);});}
tog.addEventListener('click',doToggle);
tog.addEventListener('keydown',e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();doToggle();}});
// Banner toggle — same action
const bannerTog=document.getElementById('mode-banner-toggle');
if(bannerTog){
  bannerTog.addEventListener('click',doToggle);
  bannerTog.addEventListener('keydown',e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();doToggle();}});
}
setTimeout(()=>{posPill(false);document.getElementById('ci').style.opacity='0.9';document.getElementById('cd').style.opacity='0';},150);
// Init sk-wrap height on desktop
setTimeout(()=>{
  if(window.innerWidth>900){
    const skInst=document.getElementById('sk-inst');
    const skWrap=document.getElementById('sk-wrap');
    if(skInst&&skWrap){skWrap.style.minHeight=Math.max(skInst.scrollHeight,200)+'px';}
  }
},200);

/* ═══ GALLERY ═══ */
window.addEventListener('load',()=>{
  const tr=document.getElementById('gal-track');if(!tr)return;
  [...tr.children].forEach(c=>tr.appendChild(c.cloneNode(true)));
  tr.querySelectorAll('.gi').forEach(gi=>{gi.addEventListener('click',()=>{const im=gi.querySelector('img');if(!im)return;document.getElementById('lb-img').src=im.src;document.getElementById('lb').classList.add('open');});});
});
const lb=document.getElementById('lb');
document.getElementById('lb-x').addEventListener('click',()=>lb.classList.remove('open'));
lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open');});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open');});

/* ═══ FAB + DRAWER ═══ */
const fab=document.getElementById('fab'),drw=document.getElementById('drawer');
let drOpen=false;
fab.addEventListener('click',()=>{drOpen=!drOpen;drw.classList.toggle('open',drOpen);});
document.getElementById('dr-x').addEventListener('click',()=>{drOpen=false;drw.classList.remove('open');});
document.addEventListener('click',e=>{if(drOpen&&!drw.contains(e.target)&&!fab.contains(e.target)){drOpen=false;drw.classList.remove('open');}});

/* ═══ FORM — Formspree (sends to mdushakhan007@gmail.com) ═══ */
const cfForm=document.getElementById('cf');
if(cfForm){
  cfForm.addEventListener('submit',async e=>{
    e.preventDefault();
    const btn=document.getElementById('cf-sub'),note=document.getElementById('cf-note');
    const name=cfForm.querySelector('[name="name"]').value.trim();
    const email=cfForm.querySelector('[name="email"]').value.trim();
    const msg=cfForm.querySelector('[name="message"]').value.trim();
    if(!name||!email||!msg){note.textContent='Please fill in your name, email and message.';note.style.color='var(--accent)';return;}
    btn.textContent='Sending…';btn.disabled=true;note.textContent='';
    try{
      const res=await fetch(cfForm.action,{method:'POST',body:new FormData(cfForm),headers:{Accept:'application/json'}});
      if(res.ok){btn.textContent='Sent ✓';btn.style.background='#22c55e';note.textContent='Your message is on its way to Usha\'s inbox!';note.style.color='var(--accent2)';cfForm.reset();}
      else{throw new Error();}
    }catch{btn.textContent='Send Message';btn.disabled=false;note.textContent='Something went wrong. Email directly: mdushakhan007@gmail.com';note.style.color='var(--accent)';}
    setTimeout(()=>{btn.textContent='Send Message';btn.style.background='';btn.disabled=false;},5000);
  });
}
