const container = document.querySelector('.container');
// const clickBtn = document.querySelectorAll('.view-btn')

// const cards   = document.createElement('div')


// container.appendChild(cards)


const getStarWarsData = async function(){
    const  aPIdata = await fetch('https://swapi.dev/api/people')
    return aPIdata.json()
}

async function peopleData(){
    const data = await getStarWarsData()
    const { results } = data
    console.log(results)
    const people = results.map((data, i) =>{
        const dataHolder = {name: data.name, height: data.height, gender: data.gender}
        return dataHolder;

        // console.log(results)
    })

    people.forEach((data, i) => {
        container.innerHTML += `
        <div class="cards">
            <div class="card-img">
                <img src="starWar/star${i}.avif" alt="smile">
            </div>
            
            <div class="card-body">
                
                <button id="button${i}" class="view-btn">${data.name}</button>

            </div>

            <div id='profileInfo${i}' class="profile"> 

                <h2>Name: ${data.name} </h2>
                <h4>Height: ${data.height} </h4>
                <p>Gender: ${data.gender} </p>
            </div>
        </div>

        `
    })
    
}
// peopleData()

const addClicks  = async function(){

    await peopleData();
    for (let i = 0; i < 10; i++){
        document.getElementById(`button${i}`).addEventListener('click', (e)=>{
            document.getElementById(`profileInfo${i}`)
            if( document.getElementById(`profileInfo${i}`).style.visibility !== "hidden"){
                document.getElementById(`profileInfo${i}`).style.visibility = "hidden"
            }else{
                document.getElementById(`profileInfo${i}`).style.visibility = "visible"
            }
        })
    
    }
// console.log(container)
}

addClicks()




