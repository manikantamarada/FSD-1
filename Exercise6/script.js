function externalJS() { document.getElementById("external").innerHTML = "This message is from External JavaScript."; } function displayOutput() { 
    Using innerHTML document.getElementById("output").innerHTML = "Output using innerHTML"; 
    Using alert() alert("Output using alert()"); 
    Using console.log() console.log("Output using console.log()"); 
} 
function takeInput()
 { 
    let name = prompt("Enter your name:");
     let age = prompt("Enter your age:"); 
     let number = prompt("Enter a number:");
     Type conversion age = Number(age); number = Number(number); 
     document.getElementById("inputResult").innerHTML = "Name: " + name + "<br>" + "Age: " + age + "<br>" + "Number: " + number; 
    } 
function voterDetails() { 
    let name = prompt("Enter your name:"); 
    let age = prompt("Enter your age:"); age = Number(age); 
    let result; if (age >= 18) { result = "Eligible to Vote"; 

    } else {
         result = "Not Eligible to Vote"; 
        } 
        document.getElementById("voterTable").innerHTML = "<table border='1' cellpadding='10'>" + "<tr>" + "<th>Name</th>" + "<th>Age</th>" + "<th>Voting Status</th>" + "</tr>" + "<tr>" + "<td>" + name + "</td>" + "<td>" + age + "</td>" + "<td>" + result + "</td>" + "</tr>" + "</table>"; 
    }