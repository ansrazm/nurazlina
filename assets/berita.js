(function(){
var $=function(i){return document.getElementById(i)},D=[];
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function safe(u){return /^https?:\/\//i.test(u)?u:''}
function jenis(){var s=$('f'),js=[];D.forEach(function(x){if(js.indexOf(x.j)<0)js.push(x.j)});s.innerHTML='<option value="">Semua jenis</option>'+js.map(function(j){return '<option>'+esc(j)+'</option>'}).join('')}
function render(){var q=$('q').value.toLowerCase(),f=$('f').value;
var a=D.filter(function(x){return(!f||x.j===f)&&(!q||[x.t,x.s,x.n,x.j].join(' ').toLowerCase().indexOf(q)>-1)});
$('list').innerHTML=a.length?a.map(function(x){var u=safe(x.u);
return '<article class="n"><div class="m"><span class="tag k">'+esc(x.j)+'</span>'+(x.s?'<span>'+esc(x.s)+'</span>':'')+(x.d?'<span>· '+esc(x.d)+'</span>':'')+'</div><h3>'+(u?'<a href="'+esc(u)+'" target="_blank" rel="noopener">'+esc(x.t)+'</a>':esc(x.t))+'</h3>'+(x.n?'<p>'+esc(x.n)+'</p>':'')+'</article>'}).join(''):'<div class="empty">Belum ada berita yang cocok.</div>'}
$('q').oninput=render;$('f').onchange=render;
fetch('/assets/berita.json',{cache:'no-cache'}).then(function(r){return r.json()}).then(function(x){D=x;jenis();render()}).catch(function(){$('list').innerHTML='<div class="empty">Gagal memuat berita.</div>'});
})();
