//Finding Divisor and count of it

// var number= prompt("Enter The Number")
// var divisor=1
// var count=0
// while(divisor<=number)
// {
// 	if(number%divisor==0)
// 	{
// 	console.log(divisor + " is divisor of " + number)
// 	count++;
// 	//alert(divisor)

// }
// 	divisor++;
// }
// console.log("Number of Divisor of "+  number + " is " + count)



//Finding divisible of 2
// var number=100
// var divisor=1
// while(divisor<=number)
// {
// 	
// 	if(divisor%2==0)
// 	{
// 		console.log(divisor + " is divisible of " + 2)
// 	}
// 	divisor++;
// }


//Finding divisible of 3
// var number=100
// var divisor=1
// while(divisor<=number)
// {
	
// 	if(divisor%3==0)
// 	{
// 		console.log(divisor + " is divisible of 3")
// 	}
// 	divisor++;
// }


//Finding divisible of 2 & 3
// var number=100
// var divisor=1
// while(divisor<=number)
// {
	
// 	if(divisor%2==0  & divisor%3==0)
// 	{
// 		console.log(divisor + " is divisible of 2 & 3")
// 	}
// 	divisor++;
// }


 //Finding divisible of 2 || 3
// var number=100
// var divisor=1
// while(divisor<=number)
// {
	
// 	if(divisor%2==0  || divisor%3==0)
// 	{
// 		console.log(divisor + " is divisible of 2 or 3")
// 	}
// 	divisor++;
// }

//Finding prime number

var num = prompt("Enter Number");
var i = 2;
var count = 0;

while(num >= i)
{
 if(num % i == 0)
  count++;
 i++;
}

if(count == 1)
 console.log(num +" is a prime number");
else 
 console.log(num +" is not a prime number");