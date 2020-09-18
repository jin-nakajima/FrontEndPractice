const button = document.getElementById('addBtn');
const lists = document.getElementById('lists');

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return users;
}

function addList(user) {
    const list = document.createElement('li');
    list.innerText = user.email;
    lists.appendChild(list);
}

async function listUsers() {
    // データやり取り
    // console.log(users);
    const users = await getUsers();
    // DOM操作
    users.forEach(addList);
}

button.addEventListener('click', listUsers);

// loadしたときの動作
//window.addEventListener('load',async function(){
//    const res = await fetch('https://jsonplaceholder.typicode.com/users');
//    const users = await res.json();
//
//    for (let index = 0; index < users.length; index++) {
//        const user = users[index];
//        const list = document.createElement('li');
//        list.innerText = user.email;
//        lists.appendChild(list);
//    }
//    
//});

window.addEventListener('load',listUsers);