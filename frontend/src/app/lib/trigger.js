export function popupE(state, message){
    window.dispatchEvent(new CustomEvent("popup", { detail: {state:state, message:message}}));
}