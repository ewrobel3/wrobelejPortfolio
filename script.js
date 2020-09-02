document.getElementById("todolist").onmouseover = function() {mouseOver("todolistDiv", 
    "A todolist app built with React. Uses Adam Savage's method for marking tasks as complete. Completed August 2020.")};
document.getElementById("todolist").onmouseout = function() {mouseOut("todolistDiv")};
document.getElementById("wsb").onmouseover = function() {mouseOver("wsbDiv", 
    "An application for teaching kids in the 3rd-6th grade age range object-oriented programming using a Pokemon-style battle game. Prototyped Summer 2020.")};
document.getElementById("wsb").onmouseout = function() {mouseOut("wsbDiv")};
document.getElementById("clock").onmouseover = function() {mouseOver("clockDiv", 
    "A React app to tell time using both analog and digital formats. Completed in August 2020 through the Enlight cohorts program.")};
document.getElementById("clock").onmouseout = function() {mouseOut("clockDiv")};
document.getElementById("clubhub").onmouseover = function() {mouseOver("clubhubDiv",
    "A virtual interface for conducting student organization fairs that were prevented because of COVID-19. Prototyped Summer 2020.")};
document.getElementById("clubhub").onmouseout = function() {mouseOut("clubhubDiv")};
document.getElementById("spaceTraders").onmouseover = function() {mouseOver("spaceTradersDiv", 
    "An interactive trading game set in space and built in JavaFX. Completed May 2020.")};
document.getElementById("spaceTraders").onmouseout = function() {mouseOut("spaceTradersDiv")};

function mouseOver(element, message) {

    var newContent = document.createTextNode(message); 
    // add the text node to the newly created div
    document.getElementById(element).appendChild(newContent);
    //console.log(newDiv.className);
    //document.getElementById(element).appendChild(newDiv);
    //console.log("in mouseover function");
}

function mouseOut(element) {
    var target = document.getElementById(element).lastChild;
    //console.log(target);
    target.parentNode.removeChild(target);
}