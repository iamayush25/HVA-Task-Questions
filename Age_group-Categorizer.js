let input = require('readline-sync')
let Age = input.questionInt('Enter Your Age :- ')
if (Age >= 60 ) {
    console.log('Seniors');
}
else if (Age >= 40 && Age < 60  ) {
    console.log("Middle-aged Adults");
}
else if(Age >= 18 && Age < 40  ) {
    console.log("Young Adults");
}
else if(Age >= 11 && Age < 18  ) {
    console.log("Teenagers");
}
else if(Age >= 0 && Age <=10  ) {
    console.log("Children");
}