import{r as t,c as d,h as i,_ as e,H as g,g as s}from"./index-fb4e3204.js";const r=".digi-media-image.sc-digi-media-image{position:relative;display:inline-flex;max-width:100%;height:0px}.digi-media-image.digi-media-image--aspect-ratio.sc-digi-media-image{width:var(--digi--media-image--width);height:unset}.digi-media-image.digi-media-image--loaded.sc-digi-media-image{height:unset}.digi-media-image.digi-media-image--fullwidth.sc-digi-media-image{width:100%}.digi-media-image.digi-media-image--unlazy.sc-digi-media-image:not(.digi-media-image--aspect-ratio){height:unset}.digi-media-image--aspect-ratio.sc-digi-media-image .digi-media-image__observer.sc-digi-media-image{position:absolute;top:0;left:0;height:100%}.digi-media-image__padded-box.sc-digi-media-image{display:inline-block;padding-top:var(--digi--media-image--padded-box, 0);height:0}.digi-media-image__image.sc-digi-media-image{max-width:100%;height:auto;opacity:0.06;filter:saturate(0);transition:opacity 0.2s, filter 0.4s}.digi-media-image--loaded.sc-digi-media-image .digi-media-image__image.sc-digi-media-image{opacity:1;filter:saturate(1)}.digi-media-image--unlazy.sc-digi-media-image .digi-media-image__image.sc-digi-media-image{transition:none;opacity:1;filter:none}.digi-media-image--fullwidth.sc-digi-media-image .digi-media-image__image.sc-digi-media-image{width:100%}.digi-media-image--aspect-ratio.sc-digi-media-image .digi-media-image__image.sc-digi-media-image{position:absolute;top:0;left:0;width:100%;height:100%}",n=class{constructor(a){t(this,a),this.afOnLoad=d(this,"afOnLoad",7),this.isPlaceholderLoaded=!1,this.hasSetSrc=!1,this.hasAspectRatio=!1,this.paddedBoxPadding="0%",this.isLoaded=!1,this.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",this.srcset=void 0,this.afObserverOptions={rootMargin:"200px",threshold:0},this.afSrc=void 0,this.afSrcset=void 0,this.afAlt=void 0,this.afTitle=void 0,this.afAriaLabel=void 0,this.afWidth=void 0,this.afHeight=void 0,this.afFullwidth=void 0,this.afUnlazy=!1}srcChangeHandler(){this.setImageSrc()}connectedCallback(){this.afUnlazy&&this.setImageSrc(),this.afWidth&&this.afHeight&&(this.hasAspectRatio=!0,this.setPaddedBox())}setImageSrc(){this.src=this.afSrc,this.srcset=this.afSrcset,this.hasSetSrc=!0}setPaddedBox(){this.paddedBoxPadding=parseInt(this.afHeight,10)/parseInt(this.afWidth,10)*100+"%"}intersectHandler(){this.afUnlazy||this.setImageSrc()}loadHandler(a){if(!this.afUnlazy){if(this.isPlaceholderLoaded){this.isLoaded=!0,this.afOnLoad.emit(a);return}this.isPlaceholderLoaded=!0}}get cssModifiers(){return{"digi-media-image--unlazy":this.afUnlazy,"digi-media-image--loaded":this.isLoaded,"digi-media-image--aspect-ratio":this.hasAspectRatio,"digi-media-image--fullwidth":this.afFullwidth}}get cssInlineStyles(){return{"--digi--media-image--padded-box":this.paddedBoxPadding}}render(){return i("host",null,i("div",{class:Object.assign({"digi-media-image":!0},this.cssModifiers),style:{"--digi--media-image--width":this.afWidth?`${this.afWidth}px`:null}},i("digi-util-intersection-observer",{class:"digi-media-image__observer",onAfOnIntersect:()=>this.intersectHandler(),afOnce:!0,afOptions:this.afObserverOptions}),this.hasAspectRatio&&i("div",{class:"digi-media-image__padded-box",style:this.cssInlineStyles}),i("img",{class:"digi-media-image__image",onLoad:a=>this.loadHandler(a),src:this.src,alt:this.afAlt,"aria-label":this.afAriaLabel,height:this.afHeight,srcset:this.srcset,title:this.afTitle,width:this.afWidth,loading:this.afUnlazy?"eager":"lazy"})))}static get watchers(){return{afSrc:["srcChangeHandler"]}}};n.style=r;const m=".sc-digi-tag-media-h{--digi--tag-media--background-color:var(--digi--color--background--inverted-3);--digi--tag-media--color--icon:var(--digi--color--text--inverted);--digi--tag-media--width--icon:var(--digi--typography--body--font-size--desktop-large);--digi--tag-media--color--text:var(--digi--color--text--inverted);--digi--tag-media--text--font-weight:var(--digi--typography--description--font-weight--desktop);--digi--tag-media--text--font-size:var(--digi--typography--tag--font-size--desktop);--digi--tag-media--border-radius:var(--digi--border-radius--tertiary);--digi--tag-media--padding:0 var(--digi--gutter--small);--digi--tag-media--margin:var(--digi--gutter--small);--digi--tag-media--height:1.875rem}.sc-digi-tag-media-h .digi-tag-media.sc-digi-tag-media{display:inline-flex;align-items:center;background-color:var(--digi--tag-media--background-color);border-radius:var(--digi--tag-media--border-radius);padding:var(--digi--tag-media--padding);height:var(--digi--tag-media--height)}.sc-digi-tag-media-h .digi-tag-media__icon.sc-digi-tag-media{--digi--icon--color:var(--digi--tag-media--color--icon);--digi--icon--width:var(--digi--tag-media--width--icon);margin-right:var(--digi--tag-media--margin)}.sc-digi-tag-media-h .digi-tag-media__text.sc-digi-tag-media{font-family:var(--digi--global--typography--font-family--default);font-size:var(--digi--tag-media--text--font-size);font-weight:var(--digi--tag-media--text--font-weight);color:var(--digi--tag-media--color--text)}",o=class{constructor(a){t(this,a),this.afText=void 0,this.afIcon=e.NEWS}get tagIcon(){return this.afIcon===e.NEWS?i("digi-icon-news",{class:"digi-tag-media__icon"}):this.afIcon===e.PLAYLIST?i("digi-icon-list-ul",{class:"digi-tag-media__icon"}):this.afIcon===e.PODCAST?i("digi-icon-media-podcast",{class:"digi-tag-media__icon"}):this.afIcon===e.FILM?i("digi-icon-film",{class:"digi-tag-media__icon"}):this.afIcon===e.WEBTV?i("digi-icon-web-tv",{class:"digi-tag-media__icon"}):this.afIcon===e.WEBINAR?i("digi-icon-webinar",{class:"digi-tag-media__icon"}):i("digi-icon-news",{class:"digi-tag-media__icon"})}render(){return i(g,null,i("div",{class:{"digi-tag-media":!0}},this.tagIcon,i("span",{class:"digi-tag-media__text"},this.afText)))}get hostElement(){return s(this)}};o.style=m;export{n as digi_media_image,o as digi_tag_media};
