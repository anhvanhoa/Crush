var btn_one = document.querySelector('.btn-one')

btn_one.onclick = () => {
    document.querySelector('.speech-one').style.display = 'none'
    document.querySelector('.speech-two').style.display = 'block'
    setTimeout(() => {
        document.querySelector('.paragraph-one').style.display = 'none'
        document.querySelector('.paragraph-two').style.display = 'block'
        setTimeout(() => {
            document.querySelector('.paragraph-two').style.display = 'none'
            document.querySelector('.paragraph-three').style.display = 'block'
            setTimeout(() => {
                document.querySelector('.paragraph-three').style.display = 'none'
                document.querySelector('.paragraph-four').style.display = 'block'
                setTimeout(() => {
                    document.querySelector('.options').style.display = 'flex'
                }, 2000)
            }, 3000)
        }, 3000)
    }, 3000)
}

var btn_refuse = document.querySelector('.btn-refuse') 
 
btn_refuse.onclick = () => {
    var numberRandom1 = Math.ceil(Math.random() * 400)
    var numberRandom2 = Math.ceil(Math.random() * 300)
    btn_refuse.style.top = numberRandom1 + 'px'
    btn_refuse.style.left = numberRandom2 + 'px'
}

var btn_agree = document.querySelector('.btn-agree') 

btn_agree.onclick = () => {
    document.querySelector('.speech-two').style.display = 'none'
    document.querySelector('.speech-three').style.display = 'block'
}