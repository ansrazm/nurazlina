const crypto=require('crypto');
const h=s=>crypto.createHash('sha256').update(String(s||'')).digest();
const clean=a=>a.slice(0,500).map((x,i)=>({
 id:String(x.id||'n'+Date.now()+i).slice(0,40),
 t:String(x.t||'').slice(0,300),
 u:/^https?:\/\//i.test(x.u||'')?String(x.u).slice(0,1000):'',
 s:String(x.s||'').slice(0,200),d:String(x.d||'').slice(0,60),
 j:String(x.j||'Berita').slice(0,30),n:String(x.n||'').slice(0,1000)})).filter(x=>x.t);
module.exports=async(req,res)=>{
 if(req.method!=='POST')return res.status(405).json({error:'POST only'});
 const b=typeof req.body==='string'?JSON.parse(req.body||'{}'):(req.body||{});
 const pw=process.env.ADMIN_PASSWORD,tok=process.env.GITHUB_TOKEN,repo=process.env.GITHUB_REPO||'ansrazm/nurazlina';
 if(!pw||!tok)return res.status(500).json({error:'Server belum dikonfigurasi (ADMIN_PASSWORD / GITHUB_TOKEN).'});
 if(!crypto.timingSafeEqual(h(b.password),h(pw)))return res.status(401).json({error:'Password salah.'});
 if(b.action==='check')return res.json({ok:true});
 if(!Array.isArray(b.items))return res.status(400).json({error:'Data tidak valid.'});
 const url=`https://api.github.com/repos/${repo}/contents/assets/berita.json`;
 const H={Authorization:'Bearer '+tok,Accept:'application/vnd.github+json','User-Agent':'nurazlina-admin'};
 const cur=await fetch(url+'?ref=main',{headers:H});
 if(!cur.ok)return res.status(502).json({error:'Gagal membaca repo GitHub ('+cur.status+').'});
 const sha=(await cur.json()).sha;
 const content=Buffer.from(JSON.stringify(clean(b.items),null,1)).toString('base64');
 const put=await fetch(url,{method:'PUT',headers:H,body:JSON.stringify({message:'update berita (admin)',content,sha,branch:'main'})});
 if(!put.ok)return res.status(502).json({error:'Gagal menyimpan ke GitHub ('+put.status+').'});
 res.json({ok:true});
};
