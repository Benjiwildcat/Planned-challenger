// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let currentDate = document.querySelector("#currentDay");
currentDate.textContent = dayjs().format('MM / DD / YYYY');




for (let i = 9; i < 18; i++) {

  let hourEl = document.querySelector("#hour-" + i);
  let currentTime = dayjs().hour()
  console.log(hourEl, currentTime, i, hourEl.dataset.time)
  if (currentTime < parseInt(hourEl.dataset.time)

  ) {

    hourEl.classList.add("past");
  }

  else if (currentTime === parseInt(hourEl.dataset.time)) {

    hourEl.classList.add("present");

  } else {
    hourEl.classList.add("future");
  }



}


// console.log(currentTime)

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
// currentTime.addEventListener("", function (event) {
  // if document.querySelector() > currentTime
// //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });
