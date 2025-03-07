// Code your solution in this file!
// Code your solution in this file!
//array of drivers


//returnFirstTwoDrivers()
const drivers = ['Polly', 'Kylian', 'Daniel', 'Linus'];


const returnFirstTwoDrivers = function(drivers) {
   return drivers.slice(0, 2);
 };
 console.log(returnFirstTwoDrivers(drivers));


 //    returnLastTwoDrivers()
 const returnLastTwoDrivers = function(drivers) {
   return drivers.slice(-2);
 };
 console.log(returnLastTwoDrivers(drivers));


 //   selectingDrivers
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


//   createFareMultiplier()
 function createFareMultiplier(multiplier) {
   return function(fare) {
     return fare * multiplier;
   };
 }


 //    fareDoubler()
 const fareDoubler = createFareMultiplier(2);
 console.log(fareDoubler(10));


 //fareTripler()
 const fareTripler = createFareMultiplier(3);
 console.log(fareTripler(10));


 // selectDifferentDrivers(arrayOfDrivers, function)
 function selectDifferentDrivers(drivers, driverSelector) {
   return driverSelector(drivers);
 }
 console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
 console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

