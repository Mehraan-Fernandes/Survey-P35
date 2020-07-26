var form;   
var database

function setup() {
createCanvas(800,600)
    database = firebase.database();
    form = new Form();
}


function draw() {
    form.display();
}


function getEmailId(){

    var votersEmailId = "votersEmailId"
    database.ref(votersEmailId).set({
        email : form.input.value()
      });

}

function getAnswers(){

    var answers = "answers " + form.input.value();
    database.ref(answers).set({
        answer1 : form.answer1.value(),
        answer2 : form.answer2.value(),
        answer3 : form.answer3.value(),
        answer4 : form.answer4.value(),
        answer5 : form.answer5.value()
    });

}