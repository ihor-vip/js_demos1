// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

 /*  - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
   - отримує текст з параграфа з id "content" */
        let doc = document.getElementById('content')
        console.log(doc.innerText)


// — отримує текст з блоку з id "rules"
        let doc1 = document.getElementById('rules')
        console.log(doc1.innerText)


// — замініть текст параграфа з id 'content' на будь-який інший
        let doc2 = document.getElementById('content')
        doc2.innerText = ' okten is cool '
        console.log(doc2)


// — замініть текст параграфа з id 'rules' на будь-який інший
        let doc3  = document.getElementById('rules')
        doc3.innerText = ' okten is cool '
        console.log(doc3)


// — змініть кожному елементу колір фону на червоний
        let doc4 = document.body.children
        for (newelement of doc4){
            newelement.style.background = 'red';
        }


// — змініть кожному елементу колір тексту на синій
        let doc5 = document.body.children
        for (newelement of doc5){
            newelement.style.color = 'blue';
        }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let doc6 = document.getElementById('rules');
console.log(doc6.classList);

/* -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік",
 одна виводить текст елементу, інша довільний текст
  -- поміняти колір тексту у всіх елементів fc_rules на червоний */
let fc_rules = document.getElementsByClassName('fc_rules');
for (const fc_rulesElement of fc_rules) {
        fc_rulesElement.addEventListener('click', function (){
                    fc_rulesElement.style.color = 'red';
                    fc_rulesElement.innerText = 'okten is cool'
            }
        )
        fc_rulesElement.innerText = 'great'
}




