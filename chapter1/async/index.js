
// try {
  
//   interview((data) =>{
//     console.log(data);
//   })
  
// } catch (error) {
//   console.log('cry', error)
// }

interview((res) => {
  if (res) {
    return console.log('cry at 1st round')
  }

  interview((res) => {
    if (res) {
      return console.log('cry at 2nd round')
    }

    interview((res) => {
      if (res) {
        return console.log('cry at 3rd round')
      }

      console.log('smile');

    })

  })
    
})

function interview(callback) {
  setTimeout(() => {
    if (Math.random() > 0.8) {
      callback(null, 'success');
    } else {
      callback(new Error('fail'));
    }
  }, 500);
}