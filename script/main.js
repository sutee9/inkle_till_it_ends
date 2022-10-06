function inkleStoryGenerator(storyContent) {

    var story = new inkjs.Story(storyContent);

    var storyContainer = document.querySelectorAll('#story')[0];

    function isAnimationEnabled() {
        return window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
    }

    function showAfter(delay, el) {
        setTimeout(function() { el.classList.add("show") }, isAnimationEnabled() ? delay : 0);
    }

    function scrollToBottom() {
        // If the user doesn't want animations, let them scroll manually
        if (!isAnimationEnabled()) {
            return;
        }
        var start = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var dist = document.body.scrollHeight - window.innerHeight - start;
        if( dist < 0 ) return;

        var duration = 300 + 300*dist/100;
        var startTime = null;
        function step(time) {
            if( startTime == null ) startTime = time;
            var t = (time-startTime) / duration;
            var lerp = 3*t*t - 2*t*t*t;
            window.scrollTo(0, start + lerp*dist);
            if( t < 1 ) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function continueStory() {

        var paragraphIndex = 0;
        var delay = 0.0;

        // Generate story text - loop through available content
        while(story.canContinue) {

            // Get ink to generate the next paragraph

            var paragraphText = story.Continue();

            console.log("Tags (" + story.currentTags.length + "): " + story.currentTags);
            
            evaluateTags();
            

            // Create paragraph element
            var paragraphElement = document.createElement('p');
            paragraphElement.innerHTML = paragraphText;
            storyContainer.appendChild(paragraphElement);

            // Fade in paragraph after a short delay
            showAfter(delay, paragraphElement);

            delay += 200.0;
        }

        // Create HTML choices from ink choices
        story.currentChoices.forEach(function(choice) {

            // Create paragraph with anchor element
            var choiceParagraphElement = document.createElement('p');
            choiceParagraphElement.classList.add("choice");
            choiceParagraphElement.innerHTML = `<a href='#'>${choice.text}</a>`
            storyContainer.appendChild(choiceParagraphElement);

            // Fade choice in after a short delay
            showAfter(delay, choiceParagraphElement);
            delay += 200.0;

            // Click on choice
            var choiceAnchorEl = choiceParagraphElement.querySelectorAll("a")[0];
            choiceAnchorEl.addEventListener("click", function(event) {

                // Don't follow <a> link
                event.preventDefault();

                // Remove all existing choices
                var existingChoices = storyContainer.querySelectorAll('p.choice');
                for(var i=0; i<existingChoices.length; i++) {
                    var c = existingChoices[i];
                    c.parentNode.removeChild(c);
                }

                // Tell the story where to go next
                story.ChooseChoiceIndex(choice.index);

                console.log()

                // Aaand loop
                continueStory();
            });
        });
		
		if (story.currentChoices.length == 0 && !story.canContinue){
			console.log("The story reached an end point."); 
			//This can still mean that there is more to the story, but the user cannot continue at this point
			//Maybe timers are running, or maybe something else can still jump to a new knot.
		}
        scrollToBottom();
    }
	
	function clearAndGoToKnot(knotName, clearAll){
		//console.log("Going to " + knotName);
		if (clearAll) {
        	clearStory();
		}
		story.ChoosePathString(knotName);
		continueStory();
    }
	
	function clearStory(){
		document.querySelectorAll('#story')[0].innerHTML="";
	}

   /**
	* Evaluates line tags (not knot tags). 
	* If you want to support new line tag functions, add them here.
	* Currently supported.
	* #reload: 	Will reload the current web-page, and therefore clear all story states.
	*/
   function evaluateTags() {
        for (i in story.currentTags) {
			let tag = story.currentTags[i].toLowerCase();
            switch (tag) {
                case 'reload':
					reloadPage();
                    break;
				case 'clear':
					clearStory();
					break;
                default:
                    console.log("Tag: " + tag + ". This tag is unknown.");
            }
        }
    }
	
	function reloadPage(){
		location.reload();
	}
	
	//Complete this by exposing these funcitons and variables so that we can call them after
	return {
		story: story,
		continueStory: continueStory,
		clearAndGoToKnot: clearAndGoToKnot
	};
}

//Create a specific function for this story and start running it.
var inkleStory = inkleStoryGenerator(storyContent);
inkleStory.continueStory();