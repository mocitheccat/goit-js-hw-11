import{S as h,i as y}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const L="43388201-d3d6dfd281aefcb5631baa551";function b(s){const a=new URLSearchParams({key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${a.toString()}`).then(t=>{if(!t.ok)throw Error(t.status);return t.json()}).then(t=>t.hits).catch(t=>{console.log(t)})}function v(s,a){a.length===0&&c("Sorry, there are no images matching your search query. Please try again!");const t=a.map(({webformatURL:r,largeImageURL:o,tags:p,likes:m,views:f,comments:d,downloads:g})=>`<li class="image-card">
          <a class="img-link" href=${o}>
            <div class="gallery-image">
              <img class="image" src=${r} alt="${p}">
            </div>
            <div class="img-caption">
                <ul class="img-stats">
                    <li class="stat-item">
                        <p class="stat-name">Likes</p>
                        <span>${m}</span>
                    </li>
                    <li class="stat-item">
                        <p class="stat-name">Views</p>
                        <span>${f}</span>
                    </li>
                    <li class="stat-item">
                        <p class="stat-name">Comments</p>
                        <span>${d}</span>
                    </li>
                    <li class="stat-item">
                        <p class="stat-name">Downloads</p>
                        <span>${g}</span>
                    </li>
                </ul>
            </div>
              </a>
         </li>`).join("");l(s),s.insertAdjacentHTML("beforeend",t);const i={captions:!0,captionSelector:".image",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250};new h(".img-link",i).refresh()}function P(s){s.innerHTML=""}function c(s){y.error({message:s,position:"topRight"})}function l(s){s.classList.toggle("loader")}const u=document.querySelector(".search-form"),S=u.input,n=document.querySelector(".gallery");u.addEventListener("submit",s=>{s.preventDefault();const a=S.value.trim().toLowerCase();if(!a){c("Please enter a search query.");return}P(n),l(n),b(a).then(t=>v(n,t)).catch(t=>c(t.message))});
//# sourceMappingURL=commonHelpers.js.map
