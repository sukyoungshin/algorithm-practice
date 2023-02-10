// 로그인 성공?
// 1
function solution(id_pw, db) {
  const [ID, PW] = id_pw;

  for (let i = 0; i < db.length; i++) {
    const [DB_ID, DB_PW] = db[i];

    if (ID === DB_ID && PW === DB_PW) return "login";
    if (ID === DB_ID) return "wrong pw";
  }

  return "fail";
}

// 2
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
