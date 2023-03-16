// code your solution here

// Function called saturdayFun
function saturdayFun (activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}


// Function called mondayWork
const mondayWork = function (workActivity="go to the office") {
  return `This Monday, I will ${workActivity}.`;
}

// Function called wrapAdjective
function wrapAdjective (flair="*") {
  return function (word="special") {
    return `You are ${flair}${word}${flair}!`;
  }
}