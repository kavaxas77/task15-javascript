var people = ["Tom,Jerry,Spike,4Th"]
for(var i = 0; i < people.length; i++){
    console.log(people[i]);
}


var item = prompt ("ნივთის ფასი" , 50);

if (item < 20){
    alert("დაბალი ფასი ნივთის");
}
else if(item >= 50 && item <= 50){
    alert("საშვალო ფასი ნივთის");
}
else (item > 50); {
alert("მაღალი ფასი ნივთის");
}



const arr = [ 15,53,22,198,10,28,16,70,33,951 ]
const odds = arr.filter(number => {
    return number % 2 !== 0;
  });
  
  console.log(odds);

  
function display() {
    var x = 1;
    for (var i = 0; i < arguments.length; i++)
    x *= arguments[i];
    document.write(x);
}
display(4,6,8)
