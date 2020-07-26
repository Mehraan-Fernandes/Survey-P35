class Form {
    constructor() {
        this.title = createElement("h2");
        this.input = createInput("Please Enter Your Email ID");
        this.initialSubmit = createButton("Submit");
        this.question1 = createElement("h5");
        this.question2 = createElement("h5");
        this.question3 = createElement("h5");
        this.question4 = createElement("h5");
        this.question5 = createElement("h5");
        this.instruction = createElement("h5");
        this.ending = createElement("h4");
        this.answer1 = createInput("");
        this.answer1.hide();
        this.answer2 = createInput("");
        this.answer2.hide();
        this.answer3 = createInput("");
        this.answer3.hide();
        this.answer4 = createInput("");
        this.answer4.hide();
        this.answer5 = createInput("");
        this.answer5.hide();

    }

    display() {
        this.title.html("A Survey To Bring About Change");
        this.title.position(width / 2 - 285, height / 2 - 250);

        this.input.position(width / 2 - 120, height / 2 - 60);
        this.input.size("190");
        this.initialSubmit.position(width / 2 + 75, height / 2 - 30);

        this.initialSubmit.mousePressed(() => {
            this.hideInitialEntry();
            getEmailId();
            this.instruction.html("Instructions : Answer your questions with 'yes', 'no' or 'probably' ");
            this.instruction.position(20, height / 2 - 190)
            this.question1.html("1. Do you consider global warming as one of the biggest threat to our planet ?");
            this.question1.position(width / 2 - 350, height / 2 - 100);
            this.answer1.show();
            this.answer1.position(width / 2 - 350, height / 2 - 30);
            this.answer1.size("300");
            this.submit1 = createButton("Submit");
            this.submit1.position(width / 2 - 20, height / 2 - 30);


            this.submit1.mousePressed(() => {
                getAnswers();
                this.question1.hide();
                this.answer1.hide();
                this.submit1.hide();
                this.question2.html("2. Do you use plastics in your daily life?")
                this.question2.position(width / 2 - 350, height / 2 - 100);
                this.answer2.show();
                this.answer2.position(width / 2 - 350, height / 2 - 30);
                this.answer2.size("300");
                this.submit2 = createButton("Submit");
                this.submit2.position(width / 2 - 20, height / 2 - 30);


                this.submit2.mousePressed(() => {
                    getAnswers();
                    this.question2.hide();
                    this.answer2.hide();
                    this.submit2.hide();
                    this.question3.html("3. Have you planted any trees in the past week ?")
                    this.question3.position(width / 2 - 350, height / 2 - 100);
                    this.answer3.show();
                    this.answer3.position(width / 2 - 350, height / 2 - 30);
                    this.answer3.size("300");
                    this.submit3 = createButton("Submit");
                    this.submit3.position(width / 2 - 20, height / 2 - 30);

                    this.submit3.mousePressed(() => {
                        getAnswers();
                        this.question3.hide();
                        this.answer3.hide();
                        this.submit3.hide();
                        this.question4.html("4. Would you like to change your car to an electric one ?")
                        this.question4.position(width / 2 - 350, height / 2 - 100);
                        this.answer4.show();
                        this.answer4.position(width / 2 - 350, height / 2 - 30);
                        this.answer4.size("300");
                        this.submit4 = createButton("Submit");
                        this.submit4.position(width / 2 - 20, height / 2 - 30);

                        this.submit4.mousePressed(() => {
                            getAnswers();
                            this.question4.hide();
                            this.answer4.hide();
                            this.submit4.hide();
                            this.question5.html("5. Would you like to contribute/serve for the cause of reducing global warming? ")
                            this.question5.position(width / 2 - 350, height / 2 - 100);
                            this.answer5.show();
                            this.answer5.position(width / 2 - 350, height / 2 - 30);
                            this.answer5.size("300");
                            this.submit5 = createButton("Submit");
                            this.submit5.position(width / 2 - 20, height / 2 - 30);

                            this.submit5.mousePressed(() => {
                                getAnswers();
                                this.instruction.hide();
                                this.question5.hide();
                                this.answer5.hide();
                                this.submit5.hide();
                                this.ending.html("The survey has ended. Thank you for your time !")
                                this.ending.position(width / 2 - 300, height / 2 - 30);


                            })
                        })
                    })
                })
            })
        });


    }

    hideInitialEntry() {
        this.input.hide();
        this.initialSubmit.hide();
    }

}