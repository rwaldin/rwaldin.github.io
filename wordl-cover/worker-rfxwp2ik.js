(()=>{var u=class{constructor(o,t){this.value=o,this.left=t??this,this.right=this.up=this.down=this}insertBelow(o){this.up=o,this.down=o.down,o.down.up=o.down=this}removeVertically(){this.up.down=this.down,this.down.up=this.up,this.column.rowCount--}reinsertVertically(){this.up.down=this.down.up=this,this.column.rowCount++}removeHorizontally(){this.left.right=this.right,this.right.left=this.left}reinsertHorizontally(){this.left.right=this.right.left=this}},m=class extends u{constructor(o,t){super(o,t),this.rowCount=0,this.column=this}removeHorizontally(){super.removeHorizontally(),this.header.columnCount--}reinsertHorizontally(){super.reinsertHorizontally(),this.header.columnCount++}},w=s=>{let o=s.column??s;o.removeHorizontally();for(let t=o.down;t!==o;t=t.down){o.header.rowCount--;for(let r=t.right;r!==t;r=r.right)r.removeVertically()}},g=s=>{let o=s.column??s;for(let t=o.up;t!==o;t=t.up){for(let r=t.left;r!==t;r=r.left)r.reinsertVertically();o.header.rowCount++}o.reinsertHorizontally()},v=s=>{let o;for(let t=s.right;t!==s;t=t.right){if(t.rowCount===0)return t;(!o||t.rowCount<o.rowCount)&&(o=t)}return o};function*y(s,o=[]){let t=[...new Set(Object.values(s).flat())],r=new u("columns");r.left=t.reduce((n,i)=>n.right=new m(i,n),r),r.left.right=r;let p=new Map;for(let n=r.right;n!==r;n=n.right)p.set(n.value,n),n.header=r;r.columnCount=t.length,r.rowCount=0;let f=new Map;for(let[n,i]of Object.entries(s)){let e=new u;e.left=i.reduce((l,h)=>l.right=new u(h,l),e),e.left.right=e;for(let l=e.right;l!==e;l=l.right){let h=p.get(l.value);l.insertBelow(h.up),l.column=h,++h.rowCount,l.option=n}f.set(n,e.right),e.removeHorizontally(),++r.rowCount}let C=(n,i)=>{for(let e=n.down;e!==n;e=e.down)if(e===i)return e},c=[];for(let n of o){let i=f.get(n);if(i&&C(i.column,i)){w(i);for(let e=i.right;e!==i;e=e.right)w(e);c.push(i.option),f.delete(n)}else return}let a;function*d(n){let i=v(r);if(i){if(i.rowCount===0)return}else{yield[...c],a=Date.now();return}Date.now()-a>500&&(yield,a=Date.now()),w(i);for(let e=i.down;e!==i;e=e.down){c.push(e.option);for(let l=e.right;l!==e;l=l.right)w(l);yield*d(n+1);for(let l=e.left;l!==e;l=l.left)g(l);c.pop()}g(i)}yield*d(o.length)}addEventListener("message",({data:{type:s,options:o}})=>{if(s==="solve"){for(let t of y(o))t&&postMessage({type:"solution",solution:t});postMessage({type:"completed"})}});})();
//# sourceMappingURL=worker-rfxwp2ik.js.map
