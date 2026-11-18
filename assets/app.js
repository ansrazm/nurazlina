(function(){
var P=location.pathname.replace(/\/$/,'').replace(/\.html$/,'').split('/').pop()||'';
var L=[['/','Beranda',''],['/profil','Profil','profil'],['/berita','Berita','berita']];
var nav=L.map(function(l){return '<a href="'+l[0]+'"'+(P===l[2]?' class="on" aria-current="page"':'')+'>'+l[1]+'</a>'}).join('');
document.getElementById('hd').innerHTML='<header><div class="w"><a class="br" href="/"><span class="lg">NA</span><span><small>Akuntansi &amp; Keuangan Sektor Publik</small><b>Dr. Nur Azlina</b></span></a><button class="bg" aria-label="Menu">☰</button><nav>'+nav+'</nav></div></header>';
document.getElementById('ft').innerHTML='<footer><div class="w"><div class="fg"><div><b>Nur Azlina, S.E., M.Si., Ak., CA., CGAA., CertIPSAS., PhD</b><br>Dosen Akuntansi, Universitas Riau</div><div><a href="https://wa.me/6281378542910">WhatsApp +62 813 7854 2910</a><br><a href="mailto:nur.azlina@lecturer.unri.ac.id">nur.azlina@lecturer.unri.ac.id</a></div></div><p style="margin:18px 0 0">© 2026. Situs pribadi.</p></div></footer>';
var b=document.querySelector('.bg'),n=document.querySelector('nav');b.onclick=function(){n.classList.toggle('open')};
})();
