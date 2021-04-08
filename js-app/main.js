const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
const targetName = document.querySelector("#display-beanVarieties");
const targetRegion = document.querySelector("#display-region");
const targetNotes = document.querySelector("#display-notes");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);

            for (let i = 0; i < beanVarieties.length; i++) {
                targetName.innerHTML += beanVarieties[i].name;
                targetRegion.innerHTML += beanVarieties[i].region;
                targetNotes.innerHTML += beanVarieties[i].notes;
            }
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}