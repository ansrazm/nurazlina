(function(){
var el=document.getElementById('latest');if(!el)return;
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function safe(u){return /^https?:\/\//i.test(u)?u:''}
fetch('/assets/berita.json',{cache:'no-cache'}).then(function(r){return r.json()}).then(function(D){
el.innerHTML=D.slice(0,3).map(function(x){var u=safe(x.u);
return '<article class="n"><div class="m"><span class="tag k">'+esc(x.j)+'</span>'+(x.d?'<span>'+esc(x.d)+'</span>':'')+'</div><h3>'+(u?'<a href="'+esc(u)+'" target="_blank" rel="noopener">'+esc(x.t)+'</a>':esc(x.t))+'</h3>'+(x.s?'<p class="src">'+esc(x.s)+'</p>':'')+(x.n?'<p class="cl">'+esc(x.n)+'</p>':'')+'</article>'}).join('')||'<div class="empty" style="grid-column:1/-1">Belum ada berita.</div>'
}).catch(function(){el.innerHTML='<div class="empty" style="grid-column:1/-1">Gagal memuat berita.</div>'});
})();
