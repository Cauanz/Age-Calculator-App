const DayInput = document.getElementById('iday');
const MonthInput = document.getElementById('imonth');
const YearInput = document.getElementById('iyear');

const DayLabel = document.getElementById('dayLabel');
const MonthLabel = document.getElementById('monthLabel');
const YearLabel = document.getElementById('yearLabel');

const ErrorText = document.querySelectorAll('.errorText');
const submitButton = document.getElementsByClassName('arrow');
const form = document.getElementById('Form');

const YearText = document.getElementById('YearNumber');
const MonthText = document.getElementById('MonthNumber');
const DayText = document.getElementById('DayNumber');

function calcAge() {
   const date = new Date();
   const currentYear = date.getFullYear();
   const currentMonth = date.getMonth() + 1;
   const currentDay = date.getDate();

   const birthYear = YearInput.value;
   const birthMonth = MonthInput.value;
   const birthDay = DayInput.value;

   let age = birthYear - currentYear;
   let month = birthMonth - currentMonth;
   let day = birthDay - currentDay;

   if (age < 0) {
      age = age * -1;
      if(month < 0) {
         month = month * -1;
         if(day < 0) {
            day = day * -1;
         } else {
            day = day;
         }
      }
   } else {
      age = age;
      if(month < 0) {
         month = month * -1;
         if(day < 0) {
            day = day * -1;
         } else {
            day = day;
         }
      }
   }

   Math.abs(age);
   Math.abs(month);
   Math.abs(day);

   console.log(age);
   console.log(month);
   console.log(day);


      YearText.innerHTML = age;
      MonthText.innerHTML = month;
      DayText.innerHTML = day;
}

function Empty() {
   if(DayInput.value == "" || MonthInput.value == "" || YearInput.value == ""){
      DayInput.style.borderColor = "red";
      MonthInput.style.borderColor = "red";
      YearInput.style.borderColor = "red";

      DayLabel.style.color = "red";
      MonthLabel.style.color = "red";
      YearLabel.style.color = "red";

      ErrorText.forEach((error) => {
         error.style.display = "block";
      })
   } else {
      DayInput.style.borderColor = "hsl(0, 0%, 86%)";
      MonthInput.style.borderColor = "hsl(0, 0%, 86%)";
      YearInput.style.borderColor = "hsl(0, 0%, 86%)";

      DayLabel.style.color = "hsl(0, 1%, 44%)";
      MonthLabel.style.color = "hsl(0, 1%, 44%)";
      YearLabel.style.color = "hsl(0, 1%, 44%)";

      ErrorText.forEach((error) => {
         error.style.display = "none";
      })
   }
}

form.addEventListener('submit', (e) => {
   e.preventDefault();
   Empty();
   calcAge();
});

