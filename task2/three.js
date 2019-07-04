
goToHome(makeDinner);
goToHome(textMe);

// Make dinner
function makeDinner(){
  // code to make dinner
  console.log("Dinner is ready");
}

// text her when you are HOME
function textMe(){
  // Texting to Mrs. Node
  console.log("SMS sent to Mrs.Node");
}


// it may take 20-30 minutes to go home
function goToHome(doNext){
  // code to go home
  // arrived at home
  doNext();
}
