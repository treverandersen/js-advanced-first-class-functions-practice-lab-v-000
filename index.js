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
  drivers.sort(function (a, b) {
    return a.localeCompare(b);
  });
}

function driversByName(drivers) {

}

function totalRevenue() {

}

function averageRevenue() {

}
