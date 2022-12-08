function contar() {
    var ini = document.getElementById('end')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pass')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Falta dados, preencha os dados novamente')
    } else {
        window.alert('Ta suave')
    }
}