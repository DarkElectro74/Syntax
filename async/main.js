const setDailyRhythm = (wakeUpTime, bedTime) => {
	let hours = (new Date().getHours()).toString();
	let minutes = (new Date().getMinutes()).toString();
	const sec = new Date().getSeconds();

	if (hours.length < 2){hours = "0" + hours};
	if (minutes.length < 2){minutes = "0" + minutes};
	
	const currentTime = (hours + `:` + minutes).toString();
	
	console.log(`Текущее время: ${currentTime}`);
	 
	if (wakeUpTime === currentTime && sec == 0){alert(`Дорое утро! Пора вставать!`)};
	if (bedTime === currentTime && sec == 0){alert(`Дорый вечер! Пора ложиться спать!`)};
	 
	setTimeout(setDailyRhythm, 1000, wakeUpTime, bedTime);	 	 
};

setDailyRhythm ("11:54", "11:55");
setDailyRhythm ("07:39", "23:11");