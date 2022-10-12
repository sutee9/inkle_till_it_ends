//Starts the timer immediately
(function countdownTimer(){
	var countdownStartTime = 10;
	var countdownCurrentTime = countdownStartTime;
	
	//Set the time to the timer
	function countdownTimerSetCurrent(time){
		var timerelement = document.getElementById('countdowntimer');
		timerelement.innerHTML = time;
	}
	
	//Update Timer every second
	countdownTimerSetCurrent(countdownCurrentTime);
	var runningTimer = setInterval(
		function() {
			countdownCurrentTime = countdownCurrentTime-1;
			countdownTimerSetCurrent(countdownCurrentTime);	
			if (countdownCurrentTime <= 0){
				clearInterval(runningTimer);
				countdownTimerExpiredCallback();
			}
			
			
		}, 
		1000);
})();
//countdownTimer();