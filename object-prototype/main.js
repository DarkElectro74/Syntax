function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}
// 3 задача!!
function checkBirthday(birthday) {
     let now = new Date();
	let birth = new Date (birthday);
	let leapYears = 0;

   for (let i = birth.getFullYear();i <= now.getFullYear();i++){
    if ((i % 4 === 0) && (i % 100 > 0) || (i % 400 === 0)){
   leapYears++;
	}
}
    let dif = now - birth;
    let age = Math.floor(dif / (1000 * 60 * 60 * 24 * 365 + leapYears));
    return age >= 18;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };
выф
    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}
  // код для задачи №2 писать здесь
	// 1 задача !!
function getAnimalSound(animal) {
   let sound = animal.sound;

    if (animal === undefined) {
        return: null;
    } else {
       return: sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}
// 2 задача!// код для задачи №3 писать здесь
function getAverageMark(marks) {
    let result = 0;
    for (let i = 0;i < marks.length;i++ ){
        result += parseInt(marks[i]);
    }
    let average = result / marks.length;
    let roundedAverage = Math.round(average);

    return roundedAverage;
    
}