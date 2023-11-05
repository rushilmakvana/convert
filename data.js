const IST = "Asia/Kolkata"; // Replace with your desired timezone
const UTC = "America/New_York"; // Replace with your desired timezone
const JST = "Asia/Tokyo"; // Replace with your desired timezone
const PST = "Asia/Karachi"; // Replace with your desired timezone
const IDT = "Asia/Jerusalem"; // Replace with your desired timezon
const localDate = new Date();
const options1 = {
  timeZone: UTC,
  hour12: true,
  hour: "2-digit",
  minute: "2-digit",
};

if (localStorage.getItem("mode") === "dark") {
  document.body.style.backgroundColor = "#000027";
  document.body.style.color = "white";
  // document.querySelector(".sliderContainer").style.backgroundColor =
  //   "#00003c";
  var sliders = document.getElementsByClassName("sliderContainer");
  var boxes = document.getElementsByClassName("box");
  // console.log("boxes - ", boxes);
  for (var i = 0; i < sliders.length; i++) {
    // console.log(
    sliders[i].style.backgroundColor = "#000027";
    sliders[i].style.border = "1px solid";
    boxes[i].style.border = "1px solid";
    // );
  }
  // console.log();
  document.querySelector(".toggle").classList.add("dark-mode");
  document.querySelector(".toggle").innerHTML =
    '<i class="fa-solid fa-sun"></i>';
  // localStorage.setItem("mode", "light");
}

document.querySelector(".toggle").addEventListener("click", () => {
  if (localStorage.getItem("mode") === "dark") {
    localStorage.clear();
    localStorage.setItem("mode", "light");
    document.body.style.removeProperty("background-color");
    document.body.style.removeProperty("color");
    var sliders = document.getElementsByClassName("sliderContainer");
    var boxes = document.getElementsByClassName("box");
    for (var i = 0; i < sliders.length; i++) {
      // console.log(
      sliders[i].style.removeProperty("background-color");
      sliders[i].style.removeProperty("border");
      boxes[i].style.removeProperty("border");
      // );
    }
    document.querySelector(".toggle").classList.remove("dark-mode");
    document.querySelector(".toggle").innerHTML =
      '<i class="fa-solid fa-moon icon"></i>';
  } else {
    localStorage.clear();
    localStorage.setItem("mode", "dark");
    document.body.style.backgroundColor = "#000027";
    document.body.style.color = "white";
    // document.querySelector(".sliderContainer").style.backgroundColor =
    //   "#00003c";
    var sliders = document.getElementsByClassName("sliderContainer");
    var boxes = document.getElementsByClassName("box");
    // console.log("boxes - ", boxes);
    for (var i = 0; i < sliders.length; i++) {
      // console.log(
      sliders[i].style.backgroundColor = "#000027";
      sliders[i].style.border = "1px solid";
      boxes[i].style.border = "1px solid";
      // );
    }
    // console.log();
    document.querySelector(".toggle").classList.add("dark-mode");
    document.querySelector(".toggle").innerHTML =
      '<i class="fa-solid fa-sun"></i>';
  }

  // if (document.querySelector(".toggle").classList.contains("dark-mode")) {
  //   document.body.style.removeProperty("background-color");
  //   document.body.style.removeProperty("color");
  //   var sliders = document.getElementsByClassName("sliderContainer");
  //   var boxes = document.getElementsByClassName("box");
  //   for (var i = 0; i < sliders.length; i++) {
  //     // console.log(
  //     sliders[i].style.removeProperty("background-color");
  //     sliders[i].style.removeProperty("border");
  //     boxes[i].style.removeProperty("border");
  //     // );
  //   }
  //   document.querySelector(".toggle").classList.remove("dark-mode");
  //   document.querySelector(".toggle").innerHTML =
  //     '<i class="fa-solid fa-moon icon"></i>';
  // } else {
  //   document.body.style.backgroundColor = "#000027";
  //   document.body.style.color = "white";
  //   // document.querySelector(".sliderContainer").style.backgroundColor =
  //   //   "#00003c";
  //   var sliders = document.getElementsByClassName("sliderContainer");
  //   var boxes = document.getElementsByClassName("box");
  //   // console.log("boxes - ", boxes);
  //   for (var i = 0; i < sliders.length; i++) {
  //     // console.log(
  //     sliders[i].style.backgroundColor = "#000027";
  //     sliders[i].style.border = "1px solid";
  //     boxes[i].style.border = "1px solid";
  //     // );
  //   }
  //   // console.log();
  //   document.querySelector(".toggle").classList.add("dark-mode");
  //   document.querySelector(".toggle").innerHTML =
  //     '<i class="fa-solid fa-sun"></i>';
  // }

  //   : ();
  // // console.log("clicked");
});

function CalculateTime(timeZone, RangeClass, ValueClass, date, dateClass) {
  const new_date = document.getElementById(dateClass);
  console.log("class - ", new_date);
  // new_date.textContent =
  //   date.toLocaleString("en-US", {
  //     weekday: "short",
  //   }) +
  //   ", " +
  //   date.toLocaleString("en-US", {
  //     month: "short",
  //   }) +
  //   " " +
  //   date.getDate();
  console.log("---------------------------------");
  console.log("timwzone - ", timeZone);
  console.log("range - ", RangeClass);
  console.log("value - ", ValueClass);
  console.log("date - ", date);
  //   const localDate = new Date();
  const slider = document.getElementById(RangeClass);
  const sliderValue = document.getElementById(ValueClass);
  const options = {
    timeZone: timeZone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const format = new Intl.DateTimeFormat("en-US", options);
  const target = format.format(date);
  console.log("utc date - ", target);
  var utcMin = Number(target.slice(3, 5));
  console.log("utc min - ", utcMin);
  var FixMin =
    utcMin % 15 !== 0
      ? (Math.trunc(utcMin / 15) + 1) * 15
      : Math.trunc(utcMin / 15) * 15;
  // : Math.trunc(utcMin / 15) * 15;
  // var FixMin = (Math.trunc(utcMin / 15) + 1) * 15;
  // console.log("fix min - ", FixMin);
  sliderValue.textContent = target.slice(0, 2) + ":" + FixMin;
  slider.value = Number(target.slice(0, 2)) * 60 + FixMin;
  return (
    date.toLocaleString("en-US", {
      weekday: "short",
    }) +
    ", " +
    date.toLocaleString("en-US", {
      month: "short",
    }) +
    " " +
    date.getDate()
  );
  // console.log("slider val - ", slider.value);
  // console.log("slider valcon - ", sliderValue.textContent);
  // console.log("-------------------------------------------");
}

document.getElementById("ist-date").textContent = CalculateTime(
  IST,
  "slider1",
  "sliderValue1",
  new Date(),
  "ist-date"
);

// console.log(
//   CalculateTime(IST, "slider1", "sliderValue1", new Date(), "ist-date")
// );
// console.log(
document.getElementById("utc-date").textContent = CalculateTime(
  UTC,
  "slider2",
  "sliderValue2",
  new Date(),
  "utc-date"
);
// );
// console.log(
document.getElementById("jst-date").textContent = CalculateTime(
  JST,
  "slider3",
  "sliderValue3",
  new Date(),
  "jst-date"
);
// );
// console.log(
document.getElementById("pst-date").textContent = CalculateTime(
  PST,
  "slider4",
  "sliderValue4",
  new Date(),
  "pst-date"
);
// );
// console.log(
document.getElementById("idt-date").textContent = CalculateTime(
  IDT,
  "slider5",
  "sliderValue5",
  new Date(),
  "idt-date"
);
// );

var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");
var slider4 = document.getElementById("slider4");
var slider5 = document.getElementById("slider5");

slider1.addEventListener("input", () => {
  const options = {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const format = new Intl.DateTimeFormat("en-US", options);
  // console.log("utc date - ", target);

  // console.log("called");
  var slider = document.getElementById("slider1");
  var sliderValue = document.getElementById("sliderValue1");
  var TotalMinute = slider.value;
  var hour = Math.trunc(TotalMinute / 60);
  var minute = (TotalMinute / 60 - hour) * 60;
  var dateFor = new Date(
    `${new Date()
      .toISOString()
      .slice(0, 10)} ${hour}:${minute}:${new Date().getSeconds()}`
  ).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
  // const target = format.format(dateFor);
  console.log("date for - ", dateFor);
  // sliderValue.textContent =
  //   dateFor.slice(0, 2) + " : " + minute + " " + dateFor.slice(-2);
  sliderValue.textContent = dateFor.slice(0, 2) + " : " + minute;
  var newDate = `${new Date()
    .toISOString()
    .slice(0, 10)} ${hour}:${minute}:${new Date().getSeconds()}`;
  var d = new Date(newDate);
  console.log("new date - ", d);
  // changeTime(convertToIST(d, 5.5, -240), "slider2", "sliderValue2", "utc-date");
  // changeTime(convertToIST(d, 5.5, 540), "slider3", "sliderValue3", "jst-date");
  // changeTime(convertToIST(d, 5.5, 300), "slider4", "sliderValue4", "pst-date");
  // changeTime(convertToIST(d, 5.5, 120), "slider5", "sliderValue5", "idt-date");
  CalculateTime(UTC, "slider2", "sliderValue2", d);
  CalculateTime(JST, "slider3", "sliderValue3", d);
  CalculateTime(PST, "slider4", "sliderValue4", d);
  CalculateTime(IDT, "slider5", "sliderValue5", d);
  changeTime(convertToIST(d, 5.5, 330), "slider1", "sliderValue1", "ist-date");
  changeTime(convertToIST(d, 5.5, -300), "slider2", "sliderValue2", "utc-date");
  changeTime(convertToIST(d, 5.5, 540), "slider3", "sliderValue3", "jst-date");
  changeTime(convertToIST(d, 5.5, 300), "slider4", "sliderValue4", "pst-date");
  changeTime(convertToIST(d, 5.5, 120), "slider5", "sliderValue5", "it-date");
});

slider2.addEventListener("input", () => {
  const options = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const format = new Intl.DateTimeFormat("en-US", options);
  // console.log("utc date - ", target);

  // console.log("called");
  var slider = document.getElementById("slider2");
  var sliderValue = document.getElementById("sliderValue2");
  var TotalMinute = slider.value;
  var hour = Math.trunc(TotalMinute / 60);
  var minute = (TotalMinute / 60 - hour) * 60;
  var dateFor = new Date(
    `${new Date()
      .toISOString()
      .slice(0, 10)} ${hour}:${minute}:${new Date().getSeconds()}`
  );
  const target = format.format(dateFor);
  // console.log("date for - ", target);
  sliderValue.textContent = target.slice(0, 2) + " : " + minute;
  var newDate = `${new Date()
    .toISOString()
    .slice(0, 10)} ${hour}:${minute}:${new Date().getSeconds()}`;
  var d = new Date(newDate);
  // console.log("new date - ", d);
  changeTime(convertToIST(d, -5, 330), "slider1", "sliderValue1", "ist-date");
  changeTime(convertToIST(d, -5, 540), "slider3", "sliderValue3", "jst-date");
  changeTime(convertToIST(d, -5, 300), "slider4", "sliderValue4", "pst-date");
  changeTime(convertToIST(d, -5, 120), "slider5", "sliderValue5", "idt-date");
  // console.log("ny to ist ", convertToIST(d, -4, 330));
  // console.log("ny to idt ", convertToIST(d, -4, 120));
  // console.log("ny to pst ", convertToIST(d, -4, 300));
  // console.log("ny to jst ", convertToIST(d, -4, 540));
});
slider3.addEventListener("input", () => {
  const options = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const format = new Intl.DateTimeFormat("en-US", options);
  // console.log("utc date - ", target);

  // console.log("called");
  var slider = document.getElementById("slider3");
  var sliderValue = document.getElementById("sliderValue3");
  var TotalMinute = slider.value;
  var hour = Math.trunc(TotalMinute / 60);
  var minute = (TotalMinute / 60 - hour) * 60;
  var dateFor = new Date(
    `${new Date()
      .toISOString()
      .slice(0, 10)} ${hour}:${minute}:${new Date().getSeconds()}`
  );
  const target = format.format(dateFor);
  console.log("date for - ", target);
  sliderValue.textContent = target.slice(0, 2) + " : " + minute;
  var newDate = `${new Date()
    .toISOString()
    .slice(0, 10)} ${hour}:${minute}:${new Date().getSeconds()}`;
  var d = new Date(newDate);
  console.log("new date - ", d);
  changeTime(convertToIST(d, 9, 330), "slider1", "sliderValue1", "ist-date");
  changeTime(convertToIST(d, 9, -240), "slider2", "sliderValue2", "utc-date");
  changeTime(convertToIST(d, 9, 300), "slider4", "sliderValue4", "pst-date");
  changeTime(convertToIST(d, 9, 120), "slider5", "sliderValue5", "idt-date");
  // console.log("jst to ist ", convertToIST(d, 9, 330));
  // console.log("jst to idt ", convertToIST(d, 9, 120));
  // console.log("jst to pst ", convertToIST(d, 9, 300));
  // console.log("jst to utc ", convertToIST(d, 9, -240));
});
slider4.addEventListener("input", () => {
  const options = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const format = new Intl.DateTimeFormat("en-US", options);
  // console.log("utc date - ", target);

  // console.log("called");
  var slider = document.getElementById("slider4");
  var sliderValue = document.getElementById("sliderValue4");
  var TotalMinute = slider.value;
  var hour = Math.trunc(TotalMinute / 60);
  var minute = (TotalMinute / 60 - hour) * 60;
  var dateFor = new Date(
    `${new Date()
      .toISOString()
      .slice(0, 10)} ${hour}:${minute}:${new Date().getSeconds()}`
  );
  const target = format.format(dateFor);
  console.log("date for - ", target);
  sliderValue.textContent = target.slice(0, 2) + " : " + minute;
  var newDate = `${new Date()
    .toISOString()
    .slice(0, 10)} ${hour}:${minute}:${new Date().getSeconds()}`;
  var d = new Date(newDate);
  console.log("new date - ", d);
  changeTime(convertToIST(d, 5, 330), "slider1", "sliderValue1", "ist-date");
  changeTime(convertToIST(d, 5, -240), "slider2", "sliderValue2", "utc-date");
  changeTime(convertToIST(d, 5, 540), "slider3", "sliderValue3", "jst-date");
  changeTime(convertToIST(d, 5, 120), "slider5", "sliderValue5", "idt-date");
  // console.log("pst to ist ", convertToIST(d, 5, 330));
  // console.log("pst to idt ", convertToIST(d, 5, 120));
  // console.log("pst to utc ", convertToIST(d, 5, -240));
  // console.log("pst to jst ", convertToIST(d, 5, 540));
});
slider5.addEventListener("input", () => {
  const options = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const format = new Intl.DateTimeFormat("en-US", options);
  // console.log("utc date - ", target);

  // console.log("called");
  var slider = document.getElementById("slider5");
  var sliderValue = document.getElementById("sliderValue5");
  var TotalMinute = slider.value;
  var hour = Math.trunc(TotalMinute / 60);
  var minute = (TotalMinute / 60 - hour) * 60;
  var dateFor = new Date(
    `${new Date()
      .toISOString()
      .slice(0, 10)} ${hour}:${minute}:${new Date().getSeconds()}`
  );
  const target = format.format(dateFor);
  console.log("date for - ", target);
  sliderValue.textContent = target.slice(0, 2) + ":" + minute;
  var newDate = `${new Date()
    .toISOString()
    .slice(0, 10)} ${hour}:${minute}:${new Date().getSeconds()}`;
  var d = new Date(newDate);
  changeTime(convertToIST(d, 2, 330), "slider1", "sliderValue1", "ist-date");
  changeTime(convertToIST(d, 2, -240), "slider2", "sliderValue2", "utc-date");
  changeTime(convertToIST(d, 2, 540), "slider3", "sliderValue3", "jst-date");
  changeTime(convertToIST(d, 2, 300), "slider4", "sliderValue4", "pst-date");
  // console.log("new date - ", d);
  // console.log("idt to ist ", convertToIST(d, 2, 330));
  // console.log("idt to utc ", convertToIST(d, 2, -240));
  // console.log("idt to pst ", convertToIST(d, 2, 300));
  // console.log("idt to jst ", convertToIST(d, 2, 540));
});

function convertToIST(countryTime, countryTimeZone, zone) {
  // console.log("c time - ", countryTime);
  // tokyo=utc+9
  // newyork=utc-4
  // ist=utc+5:30
  // jerusalem=utc+2
  // karachi=utc+5

  // Create a Date object with the current time in the target country
  const targetTime = new Date();
  // console.log(targetTime.getDate());
  targetTime.setTime(countryTime);

  // Get the time zone offset of the target country in minutes
  const targetTimeZoneOffset = countryTimeZone * 60;

  // Get the time zone offset of IST in minutes
  const istTimeZoneOffset = zone; // IST is UTC+5:30

  // Calculate the time difference between the target country and IST
  const timeDifference = istTimeZoneOffset - targetTimeZoneOffset;

  // Apply the time difference to the target time to get the equivalent time in IST
  targetTime.setMinutes(targetTime.getMinutes() + timeDifference);

  return targetTime;
}

function changeTime(date, rangeClass, sliderText, dateClass) {
  const new_date = document.getElementById(dateClass);
  new_date.textContent =
    date.toLocaleString("en-US", {
      weekday: "short",
    }) +
    ", " +
    date.toLocaleString("en-US", {
      month: "short",
    }) +
    " " +
    date.getDate();
  // new_date.textContent=date.
  console.log("date - ", date);
  // console.log(
  //   "----",
  //   date.toLocaleString("en-US", {
  //     month: "short",
  //   })
  // );
  // console.log(
  //   "----",
  //   date.toLocaleString("en-US", {
  //     weekday: "short",
  //   })
  // );
  // console.log("----", date.getDate());
  // console.log("hour - ", date.getHours());
  // console.log("minute - ", date.getMinutes());
  const slider = document.getElementById(rangeClass);
  const sliderContent = document.getElementById(sliderText);
  const totalMin = date.getHours() * 60 + date.getMinutes();
  // console.log("totalminute - ", totalMin);
  slider.value = totalMin;
  sliderContent.textContent = date.getHours() + ":" + date.getMinutes();
  // console.log("rangeclass - ", rangeClass);
  // console.log("slidertext - ", sliderText);
  // const options = {
  //   hour12: false,
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  // };
  // const format = new Intl.DateTimeFormat("en-US", options);
  // const target = format.format(date);
  // console.log("target - ", target);
  // // const hour = Number(target.slice(0, 2)) * 60 + Number(target.slice(3, 5));
  // console.log("hour - ", hour);
}
