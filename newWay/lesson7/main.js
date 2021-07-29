
// 1----callback----
// function myDay(cb) {
//     setTimeout(() => {
//         cb('i wake up')
//     }, 1500)
// }
//
// function eat(cb) {
//     setTimeout(() => {
//         cb('i eat')
//     }, 2000)
// }
//
// function shower(cb) {
//     setTimeout(() => {
//         cb('took a shower')
//     }, 2000)
// }
//
// function getBus(cb) {
//     setTimeout(() => {
//         cb('took a bus')
//     }, 500)
// }
//
// function startWork(cb) {
//     setTimeout(() => {
//         cb('start work')
//     }, 2000)
// }
//
// function lunch(cb) {
//     setTimeout(() => {
//         cb('have a lunch')
//     }, 1000)
// }
//
// function backToWork(cb) {
//     setTimeout(() => {
//         cb('back to work')
//     }, 2000)
// }
//
// function finishWork(cb) {
//     setTimeout(() => {
//         cb('finish work')
//     }, 1000)
// }
//
// function taxi(cb) {
//     setTimeout(() => {
//         cb('took a taxi')
//     }, 500)
// }
//
// function dinner(cb) {
//     setTimeout(() => {
//         cb('have a dinner')
//     }, 1000)
// }
//
// function watchTv(cb) {
//     setTimeout(() => {
//         cb('watch Tv')
//     }, 2000)
// }
//
// function sleep(cb) {
//     setTimeout(() => {
//         cb(' go to bed')
//     }, 1000)
// }
//
// myDay((data) => {
//     console.log(data)
//     eat((data) => {
//         console.log(data)
//         shower((data) => {
//             console.log(data)
//             getBus((data) => {
//                 console.log(data)
//                 startWork((data) => {
//                     console.log(data)
//                     lunch(() => {
//                         console.log(data)
//                         backToWork(() => {
//                             console.log(data)
//                             finishWork(() => {
//                                 console.log(data)
//                                 taxi(() => {
//                                     console.log(data)
//                                     dinner(() => {
//                                         watchTv(() => {
//                                             console.log(data)
//                                             sleep(() => {
//                                                 console.log(data)
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

function myDay() {
    return new Promise(resolve => setTimeout(() => {
        resolve('i wake up')
    }, 1000))
}

const eat = () => new Promise(resolve => setTimeout(() => {
    resolve('i eat')
}, 2000))


const shower = () => new Promise(resolve => setTimeout(() => {
    resolve('took a shower')
}, 1500))


const getBus = () => new Promise(resolve => setTimeout(() => {
    resolve('took a bus')
}, 1000))


const startWork = () => new Promise(resolve => setTimeout(() => {
    resolve('start work')
}, 1200))


const lunch = () => new Promise(resolve => setTimeout(() => {
    resolve('have lunch')
}, 1500))


const backToWork = () => new Promise(resolve => setTimeout(() => {
    resolve('back to work')
}, 1000))


const finishWork = () => new Promise(resolve => setTimeout(() => {
    resolve('finish work')
}, 1800))


const taxi = () => new Promise(resolve => setTimeout(() => {
    resolve('have a taxi')
}, 3000))


const dinner = () => new Promise(resolve => setTimeout(() => {
    resolve('dinner')
}, 2000))


const watchTv = () => new Promise(resolve => setTimeout(() => {
    resolve('watch tv')
}, 1000))


const sleep = () => new Promise(resolve => setTimeout(() => {
    resolve('sleep')
}, 1500))
// 2---- promise-----
// myDay().then(value => {
//     console.log(value);
//     return eat()
//     }).then(value => {console.log(value);
//         return shower()}).then(value =>{
//             console.log(value);
//             return getBus()}).then(value =>{
//             console.log(value);return startWork()}).then(value=>{
//                 console.log(value);return lunch()}).then (value=>{
//                     console.log(value);return backToWork()}).then (value =>{
//                         console.log(value); return finishWork()}).then(value =>{
//                             console.log(value);return taxi()}).then(value =>{
//                                 console.log(value);return dinner()}).then(value =>{
//                                     console.log(value);return watchTv()}).then(value=>{
//                                         console.log(value);return sleep()}).then(value=>{console.log(value)})


//---3-- async await -----
const start = async ()=>{
    console.log(await myDay());
    console.log(await eat());
    console.log(await shower());
    console.log(await getBus());
    console.log(await startWork());
    console.log(await lunch());
    console.log(await backToWork());
    console.log(await finishWork());
    console.log(await taxi());
    console.log(await dinner());
    console.log(await watchTv());
    console.log(await sleep());
}
start()
