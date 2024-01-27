 
        //  Celsius Program
 let a = prompt("Enter the Current Temperature:");

let b = parseFloat(a);

if(a<30)
{
    alert("It's is a hot day");
}
else{
    alert("The weather is moderate");
}

        //  Marksheet Program

let nam = prompt("Enter Your Name: ");
let cls = prompt("Enter Your Class: ");
let roll = prompt("Enter Your Roll Number: ");
let com = prompt("Enter the Computer Marks: ");
let math = prompt("Enter the Math Marks: ");
let physics = prompt("Enter the Physics Marks: ");
let urdu = prompt("Enter the Urdu Marks: ");

let cs = Number(cls);
let rll = Number(roll);
let cm = Number(com);
let mt = Number(math);
let py = Number(math);
let ud = Number(urdu);

console.log("Total Marks: 400")
let Obtained = cm + mt + py + ud;
console.log("Obtained Marks: " +Obtained);
let Per = Obtained*100/400;
console.log("Percentage: " +Per);

if(Per>=80)
{
    console.log('Grade : A+');
}
else if(Per>=70)
{
    console.log('Grade : A')
}
else if(Per>=60)
{
    console.log('Grade : B');
}
else if(Per>=50)
{
    console.log('Grade : C');
}
else if(Per>=40)
{
    console.log('Grade : D');
}
else
{
    console.log('Failed....')
}


