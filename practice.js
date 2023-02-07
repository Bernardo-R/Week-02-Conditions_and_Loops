var num1 = 30;
var num2 = 30;
var num3 = 0;
var num4 = 20;
var myNumber = 40;
var day = "Sunday"
var money = 13;
var planeTicket = 130;
var vacationTime = true;
var var1 = "apple";
var var2 = "apple";
var requiredCupsOfRice = 5;
var currentCupsOfRice = 0;

//Conditionals

if(num1 >= num2){
    if(num3 >= num4){
        console.log("Both statements are true")
    }else{
        console.log("The first statement is true, but the second is not")
    }
       
}

console.log("Program has ended.")

var numberOfDay = 8;

switch(numberOfDay){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
        default: console.log("The number of day is invalid")
}


if(num1 == myNumber){
    console.log(num1 + " is equal to my number, " + myNumber)
}else if(num1 > myNumber){
    console.log(num1 + " is larger than my number, " + myNumber)
}else{
    console.log(num1 + " is smaller than my number, " + myNumber)
}

if(num1 < num2){
    console.log(num1)
}else if(num1 == num2){
    console.log("same")
}else{
    console.log(num2)
}

if(day === "Sunday" || day === "Saturday"){
    console.log(true)
}else{
    console.log(false)
}

if(money >= planeTicket && vacationTime === true){
    console.log(true)
}else{
    console.log(false)
}

console.log(true && (false || true))

var comparison = var1 != var2;
console.log(comparison)

//Loops

while (currentCupsOfRice < requiredCupsOfRice){
    currentCupsOfRice++
    console.log("The bowl contains " + currentCupsOfRice + " cups of rice.")
    
}
 console.log("We have enough rice!")

 //testing if the outcome will be the same

 /* do{
    console.log("The bowl contains " + currentCupsOfRice++ + " cups of rice.")
 } while(currentCupsOfRice !== requiredCupsOfRice) //this created an infinite loop, variable "requiredCupsOfRice" is not uptdating its value
 console.log("We have enough rice!") */

 //creatig a game
 let points = 0;
 let pointReset = false
 let turns;

for(let i = 0; points < 290 && i < 100; i++){
     turns = i  
    console.log(i + " this is the value of i before condition start")
    if(points == 125 && pointReset === false){
        points = 25;
        pointReset = true;

    }else if(i % 2 === 0){
       points = points + 5;

    }else{
        points = points + 3;
    }

    
    console.log("this is the value of i after conditional: " + turns + " and this is the score = " + points)
    
}

var j = 0;
 do{
    if(j % 3 == 0){
        console.log(j)
        
    }
    j++
 }while(j <= 99)