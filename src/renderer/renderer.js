function addSetTitleFunctionality() {
    const button = document.getElementById("set-title-btn");
    const title = document.getElementById("title");
    button?.addEventListener("click", () => {
        const titleText = title.value;
        window.ElectronAPI.setTitle(titleText);
    })
}

function addOpenDialogFunctionality() {
    const button = document.getElementById("file-dialog-btn");
    button?.addEventListener("click", async () => {
        console.log("dasds")
        const filePath = await window.ElectronAPI.openDialog();
        const filePathSpan = document.getElementById("selected-file-path");
        filePathSpan.textContent = filePath;
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

const dialogNav = document.getElementById("file-dialog-nav");
dialogNav.addEventListener("click", (_event) => {
    renderTemplate("file-dialog-template");
    addOpenDialogFunctionality()
})
