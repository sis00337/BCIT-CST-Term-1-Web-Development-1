
function grabIndex(arg) {
    let index = process.argv.indexOf(arg);
    return index + 1;
}

let questionIndex = grabIndex('question');
let answerIndex = grabIndex('answer');

let questionNum = parseInt(process.argv[questionIndex]);
let answerValue = Number(process.argv[answerIndex]);

let score = 0;
let fs = require('fs')
if (process.argv.length === 4) {
    fs.readFile('./questions.json', 'utf8', function(err, data) {
        if(err) console.log(err)
        else {
        let questionData = JSON.parse(data);
        console.log(questionData[questionNum]);
        }
    });
}
else if (process.argv.length === 6) {
    fs.readFile('./answers.json', 'utf8', function(err, data) {
        let answerData = JSON.parse(data);
        if (answerValue === answerData[questionNum - 1]) {
            score += 1;
            fs.writeFile('./score.txt', String(score), 'utf8', function(err) {
                if(err) console.log(err);
            });
        }
    });
}
else if (process.argv.length === 3) {
    fs.readFile('./score.txt', function(err, data) {
        if(err) console.log(err);
        else console.log(data.toString());
    });
}