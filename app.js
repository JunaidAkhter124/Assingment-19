Q1

let dObj = new Date();


console.log(dObj);

Q3
function addTwoNumbers() {
 
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    

    let sum = num1 + num2;
    

    return sum;
}


alert("The sum is: " + addTwoNumbers());

Q5
function square(number) {
    return number * number;
}


console.log(square(5));  
Q6
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
        return 1; 
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i; 
        }
        return result;
    }
}


console.log(factorial(5));  
console.log(factorial(0));  
console.log(factorial(-3)); 


Q7
function displayCounting(start, end) {
   
    if (start > end) {
        document.getElementById("counting").innerText = "Start number must be less than or equal to end number.";
        return;
    }

    let countingDisplay = "";
    for (let i = start; i <= end; i++) {
        countingDisplay += i + " "; 
    }

  
    document.getElementById("counting").innerText = countingDisplay.trim();
}


Q8
function computeHypotenuse(base, perpendicular) {
    
    function square(num) {
        return num * num;
    }

   
    const baseSquared = square(base);
    const perpendicularSquared = square(perpendicular);


    const hypotenuse = Math.sqrt(baseSquared + perpendicularSquared);
    
    return hypotenuse;
}


const base = 3;
const perpendicular = 4;
const hypotenuse = computeHypotenuse(base, perpendicular);
console.log("The hypotenuse is:", hypotenuse);  

