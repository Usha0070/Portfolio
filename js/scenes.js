// ═══════════════════════════════════════════════════
// INSTRUCTOR SCENE — Chemistry: molecules, hexagons, beakers, equations
// ═══════════════════════════════════════════════════
(function(){
  const cvs=document.getElementById('ci');
  const ctx=cvs.getContext('2d');
  let W,H;
  function resize(){W=cvs.width=window.innerWidth;H=cvs.height=window.innerHeight;}
  resize();window.addEventListener('resize',resize);

  const syms=['H₂O','CH₄','NaCl','CO₂','H₂SO₄','NH₃','C₆H₆','O₂','⚗','⚛','Δ','→','⇌','∑','Ka','pH','mol','KE','ΔG','eV'];
  const floaters=Array.from({length:32},(_,i)=>({
    x:Math.random()*2000,y:Math.random()*1100,
    vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.28,
    sym:syms[i%syms.length],sz:Math.random()*8+10,
    op:Math.random()*.18+.05,rot:Math.random()*Math.PI*2,rv:(Math.random()-.5)*.007
  }));
  // Molecule network nodes
  const nodes=Array.from({length:20},()=>({
    x:Math.random()*2000,y:Math.random()*1100,
    vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2,
    r:Math.random()*3+1.5,
    pulse:Math.random()*Math.PI*2
  }));
  // Beaker shapes
  const beakers=Array.from({length:5},(_,i)=>({
    x:W*(.1+i*.22),y:H*(.2+i*.12),
    phase:Math.random()*Math.PI*2,
    speed:0.0004+Math.random()*0.0003
  }));

  function drawHex(cx,cy,r,col){
    ctx.beginPath();
    for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/6;ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));}
    ctx.closePath();ctx.strokeStyle=col;ctx.lineWidth=1.2;ctx.stroke();
  }
  function drawBeaker(cx,cy,sz,op){
    ctx.save();ctx.globalAlpha=op;ctx.strokeStyle=`rgba(255,230,109,0.55)`;ctx.lineWidth=1.5;
    ctx.beginPath();ctx.moveTo(cx-sz*.4,cy-sz*.6);ctx.lineTo(cx-sz*.5,cy+sz*.5);ctx.lineTo(cx+sz*.5,cy+sz*.5);ctx.lineTo(cx+sz*.4,cy-sz*.6);ctx.stroke();
    // liquid
    ctx.fillStyle=`rgba(78,205,196,0.12)`;ctx.fillRect(cx-sz*.48,cy+sz*.1,sz*.96,sz*.4);
    // bubbles
    for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(cx-sz*.2+i*sz*.2,cy+sz*.3-i*sz*.15,sz*.04,0,Math.PI*2);ctx.strokeStyle=`rgba(78,205,196,0.5)`;ctx.lineWidth=.7;ctx.stroke();}
    ctx.restore();
  }

  function frame(){
    ctx.clearRect(0,0,W,H);
    // Dual radial warmth gradients
    const g=ctx.createRadialGradient(W*.75,H*.25,0,W*.75,H*.25,W*.65);
    g.addColorStop(0,'rgba(255,107,107,.07)');g.addColorStop(.4,'rgba(78,205,196,.05)');g.addColorStop(1,'transparent');
    ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    const g2=ctx.createRadialGradient(W*.15,H*.8,0,W*.15,H*.8,W*.45);
    g2.addColorStop(0,'rgba(255,230,109,.05)');g2.addColorStop(1,'transparent');
    ctx.fillStyle=g2;ctx.fillRect(0,0,W,H);

    // Molecule connections
    const t=Date.now();
    nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;n.pulse+=.02;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1;});
    nodes.forEach((n,i)=>{
      nodes.slice(i+1).forEach(m=>{
        const d=Math.hypot(n.x-m.x,n.y-m.y);
        if(d<150){ctx.beginPath();ctx.moveTo(n.x,n.y);ctx.lineTo(m.x,m.y);ctx.strokeStyle=`rgba(78,205,196,${(1-d/150)*.14})`;ctx.lineWidth=.8;ctx.stroke();}
      });
      const r=n.r*(1+Math.sin(n.pulse)*.3);
      ctx.beginPath();ctx.arc(n.x,n.y,r,0,Math.PI*2);ctx.fillStyle='rgba(255,107,107,.32)';ctx.fill();
    });

    // Drifting hexagons
    const tv=t*.0003;
    for(let i=0;i<9;i++){
      const hx=W*(.05+i*.11)+Math.sin(tv+i*1.1)*(W*.025);
      const hy=H*(.12+i*.1)+Math.cos(tv*1.5+i*.7)*(H*.035);
      drawHex(hx,hy,25+i*9+Math.sin(tv+i)*5,`rgba(255,230,109,${.05+i*.009})`);
    }

    // Beakers
    beakers.forEach((b,i)=>{
      const bx=W*(.08+i*.2)+Math.sin(t*b.speed+b.phase)*30;
      const by=H*(.15+i*.07)+Math.cos(t*b.speed*.7+b.phase)*18;
      drawBeaker(bx,by,36+i*8,.12+i*.015);
    });

    // Floating symbols
    floaters.forEach(it=>{
      it.x+=it.vx;it.y+=it.vy;it.rot+=it.rv;
      if(it.x<-100)it.x=W+100;if(it.x>W+100)it.x=-100;
      if(it.y<-60)it.y=H+60;if(it.y>H+60)it.y=-60;
      ctx.save();ctx.translate(it.x,it.y);ctx.rotate(it.rot);
      ctx.font=`${it.sz}px 'Fira Code',monospace`;
      ctx.fillStyle=`rgba(78,205,196,${it.op})`;ctx.textAlign='center';ctx.fillText(it.sym,0,0);ctx.restore();
    });
    requestAnimationFrame(frame);
  }
  frame();
})();

// ═══════════════════════════════════════════════════
// DEVELOPER SCENE — CS: orbital rings, binary, circuit, code props
// ═══════════════════════════════════════════════════
(function(){
  const cvs=document.getElementById('cd');
  const ctx=cvs.getContext('2d');
  let W,H;
  function resize(){W=cvs.width=window.innerWidth;H=cvs.height=window.innerHeight;}
  resize();window.addEventListener('resize',resize);

  // Binary rain columns
  const drops=[];
  function initDrops(){drops.length=0;const cols=Math.floor((W||1600)/22);for(let i=0;i<cols;i++)drops.push(Math.random()*(H/16)||0);}
  initDrops();window.addEventListener('resize',initDrops);

  // Circuit nodes
  const cnodes=Array.from({length:24},()=>({
    x:Math.random()*2000,y:Math.random()*1100,
    vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:2,pulse:Math.random()*Math.PI*2
  }));

  // Floating code props
  const snippets=['if(n>0)','return[];','void*ptr','O(log n)','for(;;)','#define','malloc()','int main','class {}','>>shift','&&','||','01101','10010','0xFF','NULL'];
  const codeProps=Array.from({length:20},(_,i)=>({
    x:Math.random()*2000,y:Math.random()*1100,
    vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.16,
    txt:snippets[i%snippets.length],op:Math.random()*.12+.04,sz:Math.random()*4+9
  }));

  // Orbital rings (decorative)
  const orbs=Array.from({length:4},(_,i)=>({
    cx:W*(.15+i*.25),cy:H*(.2+i*.18),
    rx:50+i*25,ry:25+i*12,
    speed:.0004+i*.0002,phase:Math.random()*Math.PI*2
  }));

  let tick=0;
  function frame(){
    ctx.clearRect(0,0,W,H);tick++;
    // Dual cool gradients
    const g=ctx.createRadialGradient(W*.3,H*.4,0,W*.3,H*.4,W*.6);
    g.addColorStop(0,'rgba(124,58,237,.07)');g.addColorStop(.5,'rgba(6,182,212,.05)');g.addColorStop(1,'transparent');
    ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    const g2=ctx.createRadialGradient(W*.8,H*.7,0,W*.8,H*.7,W*.4);
    g2.addColorStop(0,'rgba(6,182,212,.05)');g2.addColorStop(1,'transparent');
    ctx.fillStyle=g2;ctx.fillRect(0,0,W,H);

    // Pulsing circuit nodes + right-angle traces
    const t=Date.now();
    cnodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;n.pulse+=.025;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1;});
    cnodes.forEach((n,i)=>{
      cnodes.slice(i+1).forEach(m=>{
        const d=Math.hypot(n.x-m.x,n.y-m.y);
        if(d<120){ctx.beginPath();ctx.moveTo(n.x,n.y);ctx.lineTo(m.x,n.y);ctx.lineTo(m.x,m.y);ctx.strokeStyle=`rgba(6,182,212,${(1-d/120)*.14})`;ctx.lineWidth=.8;ctx.stroke();}
      });
      const r=n.r*(1+Math.sin(n.pulse)*.4);
      ctx.beginPath();ctx.arc(n.x,n.y,r,0,Math.PI*2);ctx.fillStyle='rgba(124,58,237,.42)';ctx.fill();
      // glow dot
      ctx.beginPath();ctx.arc(n.x,n.y,r*2.5,0,Math.PI*2);ctx.fillStyle='rgba(124,58,237,.06)';ctx.fill();
    });

    // Orbital ellipses
    orbs.forEach((o,i)=>{
      const ox=W*(.1+i*.22)+Math.sin(t*.0003+o.phase)*40;
      const oy=H*(.15+i*.16)+Math.cos(t*.0002+o.phase)*25;
      ctx.beginPath();ctx.ellipse(ox,oy,o.rx,o.ry,t*o.speed+o.phase,0,Math.PI*2);
      ctx.strokeStyle=`rgba(6,182,212,${.06+i*.012})`;ctx.lineWidth=.8;ctx.stroke();
      // electron dot on orbit
      const ea=t*o.speed*4+o.phase;
      const ex=ox+o.rx*Math.cos(ea);const ey=oy+o.ry*Math.sin(ea);
      ctx.beginPath();ctx.arc(ex,ey,3,0,Math.PI*2);ctx.fillStyle='rgba(6,182,212,.7)';ctx.fill();
      ctx.beginPath();ctx.arc(ex,ey,6,0,Math.PI*2);ctx.fillStyle='rgba(6,182,212,.15)';ctx.fill();
    });

    // Binary rain (subtle)
    if(tick%4===0){
      ctx.font='11px "Fira Code",monospace';
      drops.forEach((y,i)=>{ctx.fillStyle=`rgba(6,182,212,${Math.random()*.11+.03})`;ctx.fillText(Math.random()>.5?'1':'0',i*22,y*16);drops[i]=(y>H/16&&Math.random()>.97)?0:y+1;});
    }

    // Floating code props
    codeProps.forEach(s=>{
      s.x+=s.vx;s.y+=s.vy;
      if(s.x<-140)s.x=W+140;if(s.x>W+140)s.x=-140;if(s.y<-40)s.y=H+40;if(s.y>H+40)s.y=-40;
      ctx.font=`${s.sz}px "Fira Code",monospace`;ctx.fillStyle=`rgba(124,58,237,${s.op})`;ctx.fillText(s.txt,s.x,s.y);
    });

    // Grid dots
    for(let x=0;x<W;x+=55)for(let y=0;y<H;y+=55){ctx.beginPath();ctx.arc(x,y,1.2,0,Math.PI*2);ctx.fillStyle='rgba(6,182,212,.055)';ctx.fill();}

    requestAnimationFrame(frame);
  }
  frame();
})();
