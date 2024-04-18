let input = require('readline-sync')
let Temperature = input.questionInt('Enter Temperature :- ')
if (Temperature < 7 ) {
    console.log("very Cold , Please Dont Go OutSide");
}
else if (Temperature >= 7 && Temperature < 14  ) {
    console.log("Feeling Cold , Please Take Care Your Self");
}
else if(Temperature >= 14 && Temperature < 18  ) {
    console.log("It's Sunny Time , We Should Take Bath In the Lake");
}
else if(Temperature >= 18 && Temperature <= 22  ) {
    console.log("Weather is very Hot Today , Stay Home please");
}
else {
    console.log("I hate Summer This is very Bed time ");
}