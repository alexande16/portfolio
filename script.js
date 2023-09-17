function modo(){
    const btn = document.getElementById('btn')
    const html = document.documentElement
    html.classList.toggle('dark')

    if(html.classList == ('light')){
        btn.innerText = 'Modo Escuro'
    } else{
        btn.innerText = 'Modo Claro'
    }
}


