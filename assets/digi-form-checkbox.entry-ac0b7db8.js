import{r as d,c as o,F as c,w as a,x as e,h as r,g as h}from"./index-fb4e3204.js";import{r as t}from"./randomIdGenerator.util-17972493-3e0a24fb.js";const b='.sc-digi-form-checkbox-h{--digi--form-checkbox--border-color:var(--digi--color--border--primary);--digi--form-checkbox--border-color--primary:var(--digi--color--border--checkbox-primary);--digi--form-checkbox--border-color--secondary:var(--digi--color--border--checkbox-secondary);--digi--form-checkbox--border-color--error:var(--digi--color--border--danger);--digi--form-checkbox--border-color--warning:var(--digi--color--border--neutral-5);--digi--form-checkbox--box-shadow--error:var(--digi--color--border--danger);--digi--form-checkbox--box-shadow--warning:var(--digi--color--border--neutral-5);--digi--form-checkbox--background-color:var(--digi--color--background--primary);--digi--form-checkbox--background-color--primary:var(--digi--color--background--checkbox-primary);--digi--form-checkbox--background-color--secondary:var(--digi--color--background--checkbox-secondary);--digi--form-checkbox--background-color--error:var(--digi--color--background--danger-2);--digi--form-checkbox--background-color--warning:var(--digi--color--background--warning-3);--digi--form-checkbox--label--background-color--hover:var(--digi--color--background--input-empty);--digi--form-checkbox--input--focus--shadow:var(--digi--shadow--input-focus);--digi--form-checkbox--border-width:var(--digi--border-width--primary);--digi--form-checkbox--color--marker:var(--digi--color--background--checkbox-marker);--digi--form-checkbox--size:1.25rem;--digi--form-checkbox--height:var(--digi--input-height--large);--digi--form-checkbox--border-radius:var(--digi--border-radius--tertiary);--digi--form-checkbox--padding--block:var(--digi--gutter--small);--digi--form-checkbox--padding--inline:var(--digi--gutter--icon)}.sc-digi-form-checkbox-h .digi-form-checkbox.sc-digi-form-checkbox{--BACKGROUND--DEFAULT:var(--digi--form-checkbox--background-color);--BORDER-COLOR--DEFAULT:var(--digi--form-checkbox--border-color);position:relative}.sc-digi-form-checkbox-h .digi-form-checkbox--primary.sc-digi-form-checkbox{--BACKGROUND--CHECKED:var(--digi--form-checkbox--background-color--primary);--BORDER-COLOR--CHECKED:var(--digi--form-checkbox--border-color--primary)}.sc-digi-form-checkbox-h .digi-form-checkbox--secondary.sc-digi-form-checkbox{--BACKGROUND--CHECKED:var(--digi--form-checkbox--background-color--secondary);--BORDER-COLOR--CHECKED:var(--digi--form-checkbox--border-color--secondary)}.sc-digi-form-checkbox-h .digi-form-checkbox--error.sc-digi-form-checkbox .digi-form-checkbox__input.sc-digi-form-checkbox:not(:checked)~.digi-form-checkbox__label.sc-digi-form-checkbox .digi-form-checkbox__box.sc-digi-form-checkbox{--BACKGROUND--CHECKED:var(--digi--form-checkbox--background-color--error);--BORDER-COLOR--CHECKED:var(--digi--form-checkbox--border-color--error);box-shadow:inset 0 0 0 var(--digi--border-width--primary) var(--digi--form-checkbox--box-shadow--error)}.sc-digi-form-checkbox-h .digi-form-checkbox--error.sc-digi-form-checkbox .digi-form-checkbox__input.sc-digi-form-checkbox~.digi-form-checkbox__label.sc-digi-form-checkbox .digi-form-checkbox__box.sc-digi-form-checkbox{background-color:var(--BACKGROUND--CHECKED);border-color:var(--BORDER-COLOR--CHECKED)}.sc-digi-form-checkbox-h .digi-form-checkbox--warning.sc-digi-form-checkbox .digi-form-checkbox__input.sc-digi-form-checkbox:not(:checked)~.digi-form-checkbox__label.sc-digi-form-checkbox .digi-form-checkbox__box.sc-digi-form-checkbox{--BACKGROUND--CHECKED:var(--digi--form-checkbox--background-color--warning);--BORDER-COLOR--CHECKED:var(--digi--form-checkbox--border-color--warning);box-shadow:inset 0 0 0 var(--digi--border-width--primary) var(--digi--form-checkbox--box-shadow--warning)}.sc-digi-form-checkbox-h .digi-form-checkbox--warning.sc-digi-form-checkbox .digi-form-checkbox__input.sc-digi-form-checkbox~.digi-form-checkbox__label.sc-digi-form-checkbox .digi-form-checkbox__box.sc-digi-form-checkbox{background-color:var(--BACKGROUND--CHECKED);border-color:var(--BORDER-COLOR--CHECKED)}.sc-digi-form-checkbox-h .digi-form-checkbox--indeterminate.sc-digi-form-checkbox .digi-form-checkbox__input.sc-digi-form-checkbox~.digi-form-checkbox__label.sc-digi-form-checkbox .digi-form-checkbox__box.sc-digi-form-checkbox::after{content:"";border:solid var(--digi--form-checkbox--color--marker);position:relative;top:var(--digi--gutter--smallest);box-sizing:border-box;width:calc(var(--digi--form-checkbox--size) * 0.65);border-width:calc(var(--digi--form-checkbox--size) * 0.2) 0 0 0;transform:none}.digi-form-checkbox__input.sc-digi-form-checkbox{position:absolute;opacity:0;cursor:pointer;height:0;width:0;top:0;left:0}.digi-form-checkbox__label.sc-digi-form-checkbox{display:inline-flex;align-items:center;gap:var(--digi--gutter--icon);font-family:var(--digi--global--typography--font-family--default);font-size:var(--digi--typography--label--font-size--desktop);line-height:var(--digi--typography--label--line-height--desktop);color:var(--digi--color--text--primary);font-weight:var(--digi--typography--body--font-weight--desktop);cursor:pointer}.digi-form-checkbox--layout-block.sc-digi-form-checkbox .digi-form-checkbox__label.sc-digi-form-checkbox{display:flex;padding:var(--digi--form-checkbox--padding--block) var(--digi--form-checkbox--padding--inline);border-radius:var(--digi--border-radius--primary)}.digi-form-checkbox--layout-block.sc-digi-form-checkbox .digi-form-checkbox__label.sc-digi-form-checkbox:hover{background-color:var(--digi--form-checkbox--label--background-color--hover)}.digi-form-checkbox__box.sc-digi-form-checkbox{cursor:pointer;display:flex;flex-shrink:0;align-self:flex-start;align-items:center;justify-content:center;background-color:var(--BACKGROUND--DEFAULT);border-color:var(--BORDER-COLOR--DEFAULT);border-width:var(--digi--form-checkbox--border-width);border-style:solid;height:var(--digi--form-checkbox--size);width:var(--digi--form-checkbox--size);border-radius:var(--digi--form-checkbox--border-radius);position:relative;margin-block-start:calc((var(--digi--typography--label--font-size--desktop) * var(--digi--typography--label--line-height--desktop) - var(--digi--form-checkbox--size)) / 2)}.digi-form-checkbox__box.sc-digi-form-checkbox::after{content:"";border:solid var(--digi--form-checkbox--color--marker);width:calc(var(--digi--form-checkbox--size) * 0.6 * 2 / 3);height:calc(var(--digi--form-checkbox--size) * 0.6);border-width:0 calc(var(--digi--form-checkbox--size) * 0.1) calc(var(--digi--form-checkbox--size) * 0.1) 0;transform:translateY(calc(var(--digi--form-checkbox--size) * 0.1720729309 / -2)) rotate(35deg);box-sizing:border-box;opacity:0}.digi-form-checkbox__input.sc-digi-form-checkbox:indeterminate~.digi-form-checkbox__label.sc-digi-form-checkbox .digi-form-checkbox__box.sc-digi-form-checkbox,.digi-form-checkbox__input.sc-digi-form-checkbox:checked~.digi-form-checkbox__label.sc-digi-form-checkbox .digi-form-checkbox__box.sc-digi-form-checkbox{background-color:var(--BACKGROUND--CHECKED);border-color:var(--BORDER-COLOR--CHECKED)}.digi-form-checkbox__input.sc-digi-form-checkbox:indeterminate~.digi-form-checkbox__label.sc-digi-form-checkbox .digi-form-checkbox__box.sc-digi-form-checkbox::after,.digi-form-checkbox__input.sc-digi-form-checkbox:checked~.digi-form-checkbox__label.sc-digi-form-checkbox .digi-form-checkbox__box.sc-digi-form-checkbox::after{opacity:1}.digi-form-checkbox__input.sc-digi-form-checkbox:focus-visible~.digi-form-checkbox__label.sc-digi-form-checkbox .digi-form-checkbox__box.sc-digi-form-checkbox{box-shadow:var(--digi--form-checkbox--input--focus--shadow)}.digi-form-checkbox--layout-block.sc-digi-form-checkbox .digi-form-checkbox__input.sc-digi-form-checkbox:focus-visible~.digi-form-checkbox__label.sc-digi-form-checkbox{box-shadow:none;outline:var(--digi--focus-outline);background-color:var(--digi--form-checkbox--label--background-color--hover)}.digi-form-checkbox__description.sc-digi-form-checkbox{max-width:var(--digi--paragraph-width--medium);line-height:var(--digi--typography--label-description--line-height--desktop);font-size:var(--digi--typography--label-description--font-size--desktop);padding-inline-start:calc(var(--digi--gutter--icon) + var(--digi--form-checkbox--size))}.digi-form-checkbox--layout-block.sc-digi-form-checkbox .digi-form-checkbox__description.sc-digi-form-checkbox{padding-inline-start:calc(var(--digi--gutter--icon) + var(--digi--form-checkbox--size) + var(--digi--form-checkbox--padding--inline))}',s=class{constructor(i){d(this,i),this.afOnChange=o(this,"afOnChange",7),this.afOnBlur=o(this,"afOnBlur",7),this.afOnFocus=o(this,"afOnFocus",7),this.afOnFocusout=o(this,"afOnFocusout",7),this.afOnInput=o(this,"afOnInput",7),this.afOnDirty=o(this,"afOnDirty",7),this.afOnTouched=o(this,"afOnTouched",7),this.afOnReady=o(this,"afOnReady",3),this.dirty=!1,this.touched=!1,this.afLabel=void 0,this.afVariation=c.PRIMARY,this.afLayout=a.INLINE,this.afIndeterminate=!1,this.afName=void 0,this.checked=void 0,this.afChecked=void 0,this.afId=t("digi-form-checkbox"),this.afRequired=void 0,this.value=void 0,this.afValue=void 0,this.afValidation=void 0,this.afAriaLabelledby=void 0,this.afAriaLabel=void 0,this.afDescription=void 0,this.afAriaDescribedby=void 0,this.afAutofocus=void 0}onCheckedChanged(i){this.afChecked=i}onAfCheckedChanged(i){this.checked=i}onValueChanged(i){this.afValue=i}onAfValueChanged(i){this.value=i}async afMGetFormControlElement(){return this._input}componentWillLoad(){this.afValue?this.value=this.afValue:this.afValue=this.value,this.afChecked?this.checked=this.afChecked:this.afChecked=this.checked}componentDidLoad(){this.afOnReady.emit()}get cssModifiers(){return{"digi-form-checkbox--error":this.afValidation===e.ERROR,"digi-form-checkbox--warning":this.afValidation===e.WARNING,"digi-form-checkbox--primary":this.afVariation===c.PRIMARY,"digi-form-checkbox--secondary":this.afVariation===c.SECONDARY,"digi-form-checkbox--indeterminate":this.afIndeterminate,[`digi-form-checkbox--layout-${this.afLayout}`]:!!this.afLayout}}blurHandler(i){this.touched||(this.afOnTouched.emit(i),this.touched=!0),this.afOnBlur.emit(i)}changeHandler(i){this.checked=this.afChecked=i.target.checked,this.afValue=this.value=i.target.value,this.afOnChange.emit(i)}focusHandler(i){this.afOnFocus.emit(i)}focusoutHandler(i){this.afOnFocusout.emit(i)}inputHandler(i){this.dirty||(this.afOnDirty.emit(i),this.dirty=!0),this.afOnInput.emit(i)}render(){return r("div",{class:Object.assign({"digi-form-checkbox":!0},this.cssModifiers)},r("input",{class:"digi-form-checkbox__input",ref:i=>this._input=i,onInput:i=>this.inputHandler(i),onBlur:i=>this.blurHandler(i),onChange:i=>this.changeHandler(i),onFocus:i=>this.focusHandler(i),onFocusout:i=>this.focusoutHandler(i),"aria-describedby":!this.afAriaDescribedby&&!this.afDescription?null:`${this.afAriaDescribedby?`${this.afAriaDescribedby} `:""}${this.afDescription?`${this.afId}-description`:""}`,"aria-labelledby":this.afAriaLabelledby,"aria-label":this.afAriaLabel,"aria-invalid":this.afValidation===e.ERROR?"true":"false",required:this.afRequired,id:this.afId,name:this.afName,type:"checkbox",checked:this.afChecked,value:this.afValue,indeterminate:this.afIndeterminate,autofocus:this.afAutofocus?this.afAutofocus:null}),r("label",{htmlFor:this.afId,class:"digi-form-checkbox__label"},r("span",{class:"digi-form-checkbox__box"}),this.afLabel),!!this.afDescription&&r("p",{id:`${this.afId}-description`,class:"digi-form-checkbox__description"},this.afDescription))}get hostElement(){return h(this)}static get watchers(){return{checked:["onCheckedChanged","onAfCheckedChanged"],value:["onValueChanged"],afValue:["onAfValueChanged"]}}};s.style=b;export{s as digi_form_checkbox};
