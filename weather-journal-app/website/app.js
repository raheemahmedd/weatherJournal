/* Global Variables */
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log('date : '+newDate);
const apiKey='cdaba4ed02e4937bcecb5abb55df3595&units=metric';
const btn = document.getElementById('generate');
// Create a new date instance dynamically with JS
btn.addEventListener("click", async function(){
   try{
    let zipCode = document.getElementById('zip').value;
    console.log("entered zip code : "+zipCode);
    let feelings = document.getElementById('feelings').value;
     console.log("entered feelings : "+feelings);
    // make dynamic url 
    // first step 
  let baseUrl=`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
     
   const response=  await fetch(baseUrl).then(res=>res.json());
// view response in console 
  
   const temp = await response.main.temp;
   console.log("temp of zip code:"+temp);
   console.log(response);
   // second step
  await fetch('/addWeather',{
    method:'POST',
    credentials:'same-origin',
    headers: {
      'content-Type':"application/json"
    },
    body:JSON.stringify({
        newDate,
        temp,
        feelings
    })
});
// third step
  const resultData =await fetch('/getWeather').then(res=>res.json());
  
    document.getElementById('date').innerHTML=resultData.date;
    document.getElementById('content').innerHTML=resultData.feelings;
    document.getElementById('temp').innerHTML=resultData.temp;
}
   catch(err){

    console.error("type of error"+err);

   }



});
    


 