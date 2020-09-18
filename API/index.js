// 非同期通信
async function callApi() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
};

// xhr
function callApi() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        console.log(xhr.response);
    };
}
callApi();