const JOSINUSer = new URL(location).searchParams.get('post');
const post = JSON.parse(JOSINUSer);
const block = document.getElementById('block');
const JOSINUSer1 = new URL(location).searchParams.get('comment');
const comment = JSON.parse(JOSINUSer1);

const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const p2 = document.createElement('p');

block.append(h2,h3,p,p2);

h2.innerText = `user Id : ${post.userId}`
h3.innerText = `post Id : ${post.id}`
p.innerText = `Title of post : ${post.title}`
p2.innerText = `${post.body}`



const container = document.getElementsByClassName('container')[0];
const info = document.getElementsByClassName('info')[0];
const button = document.createElement('button');
button.innerText = 'user comments';
button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            container.innerHTML= ' ';
            for (const comment of comments) {

                const mainComment = document.createElement('div');
                mainComment.classList.add('mainComment');
                const email = document.createElement('h3');
                email.innerText = `Email : ${comment.email}`;
                const text = document.createElement('p');
                text.innerText = comment.body;

                mainComment.appendChild(email);
                mainComment.appendChild(text);
                container.appendChild(mainComment);

            }
        })
}
info.appendChild(button);