import{S as g,i as h}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const y="43388201-d3d6dfd281aefcb5631baa551";function L(r){const a=new URLSearchParams({key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${a.toString()}`).then(t=>{if(!t.ok)throw Error(t.status);return t.json()}).then(t=>t.hits).catch(t=>{console.log(t)})}function b(r){const a=document.querySelector(".gallery");r.length===0&&n("Sorry, there are no images matching your search query. Please try again!"),S(a);const t=r.map(({webformatURL:s,largeImageURL:o,tags:m,likes:u,views:p,comments:f,downloads:d})=>`<li class="image-card">
          <a class="img-link" href=${o}>
            <div class="gallery-image">
              <img class="image" src=${s} alt="${m}">
            </div>
            <div class="img-caption">
                <ul class="img-stats">
                    <li class="stat-item">
                        <p class="stat-name">Likes</p>
                        <span>${u}</span>
                    </li>
                    <li class="stat-item">
                        <p class="stat-name">Views</p>
                        <span>${p}</span>
                    </li>
                    <li class="stat-item">
                        <p class="stat-name">Comments</p>
                        <span>${f}</span>
                    </li>
                    <li class="stat-item">
                        <p class="stat-name">Downloads</p>
                        <span>${d}</span>
                    </li>
                </ul>
            </div>
              </a>
         </li>`).join("");c(),a.insertAdjacentHTML("beforeend",t);const i={captions:!0,captionSelector:".image",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250};new g(".img-link",i).refresh()}function S(r){r.innerHTML=""}function n(r){h.error({message:r,position:"topRight"})}function c(){document.querySelector(".image-container").classList.toggle("loader")}const l=document.querySelector(".search-form"),v=l.input;l.addEventListener("submit",r=>{r.preventDefault();const a=v.value.trim().toLowerCase();if(!a){n("Please enter a search query.");return}c(),L(a).then(t=>b(t)).catch(t=>n(t.message))});
//# sourceMappingURL=commonHelpers.js.map
