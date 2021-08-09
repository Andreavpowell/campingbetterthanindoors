function getUserName(){
    let userName = prompt('Please Enter Your Name: ');
    console.log(userName);
    document.write('<h2>' + userName + '</h2>');
    return userName;
}

function getUserAnswer(){
    let userAnswer = prompt('Do you like camping?');
    console.log(userAnswer);

    if (userAnswer.toLowerCase() == 'yes'){
        document.write('<h3>Sick. I guess you can stay since you answered \"yes\" to my question.' + '</h3>');
    } else {
        document.write('<h3>' + 'Your mother and I need to speak with you.</h3>');
    }
}

function getLikeHikingAnswer(){
    let likehiking = prompt('Do you like hiking?');

    if (likehiking.toLowerCase() == 'yes'){
        document.write('<h3>So. You like hiking. Name one of their albums.</h3>');
    } else {
        document.write('<h3>Since you apparently hate everything that\'s great in the world, you should probably go <a href="https://puginarug.com/">here</a> instead. It would be better a use of your time.')
    }
}