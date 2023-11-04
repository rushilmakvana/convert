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
  // console.log("date - ", date);
  //   const localDate = new Date();
  const slider = document.getElementById(RangeClass);
  const sliderValue = document.getElementById(ValueClass);
  const options = {
    timeZone: timeZone,
    hour12: true,
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
  // var FixMin = (Math.trunc(utcMin / 15) + 1) * 15;
  console.log("fix min - ", FixMin);
  sliderValue.textContent =
    target.slice(0, 2) + ":" + FixMin + " " + target.slice(-2);
  slider.value = Number(target.slice(0, 2)) * 60 + FixMin;
  console.log("slider val - ", slider.value);
  console.log("slider valcon - ", sliderValue.textContent);
  console.log("-------------------------------------------");
}

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
  );
  // .toLocaleString("en-US", {
  //   // hour: "numeric",
  //   // minute: "numeric",
  //   // second: "numeric",
  //   hour12: true,
  // });
  const target = format.format(dateFor);
  console.log("date for - ", target);
  sliderValue.textContent =
    target.slice(0, 2) + " : " + minute + " " + target.slice(-2);
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
