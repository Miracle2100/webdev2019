let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 18;
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`You will race at 9:30 am. This is your Racenumber: ${raceNumber}`);
}
else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. This is your Racenumber: ${raceNumber}`);
}
else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm. This is your Racenumber: ${raceNumber}`);
}
else {
  console.log('Please, see the registration desk');
}

