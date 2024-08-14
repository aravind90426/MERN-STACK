/*
Task 1: Create an object named book with properties: title, author, and yearPublished. Add a
method named getSummary that returns a string summarizing the book. 
*/
const book={
    title:"Harry Potter",
    author:"J.K. Rowling",
    yearPublished:1997,
    getSummary:function(){
        return `${this.title} is a book written by ${this.author} and published in ${this
            .yearPublished}`
}
}
console.log(book.getSummary());
console.log(book.getSummary);

//Task-2

book.age=function(){
    return "20";
}
console.log(book.age());

//Task-3
let calculator={
    a:10,
    b:20,
    add:function(){
        return this.a-this.b;
    },
    sub:function(){
        return this.a-this.b;
    },
    mul:function(){
        return this.a * this.b;
        },
    div:function(){
        return this.a / this.b;
        }

}
console.log(calculator.add());
console.log(calculator.sub());
console.log(calculator.mul());
console.log(calculator.div());

/* 4: Extend the calculator object to include a history array. Each time a calculation is made,
store the operation and result in this array. */

calculator.history=[];
calculator.add=function(){
    calculator.history.push(`Addition:`+this.a + this.b);
    return "add:"+ calculator.a+calculator.b;
        }
calculator.sub=function(){
    calculator.history.push("subtract :"+ this.a - this.b);
    return `sub: ${calculator.a - calculator.b}`;

}
calculator.mul=function(){
    calculator.history.push("Multiplication :"+ this.a * this.b);
    return "mul: "+calculator.a * calculator.b;
}
calculator.div=function(){
    calculator.history.push("Division :"+ this.a / this.b);
    return "div :"+calculator.a / calculator.b;
    }
console.log(calculator.add());
console.log(calculator.sub());
console.log(calculator.mul());
console.log(calculator.div());
console.log(calculator.history)
//task-5

let person={
    age:0,
    increment:function()
    {
        this.age+=1;
        return this.age;
    },
    decrement:function()
    {
        if(this.age>0)
            {
                this.age-=1;
            }
         else
            {
                console.log("ypu cannot decrement age only increment ");
            }
            return this.age;
    }
}
    console.log(person.increment());
    console.log(person.increment());
    console.log(person.decrement());
    console.log(person.decrement());
    console.log(person.decrement());
//Task-6
    person.greet=function(){
       // this.name=prompt("enter name");
        return `hello ${this.name}`;
    }
    console.log(person.greet())
    
//Task -7

    let circle={
        radius:20,
        area:function(){
            return 3.14 * this.radius * this.radius;
        }
    }
    console.log(circle.area());

//Task-8
circle.diameter=function(){
    return this.radius*2;
}
circle.circumference = function(){
    return 2*3.14*this.radius;
}
console.log(circle.diameter());
console.log(circle.circumference());

//Task -9 and 10
let account ={
    name:"aravind",
    balance:1000,
    deposit:function(amount){
        this.balance+=amount;
        return this.balance;
    
},
withdraw:function(amount){
   if(this.balance>=amount){
    this.balance-=amount;
    return "withdraw Successfully "+"balance ="+ this.balance ;
   }
   else
   {
    console.log("insufficient balance");
    return "";
   }
  
}
}
console.log(account.balance);
console.log(account.deposit(500));
console.log(account.withdraw(1000));
console.log(account.withdraw(700));

//Task-11

    let fruits=["watemelon","orange"];
    console.log(fruits);
    fruits.push("Mango");
    console.log(fruits);

//Task-12
    fruits.pop();
    console.log(fruits);

//Task-13
    fruits.unshift("stawberry");
    console.log(fruits);

//Task-14
   fruits.shift()
   console.log(fruits);

//Task-15
function add(arr)
{
    arr.push(7);
}
let arr=[1,2,3];
add(arr);
console.log(arr);
//Task-16
function st(str)
{
    str=str.split(" ");
    
    str.pop();
   
    return str;
    
}
let tr="Hello world hai everyone";

console.log(st(tr));

//Task-17
let days=["sunday","monday","tuesday","wednesDay","thursday","friday","saturday"];
//let theday= days.shift();
console.log(days);
let theday= days.shift();
console.log(theday);
days.push(theday);
console.log(days);


//Task-18
let arrr=['a','b','c','d'];
function addz(arr)
{
    arr.push('z');
    arr.unshift('z');
    return arr;
}
console.log(arrr);
console.log(addz(arrr));

//Task-19
let movies =["jilla","theri","kushi","anjan","master"];
//let newmovie=prompt("enter the movie");
//movies.push(newmovie);
console.log(movies);

//Task-20
movies.splice(3,1)
console.log(movies);

//Task-21
