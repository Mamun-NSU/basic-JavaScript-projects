// This function generate pin with size 4
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

// This function show the generated pin in the UI
function pinGenerator() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}
