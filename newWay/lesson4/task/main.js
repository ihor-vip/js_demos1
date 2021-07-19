// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

     function random()

     {
        let number =  Math.floor(Math.random() * 100)
         console.log(number);
    }

    random();



// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

    function random1(min,max)

    {
        let number = Math.floor(Math.random() * (max - min) + min)
        console.log(number);
    }

    random1(10, 100);



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

    let randomArray = Array.from({length: 6}, () => Math.floor(Math.random() * 39));

        let sort = randomArray.sort( function (a,b){
            return a - b;
        });

        console.log(sort);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

    let randomArray1 = Array.from({length: 6}, () => Math.floor(Math.random() * 39));

        let filter = randomArray1.filter(function(value){
            return value % 2 === 0;
        });

        console.log(filter);




// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

     let randomArray2 = Array.from({length: 6}, () => Math.floor(Math.random() * 39));


    let map = randomArray2.map(function(item){
        return item + '!'
    });

    console.log(map);



// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

    function User ( id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }


// створити пустий масив, наповнити його 10 об'єктами new User(....)

    let users = [
        new User(),
        new User(),
        new User(),
        new User(),
        new User(),
        new User(),
        new User(),
        new User(),
        new User(),
        new User(),
    ];

        console.log(users);



// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

        let usersArray = [
            new User(1),
            new User(4),
            new User(67),
            new User(33),
            new User(868),
            new User(1222),
            new User(21),
            new User(245),
            new User(24),
            new User(567),
        ];

        let usersArraySort = usersArray.filter(function (even){
            return even.id % 2 === 0
        }).sort(function (value1,value2){
            return value1.id - value2.id
        })

        console.log(usersArraySort);














































