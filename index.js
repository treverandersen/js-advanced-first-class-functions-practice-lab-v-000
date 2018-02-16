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

function driversByRevenue(array) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}

function driversByName(drivers) {

}

function totalRevenue() {

}

function averageRevenue() {

}
