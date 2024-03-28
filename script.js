const textArea = document.getElementById("textArea");
const cursor = document.getElementById("cursor");
const toolBarBtnList = document.querySelectorAll(".toolBarBtn");

const focusEditor = ()=>{
}

function generateBlock(tag){
    let elem = document.createElement(tag);
    elem.setAttribute("class", "block")
    elem.setAttribute("contenteditable", true)
    elem.setAttribute("spellcheck", false)
    return elem
}

document.querySelectorAll(".block").forEach(block => {
    block.addEventListener("keypress", (event)=>{
        event.stopPropagation()
        if (event.key === 'Enter') {
            let newBlock = generateBlock('p')
            textArea.appendChild(newBlock)
            newBlock.focus()
        }
    })
});

textArea.addEventListener("focus", (e)=>{
    textArea.lastElementChild.focus()
})

textArea.addEventListener("blur", (e)=>{
    
})

toolBarBtnList.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        btn.classList.toggle("selected")
    })
});

function setBold(){
    textArea.style.fontWeight = 'bold'
}
function setItalic(){
    textArea.style.fontStyle = 'italic'
}
function setUnderline(){
    textArea.style.textDecoration = 'underline';
}