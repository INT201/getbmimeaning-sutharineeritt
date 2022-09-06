const { template } = require('@babel/core')

function calculateBMI(weight, height) {
    bmi = weight/(height*height)
    return bmi
}
function getBMIMeaning(weight, height) {
  if (calculateBMI(weight,height) < 18.5 )
    return "Underweight"
  else if (calculateBMI(weight,height) > 25.0 )
      return "Overweight"
  else
      return "Normal weight"
}
module.exports = getBMIMeaning
