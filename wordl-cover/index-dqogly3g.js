(()=>{var M=/iPad|iPhone/.test(navigator.userAgent),k="hardwareConcurrency"in navigator?navigator.hardwareConcurrency:M?2:8,A=Array.from({length:k},n=>new Worker("./worker-3go7lkoy.js")),D=new Intl.NumberFormat,c=n=>D.format(n),O=async n=>fetch(n).then(r=>r.text()),{customWordFileElem:E,customWordListElem:H,elapsedTimeElem:W,fiveLetterWordCountElem:$,normalizedWordCountElem:P,workersWorkingElem:g,workItemsElem:_,solutionCountElem:b,solutionsElem:u,wordCountElem:q,solveFormElem:d,solveButtonElem:v}=window;for(let n=0;n<k;++n){let r=document.createElement("option");r.append(n+1),d.concurrency.append(r)}d.concurrency.value=k;E.addEventListener("change",n=>d.wordlist.value="custom");H.addEventListener("change",n=>{d.wordlist.value==="custom"&&!E.value&&E.click()});var C=n=>{let r=Date.now();v.disabled=!0,v.innerText="Solving...",u.innerHTML="",b.innerText="0";let m=n.split(/\r?\n/).map(e=>e.trim().toLowerCase());q.innerText=c(m.length);let f=m.filter(e=>/^[a-z]{5}$/.test(e));$.innerText=c(f.length);let a=new Map;for(let e of f){let t=[...e].sort().join("");if(!t.match(/(.)\1/)){let o=a.get(t);o?a.set(t,[o,e].join("/")):a.set(t,e)}}P.innerText=c(a.size);let L=[...a.keys()].reduce((e,t)=>(e[t]=t.split("").map(o=>`letter${o}`),e),{}),h=new Set,y=[],x="a".charCodeAt(0),j="z".charCodeAt(0),s=[];for(let e=x;e<=j;++e){let t=String.fromCharCode(e),o=Object.fromEntries(Object.entries(L).filter(([l])=>!l.includes(t)));s.push({options:o,givenOptions:[]})}s.sort((e,t)=>Math.random()-.5);let z=e=>{let t=e.sort().join(",");h.has(t)||(h.add(t),b.innerText=c(h.size),y.push(t.split(",").map(o=>a.get(o)).sort().join(", ")))},F=setInterval(e=>requestAnimationFrame(t=>{for(let l of y.slice(u.children.length)){let i=document.createElement("li");i.innerText=l,u.append(i)}let o=c((Date.now()-r)/1e3);W.innerText=`${o} seconds`,u.scrollTop=u.scrollHeight}),60),p=0,w=0,S=d.concurrency.value;return new Promise((e,t)=>{for(let[o,l]of A.entries()){if(o>=S)break;g.value=o+1;let i=T=>{switch(T.data.type){case"solution":{z(T.data.solution);break}case"completed":{if(++w<s.length)p<s.length?l.postMessage({type:"solve",...s[p++]}):(g.value-=1,l.removeEventListener("message",i));else if(w===s.length){let I=(Date.now()-r)/1e3;l.removeEventListener("message",i),g.value-=1,W.innerText=`${c(I)} seconds`,v.disabled=!1,v.innerHTML="Solve",clearInterval(F),e()}_.value=s.length-w;break}}};p<s.length&&(l.addEventListener("message",i),l.postMessage({type:"solve",...s[p++]}))}})};v.addEventListener("click",async n=>{n.preventDefault();let r=Object.fromEntries([...new FormData(d)]);if(r.wordlist==="custom"){var m=new FileReader;m.onload=f=>C(event.target.result),m.readAsText(r.customWordFile)}else O(r.wordlist).then(C)});})();
//# sourceMappingURL=index-dqogly3g.js.map