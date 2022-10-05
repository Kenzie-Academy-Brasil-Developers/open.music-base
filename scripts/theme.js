function dmferify(){
    const dmPref = localStorage.getItem("darkmode")
    const html = document.querySelector("html")
    const dmIcon = document.getElementById("dmIcon")
    
    if(dmPref){
        html.classList.add("dark-mode")
        dmIcon.src = "./assets/img/sun.svg"
        
    }
    if(!dmPref){
        dmIcon.src = "./assets/img/moon.svg"
        
    }    
}
dmferify()



function darkMode() {
    const dmButton = document.getElementById("dmButton")
    const html = document.querySelector("html")
    const dmIcon = document.getElementById("dmIcon")
    

    dmButton.addEventListener("click", () => {
        html.classList.toggle("dark-mode")
    
        const dmPref = localStorage.getItem("darkmode")

        if(!dmPref){
            localStorage.setItem("darkmode", true)
            dmIcon.src = "./assets/img/sun.svg"
        }
        if(dmPref){
            localStorage.removeItem("darkmode")
            dmIcon.src = "./assets/img/moon.svg"
        }
    })
}
darkMode()