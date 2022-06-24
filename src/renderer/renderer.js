function addSetTitleFunctionality() {
    const button = document.getElementById("set-title-btn");
    const title = document.getElementById("title");
    button?.addEventListener("click", () => {
        const titleText = title.value;
        window.ElectronAPI.setTitle(titleText);
    })
}

function renderTemplate(templateID) {
    const template = document.getElementById(templateID);
    const clone = template.content.cloneNode(true);
    const mainDiv = document.getElementById("main");
    mainDiv.replaceChildren(clone);
}

const titleNav = document.getElementById("set-title-nav");
titleNav?.addEventListener("click", (_event) => {
    renderTemplate("set-title-template");
    addSetTitleFunctionality();
})

