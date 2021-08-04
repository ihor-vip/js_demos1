let wrap =document.getElementsByClassName('wrap')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            const wrap = document.getElementsByClassName('wrap')[0];
            const userBox = document.createElement('div');
            userBox.classList.add('style')
            const title = document.createElement('h2');

            title.innerText = `${user.id} : ${user.name}`;

            const button = document.createElement('button');
            button.classList.add('button');
            button.innerText = 'Get Info';
            button.onclick = () => {
                location.href = `user-details.html?user=${JSON.stringify(user)}`;
            }
            userBox.classList.add('style');
            userBox.append(title);
            userBox.appendChild(button);
            wrap.append(userBox);
        }
    });



















