fetch("https://api.agify.io?name=michael")
.then(function (result) {
  return result.json();
})
.then(function (data) {
  console.log(data);
});