import{r as g,aQ as n,Q as i,h as a,aR as r,aS as t}from"./index-fb4e3204.js";const d=".sc-digi-layout-block-h{--digi--layout-block--background--primary:var(--digi--color--background--primary);--digi--layout-block--background--secondary:var(--digi--color--background--secondary);--digi--layout-block--background--tertiary:var(--digi--color--background--neutral-4);--digi--layout-block--background--symbol:var(--digi--color--background--neutral-5);--digi--layout-block--background--profile:var(--digi--color--background--inverted-1);display:block}.sc-digi-layout-block-h .digi-layout-block.sc-digi-layout-block{background:var(--BACKGROUND)}.sc-digi-layout-block-h .digi-layout-block--transparent.sc-digi-layout-block{--BACKGROUND:transparent}.sc-digi-layout-block-h .digi-layout-block--primary.sc-digi-layout-block{--BACKGROUND:var(--digi--layout-block--background--primary)}.sc-digi-layout-block-h .digi-layout-block--secondary.sc-digi-layout-block{--BACKGROUND:var(--digi--layout-block--background--secondary)}.sc-digi-layout-block-h .digi-layout-block--tertiary.sc-digi-layout-block{--BACKGROUND:var(--digi--layout-block--background--tertiary)}.sc-digi-layout-block-h .digi-layout-block--symbol.sc-digi-layout-block{--BACKGROUND:var(--digi--layout-block--background--symbol)}.sc-digi-layout-block-h .digi-layout-block--profile.sc-digi-layout-block{--BACKGROUND:var(--digi--layout-block--background--profile)}",l=class{constructor(o){g(this,o),this._container=n.STATIC,this.afVariation=i.PRIMARY,this.afContainer=n.STATIC,this.afVerticalPadding=void 0,this.afMarginTop=void 0,this.afMarginBottom=void 0}containerChangeHandler(){this._container=this.afContainer}componentWillLoad(){this.containerChangeHandler()}get cssModifiers(){return{"digi-layout-block--transparent":this.afVariation===i.TRANSPARENT,"digi-layout-block--primary":this.afVariation===i.PRIMARY,"digi-layout-block--secondary":this.afVariation===i.SECONDARY,"digi-layout-block--tertiary":this.afVariation===i.TERTIARY,"digi-layout-block--symbol":this.afVariation===i.SYMBOL,"digi-layout-block--profile":this.afVariation===i.PROFILE}}render(){return a("div",{class:Object.assign({"digi-layout-block":!0},this.cssModifiers)},this._container===n.NONE?a(r,null,a("slot",null)):a("digi-layout-container",{afVariation:this._container,"af-vertical-padding":this.afVerticalPadding,"af-margin-top":this.afMarginTop,"af-margin-bottom":this.afMarginBottom},a("slot",null)))}static get watchers(){return{afContainer:["containerChangeHandler"]}}};l.style=d;const c=".digi--util--fs--xs.sc-digi-layout-container{font-size:var(--digi--global--typography--font-size--small) !important}.digi--util--fs--s.sc-digi-layout-container{font-size:calc(var(--digi--global--typography--font-size--small) + 1px) !important}.digi--util--fs--m.sc-digi-layout-container{font-size:var(--digi--global--typography--font-size--base) !important}.digi--util--fs--l.sc-digi-layout-container{font-size:var(--digi--global--typography--font-size--large) !important}.digi--util--fw--sb.sc-digi-layout-container{font-weight:var(--digi--global--typography--font-weight--semibold) !important}.digi--util--pt--1.sc-digi-layout-container{padding-top:var(--digi--global--spacing--smallest-2) !important}.digi--util--pt--10.sc-digi-layout-container{padding-top:var(--digi--global--spacing--smallest) !important}.digi--util--pt--20.sc-digi-layout-container{padding-top:var(--digi--global--spacing--base) !important}.digi--util--pt--30.sc-digi-layout-container{padding-top:var(--digi--global--spacing--largest-2) !important}.digi--util--pt--40.sc-digi-layout-container{padding-top:var(--digi--global--spacing--largest-4) !important}.digi--util--pt--50.sc-digi-layout-container{padding-top:2.5rem !important}.digi--util--pt--60.sc-digi-layout-container{padding-top:var(--digi--global--spacing--largest-5) !important}.digi--util--pt--70.sc-digi-layout-container{padding-top:var(--digi--global--spacing--largest-6) !important}.digi--util--pt--80.sc-digi-layout-container{padding-top:4.5rem !important}.digi--util--pt--90.sc-digi-layout-container{padding-top:5rem !important}.digi--util--pb--1.sc-digi-layout-container{padding-bottom:var(--digi--global--spacing--smallest-2) !important}.digi--util--pb--10.sc-digi-layout-container{padding-bottom:var(--digi--global--spacing--smallest) !important}.digi--util--pb--20.sc-digi-layout-container{padding-bottom:var(--digi--global--spacing--base) !important}.digi--util--pb--30.sc-digi-layout-container{padding-bottom:var(--digi--global--spacing--largest-2) !important}.digi--util--pb--40.sc-digi-layout-container{padding-bottom:var(--digi--global--spacing--largest-4) !important}.digi--util--pb--50.sc-digi-layout-container{padding-bottom:2.5rem !important}.digi--util--pb--60.sc-digi-layout-container{padding-bottom:var(--digi--global--spacing--largest-5) !important}.digi--util--pb--70.sc-digi-layout-container{padding-bottom:var(--digi--global--spacing--largest-6) !important}.digi--util--pb--80.sc-digi-layout-container{padding-bottom:4.5rem !important}.digi--util--pb--90.sc-digi-layout-container{padding-bottom:5rem !important}.digi--util--p--1.sc-digi-layout-container{padding:var(--digi--global--spacing--smallest-2) !important}.digi--util--p--10.sc-digi-layout-container{padding:var(--digi--global--spacing--smallest) !important}.digi--util--p--20.sc-digi-layout-container{padding:var(--digi--global--spacing--base) !important}.digi--util--p--30.sc-digi-layout-container{padding:var(--digi--global--spacing--largest-2) !important}.digi--util--p--40.sc-digi-layout-container{padding:var(--digi--global--spacing--largest-4) !important}.digi--util--p--50.sc-digi-layout-container{padding:2.5rem !important}.digi--util--p--60.sc-digi-layout-container{padding:var(--digi--global--spacing--largest-5) !important}.digi--util--p--70.sc-digi-layout-container{padding:var(--digi--global--spacing--largest-6) !important}.digi--util--p--80.sc-digi-layout-container{padding:4.5rem !important}.digi--util--p--90.sc-digi-layout-container{padding:5rem !important}.digi--util--ptb--1.sc-digi-layout-container{padding-top:var(--digi--global--spacing--smallest-2) !important;padding-bottom:var(--digi--global--spacing--smallest-2) !important}.digi--util--ptb--10.sc-digi-layout-container{padding-top:var(--digi--global--spacing--smallest) !important;padding-bottom:var(--digi--global--spacing--smallest) !important}.digi--util--ptb--20.sc-digi-layout-container{padding-top:var(--digi--global--spacing--base) !important;padding-bottom:var(--digi--global--spacing--base) !important}.digi--util--ptb--30.sc-digi-layout-container{padding-top:var(--digi--global--spacing--largest-2) !important;padding-bottom:var(--digi--global--spacing--largest-2) !important}.digi--util--ptb--40.sc-digi-layout-container{padding-top:var(--digi--global--spacing--largest-4) !important;padding-bottom:var(--digi--global--spacing--largest-4) !important}.digi--util--ptb--50.sc-digi-layout-container{padding-top:2.5rem !important;padding-bottom:2.5rem !important}.digi--util--ptb--60.sc-digi-layout-container{padding-top:var(--digi--global--spacing--largest-5) !important;padding-bottom:var(--digi--global--spacing--largest-5) !important}.digi--util--ptb--70.sc-digi-layout-container{padding-top:var(--digi--global--spacing--largest-6) !important;padding-bottom:var(--digi--global--spacing--largest-6) !important}.digi--util--ptb--80.sc-digi-layout-container{padding-top:4.5rem !important;padding-bottom:4.5rem !important}.digi--util--ptb--90.sc-digi-layout-container{padding-top:5rem !important;padding-bottom:5rem !important}.digi--util--plr--1.sc-digi-layout-container{padding-left:var(--digi--global--spacing--smallest-2) !important;padding-right:var(--digi--global--spacing--smallest-2) !important}.digi--util--plr--10.sc-digi-layout-container{padding-left:var(--digi--global--spacing--smallest) !important;padding-right:var(--digi--global--spacing--smallest) !important}.digi--util--plr--20.sc-digi-layout-container{padding-left:var(--digi--global--spacing--base) !important;padding-right:var(--digi--global--spacing--base) !important}.digi--util--plr--30.sc-digi-layout-container{padding-left:var(--digi--global--spacing--largest-2) !important;padding-right:var(--digi--global--spacing--largest-2) !important}.digi--util--plr--40.sc-digi-layout-container{padding-left:var(--digi--global--spacing--largest-4) !important;padding-right:var(--digi--global--spacing--largest-4) !important}.digi--util--plr--50.sc-digi-layout-container{padding-left:2.5rem !important;padding-right:2.5rem !important}.digi--util--plr--60.sc-digi-layout-container{padding-left:var(--digi--global--spacing--largest-5) !important;padding-right:var(--digi--global--spacing--largest-5) !important}.digi--util--plr--70.sc-digi-layout-container{padding-left:var(--digi--global--spacing--largest-6) !important;padding-right:var(--digi--global--spacing--largest-6) !important}.digi--util--plr--80.sc-digi-layout-container{padding-left:4.5rem !important;padding-right:4.5rem !important}.digi--util--plr--90.sc-digi-layout-container{padding-left:5rem !important;padding-right:5rem !important}.digi--util--sr-only.sc-digi-layout-container{border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sc-digi-layout-container-h{--digi--layout-container--width:var(--digi--container-width--smaller);--digi--layout-container--gutter:var(--digi--container-gutter--base);--digi--layout-container--vertical-padding:0;--digi--layout-container--margin-top:0;--digi--layout-container--margin-bottom:0}.sc-digi-layout-container-h .digi-layout-container.sc-digi-layout-container{box-sizing:border-box;width:100%;max-width:var(--digi--layout-container--width);padding:var(--digi--layout-container--vertical-padding) var(--digi--layout-container--gutter);margin-left:auto;margin-right:auto;margin-top:var(--digi--layout-container--margin-top);margin-bottom:var(--digi--layout-container--margin-bottom);box-sizing:border-box}@media (min-width: 36rem){.sc-digi-layout-container-h .digi-layout-container.sc-digi-layout-container{--digi--layout-container--width:var(--digi--container-width--small);--digi--layout-container--gutter:var(--digi--container-gutter--small)}}@media (min-width: 48rem){.sc-digi-layout-container-h .digi-layout-container.sc-digi-layout-container{--digi--layout-container--width:var(--digi--container-width--medium);--digi--layout-container--gutter:var(--digi--container-gutter--medium)}}@media (min-width: 62rem){.sc-digi-layout-container-h .digi-layout-container.sc-digi-layout-container{--digi--layout-container--width:var(--digi--container-width--large);--digi--layout-container--gutter:var(--digi--container-gutter--large)}}@media (min-width: 75rem){.sc-digi-layout-container-h .digi-layout-container.sc-digi-layout-container{--digi--layout-container--width:var(--digi--container-width--larger);--digi--layout-container--gutter:var(--digi--container-gutter--larger)}}@media (min-width: 87.5rem){.sc-digi-layout-container-h .digi-layout-container.sc-digi-layout-container{--digi--layout-container--width:var(--digi--container-width--largest);--digi--layout-container--gutter:var(--digi--container-gutter--largest)}}.sc-digi-layout-container-h .digi-layout-container--fluid.sc-digi-layout-container{--digi--layout-container--width:none !important}.sc-digi-layout-container-h .digi-layout-container--no-gutter.sc-digi-layout-container{--digi--layout-container--gutter:0}.sc-digi-layout-container-h .digi-layout-container--vertical-padding.sc-digi-layout-container{--digi--layout-container--vertical-padding:var(--digi--padding--large)}.sc-digi-layout-container-h .digi-layout-container--margin-top.sc-digi-layout-container{--digi--layout-container--margin-top:var(--digi--margin--large)}.sc-digi-layout-container-h .digi-layout-container--margin-bottom.sc-digi-layout-container{--digi--layout-container--margin-bottom:var(--digi--margin--large)}",e=class{constructor(o){g(this,o),this._variation=t.STATIC,this.afVariation=t.STATIC,this.afNoGutter=void 0,this.afVerticalPadding=void 0,this.afMarginTop=void 0,this.afMarginBottom=void 0}variationChangeHandler(){this._variation=this.afVariation}componentWillLoad(){this.variationChangeHandler()}get cssModifiers(){return this._variation===t.NONE?{}:{"digi-layout-container":!0,"digi-layout-container--static":this._variation===t.STATIC,"digi-layout-container--fluid":this._variation===t.FLUID,"digi-layout-container--no-gutter":this.afNoGutter,"digi-layout-container--vertical-padding":this.afVerticalPadding,"digi-layout-container--margin-top":this.afMarginTop,"digi-layout-container--margin-bottom":this.afMarginBottom}}render(){return a("div",{class:Object.assign({},this.cssModifiers)},a("slot",null))}static get watchers(){return{afVariation:["variationChangeHandler"]}}};e.style=c;export{l as digi_layout_block,e as digi_layout_container};
