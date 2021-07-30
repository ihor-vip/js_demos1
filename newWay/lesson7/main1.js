// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let usersWrap = document.getElementsByClassName('users-wrap')[0];
        for (const user of value) {
            let div = document.createElement('div');
            div.innerText = user.id + ' ' + user.username;

            let btn = document.createElement('button');
            btn.innerText = 'posts';
            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).then(value => value.json())
                    .then(postsOfUser => {
                        let postsBox = document.getElementsByClassName('posts')[0];
                        postsBox.innerText = '';
                        for (const post of postsOfUser) {
                            let postDiv = document.createElement('div');
                            postDiv.innerText = post.title;
                            postsBox.append(postDiv)


                            let btn1 = document.createElement('button');
                            postDiv.append(btn1)
                            btn1.innerText = 'comments';
                            btn1.onclick = function () {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(value => value.json())
                                    .then(commentsOfUser => {
                                        let Box = document.getElementsByClassName('comments')[0];
                                        Box.innerText = '';
                                        for (const comment of  commentsOfUser) {
                                            console.log(comment);
                                            let commentDiv = document.createElement('div');
                                            commentDiv.innerText = comment.name;

                                            Box.append(commentDiv)
                                            usersWrap.append(Box);
                                        }
                                    })
                            }


                        }
                    })
            }
            div.append(btn);
            usersWrap.append(div);

        }
    })


















