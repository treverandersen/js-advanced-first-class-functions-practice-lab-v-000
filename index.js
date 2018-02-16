// Code your solution in this file!
function logDriverNames(drivers) {
  driversCopy.forEach(function (d) {
    console.log(d.name)
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (d) {
    if (d.hometown === location) {
      console.log(d.name);
    }
  });
}

function driversByRevenue(drivers) {
  const arr = drivers.revenue;
  arr.sort(function (a, b) {
	   return a - b;
  });
  return arr;
}

function driversByName(drivers) {

}

function totalRevenue() {

}

function averageRevenue() {

}
