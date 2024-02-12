// 추억 점수
const getNameYearningObject = (name, yearning) => {
  const object = {};
  for (let i = 0; i < name.length; i++) {
    const key = name[i];
    const value = yearning[i] || 0;
    object[key] = value;
  }

  return object;
};
const getResult = (photo, object) => {
  const result = [];
  for (let i = 0; i < photo.length; i++) {
    let temp = 0;
    photo[i].forEach((p) => {
      if (!object[p]) return;
      temp += object[p];
    });
    result.push(temp);
    temp = 0;
  }
  return result;
};
function solution(name, yearning, photo) {
  const object = getNameYearningObject(name, yearning);
  const result = getResult(photo, object);

  return result;
}
