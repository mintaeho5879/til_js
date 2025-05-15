const memberHong = {
  age: 10,
  name: "홍길동",
  role: "GUEST",
};
const memberKim = {
  age: 18,
  name: "김수한무",
  role: "MEMBER",
};
const memberPark = {
  age: 25,
  name: "박둘리",
  role: "ADMIN",
};

const originArr = [memberHong, memberKim, memberPark];

const result = originArr.filter((item, index) => {
  // return item.role === "ADMIN";
  return item.age <= 20;
});
console.log(result);
