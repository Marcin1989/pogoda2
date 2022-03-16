
//let przycisk = document.getElementById(`get-data`);

const getData = () => {

    fetch(`https://danepubliczne.imgw.pl/api/data/synop`)
    .then(dane => dane.json())
    .then(dane=> {
     
        console.log(dane)
       const boxing = () => {  for(let elements of dane) {
            elements.classList.add(`box`)
        }
      
    }

    
        
     let id_stacji = document.createElement(`div`)
     let stacja = document.createElement(`div`)
     let data_pomiaru = document.createElement(`div`)
     let godzina_pomiaru = document.createElement(`div`)
     let temperatura = document.createElement(`div`)

        
    })
    
}

document.body.innerText(getData)



//przycisk.addEventListener(`click`, getData)

