import 'bootstrap/dist/css/bootstrap.css'

// eventClick = hvor på kortet bliver der trykket på. 
const eventClick = document.getElementById("svg2");
// hvor vil vi placere daten vi henter (her navngivet som returnPoint (ref til index))
const returnPoint1 = document.getElementById("contryName");
const returnPoint2 = document.getElementById("contryPopulation");
const returnPoint3 = document.getElementById("contryArea");
const returnPoint4 = document.getElementById("contryBorders");


function getCountry(id){
// Brug id til at lave fix på GB og vandmasserne her. bare sæt egen værdier i returnpoints

    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + id
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
      // kontrol af data indhold
        console.log(data)
      // then data =>{} = hvad skal der ske med dataen    
        returnPoint1.innerText = "Name: " + data[0].name
        returnPoint2.innerText = "Population: " + data[0].population
        returnPoint3.innerText = "Area: " + data[0].area
        returnPoint4.innerText = "Borders: " + data[0].borders
    })
}
// eventListener registrere click på kortet og vidergiver event til eventHandler (Egen funktion)
eventClick.addEventListener("click", eventHandler, false )

// Var til at reset farver (skal være null til at begynde med, derfor er ingen værdi oplyst)
var prev;

function eventHandler(e) {
// tag id givet fra event 
  var id = e.target.id;
 // giv farve hvis der ingen er ellers resæt 
  if (!prev) {
    e.target.style.fill = "red";
    prev = e.target;
  } else {
    prev.style.fill = "rgb(192, 192, 192)";
    e.target.style.fill = "red";
    prev = e.target;
  }
 // getCountry henter daten og retuner det til returnPoints 
  getCountry(id);
}

