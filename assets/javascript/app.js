//https://hobbylark.com/party-games/FreeFun100QuestionQuiz 
$(document).ready(function(){
	//The ten easy ice breaker
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
		question: "What item of clothing was named after its Scottish Inventor?",
		answer: "Mackintosh",
		mcq: ["Mackintosh", "Stirring", "Pelamis", "Drummond Light" ],
		image: "q5.gif"
	}
	const q6 = {
		question: "What kind of weapon is a falchion?",
		answer: "Sword",
		mcq: ["Sword", "Mace", "Javelin", "Dagger" ],
		image: "q6.gif"
	}
	const q7 = {
		question: "Which word goes before vest, beans and quartet?",
		answer: "String",
		mcq: ["Keyboard", "String", "Percussion", "Wood Wind" ],
		image: "q7.gif"
	}
	const q8 = {
		question: "What is another word for lexicon?",
		answer: "Dictionary",
		mcq: ["Composer", "Old Testament", "Pelamis", "Dictionary" ],
		image: "q8.gif"
	}
	const q9 = {
		question: "Name the seventh planet from the sun",
		answer: "Uranus",
		mcq: ["Venus", "Mars", "Uranus", "Neptune" ],
		image: "q9.gif"
	}
	const q10 = {
		question: "What item of clothing was named after its Scottish Invenotr?",
		answer: "Louis Pasteur",
		mcq: ["William Harvey", "Louis Pasteur", "Sigmund Freud", "Havelock Ellis" ],
		image: "q10.gif"
	}
//Movie

	const q11 = {
		question: "Bruce Banner turns into what fictional superhero when he becomes angry?",
		answer: "Hulk",
		mcq: ["Hulk", "Deadpool", "Frankenstein", "Wolverine" ],
		image: "q11.gif"
	}

	const q12 = {
		question: "Who played the female lead in the 1990 romantic comedy Pretty Woman?",
		answer: "Julia Robert",
		mcq: ["Jessica Alba", "Halle Berry", "Jennifer Aniston", "Julia Robert" ],
		image: "q12.gif"
	}

	const q13 = {
		question: 'Which actor played Marty McFly in the 1980s sci-fi classic "Back to the Future"?',
		answer: "Michael J. Fox",
		mcq: ["Bob Gale", "Christopher Lloyd", "Michael J. Fox", "Johnny Depp" ],
		image: "q13.gif"
	}

	const q14 = {
		question: "Actress Gal Gadot starred in what American superhero film released in the summer of 2017?",
		answer: "Wonder Woman",
		mcq: ["Super Girl", "Cat Woman", "Wonder Woman", "Black Widow" ],
		image: "q14.gif"
	}

	const q15 = {
		question: "Who played the lead role in the 1982 American comedy Tootsie?",
		answer: "Louis Pasteur",
		mcq: ["Dustin Hoffman", "Dabney Coleman", "Bill Murray", "Charles Durning" ],
		image: "q15.gif"
	}

	const q16 = {
		question: 'Who played the female lead in the dystopian political thriller "V for Vendetta"?',
		answer: "Natalie Portman",
		mcq: ["Natalie Portman", "Claire Danes", "Courtney Love", "Larisa Oleynik" ],
		image: "q16.gif"
	}

	const q17 = {
		question: 'In Disney''s "The Little Mermaid" what is the name of the human that Ariel falls in love with?',
		answer: "Prince Eric",
		mcq: ["Prince Philip", "Prince Edward", "Prince William", "Prince Eric" ],
		image: "q17.gif"
	}

	const q18 = {
		question: "What is the name of the animated science fiction comedy-drama film released in 2002 about a Hawaiin girl and her unusual pet?",
		answer: "Lilo & Stitch",
		mcq: ["Tora Tora Tora!", "Godzilla", "Lilo & Stitch", "Aloha Scooby Doo!" ],
		image: "q18.gif"
	}

	const q19 = {
		question: "In movie ratings what do the letters PG stand for?",
		answer: "Parental Guidance",
		mcq: ["Point Guard", "Parent Guide", "Parental Guidance", "Pottery Garne" ],
		image: "q19.gif"
	}
	const q20 = {
		question: "In the Star Wars universe, who is Luke Skywalker's mother?",
		answer: "Padmé Amidala",
		mcq: ["Pamela Anderson", "Sabine Wren", "Aayla Secura", "Padmé Amidala" ],
		image: "q20.gif"
	}

	Antwon Tony Rocky Horror should have damn well known not to touch another man's wife's feet. As a result, he was:

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
	    	$("divYesNo").html("<h1>Unanswered</h1>")
	    	timeOutAnswer();
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
		correct = 0;
		incorrect = 0;
		unanswered = 0;
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
			$(".divAnswer").hide();
			$(".divYesNo").hide();
			$(".imgImage").hide();
	});

	$(".divMultipleChoices .btn").click(function(){
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