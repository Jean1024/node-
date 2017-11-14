var fs = require('fs')
var xlsx = require('node-xlsx');
// read
var obj = xlsx.parse('1.xlsx');
obj = obj[0]['data']
var colorObj = formatArr(obj)
console.log(JSON.stringify(colorObj))
fs.writeFileSync('color.json',JSON.stringify(colorObj))

function formatArr(arr) {
  let newArr = []
  arr.forEach(function (v) {
    if(v[0] && ((typeof v[0]) === 'number')){
      newArr.push(v)
    }
  })
  return splitTwoArr(newArr) 
}
function splitTwoArr(arr) {
  var arr1 = []
  var arr2 = []
  arr.forEach(function (v) {
    arr1.push(v[0])
    arr2.push(v[1])
  })
  for (var i = 0; i < arr2.length; i++) {
    if((typeof arr2[i]) === 'string' ){
      arr2[i] = arr2[i].split(',')
    }
  }
  console.log(123)
  return {temp: arr1,color: arr2}
}
