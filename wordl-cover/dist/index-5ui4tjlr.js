(()=>{var M=/iPad|iPhone/.test(navigator.userAgent),k="hardwareConcurrency"in navigator?navigator.hardwareConcurrency:M?2:8,A=Array.from({length:k},n=>new Worker("./worker-3go7lkoy.js")),D=new Intl.NumberFormat,c=n=>D.format(n),O=async n=>fetch(n).then(r=>r.text()),{customWordFileElem:E,customWordListElem:H,elapsedTimeElem:L,fiveLetterWordCountElem:$,normalizedWordCountElem:P,workersWorkingElem:w,workItemsElem:_,solutionCountElem:W,solutionsElem:v,wordCountElem:q,solveFormElem:m,solveButtonElem:d}=window;for(let n=0;n<k;++n){let r=document.createElement("option");r.append(n+1),m.concurrency.append(r)}m.concurrency.value=k;E.addEventListener("change",n=>m.wordlist.value="custom");H.addEventListener("change",n=>{m.wordlist.value==="custom"&&!E.value&&E.click()});var b=n=>{let r=Date.now();d.innerText="Solving...",v.innerHTML="",W.innerText="0";let u=n.split(/\r?\n/).map(e=>e.trim().toLowerCase());q.innerText=c(u.length);let f=u.filter(e=>/^[a-z]{5}$/.test(e));$.innerText=c(f.length);let l=new Map;for(let e of f){let t=[...e].sort().join("");if(!t.match(/(.)\1/)){let o=l.get(t);o?l.set(t,[o,e].join("/")):l.set(t,e)}}P.innerText=c(l.size);let x=[...l.keys()].reduce((e,t)=>(e[t]=t.split("").map(o=>`letter${o}`),e),{}),g=new Set,y=[],C="a".charCodeAt(0),j="z".charCodeAt(0),s=[];for(let e=C;e<=j;++e){let t=String.fromCharCode(e),o=Object.fromEntries(Object.entries(x).filter(([a])=>!a.includes(t)));s.push({options:o,givenOptions:[]})}s.sort((e,t)=>Math.random()-.5);let z=e=>{let t=e.sort().join(",");g.has(t)||(g.add(t),W.innerText=c(g.size),y.push(t.split(",").map(o=>l.get(o)).sort().join(", ")))},F=setInterval(e=>requestAnimationFrame(t=>{for(let a of y.slice(v.children.length)){let i=document.createElement("li");i.innerText=a,v.append(i)}let o=c((Date.now()-r)/1e3);L.innerText=`${o} seconds`,v.scrollTop=v.scrollHeight}),60),p=0,h=0,S=m.concurrency.value;return new Promise((e,t)=>{for(let[o,a]of A.entries()){if(o>=S)break;w.value=o+1;let i=T=>{switch(T.data.type){case"solution":{z(T.data.solution);break}case"completed":{if(++h<s.length)p<s.length?a.postMessage({type:"solve",...s[p++]}):(w.value-=1,a.removeEventListener("message",i));else if(h===s.length){let I=(Date.now()-r)/1e3;a.removeEventListener("message",i),w.value-=1,L.innerText=`${c(I)} seconds`,d.disabled=!1,d.innerHTML="Solve",clearInterval(F),e()}_.value=s.length-h;break}}};p<s.length&&(a.addEventListener("message",i),a.postMessage({type:"solve",...s[p++]}))}})};d.addEventListener("click",async n=>{n.preventDefault(),d.disabled=!0,d.innerText="Loading...";let r=Object.fromEntries([...new FormData(m)]);if(r.wordlist==="custom"){var u=new FileReader;u.onload=f=>b(event.target.result),u.readAsText(r.customWordFile)}else O(r.wordlist).then(b)});})();
//# sourceMappingURL=index-5ui4tjlr.js.map
