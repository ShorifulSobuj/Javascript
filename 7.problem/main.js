//7.Solve the problem with Javascript  to check whether the temperature is hot, cold or .

function checkTemperature(temperature) {
  if (temperature >= 30) {
    return "Hot";
  } else if (temperature <= 25) {
    return "Cold";
  } else {
    return "Normal";
  }
}

// Example usage:
console.log(checkTemperature(35));  // Output: "Hot"
console.log(checkTemperature(15));  // Output: "Normal"
console.log(checkTemperature(20));  // Output: "Normal"
console.log(checkTemperature(10));  // Output: "Cold"
