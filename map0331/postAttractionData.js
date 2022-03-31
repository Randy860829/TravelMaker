var url = 'http://20.222.89.212/api/travel/PostTravel';
var Today = new Date();
var datetime = Today.getFullYear() + "-" + (Today.getMonth() + 1)
  + "-" + Today.getDate() + "-" + Today.getHours() + "-" + Today.getMinutes()
  + "-" + Today.getSeconds();
var data = {
  'DATA': attractionData,
  'travelTitle': 'travelTitle',
  'tavelOwner': 'ac123',
  'travelCity': '台南市',
  'travelType': '開車',
};
console.log(data)

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));