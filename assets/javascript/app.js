//https://hobbylark.com/party-games/FreeFun100QuestionQuiz 
$(document).ready(function(){
	
	var winSound = new Audio("assets/audio/win.mp3");
	var loseSound = new Audio("assets/audio/lose.mp3");
	var backgroundMusic = new Audio("assets/audio/background-music.mp3");
	function pauseAudio(){
		if(document.getElementById("navAudio").classList.contains('play')){
			document.getElementById("navAudio").classList.add('mute');
			document.getElementById("navAudio").classList.remove('play');
			document.getElementById("audio_on").style.display = "none";
			document.getElementById("audio_mute").style.display = "inline";
			backgroundMusic.pause();
			backgroundMusic.currentTime = 0;
		}else if(document.getElementById("navAudio").classList.contains('mute')){
			document.getElementById("navAudio").classList.add('play');
			document.getElementById("navAudio").classList.remove('mute');
			document.getElementById("audio_on").style.display = "inline";
			document.getElementById("audio_mute").style.display = "none";
			backgroundMusic.play();	
		}
	}
	backgroundMusic.addEventListener('ended', function() {
	    this.currentTime = 0;
	    this.play();
	}, false);
	backgroundMusic.play();	
	$("#navAudio").click(pauseAudio);

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
		question: "Who is remembered for his large and stylish signature on the United States Declaration of Independence?",
		answer: "John Hancock",
		mcq: ["Henry Ford", "John D. Rockefeller", "John Hancock", "William Henry Vanderbilt" ],
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
		question: 'In Disney\'s "The Little Mermaid" what is the name of the human that Ariel falls in love with?',
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
	//Computer
	const q21 = {
		question: "In a photo editing program, what do the letters RGB stand for?",
		answer: "Red, Green & Blue",
		mcq: ["Reduction Gear Box", "Red, Green & Blue", "Red Giant Branch", "Regional General Board" ],
		image: "q21.gif"
	}
	const q22 = {
		question: "What do you call the small image icons used to express emotions or ideas in digital communication?",
		answer: "Emoji",
		mcq: ["Favicon", "Emoji", "Stickers", "Meme" ],
		image: "q22.gif"
	}
	const q23 = {
		question: "When referring to a computer monitor, what does the acronym LCD stand for?",
		answer: "Liquid Crystal Display",
		mcq: ["Liquid Crystal Decoder", "Liquid Computer Display", "Laser Crystal Display", "Liquid Crystal Display" ],
		image: "q23.gif"
	}
	const q24 = {
		question: "When talking about computer memory, what does the acronym ROM stand for?",
		answer: "Read-only memory",
		mcq: ["Red-only memory", "Radiant-object memory", "Read-only memory", "Red-object memory" ],
		image: "q24.gif"
	}
	const q25 = {
		question: "In 1975 an engineer created the first electronic camera while working for what company?",
		answer: "Kodak",
		mcq: ["Kodak", "Epson", "Nikon", "Canon" ],
		image: "q25.gif"
	}
	const q26 = {
		question: "Nintendo is a consumer electronics and video game company founded in what country?",
		answer: "Japan",
		mcq: ["United States", "Taiwan", "Japan", "Korea" ],
		image: "q26.gif"
	}
	const q27 = {
		question: "HTML and CSS are computer languages used to create what?",
		answer: "Websites",
		mcq: ["Websites", "Database", "Hardware", "Keyboard" ],
		image: "q27.gif"
	}
	const q28 = {
		question: "The first person shooter video game Doom was first released in what year?",
		answer: "1993",
		mcq: ["1882", "2000", "1993", "1989" ],
		image: "q28.gif"
	}
	const q29 = {
		question: 'What does the acronym "lol" stand for when used in phone texts and on the internet?',
		answer: "Laugh out loud",
		mcq: ["Lots of love", "Laugh out loud", "Lost ol' lonely", "Little Old Lady" ],
		image: "q29.gif"
	}
	const q30 = {
		question: "In what year was the first Apple computer released?",
		answer: "1976",
		mcq: ["1990", "1988", "1957", "1976" ],
		image: "q30.gif"
	}

//Dog Triva
	const q31 = {
		question: "The Chihuahua is a breed of dog believed to originate from what country?",
		answer: "Mexico",
		mcq: ["Nicaragua", "Mexico", "China", "England" ],
		image: "q31.gif"
	}
	const q32 = {
		question: "What is the most popular breed of dog in the United States?",
		answer: "Labrador Retriever",
		mcq: ["Labrador Retriever", "Golden Retriever", "Huskies", "Akita" ],
		image: "q32.gif"
	}
	const q33 = {
		question: "A puggle is a cross between which two dog breeds?",
		answer: "Pug and Beagle",
		mcq: ["Pig and Beagle", "Poodle and Bagel", "Poodle and Beagle", "Pug and Beagle" ],
		image: "q33.gif"
	}
	const q34 = {
		question: "How many chambers are there in a dog's heart?",
		answer: "Four",
		mcq: ["Four", "Three", "Two", "One" ],
		image: "q34.gif"
	}
	const q35 = {
		question: "In the United States which breed of dog is commonly known as a firehouse dog?",
		answer: "Dalmatian",
		mcq: ["Malinois", "Dalmatian", "Dutch Shepherd", "Bloodhound" ],
		image: "q35.gif"
	}
	const q36 = {
		question: "Through what part of the body do dogs sweat?",
		answer: "Paws",
		mcq: ["Paws", "Mouth", "Nose", "Nose" ],
		image: "q36.gif"
	}
	const q37 = {
		question: "What is the favorite dog breed of the Queen of England?",
		answer: "Corgi",
		mcq: ["Corgi", "Basenji", "Poodle", "Pomeranian" ],
		image: "q37.gif"
	}
	const q38 = {
		question: "The dingo is a free ranging dog found mainly in which country?",
		answer: "Australia",
		mcq: ["United States", "Australia", "Austria", "Italy" ],
		image: "q38.gif"
	}
	const q39 = {
		question: "What trick is the most commonly taught to dogs?",
		answer: "Sit",
		mcq: ["Sit", "Shake", "Come", "Stay" ],
		image: "q39.gif"
	}
	const q40 = {
		question: "When Pluto made his debut in 1930 in a Mickey Mouse film, what was his name?",
		answer: "Rover",
		mcq: ["Balzac", "Pupper", "Rover", "Dover" ],
		image: "q40.gif"
	}
	const q41 = {
		question: "Who is the only head basketball coach to win both an NCAA national championship and an NBA title?",
		answer: "Larry Brown",
		mcq: ["Mike Krzyewski", "Larry Brown", "Adolp Rupp", "Roy Williams" ],
		image: "q41.gif"
	}
	const q42 = {
		question: "According to NBA rules how long does a player have after catching the ball to shoot a free throw?",
		answer: "10 seconds",
		mcq: ["10 seconds", "12 seconds", "5 seconds", "8 seconds" ],
		image: "q42.gif"
	}
	const q43 = {
		question: "What is the regulation height for a basketball hoop?",
		answer: "10ft",
		mcq: ["9.5ft", "11ft", "9ft", "10ft" ],
		image: "q43.gif"
	}
	const q44 = {
		question: "Who was the shortest player ever to play in the NBA?",
		answer: "Tyrone Bogues",
		mcq: ["Jeremy Lin", "Isiah Thomas", "Tyrone Bogues", "Allen Iverson" ],
		image: "q44.gif"
	}
	const q45 = {
		question: "Which basketball team did Michael Jordan play for in college?",
		answer: "UNC",
		mcq: ["UCLA", "UNC", "USC", "UPenn" ],
		image: "q45.gif"
	}
	const q46 = {
		question: 'What Indiana Pacer did Knicks fan Spike Lee anger during the 1994 playoffs by calling him "Cheryl"?',
		answer: "Reggie Miller",
		mcq: ["Adrian Dantley", "George McGinnis", "Ron Artest", "Reggie Miller" ],
		image: "q46.gif"
	}
	const q47 = {
		question: "What franchise has played in the most NBA finals since 1947?",
		answer: "Lakers",
		mcq: ["Lakers", "Boston", "Bulls", "Pacer" ],
		image: "q47.gif"
	}
	const q48 = {
		question: 'What future NBA star was dubbed "Boy Gorge" when his weight passed 300 pounds in college?',
		answer: "Charles Barkley",
		mcq: ["Shaquille O'Neal", "Charles Barkley", "Brian Scalabrine", "Boris Diaw" ],
		image: "q48.gif"
	}
	const q49 = {
		question: 'What L.A. Lakers great might have played for Chicago if the Bulls had called "tails" in a 1979 NBA coin toss?',
		answer: "Magic Johnson",
		mcq: ["Magic Johnson", "Kobe Bryant", "Kareem Abdul-Jabbar", "Wilt Chamberlain" ],
		image: "q49.gif"
	}
	const q50 = {
		question: 'What Chicago Bulls coach has checked into hotels under the pseudonym "Mr. Red Cloud"?',
		answer: "Phil Jackson",
		mcq: ["Jerry Sloan", "Phil Jackson", "Larry Costello", "Tim Floyd" ],
		image: "q50.gif"
	}
	var questionaire = [];

	$(".cat").click(function(){
		$(".li-cat").removeClass("active");
		console.log("questionaires" + questionaire);
		gameOver();
		match.reset();
		match.stop();
		$(".divSummary").hide();
		index = 0;
		questionaire =[];
		if($(this).attr("value") == 1){
			questionaire = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
			console.log("questionaires1" + questionaire);
			$(".li-cat1").addClass("active");
			$(".title").html("Category : " + $(".active.li-cat").attr("value"));
		}
		if($(this).attr("value") == 2){
			questionaire = [q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];
			console.log("questionaires2" + questionaire);
			$(".li-cat2").addClass("active");
			$(".title").html("Category : " + $(".active.li-cat").attr("value"));
		}
		if($(this).attr("value") == 3){
			questionaire = [q21, q22, q23, q24, q25, q26, q27, q28, q29, q30];
			console.log("questionaires3" + questionaire);
			$(".li-cat3").addClass("active");
			$(".title").html("Category : " + $(".active.li-cat").attr("value"));
		}
		if($(this).attr("value") == 4){
			questionaire = [q31, q32, q33, q34, q35, q36, q37, q38, q39, q40];
			console.log("questionaires4" + questionaire);
			$(".li-cat4").addClass("active");
			$(".title").html("Category : " + $(".active.li-cat").attr("value"));
		}
		if($(this).attr("value") == 5){
			questionaire = [q41, q42, q43, q44, q45, q46, q47, q48, q49, q50];
			console.log("questionaires5" + questionaire);
			$(".li-cat5").addClass("active");
			$(".title").html("Category : " + $(".active.li-cat").attr("value"));
		}
		$("#btnStart").show();
	})
	
	

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
	    	userAnswerCorrectly = 3;
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
		if(userAnswerCorrectly == 1){
			winSound.play();
			$(".divYesNo").html("<h1>Correct!</h1>");
		}else if(userAnswerCorrectly == 2){
			loseSound.play();
			$(".divYesNo").html("<h1>False!</h1>");
		}else if(userAnswerCorrectly == 3){
			loseSound.play();
			$(".divYesNo").html("Unaswered");
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
	var userAnswerCorrectly = 0;
	$(".divMultipleChoices").hide();
	questionaire = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	$(".title").html("Category : " + $(".active.li-cat").attr("value"));
	$("#btnStart").click(function(){
			$("#btnStart").hide();
			match.start();
			newQuestion(index);
			$(".divMultipleChoices").show();
			$(".divAnswer").hide();
			$(".divYesNo").hide();
			$(".imgImage").hide();
	});

	$(".divMultipleChoices .btn").click(function(){
		if($(this).text() === $(".divQuestion").attr("value")){
			userAnswerCorrectly = 1;
			correctAnswer(index);
		}else if($(this).text() !== $(".divQuestion").attr("value")){
			userAnswerCorrectly = 2;
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