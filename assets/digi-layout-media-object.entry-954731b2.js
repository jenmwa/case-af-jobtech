import{r as e,aM as a,h as i}from"./index-fb4e3204.js";const d=".sc-digi-layout-media-object-h{--digi--layout-media-object--gutter:var(--digi--gutter--largest);--digi--layout-media-object--alignment:flex-start;--digi--layout-media-object--flex-wrap:wrap}.sc-digi-layout-media-object-h .digi-layout-media-object.sc-digi-layout-media-object{display:flex;align-items:var(--digi--layout-media-object--alignment);gap:var(--digi--layout-media-object--gutter);flex-wrap:var(--digi--layout-media-object--flex-wrap)}.sc-digi-layout-media-object-h .digi-layout-media-object--alignment-center.sc-digi-layout-media-object{--digi--layout-media-object--alignment:center}.sc-digi-layout-media-object-h .digi-layout-media-object--alignment-end.sc-digi-layout-media-object{--digi--layout-media-object--alignment:flex-end}.sc-digi-layout-media-object-h .digi-layout-media-object--alignment-stretch.sc-digi-layout-media-object{--digi--layout-media-object--alignment:stretch}.digi-layout-media-object__last.sc-digi-layout-media-object{flex:1}",o=class{constructor(t){e(this,t),this.afAlignment=a.START}get cssModifiers(){return{[`digi-layout-media-object--alignment-${this.afAlignment}`]:!!this.afAlignment}}render(){return i("div",{class:Object.assign({"digi-layout-media-object":!0},this.cssModifiers)},i("div",{class:"digi-layout-media-object__first"},i("slot",{name:"media"})),i("div",{class:"digi-layout-media-object__last"},i("slot",null)))}};o.style=d;export{o as digi_layout_media_object};
