const url = new URL(location);
const jsonUser = url.searchParams.get('user');
const user = JSON.parse(jsonUser);
console.log(user);

const userBox = document.getElementsByClassName('mainWrap')[0];
let info = document.createElement('div');
userBox.classList.add('style');

let h = document.createElement('h2');
h.innerText = `${user.id} :  ${user.name} ${user.username} `;

let p = document.createElement('p');
p.innerText = `Email:${user.email},  phone:${user.phone},  website:${user.website}`;

let p2 = document.createElement('p');
p2.innerText = `Address: city:${user.address.city}, street:${user.address.street}, suite:${user.address.suite}, zipcode:${user.address.zipcode},  GEO:  latitude:${user.address.geo.lat}, longitude:${user.address.geo.lng}`;

let p3 = document.createElement('p');
p3.innerText = `Company:  Name company:${user.company.name}, Catch phrase:${user.company.catchPhrase}, bs:${user.company.bs}`;

userBox.appendChild(info);
info.append(h,p,p2,p3);

const container = document.getElementsByClassName('container')[0];
const infoButton = document.getElementsByClassName('infoButton')[0];
const button = document.createElement('button');
button.innerText = 'Post user info - Click Here';
button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            container.innerHTML = ' ';
            for (const post of posts) {
                const box = document.createElement('div');
                box.classList.add('box');
                const posts = document.createElement('h3');
                posts.innerText = `${post.id} : ${post.title}`;
                const postLink = document.createElement('a');
                postLink.innerText = 'Post-details  Click_Here';
                postLink.href = `post-details.html?post=${JSON.stringify(post)}`;

                box.append(posts,postLink);
                container.appendChild(box);
            }
        })
}
infoButton.appendChild(button);

