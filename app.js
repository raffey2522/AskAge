const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nWhat is your age? ', (answer) => {
  // TODO: Log the answer in a database
  
  var age = parseInt(answer);
  computeAge(age,5);
  computeAge(age,20);
  computeAge(age,30);
  rl.close();
});

function computeAge(age,increment){
    
    var add = age + increment;
    
    
if(add < 15)
  console.log('After '+increment+' years: '+'I don\'t have to think about my life yet');


else if(add >15 && add<30)
  console.log('After '+increment+' years: '+'I need to finish studies and find a job');


else if(add >30 && add<35)
  console.log('After '+increment+' years: '+'I need to marry');


else if(add >35 && add<40)
  console.log('After '+increment+' years: '+'I need to rear children');


else if(add >=40 && add<=59)
  console.log('After '+increment+' years: '+'Prepare to retire');


else if(add >=60)
  console.log('After '+increment+' years: '+'I will now retire');


}