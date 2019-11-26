function setAlarm(time, callback) {
	return (currentTime) => {
		currentTime = new Date();
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();
		const sec = new Date().getSeconds();
		
		if (hours < 10) {
			hours = '0' + hours;
		} else if (minutes < 10) {
			minutes = '0' + minutes;
		}
		currentTime = hours + ':' + minutes;
		if (currentTime === time) {
			callback();
		}
	}
}

function setDailyRhythm(wakeUpTime, bedTime) {
	setInterval(setAlarm(wakeUpTime, () => alert('Доброе утро!')), 1000);
	setInterval(setAlarm(bedTime, () => alert('Доброй ночи!')), 1000);
}

setDailyRhythm('07:00', '14:29');