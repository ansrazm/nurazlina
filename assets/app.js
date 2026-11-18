(function(){
var P=location.pathname.replace(/\/$/,'').replace(/\.html$/,'').split('/').pop()||'';
var L=[['/','Beranda',''],['/profil','Profil','profil'],['/berita','Berita','berita']];
var nav=L.map(function(l){return '<a href="'+l[0]+'"'+(P===l[2]?' class="on" aria-current="page"':'')+'>'+l[1]+'</a>'}).join('');
document.getElementById('hd').innerHTML='<header><div class="w"><a class="br" href="/"><span class="lg">NA</span><span><small>Akuntansi &amp; Keuangan Sektor Publik</small><b>Nur Azlina, PhD</b></span></a><button class="bg" aria-label="Menu">☰</button><nav>'+nav+'</nav></div></header>';
document.getElementById('ft').innerHTML='<footer><div class="w"><div class="fg"><div><b>Nur Azlina, S.E., M.Si., Ak., CA., CGAA., CertIPSAS., PhD</b><br>Dosen Akuntansi, Universitas Riau</div><div><a href="https://wa.me/6281378542910">WhatsApp +62 813 7854 2910</a><br><a href="mailto:nur.azlina@lecturer.unri.ac.id">nur.azlina@lecturer.unri.ac.id</a></div></div><p style="margin:18px 0 0">© 2026. Situs pribadi.</p></div></footer>';
var b=document.querySelector('.bg'),n=document.querySelector('nav');b.onclick=function(){n.classList.toggle('open')};
})();
(function(){
var d=document,de=d.documentElement;de.classList.add('js');
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
var h=d.querySelector('header'),pg=d.createElement('div');pg.className='pg';d.body.appendChild(pg);
function sc(){h&&h.classList.toggle('sc',scrollY>8);var m=de.scrollHeight-innerHeight;pg.style.transform='scaleX('+(m>0?scrollY/m:0)+')'}
sc();addEventListener('scroll',sc,{passive:true});
var rv=d.querySelectorAll('.rv');
if('IntersectionObserver' in window&&!reduce){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});rv.forEach(function(el){io.observe(el)})}else{rv.forEach(function(el){el.classList.add('in')})}
d.querySelectorAll('[data-count]').forEach(function(el){var to=+el.dataset.count,suf=el.dataset.suf||'';if(reduce){el.textContent=to+suf;return}el.textContent='0'+suf;var s=false;
new IntersectionObserver(function(es,o){if(es[0].isIntersecting&&!s){s=true;o.disconnect();var t0=null;(function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1400,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(to*e)+suf;if(p<1)requestAnimationFrame(f)})(performance.now())}},{threshold:.6}).observe(el)});
var r=d.querySelector('.rt b');
if(r&&!reduce){var w=r.dataset.w.split('|'),i=0;r.innerHTML=w[0];setInterval(function(){r.classList.add('out');setTimeout(function(){i=(i+1)%w.length;r.innerHTML=w[i];r.classList.remove('out')},300)},2600)}
})();
