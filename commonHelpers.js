import{S as f}from"./assets/vendor-5af972a3.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="43388201-d3d6dfd281aefcb5631baa551";function h(r){const a=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return r?fetch(`https://pixabay.com/api/?${a.toString()}`).then(s=>{if(!s.ok)throw Error(s.status);return s.json()}).then(s=>s.hits).catch(s=>(console.log(s),null)):Promise.reject(new Error("Enter a query"))}function y(r){const a=document.querySelector(".gallery"),s=r.map(({webformatURL:t,largeImageURL:i,tags:l,likes:m,views:p,comments:u,downloads:d})=>`<li class="image-card">
          <a class="img-link" href=${i}>
            <div class="gallery-image">
              <img class="image" src=${t} alt="${l}">
            </div>
            <div class="img-caption">
                <ul class="img-stats">
                    <li class="stat-item">
                        <p class="stat-name">Likes</p>
                        <span>${m}</span>
                    </li>
                    <li class="stat-item">
                        <p class="stat-name">Views</p>
                        <span>${p}</span>
                    </li>
                    <li class="stat-item">
                        <p class="stat-name">Comments</p>
                        <span>${u}</span>
                    </li>
                    <li class="stat-item">
                        <p class="stat-name">Downloads</p>
                        <span>${d}</span>
                    </li>
                </ul>
            </div>
              </a>
         </li>`).join("");a.insertAdjacentHTML("beforeend",s);const n={captions:!0,captionSelector:".image",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250};new f(".img-link",n).refresh()}const o=document.querySelector(".search-form").elements,b=o.input,L=o.submit;let c;b.addEventListener("input",r=>{c=r.target.value.trim().toLowerCase()});L.addEventListener("click",r=>{r.preventDefault(),h(c).then(a=>y(a))});
//# sourceMappingURL=commonHelpers.js.map
