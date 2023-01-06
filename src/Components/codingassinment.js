const checkRouteOfTravel = (tickets,startCity) => {
    // tempStartState it will store the currently where he is 
    let tempStartState = startCity 
    // visited it will add the visited citys
    let visited = [tempStartState]
    // i need to iterate each citys to know where he is in 
    for (let i of tickets){
        // second loop will iterate x * x times 
        for (let j of tickets){
            //  temp will check is current city or not 
            temp = j[tempStartState]
            //  if  temp not undefined and it not include in visited array then it will add visited place and it also change current city 
        if (temp !== undefined && !visited.includes(j[tempStartState])) {
          visited.push(j[tempStartState])
          tempStartState = j[tempStartState]
          
        }
        }
    }

    // finaly it will return the route he taken for trip 
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

// function for gives travel route
const result = checkRouteOfTravel(tickets,startCity)
// it will display the route he taken to finish the trip
console.log(result.join(" => "))