// Write your JavaScript code here!
window.addEventListener("load", function() {
   let style = document.querySelector("style");
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let faultyItems = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields required. Please refresh page and try again.");
    }
    else if (isNaN(fuelLevel.value)) {
      alert("Fuel Level Invalid"); 
    }
    else if (isNaN(cargoMass.value)) {
     alert("Cargo Mass Invalid");
    }
    else if (isNaN(pilotName.value) === false) {
      alert("Invalid Pilot Name");
    } 
    else if (isNaN(copilotName.value) === false) {
      alert("Invalid Co-Pilot Name");
    } else {
    document.getElementById("pilotStatus").innerHTML = `${pilotName.value} ready`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName.value} ready`;
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle ready for launch";
    faultyItems.style.visibility = "visible"
    if (fuelLevel.value < 10000) {
      faultyItems.style.visibility = "visible";
      fuelStatus.innerHTML = ">>Not enough fuel for the journey";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
    } else {
      fuelStatus.innerHTML = "Fuel level high enough for launch";
    };
    if (cargoMass.value > 10000) {
      faultyItems.style.visibility = "visible";
      cargoStatus.innerHTML = ">>Too much mass for the shuttle to take off";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
    } else {
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
    };
      event.preventDefault()
    };
   });
  });
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
     response.json().then( function(json) {
       let bigDiv = document.getElementById("missionTarget");
       let newDiv = document.createElement("div");
       bigDiv.appendChild(newDiv);
       let i = Math.floor(Math.random() * 6);
       newDiv.innerHTML = `
       <h2>Mission Destination</h2>
        <ol id = "planetData">
         <li>Name: ${json[i].name}</li>
         <li>Diameter: ${json[i].diameter}</li>
         <li>Star: ${json[i].star}</li>
         <li>Distance from Earth: ${json[i].distance}</li>
         <li>Number of Moons: ${json[i].moons}</li>
        </ol>
      <img src="${json[i].image}">
       `
       });
    });
   
  /* This block of code shows how to format the HTML once you fetch some planetary JSON!
  <h2>Mission Destination</h2>
  <ol>
     <li>Name: ${}</li>
     <li>Diameter: ${}</li>
     <li>Star: ${}</li>
     <li>Distance from Earth: ${}</li>
     <li>Number of Moons: ${}</li>
  </ol>
  <img src="${}">
  */