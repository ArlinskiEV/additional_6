module.exports = function zeros(expression) {
  // your solution
  var five = 0,
      two = 0;
      listOfFactorials = expression.split( '*' );
      listOfProducts = [];
      doubleFactorial = false;

  //convert to multiply
  for (var i = 0; i < listOfFactorials.length; i++) {
    doubleFactorial = listOfFactorials[i].indexOf('!!') != -1;
    for (var j = parseInt(listOfFactorials[i]); j > 0; j--) {
      listOfProducts.push(j);
      if (doubleFactorial) j--;
    }
  }

  for (var i = 0; i < listOfProducts.length; i++) {
    while (listOfProducts[i]%5==0) {
      listOfProducts[i]/=5;
      five++;
    }
    while (listOfProducts[i]%2==0) {
      listOfProducts[i]/=2;
      two++;
    }
  }

  return Math.min(five,two);
}
