(()=>{var h=class{constructor(t,e){this.value=t,this.left=e??this,this.right=this.up=this.down=this}insertBelow(t){this.up=t,this.down=t.down,t.down.up=t.down=this,this.column=t.column,this.column.rowCount++}removeVertically(){this.up.down=this.down,this.down.up=this.up,this.column.rowCount--}reinsertVertically(){this.up.down=this.down.up=this,this.column.rowCount++}removeHorizontally(){this.left.right=this.right,this.right.left=this.left}reinsertHorizontally(){this.left.right=this.right.left=this}},d=class extends h{constructor(t,e){super(t,e),this.rowCount=0,this.column=this}},c=l=>{let t=l.column;t.removeHorizontally();for(let e=t.down;e!==t;e=e.down){t.header.rowCount--;for(let r=e.right;r!==e;r=r.right)r.removeVertically()}},g=l=>{let t=l.column;for(let e=t.up;e!==t;e=e.up){for(let r=e.left;r!==e;r=r.left)r.reinsertVertically();t.header.rowCount++}t.reinsertHorizontally()},C=l=>{let t;for(let e=l.right;e!==l;e=e.right){if(e.rowCount===0)return e;(!t||e.rowCount<t.rowCount)&&(t=e)}return t};function*y(l,t=[]){let e=[...new Set(Object.values(l).flat())],r=new h("columns");r.left=e.reduce((n,i)=>n.right=new d(i,n),r),r.left.right=r;let p=new Map;for(let n=r.right;n!==r;n=n.right)p.set(n.value,n),n.header=r;r.rowCount=0;let w=new Map;for(let[n,i]of Object.entries(l)){let o=new h;o.left=i.reduce((s,a)=>s.right=new h(a,s),o),o.left.right=o;for(let s=o.right;s!==o;s=s.right){let a=p.get(s.value);s.insertBelow(a.up),s.option=n}w.set(n,o.right),o.removeHorizontally(),++r.rowCount}let v=(n,i)=>{for(let o=n.down;o!==n;o=o.down)if(o===i)return o},u=[];for(let n of t){let i=w.get(n);if(i&&v(i.column,i)){c(i);for(let o=i.right;o!==i;o=o.right)c(o);u.push(i.option),w.delete(n)}else return}let f;function*m(n){let i=C(r);if(i){if(i.rowCount===0)return}else{yield[...u],f=Date.now();return}Date.now()-f>500&&(yield,f=Date.now()),c(i);for(let o=i.down;o!==i;o=o.down){u.push(o.option);for(let s=o.right;s!==o;s=s.right)c(s);yield*m(n+1);for(let s=o.left;s!==o;s=s.left)g(s);u.pop()}g(i)}yield*m(t.length)}addEventListener("message",l=>{if(l.data.type==="solve"){for(let t of y(l.data.options))t&&postMessage({type:"solution",solution:t});postMessage({type:"completed"})}});})();
//# sourceMappingURL=worker-b32spzlx.js.map
