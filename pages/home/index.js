
const ulMainCards = document.getElementById("ulMainCards")
const valorInput = document.getElementById("valorInput")
const valorOutput = document.getElementById("valorOutput")


function criaCards(arr){
    ulMainCards.innerHTML = ""
    arr.forEach(element => {
        let li = document.createElement("li")
        let figure = document.createElement("figure")
        let img = document.createElement("img")
        let sectionPrincipal = document.createElement("section")
        let section2 = document.createElement("section")
        let album = document.createElement("p")
        let ano = document.createElement("p")
        let section3 = document.createElement("section")
        let band = document.createElement("h4")
        let section4 = document.createElement("section")
        let valor = document.createElement("h4")
        let button = document.createElement("button")

        img.src = element.img
        album.innerText = element.title
        ano.innerText = element.year
        band.innerText = element.band
        valor.innerText = `R$ ${element.price},00`
        button.innerText = "Comprar"

        li.classList.add("card")
        sectionPrincipal.classList.add("descriptionCard")
        section2.classList.add("flex")
        section2.classList.add("align")
        section2.classList.add("gap16")
        section4.classList.add("flex")
        section4.classList.add("align")
        section4.classList.add("justifyBet")
        section4.classList.add("widthFull")
        button.classList.add("but")

        figure.appendChild(img)
        section2.append(album, ano)
        section3.appendChild(band)
        section4.append(valor, button)
        sectionPrincipal.append(section2, section3, section4)
        li.append(figure, sectionPrincipal)
        ulMainCards.appendChild(li)
    });
}
criaCards(products)

function alteraValor(){
    valorInput.addEventListener("input", () => {
        valorOutput.innerHTML = `${valorInput.value},00`
    });
}
alteraValor()

// function valorInput2(){
//     return valorInput.value
// }


function valorFilter() {
    valorInput.addEventListener("input", () => {
        const filteredByValue = products.filter(element => element.price <= valorInput.value)

        criaCards(filteredByValue)
    });
}
valorFilter()

function buttonsFilter() {
    const filterButtons = document.querySelectorAll(".butEstilos")

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            ulMainCards.innerHTML = ""
            const filter = button.innerText
            
            
            if(filter === "Todos") {
                criaCards(products)
            }
            else{
                const fiteredSongs = filterSong(filter)
                criaCards(fiteredSongs)
            }
        })
    })
}
function filterSong(text){
    const SongsFiltered = products.filter(song => song.category === text)
    
    return SongsFiltered
}
buttonsFilter()








