/*!
 * @license
 * Copyright 2020 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */export class ExpandableRowsTableController{constructor(t,e){this.table=t;this.toggleAll=e;this.expandAllItems=()=>{this.toggles.map(t=>t.setAttribute("aria-expanded","true")),this.update()};this.collapseAllItems=()=>{this.toggles.map(t=>t.setAttribute("aria-expanded","false")),this.update()};this.update=()=>{this.updateVisibleItems(),setTimeout(()=>this.updateGlobalToggle())};this.rows=Array.from(t.querySelectorAll("[data-aria-controls]")),this.toggles=Array.from(this.table.querySelectorAll("[aria-expanded]")),this.setAttributes(),this.attachEventListeners(),this.update()}setAttributes(){for(const t of["data-aria-controls","data-aria-labelledby","data-id"])this.table.querySelectorAll(`[${t}]`).forEach(e=>{e.setAttribute(t.replace("data-",""),e.getAttribute(t)??""),e.removeAttribute(t)})}attachEventListeners(){this.rows.forEach(t=>{t.addEventListener("click",e=>{this.handleToggleClick(e)})}),this.toggleAll?.addEventListener("click",()=>{this.expandAllItems()}),document.addEventListener("keydown",t=>{(t.ctrlKey||t.metaKey)&&t.key==="f"&&this.expandAllItems()})}handleToggleClick(t){let e=t.currentTarget;e?.hasAttribute("aria-expanded")||(e=this.table.querySelector(`button[aria-controls="${e?.getAttribute("aria-controls")}"]`));const l=e?.getAttribute("aria-expanded")==="true";e?.setAttribute("aria-expanded",l?"false":"true"),t.stopPropagation(),this.update()}updateVisibleItems(){this.rows.map(t=>{const e=t?.getAttribute("aria-expanded")==="true";t?.getAttribute("aria-controls")?.trimEnd().split(" ")?.map(s=>{const a=document.getElementById(`${s}`);e?(a?.classList.add("visible"),a?.classList.remove("hidden")):(a?.classList.add("hidden"),a?.classList.remove("visible"))})})}updateGlobalToggle(){if(!this.toggleAll)return;this.rows.some(e=>e.hasAttribute("aria-expanded"))&&(this.toggleAll.style.display="block"),this.toggles.some(e=>e.getAttribute("aria-expanded")==="false")?(this.toggleAll.innerText="Expand all",this.toggleAll.onclick=this.expandAllItems):(this.toggleAll.innerText="Collapse all",this.toggleAll.onclick=this.collapseAllItems)}}
//# sourceMappingURL=table.js.map
