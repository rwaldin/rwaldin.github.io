(()=>{var M=/iPad|iPhone/.test(navigator.userAgent),k="hardwareConcurrency"in navigator?navigator.hardwareConcurrency:M?2:8,O=Array.from({length:k},n=>new Worker("./worker-plnqeusz.js")),_=new Intl.NumberFormat,u=n=>_.format(n),E=/\r?\n/,{solutionsElem:c,solveFormElem:$,outputFormElem:D}=window,{customWordFile:w,solveButton:d,concurrency:C,wordList:a}=$,{wordCount:H,fiveLetterWordCount:P,normalizedWordCount:R,solutionCount:x,elapsedTime:B,workItems:q,workersWorking:I}=D,N=[...a].find(({value:n})=>n==="custom"),G=[...a].find(({value:n})=>n.match(/wordl/)),J=[...a].find(({value:n})=>n.match(/words_alpha/));for(let n=0;n<k;++n){let o=document.createElement("option");o.append(n+1),C.append(o)}C.value=k;w.addEventListener("change",n=>a.value="custom");N.addEventListener("change",n=>{a.value==="custom"&&!w.value&&w.click()});var f=n=>{let o=Date.now();c.innerHTML="",d.innerText="Solving...",x.innerText=0;let l=n.split(E).map(e=>e.trim().toLowerCase());H.innerText=u(l.length);let s=l.filter(e=>/^[a-z]{5}$/.test(e));P.innerText=u(s.length);let m=new Map;for(let e of s){let t=[...new Set(e)].sort().join("");if(t.length===5){let r=m.get(t);m.set(t,r?`${r}/${e}`:e)}}R.innerText=u(m.size);let S=[...m.keys()],b=Object.fromEntries(S.map(e=>[e,e.split("")])),z="a".charCodeAt(0),y=Array.from({length:26},(e,t)=>String.fromCharCode(z+t)),L=new Set(Object.values(b).flat());if(L.size!==26){let e=y.filter(t=>!L.includes(t));c.appendChild(document.createElement("li")).append(`Invalid word list. Missing letters: ${e.join(", ")}`);return}let h=new Set,v=[],i=y.map(e=>Object.fromEntries(Object.entries(b).filter(([t])=>!t.includes(e)))).sort((e,t)=>Object.keys(t).length-Object.keys(e).length),F=e=>{let t=e.sort().join(",");h.has(t)||(h.add(t),v.push(t.split(",").map(r=>m.get(r)).sort().join(", ")))},A=setInterval(requestAnimationFrame,60,e=>{for(let t=c.children.length;t<v.length;++t)c.appendChild(document.createElement("li")).append(v[t]);B.innerText=`${u((Date.now()-o)/1e3)} seconds`,x.innerText=u(h.size),c.scrollTop=c.scrollHeight}),p=0,W=0;return new Promise(e=>{for(let[t,r]of O.entries()){if(t>=C.value)break;let T=j=>{switch(j.data.type){case"solution":{F(j.data.solution);break}case"completed":{q.value=i.length-++W,p<i.length?r.postMessage({type:"solve",options:i[p++]}):(I.value-=1,r.removeEventListener("message",T),W===i.length&&(d.disabled=!1,d.innerText="Solve",clearInterval(A),e()));break}}};p<i.length&&(I.value=t+1,r.addEventListener("message",T),r.postMessage({type:"solve",options:i[p++]}))}})},g=n=>fetch(n).then(o=>o.text());d.addEventListener("click",async n=>{switch(n.preventDefault(),d.disabled=!0,d.innerText="Loading...",a.value){case"custom":{let o=new FileReader;o.addEventListener("load",async l=>await f(l.target.result)),o.readAsText(w.files[0]);break}case"intersection":{let o=await g(G.value).then(s=>s.split(E)),l=await g(J.value).then(s=>new Set(s.split(E)));await f(o.filter(s=>l.has(s)).join(`
`));break}default:await f(await g(a.value))}});})();
//# sourceMappingURL=index-enamp2cm.js.map
