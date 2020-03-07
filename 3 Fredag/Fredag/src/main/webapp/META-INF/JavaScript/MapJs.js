// can man evt benytte document.body;
const map = document.querySelector("map");
const returnPoint = document.getElementById("postPoint");

 function loadDoc(e, id) {
    e.preventDefault();
    let target = e.target;
    console.log(e.target.id); 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        returnPoint.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "http://restcountries.eu/rest/v1/alpha?codes=" + e, true);
    xhttp.send();
  }

 // onclik get id and use Ajax to get data from http://restcountries.eu/rest/v1/alpha?codes=de 
map.addEventListener("click",function(e) {loadDoc(e, this); }, false)  

// Ru = parret note 