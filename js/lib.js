// 데이터 서버에 자료를 호출함.

function getData(api = "posts") {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/${api}`);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        // 성공
        resolve(xhr.response);
      } else if (xhr.status === 404) {
        // 실패
        reject();
      } else if (xhr.status === 505) {
        console.log("서버가 불안정합니다. 잠시 후 재접속해주세요.");
      }
    };
  });
}
// 콜백함수 만들기 : 자료가 들어오면 처리함.
const postsParser = function (res) {
  console.log(res);
};
const commentsParser = function (res) {};
const albumsParser = function (res) {};
const photosParser = function (res) {};
const todosParser = function (res) {};
const usersParser = function (res) {};
// 함수 사용
getData("posts");
getData("comments");
getData("albums");
getData("photos");
getData("todos");
getData("users");
