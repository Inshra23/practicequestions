//question1
// function currentDateTime() {
//     let d = new Date()
//     document.write(d)
// }
// currentDateTime()

// //question 2
// let firstName = prompt("Enter first name")
// let lastName = prompt("Enter last name")
// function greets(firstName, lastName){
//     document.write("Welcome" + " " + firstName + " " + lastName)
// }
// greets(firstName, lastName)

// //question 3
// let x = +prompt("Enter first number")
// let y = +prompt("Enter second number")
// function sum(x, y){
//     return x + y
// }
// console.log(sum(x, y));

//question 4
// let num1 = +prompt("Enter the Number 1")
// let num2 = +prompt("Enter the Number 2")
// let operator = prompt("Enter the operator")
// function calculator(num1, num2, operator){
//    if(operator === "+"){
//     document.write(num1 + " " +operator +" " + num2 + " "+ "=" +" "+ (num1 + num2))
//    }
//    else if(operator === "-"){
//     document.write(num1 + " " +operator +" " + num2 + " "+ "=" +" "+ (num1 - num2))
//    }
//    else if(operator === "*"){
//     document.write(num1 + " " +operator +" " + num2 + " "+ "=" +" "+ (num1 * num2))
//    }
//    else if(operator === "/"){
//     document.write(num1 + " " +operator +" " + num2 + " "+ "=" +" "+ (num1 / num2))
//    }
//    else if(operator === "%"){
//     document.write(num1 + " " +operator +" " + num2 + " "+ "=" +" "+ (num1 % num2))
//    }

// }
// calculator(num1, num2, operator)

// //question 5
// function square(a){
//     return a * a
// }
// console.log(square(3));

// //question 6

// function areaOfRectangle(width, height){
//     return "Area of a rectangle is:"+ width * height

// }
// console.log(areaOfRectangle(4, 6));

// //question 6
// //part a
// function circumferenceOfCircle(radius){
//     let r = 7
//     return "Circumference of circle is" + 2*3.14*r
// }
// console.log(circumferenceOfCircle());
// //part b
// function circle(){
//     let r = 7
//     return "Area of circle is" + 3.14*r*r
// }
// console.log(circle());


//question 7

let start_number = +prompt("Enter a start number");
let end_number = +prompt("Enter a end number");
function count(start_number, end_number){
    if(start_number > end_number){
        for(let i = start_number; i>end_number; i--)
            document.write(i + "<br>")
        
    }
    else if(start_number < end_number){
        for(let i = start_number; i<=end_number; i++)
            document.write(i + "<br>")
    }
    else if(start_number === end_number){
        document.write("both are equal")
    }
}
count(start_number,end_number);