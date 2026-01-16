export function purifyNumber(number){
  number = number.replace(/[^0-9]/g, '');
  return number;
}

export function purifyDecimal(number){
  number = number.replace(/(?!^-)[^0-9.]/g, '');
  number = number.replace(/(\..*)\./g, '$1');
  return number;
}


// export function onlyForNumbers($event) {
//   let keyCode = $event.keyCode ? $event.keyCode : $event.which;

//   // only allow number and one dot
//   if (keyCode < 48 || keyCode > 57) {
//     $event.preventDefault();
//   }
// }