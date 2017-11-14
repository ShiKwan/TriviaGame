//https://hobbylark.com/party-games/FreeFun100QuestionQuiz 
$(document).ready(function(){

	const q1 = {
		question: "Who was the legendary Benedictine monk who invented champagne?",
		answer: "Dom Perignon",
		mcq: ["Dom Perignon","Dom Pujiono","Dom Mazzetti", "Dom Brascia"],
		image: "q1.gif"
	}

	const q2 = {
		question:"Name the largest freshwater lake in the world?",
		answer:"Lake Superior",
		mcq: ["Lake Erie", "Lake Tahoe", "Lake Superior", "Lake Mississippi"],
		image: "q2.gif"
	}

	const q3 = {
		question:"Where would you find the Sea of Tranquility",
		answer:"The Moon",
		mcq: ["Israel", "The Moon", "Chicago", "Black Mirror"],
		image: "q3.gif"
	}

	const q4 = {
		question:"What is someone who shoes horses called",
		answer:"Farrier", 
		mcq: ["Equine Veterinary Technician", "Broodmare Manager", "Groom" , "Farrier"],
		image: "q4.gif"
	}

	const q5 = {
		question: "What item of clothing was named after its Scottish Invenotr?",
		answer: "Mackintosh",
		mcq: ["Mackintosh", "Stirring", "Pelamis", "Drummond Light" ],
		image: "q5.gif"
	}

	var questionaire = [];

	questionaire =[q1,q2,q3,q4, q5];

	//  Variable that will hold our setInterval that runs the stopwatch
	var guessTimer;

	//prevents the clock from being sped up unnecessarily
	var clockRunning = false;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;

	// Our stopwatch object
	var match = {

		time: 30,
		reset: function() {

	    match.time = 30;
	    // DONE: Change the "display" div to "00:00."
	    $(".divTimer").text("30");
	  },
	  start: function() {

	    if (!clockRunning) {
	        guessTimer = setInterval(match.count, 1000);
	        clockRunning = true;
	    }
	  },
	  stop: function() {

	    clearInterval(guessTimer);
	    clockRunning = false;
	  },
	  count: function() {

	    if(match.time > 0){
	    	match.time--
		    console.log(match.time);
	    }else if(match.time ===0){
	    	console.log("times up!");
	    	userAnswerCorrectly = false;
	    	timeOutAnswer();
	    	index++;	
			if(index <= questionaire.length){
				setTimeout(function(){
					newQuestion(index);	
				},5000)
			}else{
				setTimeout(function(){
					gameOver();
				},5000)
			}
	    }
	    $(".divTimer").text(match.time);
	  }
	}
	function newQuestion(index){
		match.reset();
		match.start();
		if(match.time > 0){
			$(".divSummary").hide();
			$(".divQuestion").show();
			$(".divMultipleChoices").show();
			$(".divTimer").show();
			$(".divAnswer").hide();
			$(".divYesNo").hide();
			$(".imgImage").hide();
			$(".divQuestion").html(questionaire[index].question);
			$(".divQuestion").attr("value",questionaire[index].answer);
			$(".btn-a").html(questionaire[index].mcq[0]);
			$(".btn-a").attr("value",questionaire[index].mcq[0]);
			$(".btn-b").html(questionaire[index].mcq[1]);
			$(".btn-b").attr("value",questionaire[index].mcq[1]);
			$(".btn-c").html(questionaire[index].mcq[2]);
			$(".btn-c").attr("value",questionaire[index].mcq[2]);
			$(".btn-d").html(questionaire[index].mcq[3]);
			$(".btn-d").attr("value",questionaire[index].mcq[3]);
		}
	}
	function displayAnswer(index){
		$(".divMultipleChoices").hide();
		$(".divQuestion").hide();
		$(".divAnswer").show();
		$(".divYesNo").show();
		$(".imgImage").show();
		$(".divTimer").hide();
		if(userAnswerCorrectly){
			$(".divYesNo").html("Correct!");
		}else{
			$(".divYesNo").html("False!");
		}
		$(".divAnswer").html("Correct answer is .. " + $(".divQuestion").attr("value"));
		$(".imgImage").attr("src", "assets/images/" + questionaire[index].image);
	}
	function gameOver(){
		console.log("game over");
		$(".divSummary").html("<h1>Correct Answer: "+correct+"</h1><h1>Incorrect Answer: " + incorrect + "</h1><h1>Unanswered: "+unanswered + "</h1>");
		$(".divSummary").show();
		$(".divQuestion").hide();
		$(".divMultipleChoices").hide();
		$(".divTimer").show();
		$(".divAnswer").hide();
		$(".divYesNo").hide();
		$(".imgImage").hide();
		$("#btnStart").show();
		$(".divTimer").hide();
		index = 0;
	}
	function correctAnswer(index){
		correct++;
		console.log("user answered correctly!")
		displayAnswer(index);
		match.stop();
		match.reset();

	}
	function incorrectAnswer(){
		console.log("user answered incorrectly.")	
		incorrect++;
		displayAnswer(index);
		match.stop();
		match.reset();
	}
	function timeOutAnswer(){
		console.log("user did not answer that question in time.");
		unanswered++;
		displayAnswer(index);
		match.stop();
		match.reset();
	}
	var index = 0;
	var userAnswerCorrectly = false;
	$(".divMultipleChoices").hide();

	$("#btnStart").click(function(){
			$(this).hide();
			match.start();
			newQuestion(index);
			$(".divMultipleChoices").show();
			console.log("here2");
			$(".divAnswer").hide();
			$(".divYesNo").hide();
			$(".imgImage").hide();
			console.log("here3");	
	});

	$(".divMultipleChoices .btn").click(function(){
		console.log("here");
		if($(this).text() === $(".divQuestion").attr("value")){
			userAnswerCorrectly = true;
			correctAnswer(index);
		}else if($(this).text() !== $(".divQuestion").attr("value")){
			userAnswerCorrectly = false;
			incorrectAnswer(index);
		}
		index++;	
		if(index < questionaire.length){
			setTimeout(function(){
				newQuestion(index);	
			},5000)
		}else{
			setTimeout(function(){
				gameOver();
			},5000)
		}
	})
		

})