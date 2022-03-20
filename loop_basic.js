/* 
반복문 1개만을 이용하여 다음의 결과가 나오도록 하시오. 
(console.log 사용, if문 사용)

********* 
******** *
******* **
****** ***
***** ****
*** ******
** *******
* ********
*/
function getStars1() {
  const STAR = '*';
  const SPACE = ' ';
  for (let i = 9; i >= 0; i--) {
    console.log(STAR.repeat(i) + SPACE.repeat(1) + STAR.repeat(9-i));
  }
}
getStars1();

// ======================================================= /

/* 
반복문 1개만을 이용하여 다음의 결과가 나오도록 하시오.
(console.log 사용, if문 사용)

*
**
***
****
*****
******
*******
********
*********
*/
function getStars2() {
  for (let i = 1; i < 10; i++) {
    console.log('*'.repeat(i));
  };
}
getStars2();