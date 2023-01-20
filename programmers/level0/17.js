// 옷가게 할인 받기

// 1
function solution(price) {
  let priceToPay = price;
  if (price < 100_000) return priceToPay;

  if (100_000 <= price && price < 300_000) {
    priceToPay = price * (1 - 0.05);
  } else if (300_000 <= price && price < 500_000) {
    priceToPay = price * (1 - 0.1);
  } else if (500_000 <= price) {
    priceToPay = price * (1 - 0.2);
  }

  return Math.trunc(priceToPay);
}

// Why 1000000 and 1_000_000 both are same? https://stackoverflow.com/questions/66261356/why-1000000-and-1-000-000-both-are-same
// Math.trunc() https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
