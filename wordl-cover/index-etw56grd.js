(()=>{var H=/iPad|iPhone/.test(navigator.userAgent),j="hardwareConcurrency"in navigator?navigator.hardwareConcurrency:H?2:8,P=Array.from({length:j},t=>new Worker("./worker-uy3smw7a.js")),B=new Intl.NumberFormat,i=t=>B.format(t),k=async t=>fetch(t).then(o=>o.text()),T=/\r?\n/,{solutionsElem:a,solveFormElem:A,outputFormElem:R}=window,{wordCount:q,fiveLetterWordCount:N,normalizedWordCount:G,solutionCount:I,elapsedTime:z,workItems:J,workersWorking:W}=R,{customWordFile:b,solveButton:c,concurrency:x,wordList:p}=A,K=[...p].find(({value:t})=>t==="custom"),Q=[...p].find(({value:t})=>t.match(/wordl/)),U=[...p].find(({value:t})=>t.match(/words_alpha/));for(let t=0;t<j;++t){let o=document.createElement("option");o.append(t+1),x.append(o)}x.value=j;b.addEventListener("change",t=>p.value="custom");K.addEventListener("change",t=>{p.value==="custom"&&!b.value&&b.click()});var y=t=>{let o=Date.now();c.innerText="Solving...",a.innerHTML="",I.innerText=0;let d=t.split(T).map(e=>e.trim().toLowerCase());q.innerText=i(d.length);let m=d.filter(e=>/^[a-z]{5}$/.test(e));N.innerText=i(m.length);let s=new Map;for(let e of m){let n=[...e].sort().join("");if(!n.match(/(.)\1/)){let r=s.get(n);s.set(n,r?`${r}/${e}`:e)}}G.innerText=i(s.size);let f="a".charCodeAt(0),w=[...s.keys()],v=Object.fromEntries(w.map(e=>[e,e.split("")])),F=new Set(Object.values(v).flat());if(F.size!==26){let e=Array.from({length:26},(n,r)=>String.fromCharCode(f+r)).filter(n=>!F.includes(n));a.appendChild(document.createElement("li")).append(`Invalid word list. Missing letters: ${e.join(", ")}`);return}let g=new Set,E=[],l=Array.from({length:26},(e,n)=>String.fromCharCode(f+n)).map(e=>Object.fromEntries(Object.entries(v).filter(([n])=>!n.includes(e)))),M=e=>{let n=e.sort().join(",");g.has(n)||(g.add(n),I.innerText=i(g.size),E.push(n.split(",").map(r=>s.get(r)).sort().join(", ")))},D=e=>{for(let n=a.children.length;n<E.length;++n)a.appendChild(document.createElement("li")).append(E[n]);z.innerText=`${i((Date.now()-o)/1e3)} seconds`,a.scrollTop=a.scrollHeight},_=setInterval(e=>requestAnimationFrame(D),60),h=0,C=0,$=x.value;return new Promise((e,n)=>{for(let[r,u]of P.entries()){if(r>=$)break;W.value=r+1;let L=S=>{switch(S.data.type){case"solution":{M(S.data.solution);break}case"completed":{if(++C<l.length)h<l.length?u.postMessage({type:"solve",options:l[h++]}):(W.value-=1,u.removeEventListener("message",L));else if(C===l.length){let O=(Date.now()-o)/1e3;u.removeEventListener("message",L),W.value-=1,z.innerText=`${i(O)} seconds`,c.disabled=!1,c.innerHTML="Solve",clearInterval(_),e()}J.value=l.length-C;break}}};h<l.length&&(u.addEventListener("message",L),u.postMessage({type:"solve",options:l[h++]}))}})};c.addEventListener("click",async t=>{t.preventDefault(),c.disabled=!0,c.innerText="Loading...";let o=Object.fromEntries([...new FormData(A)]);if(o.wordList==="custom"){var d=new FileReader;d.onload=m=>y(event.target.result),d.readAsText(o.customWordFile)}else o.wordList==="intersection"?k(Q.value).then(m=>{let s=m.split(T);k(U.value).then(f=>{let w=new Set(f.split(T));y(s.filter(v=>w.has(v)).join(`
`))})}):k(o.wordList).then(y)});})();
//# sourceMappingURL=index-etw56grd.js.map
