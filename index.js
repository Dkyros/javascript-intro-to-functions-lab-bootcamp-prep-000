function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  var allcaps = string.toUpperCase()
  console.log(allcaps);
}

function logWhisper(string){
  var all_lower = string.toLowerCase()
  console.log(all_lower)
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!"
  } else if (string === string.toUpperCase()) {
    return "Yes INDEED!"
  } else if(string === string.mixedCase()){
    return "I love you, too."
  }else {
    return "No option"
  }
}
