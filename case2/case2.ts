import * as readlineSync from 'readline-sync';

const digits: Record<string, string[]> = {
  "0": [
    " *** ",
    "*   *",
    "*   *",
    "*   *",
    " *** "
  ],
  "1": [
    "  *  ",
    " **  ",
    "  *  ",
    "  *  ",
    " *** "
  ],
  "2": [
    " *** ",
    "*   *",
    "   * ",
    "  *  ",
    "*****"
  ],
  "3": [
    " *** ",
    "    *",
    "  ** ",
    "    *",
    " *** "
  ],
  "4": [
    "*   *",
    "*   *",
    "*****",
    "    *",
    "    *"
  ],
  "5": [
    "*****",
    "*    ",
    "**** ",
    "    *",
    "**** "
  ],
  "6": [
    " *** ",
    "*    ",
    "**** ",
    "*   *",
    " *** "
  ],
  "7": [
    "*****",
    "    *",
    "   * ",
    "  *  ",
    "  *  "
  ],
  "8": [
    " *** ",
    "*   *",
    " *** ",
    "*   *",
    " *** "
  ],
  "9": [
    " ****",
    "*   *",
    " ****",
    "    *",
    " *** "
  ],
  " ": ["     ", "     ", "     ", "     ", "     "],
  "-": ["     ", "     ", " *** ", "     ", "     "]
};

console.log('Введите день, в который родились: ')
const day: string = readlineSync.question()
console.log('Введите месяц в который родились: ')
const month: string = readlineSync.question()
console.log('Введите год в который родились: ')
const year: string = readlineSync.question()

const stringDate: string = `${day}.${month}.${year}`

if (!isValidDate(stringDate)) throw new Error("Ввели некорректную дату")

const date: Date = new Date(+year, +month - 1, +day);

getDayWeek(date)

isLeapYear(date)

getUserAge(date)

printDateWithStars(date)

//Функция получения дня недели
function getDayWeek(date: Date) {
  const daysRu = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  console.log(daysRu[date.getDay()])
}

//Функция для определения високосного года
function isLeapYear(date: Date) {
  const year = date.getFullYear()
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Високосный")
  } else {
    console.log("Не високосный")
  }
}

//Функция получения возраста человека
function getUserAge(birthDate: Date) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  // Если день рождения в этом году ещё не наступил, уменьшаем возраст на 1
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  console.log(age)
}

// Проверка даты на корректность
function isValidDate(dateString: string): boolean {
  const dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
  const match = dateString.match(dateRegex);

  if (!match) return false;

  const day = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const year = parseInt(match[3], 10);

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day &&
    date.getFullYear() >= 1000 && // Минимальный год
    date.getFullYear() <= 9999   // Максимальный год
  );
}

function printDateWithStars(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // месяцы 0-11
  const year = String(date.getFullYear());

  const formatted = `${day} ${month} ${year}`; // дд мм гггг

  const lines = ["", "", "", "", ""];

  for (const char of formatted) {
    const digitArt = digits[char] || digits[" "]; // если нет, заменяем пробелом
    for (let i = 0; i < 5; i++) {
      lines[i] += digitArt[i] + "  "; // пробел между цифрами
    }
  }

  console.log(lines.join("\n"));
}

