// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (d) {
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
  a.sort(function (a, b) {
	   return a - b;
  });
  return a;
}

function driversByName(drivers) {

}

function totalRevenue() {

}

function averageRevenue() {

}
