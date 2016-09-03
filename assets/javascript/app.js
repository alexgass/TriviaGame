var displayText = "";
var answers = ["The Beer Baron", "All Syrup Super Squishie", "Santas Little Helper", 
"Armin Tamzarian", "Fudd", "Lenny", "Otto", "Reverand Lovejoy"];

var questions =["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"];

function bartSaysHello() {
	alert("kawabunga dude");
}

function emptyButtons()) {
	$('#radio').removeAttr('checked');
	// Refresh the jQuery UI buttonset.                  
	$( "#radio" ).buttonset('refresh');
};

function checkAnswers(q) {
	var qs = document.getElementsByName(q);
	var noRadioButtons = qs.length;

	for (i = 0; i < noRadioButtons; i++) {
		if(qs[i].checked) {
			if(qs[i].value === 'Y') 
				displayText = displayText + "You know the simpsons!\n";
			else displayText = displayText + answers[questions.indexOf(q)] + "\n";
				break;
		}
	}
}

function checkAll() {
	for (i = 0; i < questions.length; i++) {
		checkAnswers(questions[i])
	}
	questionsGoHere.answerBox.value = displayText;
}

