console.log('first')

// lev1_1 Length
console.log('lev1_1 Length')

let firstName = 'Sivagajan'
let lastName = 'Karunanathan'
let fullName = `${firstName}${lastName}`

console.log(firstName.length) // 9
console.log(lastName.length)  // 12
console.log(fullName.length)  // 21

// lev1_2 indexOf
console.log('lev1_2 indexOf')

const txt = 'How inappropriate to call this planet Earth, when clearly it is Ocean.'

console.log(txt.indexOf('h'))       // an 27. position
console.log(txt.indexOf('Earth'))   // position 38
console.log(txt.indexOf('Moon'))    // -1 da Moon nicht in txt auftaucht

// lev1_3 search
console.log('lev1_3 search')

let txt2 = 'Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.'

console.log(txt2.search(';'))       // 34
console.log(txt2.search('green'))   // 6
console.log(txt2.search('blue'))    // -1 weil bei Blue im text der anfangsbuchstabe groß ist

// lev1_4 slice
console.log('lev1_4 slice')

const A = 'Susi is going to codingschool'

let myLet114 = A.slice(0,4)
console.log(myLet114)

let myLet214 = A.slice(5,7)
console.log(myLet214)

let myLet314 = A.slice(5, 17)
myLet314 += A.slice(23)
console.log(myLet314)

let myLet414 = A.slice(23)
console.log(myLet414)

let myLet514  = A.slice(0,8) +A.slice(-6)
console.log(myLet514)

document.getElementById('lev1_4').innerHTML = `<br> Lev1_4 <br>${myLet114} <br> ${myLet214}<br> ${myLet314}<br> ${myLet414}<br> ${myLet514}<br>`

// lev1_7 replace
console.log('lev1_7 replace')

const text = 'Sam is good at codingschool'

let myLet117 = text.replace('good', 'bad')
myLet117 = myLet117.replace('coding','')
console.log(myLet117)

let myLet217 = text.replace('Sam', 'Susi').replace('coding','')
console.log(myLet217)

let myLet317 = text.replace('codingschool', 'tennis')
console.log(myLet317)

document.getElementById('lev1_7').innerHTML = ` <br> Lev1_7<br>${myLet117} <br> ${myLet217}<br> ${myLet317}<br>`

//lev1_8 toLowerCase toUpperCase
console.log('lev1_8 toLowerCase toUpperCase')

const text1_8 = 'Sam is going to codingschool'

let text1_8B = text1_8.replace('coding','')

let myLet118 = text1_8B.toUpperCase()
console.log(myLet118)

let myLet218 = text1_8B.toLowerCase()
console.log(myLet218)

let myLet318 = text1_8B.replace('Sam',text1_8B.slice(0,3).toUpperCase()).replace('school',text1_8B.slice(-6).toUpperCase())
console.log(myLet318)

let myLet418 = text1_8B.replace('Sam',text1_8B.slice(0,3).toLowerCase()).replace('is going to' ,text1_8B.slice(4,-7).toUpperCase())
console.log(myLet418)

let myLet518 = text1_8B.replace('S',text1_8B.charAt(0).toUpperCase()).replace('i',text1_8B.charAt(4).toUpperCase()).replace('g',text1_8B.charAt(7).toUpperCase()).replace('t',text1_8B.charAt(13).toUpperCase()).replace('school',text1_8B.charAt(16).toUpperCase())+'chool'

console.log(myLet518)


document.getElementById('lev1_8').innerHTML = ` <br> Lev1_7<br>${myLet118} <br> ${myLet218}<br> ${myLet318}<br>${myLet418}<br>${myLet518}<br>`

/* 
let myLet518B =  text1_8B.split(" ")

for (let i = 0; i < myLet518.length; i++) 
{
    console.log(myLet518B[i] = myLet518B[i][0].toUpperCase() + myLet518B[i].slice(1))
}
 */

// lev1_9 concat
console.log('lev1_9 concat')

const text1 = 'Sam is going to codingschool'
const text1_9 = text1.replace('coding', '')
const text2 = 'Susi'
const text3 = 'programming bike'
const text4 = 'and' 

let myLet119 = text1_9.concat(` and to the movie theater`)
console.log(myLet119)

let myLet219 = text2.concat(` ${text4} ${text1_9}`).replace('is', 'are').replace('school', 'gym and to the movie theater')
console.log(myLet219)

let myLet319 = text1_9.replace('Sam', text2).concat(` and to the movie theater`)
console.log(myLet319)

document.getElementById('lev1_9').innerHTML = ` <br> Lev1_9<br>${myLet119} <br> ${myLet219}<br> ${myLet319}<br>`

// lev1_11 String_Methods
console.log('lev1_11 String_Methods')

let x = 'Hello '
let y = 'World <br>'

let z = x+y
document.getElementById('lev1_11').innerHTML = `<br> Lev1_11<br> ${z}`

let n = `${x} ${y}`
document.getElementById('lev1_11').innerHTML += n

document.getElementById('lev1_11').innerHTML += ( x + ' World')

let meinString = 'ich bin Erster'

meinString += ' und er kommt auf Platz zwei'
console.log(meinString)

// lev2_3 JavaScript Vertiefung
console.log('lev2_3 JavaScript Vertiefung')


const searching = () =>{

    let word = document.getElementById('search-input').value
    let text = document.getElementById('JS').innerHTML
    console.log(word)

    document.getElementById('JS').innerHTML = text.replaceAll(word,`<span class="highlight">${word}</span>`)

}

const replace = () =>{

    let rword = document.getElementById('search-input').value
    let rtext = document.getElementById('JS').innerHTML
    console.log(rword)

    document.getElementById('JS').innerHTML = rtext.replaceAll(`<span class="highlight">${rword}</span>`,`${rword}`)

}