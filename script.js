//1)Solving problems using array functions on rest countries data
var request=new XMLHttpRequest()
request.open("get","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){
    let result=JSON.parse(request.response)
    console.log(result)

//Get all the countries from Asia continent /region using Filter method    
    let allregion=result.filter(regions=>regions.region=="Asia")   
    console.log(allregion)

//Get all the countries with a population of less than 2 lakhs using Filter method
    let totalpopulation=result.filter(people=>people.population<200000)   
    console.log(totalpopulation)

//Print the following details name, capital, flag, using forEach method    
    result.forEach(details => {
        console.log(
    `Country name:${details.name.common}
Country capital:${details.capital}
Country Flag:${details.flag}`)
    });

//Print the total population of countries using reduce method
    let peoples=result.map((people)=>people.population)
    let totalpopulations=peoples.reduce((acc,current)=>{return acc+current},0)
    console.log(totalpopulations)   
//Print the country that uses US dollars as currency.
    let curren=result.filter(cash=>cash.currencies)
    let current=curren.filter(cash=>cash.currencies.USD)
    console.log(current)
}
