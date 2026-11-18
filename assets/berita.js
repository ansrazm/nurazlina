(function(){
var KEY='na-berita-v1';
var SEED=[
{id:'s1',t:'Nur Azlina terpilih sebagai anggota Senat non-guru besar Jurusan Akuntansi FEB Unri 2024–2028',u:'https://prodis1akt.feb.unri.ac.id/en/berita/selamat-dan-sukses-atas-terpilihnya-sebagai-anggota-senat-non-guru-besar-jurusan-akuntansi-feb-unri-periode-2024-2028',s:'Prodi S1 Akuntansi FEB Unri',d:'19 April 2024',j:'Kampus',n:'Pemilihan dilakukan oleh seluruh dosen jurusan. Terpilih bersama Julita, SE., M.Si., Ak.'},
{id:'s2',t:'Pelatihan Penerapan Kebijakan Akuntansi Pemerintah Kabupaten Rokan Hilir',u:'https://abdiinsani.unram.ac.id/index.php/jurnal/article/download/1394/810',s:'Jurnal Abdi Insani Vol. 11 No. 1',d:'Maret 2024',j:'Publikasi',n:'Pengabdian masyarakat bersama tim Jurusan Akuntansi FEB Unri; pelatihan bagi pegawai penatausahaan keuangan sesuai PP 71/2010 dan Permendagri 77/2020.'},
{id:'s3',t:'Pelatihan Penerapan Kebijakan Akuntansi Pemda sesuai PP 71/2010 dan PP 12/2019 di Rokan Hilir',u:'https://garuda.kemdiktisaintek.go.id/documents/detail/2119543',s:'Diklat Review (Garuda)',d:'26 April 2021',j:'Publikasi',n:'Ditulis bersama Desmiyawati dan Mukhlisin.'},
{id:'s4',t:'Pelatihan penyusunan laporan keuangan UMKM di Kabupaten Kampar',u:'https://garuda.kemdiktisaintek.go.id/documents/detail/1866380',s:'Unri Conference Series: Community Engagement Vol. 2',d:'2020',j:'Kegiatan',n:'Seminar Nasional Pemberdayaan Masyarakat.'},
{id:'s5',t:'Pelatihan Pemasaran Produk BUMDesa Berbasis Digital di Kabupaten Bengkalis',u:'https://garuda.kemdiktisaintek.go.id/author/view/3931384',s:'Garuda',d:'',j:'Kegiatan',n:'Bersama Desmiyawati, Al Azhar A, Suci Nurulita, Sinta Ramaiyanti, Fitri Humairoh, dan Taqiyuddin Amri.'},
{id:'s6',t:'Bimbingan Teknis Penyusunan Laporan Keuangan Penerapan SAP, Pemkab Kepulauan Meranti',u:'https://garuda.kemdiktisaintek.go.id/author/view/3931384',s:'Garuda',d:'',j:'Kegiatan',n:'Bersama Safrizal dan Wirdayani Wahab.'},
{id:'s7',t:'Pengaruh Good Governance dan Pengendalian Intern terhadap Kinerja Pemerintah Kabupaten Pelalawan',u:'https://garuda.kemdiktisaintek.go.id/author/view/3301024?page=1',s:'Jurnal Akuntansi Universitas Jember Vol. 12 No. 2',d:'2014',j:'Publikasi',n:'Ditulis bersama Ira Amelia.'},
{id:'s8',t:'Analisis Faktor yang Mempengaruhi Penyerapan Anggaran Pemda Kabupaten Bengkalis',u:'https://garuda.kemdiktisaintek.go.id/author/view/3931384',s:'Jurnal Akuntansi Keuangan dan Bisnis Vol. 13 No. 2',d:'2020',j:'Publikasi',n:'Bersama Kennedy, Julita, dan Suci Nurulita.'},
{id:'s9',t:'Mata kuliah Akuntansi Pemerintah (Pascasarjana Akuntansi FEB Unri): tim dosen pengampu',u:'https://pasca-akuntansi.feb.unri.ac.id/wp-content/uploads/2024/05/Akuntansi-Pemerintah.pdf',s:'Pasca Akuntansi FEB Unri',d:'2024',j:'Kampus',n:'Rencana pembelajaran; dosen pengampu bersama Dr. Taufeni Taufik.'}
];
var $=function(i){return document.getElementById(i)};
function load(){try{var r=localStorage.getItem(KEY);if(r)return JSON.parse(r)}catch(e){}return SEED.slice()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(D))}catch(e){}}
var D=load();
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function safe(u){return /^https?:\/\//i.test(u)?u:''}
function jenis(){var s=$('f'),v=s.value,js=[];D.forEach(function(x){if(js.indexOf(x.j)<0)js.push(x.j)});
s.innerHTML='<option value="">Semua jenis</option>'+js.map(function(j){return '<option>'+esc(j)+'</option>'}).join('');s.value=js.indexOf(v)<0?'':v}
function render(){var q=$('q').value.toLowerCase(),f=$('f').value;
var a=D.filter(function(x){return(!f||x.j===f)&&(!q||[x.t,x.s,x.n,x.j].join(' ').toLowerCase().indexOf(q)>-1)});
$('list').innerHTML=a.length?a.map(function(x){var u=safe(x.u);
return '<article class="n"><div class="m"><span class="tag k">'+esc(x.j)+'</span>'+(x.s?'<span>'+esc(x.s)+'</span>':'')+(x.d?'<span>· '+esc(x.d)+'</span>':'')+'</div><h3>'+(u?'<a href="'+esc(u)+'" target="_blank" rel="noopener">'+esc(x.t)+'</a>':esc(x.t))+'</h3>'+(x.n?'<p>'+esc(x.n)+'</p>':'')+'<div class="a"><button data-del="'+esc(x.id)+'">Hapus</button></div></article>'}).join(''):'<div class="empty">Belum ada berita yang cocok.</div>'}
$('q').oninput=render;$('f').onchange=render;
$('list').onclick=function(e){var id=e.target.getAttribute('data-del');if(id&&confirm('Hapus berita ini?')){D=D.filter(function(x){return x.id!==id});save();jenis();render()}};
$('add').onclick=function(){$('frm').reset();$('dlg').showModal()};$('cx').onclick=function(){$('dlg').close()};
$('frm').onsubmit=function(e){e.preventDefault();D.unshift({id:'u'+Date.now(),t:$('t').value.trim(),u:$('u').value.trim(),s:$('s').value.trim(),d:$('d').value.trim(),j:$('j').value,n:$('n').value.trim()});save();$('dlg').close();jenis();render()};
$('exp').onclick=function(){var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(D,null,1)],{type:'application/json'}));a.download='berita-nur-azlina.json';a.click()};
$('imp').onclick=function(){$('file').click()};
$('file').onchange=function(){var f=this.files[0];if(!f)return;var r=new FileReader();r.onload=function(){try{var x=JSON.parse(r.result);if(!Array.isArray(x))throw 0;D=x.filter(function(i){return i&&i.t}).map(function(i,k){i.id=i.id||'i'+k;return i});save();jenis();render()}catch(e){alert('File tidak valid.')}};r.readAsText(f)};
$('rst').onclick=function(){if(confirm('Kembalikan ke daftar awal? Berita tambahan akan hilang.')){D=SEED.slice();save();jenis();render()}};
jenis();render();
})();
