let input = require('readline-sync')
let Marks = input.questionInt('Enter Marks :- ')
if (Marks >= 80 ) {
    console.log("'Outstanding' Your Grade Is 'A'");
}
else if (Marks >= 60 && Marks < 80  ) {
    console.log("'Good Job' Your Grade Is 'B'");
}
else if(Marks >= 40 && Marks < 60  ) {
    console.log("'Satisfactory' Your Grade Is 'C'");
}
else if(Marks >= 20 && Marks < 40  ) {
    console.log("'Needs Improvement' Your Grade Is 'D");
}
else if(Marks >= 0 && Marks < 20  ) {
    console.log(" 'You are Fail' Your Grade Is 'E'");
}