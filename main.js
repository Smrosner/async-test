const getNumLessThanTen = require('./getNumLessThan.js')
const waitOneSecond = require('./waitOneSecond.js')
const writeToHardDrive = require('./writeToHardDrive.js')

getNumLessThanTen ((err, randomNumber) => {
  if (err) {
    console.log(err)
  } else {
    // wait three seconds
    waitOneSecond((err, waited) => {
      if(err) {
        console.log(err);
      } else {
        waitOneSecond((err,waited) => {
          if (err) {
            console.log(err);
          } else {
            waitOneSecond((err, waited) => {
              if (err) {
                console.log(err)
              } else {
                writeToHardDrive(randomNumber.toString(), (err, message) => {
                  if (err) {
                    console.log(err)
                  } else {
                    writeToHardDrive(randomNumber.toString(), console.log)
                  }
                })
              }
            })
          }
        })
      }
    })
  }
})

/*
get a random number less than 10,
getNumLessThanTen()
then, wait three seconds
generateNumLessThan(3)
then, write the number to the hard drive
writeToFile(data, callback)
Then, once all that is done, console log "I'm done!"


CONSTRAINTS
- You must use "getNumLessThan.js" to generate your random number. Note: the "getNumLessThan.js" file is just an overly complicated way to make getting a random number asynchronous (there is no reason for it to be asynchronous, other than as an exercise).
- No editing any file except main.js (comments are the exception)
*/



