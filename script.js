function printData(countries) {
    countries.forEach((coun) => console.log(coun.name));
  }
  
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
   
    .then((countries) => {
      printData(countries);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

    function display(){
        const element = document.getElementById("data-container");
        const countryNames = countries.map((coun) => `<p>${coun.name}</p>`).join('');
        element.innerHTML = countryNames;
        request.addEventListener("load", function() {
            const countries = JSON.parse(request.responseText);
            display(countries);
    })
}