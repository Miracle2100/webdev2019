const getSleepHours = day => {
    switch(day) {
    case 'monday':
      return 6;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 4;
    case 'thirsday':
      return 5;
    case 'friday':
      return 5;
    case 'saturday':
      return 8;
    case 'sunday':
      return 4;
  }
};
const getActualSleepHours = () => {
return 6 + 7 + 4 + 5 + 5 + 8 + 4;

}
const getIdealSleepHours = (hoursPerNight) => {
    return hoursPerNight * 7;
}
const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours)
    console.log('You have perfect amount of sleep :D');
    else if(actualSleepHours > idealSleepHours)
    console.log('You have more sleep than needed :(');
    else console.log('You should get some rest :)');
}
calculateSleepDebt();
