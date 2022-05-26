let inp = document.querySelector('input');
let btn = document.querySelector('button')
let show = document.querySelector('.show')
inp.addEventListener('keyup', test);

let Sait = ['A', 'I', 'O', 'U', 'E', 'Ə', 'İ', 'Ö', 'Ü']
let Samit = ['Q', 'W', 'R', 'T', 'Y', 'P', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', "B", 'N', "M"]
let Qalin = ['A', 'I', 'O', 'U']
let ince = ['E', 'Ə', 'İ', 'Ö', 'Ü']

let kar = ["p", "k", "f", "x", "t", "ç", "s", "x", "l", "ç", "h"]
let cingiltili = ["b", "q", "v", "ğ", 'd', 'j', 'z', 'y', 'g', 'c', 'l', 'm', 'n', "r",]

function test() {
    let k = Sait.filter((item) => {
        return inp.value.toString().toUpperCase().includes(item.toUpperCase())
    })

    let f = ''
    k.forEach((item) => {
        f += item
    })

    let samitler = Samit.filter((item) => {
        return inp.value.toString().toUpperCase().includes(item.toLocaleUpperCase())
    })
    sm = ''
    samitler.forEach((item) => {
        sm += item
    })
    let Qalinsait = Qalin.filter((item) => {
        return inp.value.toString().toUpperCase().includes(item.toLocaleUpperCase())
    })
    sQalin = ''
    Qalinsait.forEach((item) => {
        sQalin += item
    })
    let incesait = ince.filter((item) => {
        return inp.value.toString().toUpperCase().includes(item.toLocaleUpperCase())
    })
    since = ''
    incesait.forEach((item) => {
        since += item
    })



    let karsamitler = kar.filter((item) => {
        return inp.value.toString().toUpperCase().includes(item.toLocaleUpperCase())
    })
    karsm = ''
    karsamitler.forEach((item) => {
        karsm += item
    })
    let Cingiltilisamitler = cingiltili.filter((item) => {
        return inp.value.toString().toUpperCase().includes(item.toLocaleUpperCase())
    })
    Cingiltilism = ''
    Cingiltilisamitler.forEach((item) => {
       Cingiltilism += item
    })

    
    show.innerHTML = ` Cumlede ${k.length} eded  muxtelif sait islenib  Saitler: ${f} <br/> 
    Muxtelif Samitlerin sayi ${samitler.length}  Samitler ${sm} <br/>
    Qalin saitlerin sayi ${Qalinsait.length} .Qalin saitler ${sQalin} <br/>
    Ince saitlerin sayi ${incesait.length} .Ince saitler ${since}   <br/>
    Muxtelif Kar Samitlerin sayi ${karsamitler.length}  Kar Samitler ${karsm} <br/>
    Muxtelif Cingiltili Samitlerin sayi ${Cingiltilisamitler.length}  Cingiltili Samitler ${Cingiltilism} <br/>
    `

    if(inp.value==''){
        show.innerHTML=''
    }

}
btn.addEventListener('click', () => {
    inp.value = ''
    show.innerHTML=''
})
