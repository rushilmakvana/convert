// // var btn = document.getElementById("btn");
// // btn.addEventListener("click", () => {
// //   var e = document.getElementById("cars");
// //   var value = e.value;
// //   var text = e.options[e.selectedIndex].text;
// //   //   console.log("value - ", value);
// //   //   console.log("text - ", text);

// //   var today = new Date();
// //   var time =
// //     today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// //   const localDate = new Date();
// //   const UTC = "America/New_York"; // Replace with your desired timezone
// //   const JST = "Asia/Tokyo"; // Replace with your desired timezone
// //   const PST = "Asia/Karachi"; // Replace with your desired timezone
// //   const IDT = "Asia/Jerusalem"; // Replace with your desired timezone
// //   const options1 = {
// //     timeZone: UTC,
// //     hour12: false,
// //     hour: "2-digit",
// //     minute: "2-digit",
// //     second: "2-digit",
// //   };
// //   const options2 = {
// //     timeZone: JST,
// //     hour12: false,
// //     hour: "2-digit",
// //     minute: "2-digit",
// //     second: "2-digit",
// //   };
// //   const options3 = {
// //     timeZone: PST,
// //     hour12: false,
// //     hour: "2-digit",
// //     minute: "2-digit",
// //     second: "2-digit",
// //   };
// //   const options4 = {
// //     timeZone: IDT,
// //     hour12: false,
// //     hour: "2-digit",
// //     minute: "2-digit",
// //     second: "2-digit",
// //   };
// //   const UTCF = new Intl.DateTimeFormat("en-US", options1);
// //   const JSTF = new Intl.DateTimeFormat("en-US", options2);
// //   const PSTF = new Intl.DateTimeFormat("en-US", options3);
// //   const IDTF = new Intl.DateTimeFormat("en-US", options4);
// //   const targetUTC = UTCF.format(localDate);
// //   const targetJST = JSTF.format(localDate);
// //   const targetPST = PSTF.format(localDate);
// //   const targetIDT = IDTF.format(localDate);
// //   console.log("time india- ", time);
// //   console.log("target time new york- ", targetUTC);
// //   console.log("target time japan- ", targetJST);
// //   console.log("target time pakistan- ", targetPST);
// //   console.log("target time israel- ", targetIDT);

// //   // console.log("clicked");
// // });
// // /* fetch("./timezone.json")
// //       .then((res) => {
// //         // console.log("response - ", res.json());
// //         return res.json();
// //       })
// //       .then((data) => console.log("data - ", data)); */

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

// const UTCF = new Intl.DateTimeFormat("en-US", options1);
// const targetUTC = UTCF.format(localDate);
// console.log("utc - ", targetUTC);
// var utcMin = Number(targetUTC.slice(3));
// var FixMin = (Math.trunc(utcMin / 15) + 1) * 15;
// // var time = Number(targetUTC.slice(0, 2)) + " : " + Number(targetUTC.slice(3));
// // sliderValue.textContent = Number(targetUTC.slice(0, 2)) * 60 + FixMin;

// const slider = document.getElementById("slider1");
// const slider2 = document.getElementById("slider2");
// const sliderValue = document.getElementById("sliderValue1");
// const sliderValue2 = document.getElementById("sliderValue2");
// sliderValue2.textContent = targetUTC.slice(0, 2) + ":" + FixMin;
// slider2.value = Number(targetUTC.slice(0, 2)) * 60 + FixMin;

// var today = new Date();
// var min = Math.trunc(today.getMinutes());
// var FixMin = (Math.trunc(min / 15) + 1) * 15;
// // var time = today.getHours() + ":" + today.getMinutes();
// sliderValue.textContent = today.getHours() * 60 + FixMin;
// sliderValue.textContent = today.getHours() + ":" + FixMin;

// // sliderValue.textContent = FixMin;
// slider.value = today.getHours() * 60 + FixMin;
// slider.addEventListener("input", () => {
//   //   var TotalMinute = slider.value;
//   //   var hour = Math.trunc(TotalMinute / 60);
//   //   var minute = (TotalMinute / 60 - hour) * 60;
//   //   sliderValue.textContent = hour + " : " + minute;
//   //   //   sliderValue.textContent = hour + ":" + minute;
//   //   sliderValue.textContent = TotalMinute;
// });

function CalculateTime(timeZone, RangeClass, ValueClass, date) {
  // console.log("---------------------------------");
  // console.log("timwzone - ", timeZone);
  // console.log("range - ", RangeClass);
  // console.log("value - ", ValueClass);
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
  // console.log("utc date - ", target);
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
  // console.log("slider val - ", slider.value);
  // console.log("slider valcon - ", sliderValue.textContent);
  // console.log("-------------------------------------------");
}
// function CalculateTime(timeZone, RangeClass, ValueClass, date) {
//   console.log("---------------------------------");
//   console.log("timwzone - ", timeZone);
//   console.log("range - ", RangeClass);
//   console.log("value - ", ValueClass);
//   console.log("date - ", date);
//   //   const localDate = new Date();
//   const slider = document.getElementById(RangeClass);
//   const sliderValue = document.getElementById(ValueClass);
//   const options = {
//     timeZone: timeZone,
//     hour12: true,
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   };
//   const format = new Intl.DateTimeFormat("en-US", options);
//   const target = format.format(date);
//   console.log("utc date - ", target);
//   var utcMin = Number(target.slice(3, 5));
//   console.log("utc min - ", utcMin);
//   var FixMin =
//     utcMin % 15 !== 0
//       ? (Math.trunc(utcMin / 15) + 1) * 15
//       : Math.trunc(utcMin / 15) * 15;
//   // var FixMin = (Math.trunc(utcMin / 15) + 1) * 15;
//   // console.log("fix min - ", FixMin);
//   sliderValue.textContent =
//     target.slice(0, 2) + ":" + FixMin + " " + target.slice(-2);
//   slider.value = Number(target.slice(0, 2)) * 60 + FixMin;
//   // console.log("slider val - ", slider.value);
//   // console.log("slider valcon - ", sliderValue.textContent);
//   // console.log("-------------------------------------------");
// }

CalculateTime(IST, "slider1", "sliderValue1", new Date());
CalculateTime(UTC, "slider2", "sliderValue2", new Date());
CalculateTime(JST, "slider3", "sliderValue3", new Date());
CalculateTime(PST, "slider4", "sliderValue4", new Date());
CalculateTime(IDT, "slider5", "sliderValue5", new Date());

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
  CalculateTime(UTC, "slider2", "sliderValue2", d);
  CalculateTime(JST, "slider3", "sliderValue3", d);
  CalculateTime(PST, "slider4", "sliderValue4", d);
  CalculateTime(IDT, "slider5", "sliderValue5", d);
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
  changeTime(convertToIST(d, -4, 330), "slider1", "sliderValue1");
  changeTime(convertToIST(d, -4, 540), "slider3", "sliderValue3");
  changeTime(convertToIST(d, -4, 300), "slider4", "sliderValue4");
  changeTime(convertToIST(d, -4, 120), "slider5", "sliderValue5");
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
  changeTime(convertToIST(d, 9, 330), "slider1", "sliderValue1");
  changeTime(convertToIST(d, 9, -240), "slider2", "sliderValue2");
  changeTime(convertToIST(d, 9, 300), "slider4", "sliderValue4");
  changeTime(convertToIST(d, 9, 120), "slider5", "sliderValue5");
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
  changeTime(convertToIST(d, 5, 330), "slider1", "sliderValue1");
  changeTime(convertToIST(d, 5, -240), "slider2", "sliderValue2");
  changeTime(convertToIST(d, 5, 540), "slider3", "sliderValue3");
  changeTime(convertToIST(d, 5, 120), "slider5", "sliderValue5");
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
  changeTime(convertToIST(d, 2, 330), "slider1", "sliderValue1");
  changeTime(convertToIST(d, 2, -240), "slider2", "sliderValue2");
  changeTime(convertToIST(d, 2, 540), "slider3", "sliderValue3");
  changeTime(convertToIST(d, 2, 300), "slider4", "sliderValue4");
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

function changeTime(date, rangeClass, sliderText) {
  console.log("hour - ", date.getHours());
  console.log("minute - ", date.getMinutes());
  const slider = document.getElementById(rangeClass);
  const sliderContent = document.getElementById(sliderText);
  const totalMin = date.getHours() * 60 + date.getMinutes();
  console.log("totalminute - ", totalMin);
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

// Example usage:
// const countryTime = new Date(); // Replace with the target country's time
// const countryTimeZone = 9; // Replace with the target country's time zone offset (e.g., -5 for EST)

// const tokyoToisrael = convertToIST(countryTime, countryTimeZone, 120);
// const tokyoToNy = convertToIST(countryTime, countryTimeZone, -240);
// const tokyoToIn = convertToIST(countryTime, countryTimeZone, 330);
// const tokyoToPak = convertToIST(countryTime, countryTimeZone, 300);
// // const tokyoTo = convertToIST(countryTime, countryTimeZone, 120);
// console.log("IDT ", tokyoToisrael);
// console.log("UTC ", tokyoToNy);
// console.log("IST ", tokyoToIn);
// console.log("PST ", tokyoToPak);

// function convertToIST(countryTime, countryTimeZone) {
//   // Create a Date object with the current time in the target country
//   const targetTime = new Date();
//   targetTime.setTime(countryTime);

//   // Get the time zone offset of the target country in minutes
//   const targetTimeZoneOffset = countryTimeZone * 60;

//   // Get the time zone offset of IST in minutes
//   const istTimeZoneOffset = 330; // IST is UTC+5:30

//   // Calculate the time difference between the target country and IST
//   const timeDifference = istTimeZoneOffset - targetTimeZoneOffset;

//   // Apply the time difference to the target time to get the equivalent time in IST
//   targetTime.setMinutes(targetTime.getMinutes() + timeDifference);

//   return targetTime;
// }

// // Example usage:
// const countryTime = new Date('2023-11-04T12:00:00'); // Replace with the target country's time
// const countryTimeZone = -5; // Replace with the target country's time zone offset (e.g., -5 for EST)

// const istTime = convertToIST(countryTime, countryTimeZone);
// console.log(istTime);
