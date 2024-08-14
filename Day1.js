/*
//Task-1
alert("hello world");
//Task-2
let name ="aravind";
let rollno=106;
let isMale=true;
console.log("string :"+name);
console.log("Number :" +rollno);
console.log("boolean :"+isMale);

//Task-3
let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
//Task-4
let a1="social";
let a2="science";
console.log(a1+a2);

//Task-5
let l1=23;
let l2="hai";
let l3=true;
let l4="23"
console.log(l1+" : "+typeof(l1))
console.log(l2+" : "+typeof(l2))
console.log(l3+" : "+typeof(l3))
console.log(l4+" : "+typeof(l4))

//task-6

let name ="aravind";
let rollno=106;
let isMale=true;
console.log("string :"+name);
console.log("Number :" +rollno);
console.log("boolean :"+isMale);

//task-7
console.log("hi")
console.log("hwello");console.log("hwello");

//task-8
for(let i=0;i<2;i++)
    {
        for(let j=0;j<3;j++)
            {
                console.log(i+" - "+j);
            }
    }
//task-9
let t9="hello",t92="hi";
console.log(t9+" "+ t92);
*/
/*task-11
"use strict"
a=10;
console.log(a);

//task-12

a=10;
console.log(a);



//task-13
"use strict"
let a= 10;
console.log(a);
delete a;
console.log(a);



//task-14
a= 10;
console.log(a);
"use strict"
b=10;
console.log(b);

//task-15
"use strict"
const pi = 3.14;
console.log(pi);

//task-16
let a1=1;
let b1=2;
const c1=3;
console.log(a1);
console.log(b1);
console.log(c1);

//task-17
const r=5;
r=6;


//task-18
let i;
console.log(i);
//task-19
i=9;
console.log(i +" : "+typeof i);
i="ara";
console.log(i +" : "+typeof i);
i=true;
console.log(i +" : "+typeof i);
//Task-20
let oldName= 11;
let newName = oldName;
console.log(oldName);
console.log(newName);

//Task-21
let a=10;
let b="Name";
let c=null;
let d=false;
let e={name:"aravind",age:19}
let f=undefined;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

//Task-22
console.log(a+" : "+typeof a);
console.log(b+" : "+typeof b);
console.log(c+" : "+typeof c);
console.log(d+" : "+typeof d);
console.log(e+" : "+typeof e);
console.log(f+" : "+typeof f);

//Task-23
const sym1 = Symbol(17);
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
console.log(sym1);
console.log(typeof sym1);

//Task- 24
let m = null;
console.log(typeof m)

//Task-25
{
    let n = 10;
    var nm =11;
}
console.log(nm);
console.log(n);

//let - local scope
//var - global scope


//Task-26

let n1="55"
console.log(n1 +" "+typeof n1)
n1= +n1;
console.log(n1+" "+typeof n1)
let a="22"
a= Number(a)
console.log(typeof a)
let b="22"
b=parseFloat(b);
console.log(b+" "+typeof b)

//Task-27
let isMale ="true";
console.log(isMale+" "+typeof isMale);
isMale=Boolean(isMale)
console.log(isMale+" "+typeof isMale);
isMale=String(isMale)
console.log(isMale+" "+typeof isMale);


//Task-28
let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(b%a);
//Task-29
console.log(a++);
console.log(a)
console.log(a--);
console.log(++11);
*/
//Task-30
console.log(1+2-10*3/11)

//Task-31
console.log(10>8);
console.log(10<8);
console.log(11<=11);
console.log(9>=11);

//Task-32
console.log(10==" 10   ");
console.log(10==="10 ");
//Task-33
let a="asd"<"bse";

console.log(a);
    
//Task-34
console.log("5"!==5)
console.log("5"!=5)

//Task-35
console.log(null==undefined);
console.log(null===undefined);

//Task-36
let num =10;
if(num&1==1)
    {
        console.log(num+" number is odd");
    }
 else{
    console.log(num+" number is even");
 }
 //Task-37
num=-1;
 if(num&1==1)
    {
        if(num>0)
            {
                console.log(num+" number is positive odd");
            }
            else if(num<0)
                {
                    console.log(num+" number is negative odd");
                }
    }
    else{
        if(num>0)
            {
                console.log(num+" number is positive even");
            }
            else if(num<0)
                {
                    console.log(num+" number is negative even");
                }
                else
                {
                    console.log(num+" number is Zero");
                }

    }

//Task- 38
num=11;
let ans= (num&1)?"odd":"even";
console.log(ans);

//Task-39

let res= null?"1":"0";
console.log(res);

//Task- 40
let val;
(num&1)?val ="odd": val="even";
console.log(val);

//task-41
let a1=3;
let a2=5;
let a3 =7;
if(a1>a2 && a1>a3)
    console.log("max is "+a1);
else if(a2>a3)
    console.log("max is "+a2);
else
console.log('max is '+a3);
console.log(1&&0);
console.log(1||0);

//task-42
let num1=10;
let resu = num1>0 && num1<100;
console.log(resu);

//task-43
let b=true;
b=!b;
console.log(b)

//task-44
let ismale =true;
let weightlifting =  true&&ismale;
console.log(weightlifting);

//task-45
console.log(5>4 && 3<2);

//task -46
function sum(a,b)
{
    return a+b;
}
console.log(sum(5,7));

