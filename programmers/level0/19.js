// 가위 바위 보

// 1
function solution(rsp) {
  return rsp
    .split("")
    .map((r) => {
      if (r === "2") return r.replaceAll(r, "0");
      if (r === "0") return r.replaceAll(r, "5");
      if (r === "5") return r.replaceAll(r, "2");
    })
    .join("");
}

// 2
function solution(rsp) {
  const rspObj = {
    2: "0",
    0: "5",
    5: "2"
  };

  return rsp
    .split("")
    .map((r) => rspObj[r])
    .join("");
}

// 3
