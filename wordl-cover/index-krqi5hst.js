(()=>{var $=/iPad|iPhone/.test(navigator.userAgent),b="hardwareConcurrency"in navigator?navigator.hardwareConcurrency:$?2:8,P=Array.from({length:b},e=>new Worker("./worker-b32spzlx.js")),D=new Intl.NumberFormat,c=e=>D.format(e),k=/\r?\n/,{solutionsElem:d,solveFormElem:R,outputFormElem:H}=window,{customWordFile:v,solveButton:m,concurrency:y,wordList:i}=R,{wordCount:B,fiveLetterWordCount:q,normalizedWordCount:N,solutionCount:I,elapsedTime:S,workItems:z,workersWorking:F}=H,G=[...i].find(({value:e})=>e==="custom"),J=[...i].find(({value:e})=>e.match(/wordl/)),K=[...i].find(({value:e})=>e.match(/words_alpha/));for(let e=0;e<b;++e){let o=document.createElement("option");o.append(e+1),y.append(o)}y.value=b;v.addEventListener("change",e=>i.value="custom");G.addEventListener("change",e=>{i.value==="custom"&&!v.value&&v.click()});var C=e=>{let o=Date.now();d.innerHTML="",m.innerText="Solving...",I.innerText=0;let u=e.split(k).map(t=>t.trim().toLowerCase());B.innerText=c(u.length);let p=u.filter(t=>/^[a-z]{5}$/.test(t));q.innerText=c(p.length);let r=new Map;for(let t of p){let n=[...new Set(t)].sort().join("");if(n.length===5){let s=r.get(n);r.set(n,s?`${s}/${t}`:t)}}N.innerText=c(r.size);let a=[...r.keys()],L=Object.fromEntries(a.map(t=>[t,t.split("")])),M="a".charCodeAt(0),W=Array.from({length:26},(t,n)=>String.fromCharCode(M+n)),T=new Set(Object.values(L).flat());if(T.size!==26){let t=W.filter(n=>!T.includes(n));d.appendChild(document.createElement("li")).append(`Invalid word list. Missing letters: ${t.join(", ")}`);return}let h=new Set,f=[],l=W.map(t=>Object.fromEntries(Object.entries(L).filter(([n])=>!n.includes(t)))).sort((t,n)=>Object.keys(n).length-Object.keys(t).length),O=t=>{let n=t.sort().join(",");h.has(n)||(h.add(n),f.push(n.split(",").map(s=>r.get(s)).sort().join(", ")))},w=0,g=0,_=setInterval(requestAnimationFrame,60,t=>{for(let n=d.children.length;n<f.length;++n)d.appendChild(document.createElement("li")).append(f[n]);d.scrollTop=d.scrollHeight,I.innerText=c(h.size),z.value=l.length-g,S.innerText=`${c((Date.now()-o)/1e3)} seconds`});return new Promise(t=>{for(let[n,s]of P.entries()){if(n>=y.value)break;let x=j=>{switch(j.data.type){case"solution":{O(j.data.solution);break}case"completed":{++g,w<l.length?s.postMessage({type:"solve",options:l[w++]}):(F.value-=1,s.removeEventListener("message",x),g===l.length&&(m.disabled=!1,m.innerText="Solve",S.innerText=`${c((Date.now()-o)/1e3)} seconds`,z.value=0,clearInterval(_),t()));break}}};w<l.length&&(F.value=n+1,s.addEventListener("message",x),s.postMessage({type:"solve",options:l[w++]}))}})},E=e=>fetch(e).then(o=>o.text()),A=new FileReader;A.addEventListener("load",async e=>await C(e.target.result));m.addEventListener("click",async e=>{switch(e.preventDefault(),m.disabled=!0,m.innerText="Loading...",i.value){case"custom":{A.readAsText(v.files[0]);break}case"intersection":{let o=E(J.value),u=E(K.value),p=await o.then(a=>new Set(a.split(k))),r=await u.then(a=>a.split(k));await C(r.filter(a=>p.has(a)).join(`
`));break}default:{await C(await E(i.value));break}}});})();
//# sourceMappingURL=index-krqi5hst.js.map
