(()=>{var h=class{constructor(t,o){this.value=t,this.left=o??this,this.right=this.up=this.down=this}insertBelow(t){this.up=t,this.down=t.down,t.down.up=t.down=this}removeVertically(){this.up.down=this.down,this.down.up=this.up,this.column.rowCount--}reinsertVertically(){this.up.down=this.down.up=this,this.column.rowCount++}removeHorizontally(){this.left.right=this.right,this.right.left=this.left}reinsertHorizontally(){this.left.right=this.right.left=this}},p=class extends h{constructor(t,o){super(t,o),this.rowCount=0,this.column=this}},w=l=>{let t=l.column??l;t.removeHorizontally();for(let o=t.down;o!==t;o=o.down){t.header.rowCount--;for(let r=o.right;r!==o;r=r.right)r.removeVertically()}},g=l=>{let t=l.column??l;for(let o=t.up;o!==t;o=o.up){for(let r=o.left;r!==o;r=r.left)r.reinsertVertically();t.header.rowCount++}t.reinsertHorizontally()},C=l=>{let t;for(let o=l.right;o!==l;o=o.right){if(o.rowCount===0)return o;(!t||o.rowCount<t.rowCount)&&(t=o)}return t};function*y(l,t=[]){let o=[...new Set(Object.values(l).flat())],r=new h("columns");r.left=o.reduce((n,i)=>n.right=new p(i,n),r),r.left.right=r;let d=new Map;for(let n=r.right;n!==r;n=n.right)d.set(n.value,n),n.header=r;r.rowCount=0;let f=new Map;for(let[n,i]of Object.entries(l)){let e=new h;e.left=i.reduce((s,u)=>s.right=new h(u,s),e),e.left.right=e;for(let s=e.right;s!==e;s=s.right){let u=d.get(s.value);s.insertBelow(u.up),s.column=u,++u.rowCount,s.option=n}f.set(n,e.right),e.removeHorizontally(),++r.rowCount}let v=(n,i)=>{for(let e=n.down;e!==n;e=e.down)if(e===i)return e},c=[];for(let n of t){let i=f.get(n);if(i&&v(i.column,i)){w(i);for(let e=i.right;e!==i;e=e.right)w(e);c.push(i.option),f.delete(n)}else return}let a;function*m(n){let i=C(r);if(i){if(i.rowCount===0)return}else{yield[...c],a=Date.now();return}Date.now()-a>500&&(yield,a=Date.now()),w(i);for(let e=i.down;e!==i;e=e.down){c.push(e.option);for(let s=e.right;s!==e;s=s.right)w(s);yield*m(n+1);for(let s=e.left;s!==e;s=s.left)g(s);c.pop()}g(i)}yield*m(t.length)}addEventListener("message",({data:{type:l,options:t}})=>{if(l==="solve"){for(let o of y(t))o&&postMessage({type:"solution",solution:o});postMessage({type:"completed"})}});})();
//# sourceMappingURL=worker-plnqeusz.js.map
