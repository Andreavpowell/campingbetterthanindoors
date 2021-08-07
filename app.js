let userName = prompt('Please Enter Your Name: ');
console.log (userName);
document.write('<h2>') + userName + '</h2>';

let userAnswer = prompt('Do you like camping?');
console.log (userAnswer)

if (userAnswer == 'Yes') {
    document.write('<h3>Sick. I guess you can stay since you answered \"yes\" to my question, ' + userName + '.' + '</h3>');
} else {
    document.write('<h3>' + userName +', your mother and I need to speak with you.</h3>');
}
