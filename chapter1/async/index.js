
try {
  
  interview((data) =>{
    console.log(data);
  })
  
} catch (error) {
  console.log('cry', error)
}

function interview(callback) {
  setTimeout(() => {
    if (Math.random() > 0.8) {
      callback('success');
    } else {
      throw new Error('fail');
    }
  }, 500);
}