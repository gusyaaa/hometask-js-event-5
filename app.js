let inp = document.querySelector("input")
let textarea = document.querySelector("textarea")
let btn = document.querySelector("button")

btn.addEventListener("click", () => {
    console.log(textarea.value);
    console.log(inp.value);
    if(textarea.value.length || inp.value.length > 0){
        textarea.value = ""
        inp.value = ""
    }
})