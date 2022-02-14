
// document.getElementById("pin-generator")
function pinGenerator() {
    const pin = Math.round(Math.random() * 10000);
    document.getElementById("display-pin").value = pin;
}