
interview((data) =>{
  console.log(data);
})

function interview(callback) {
  setTimeout(() => {
    callback('success');
  }, 500);
}