import 'bootstrap/dist/css/bootstrap.css'

// eventClick = hvor på kortet bliver der trykket på. 
const eventClick = document.getElementById("svg2");
const returnPoint = document.getElementById("postPoint");

 function loadDoc(e) {
    e.preventDefault();
    let taget;
    // if (e.target.id.length() > 2 ){
    //     //taget = e.target.parrent_note
    // } else {
    //     target = e.target.id;
    // }

    console.log(e.target.id); 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        returnPoint.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "http://restcountries.eu/rest/v1/alpha?codes=" + target, true);
    xhttp.send(returnPoint);
    returnPoint.innerHTML = xhttp; 
    console.log(xhttp);
  }

//  // onclik get id and use Ajax to get data from http://restcountries.eu/rest/v1/alpha?codes=de 


// window.onload = function(){
function eventHandler(e){
    var contry = e.target.id 
    console.log(contry)
    e.target.style.fill = "red"
    
    // var url = "http://restcountries.eu/rest/v1/alpha?codes=" + contry
    // fetch(url)
    // .then(res => res.json())
    // .then(data => {
    //     returnPoint.innerText = "name" + data[0].name
    // })
    getContry(contry)
}
// }
function getContry(id){
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + id
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        returnPoint.innerText = "name" + data[0].name
    })
}

eventClick.addEventListener("click", eventHandler, false )
// eventClick.addEventListener("click",function(e) {loadDoc(e); }, false)  

// // Ru = parret note 

