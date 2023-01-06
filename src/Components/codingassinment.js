const checkRouteOfTravel = (city,tickets,startCity) => {
    let tempStartState = startCity 
    let visited = []
    for (let i of tickets){
        if (i[tempStartState] === tempStartState && !visited.includes(i[tempStartState])) {
          visited.push(i[tempStartState])
          tempStartState = i[tempStartState]
        }
    }
    console.log(visited)
}



const tickets = [
    {Paris:"Skopje"},
    {Zurich:"Amsterdam"},
    { Prague:"Zurich"},
    {Barcelona:"Berlin"},
    {Kiev:"Prague"},
    {Skopje:"Paris"},
    {Amsterdam:"Barcelona"},
    {Berlin:"Kiev"},
    {Berlin:"Amsterdam"}
    
]
const city = ["Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona"]
const startCity = "Kiev"

const result = checkRouteOfTravel(city,tickets,startCity)