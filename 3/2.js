//1
let a = 7;
if (a>3 && a<10){
    console.log('верно');
}
else{
    console.log('не верно');
}

//2
a=0;
if (a==0 || a==2){
    a+7;
}
else
{
    a/10;
}
console.log(a);

//3
let num=3;
let result;
switch (num) {
    case 1:
      result = 'зима';
      break;
    case 2:
      result = 'весна';
      break;
    case 3:
      result = 'лето';
      break;
    case 4:
      result = 'осень';
      break;
    default:
      result = 'неверное знчение';
  }
console.log(result);

//4
let day = 22;
let decade;
if (day <= 10) {
    decade = 'первая';
  } else if (day <= 20) {
    decade = 'вторая';
  } else {
    decade = 'третья';
  }
console.log('декада:', decade);

//5
let month = 12;
let season;
switch (month) {
  case 12:
  case 1:
  case 2:
    season = 'зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'лето';
    break;
  case 9:
  case 10:
  case 11:
    season = 'осень';
    break;
}
console.log('Пора года:', season);

//6
let str = 'abcde';
if (str.charAt(0) === 'a') {
  console.log('да');
} else {
  console.log('нет');
}