
// try {
  
//   interview((data) =>{
//     console.log(data);
//   })
  
// } catch (error) {
//   console.log('cry', error)
// }

interview((res) => {
  if (res instanceof Error) {
    console.log('cry')
  } else {
    console.log('smile');
  }
})

function interview(callback) {
  setTimeout(() => {
    if (Math.random() > 0.8) {
      callback('success');
    } else {
      callback(new Error('fail'));
    }
  }, 500);
}