const checkRouteOfTravel = (city,tickets,startCity) => {
    let tempStartState = startCity 
    let visited = []
    for (let i of tickets){
        for (let j of tickets){
            temp = j[tempStartState]
        if (temp !== undefined && !visited.includes(j[tempStartState])) {
          visited.push(j[tempStartState])
          tempStartState = j[tempStartState]
          
        }
        }
    }
    return visited
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
console.log(result)