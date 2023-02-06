function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] VERIFIQUE OS DADOS NOVAMENTE...")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'menino.jpg')
                document.body.style.backgroundColor = '#1f73c9'
                document.body.style.transition = '.8s'
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemMasc.jpg')
                document.body.style.backgroundColor = '#ff712a'
                document.body.style.transition = '.8s'
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                document.body.style.backgroundColor = '#382004'
                document.body.style.transition = '.8s'
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
                document.body.style.backgroundColor = '#c48e52'
                document.body.style.transition = '.8s'
            }
        } else if (fsex[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
                document.body.style.backgroundColor = '#ff4561'
                document.body.style.transition = '.8s'
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemFem.jpg')
                document.body.style.backgroundColor = '#e2e2e2'
                document.body.style.transition = '.8s'
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulta.jpg')
                document.body.style.backgroundColor = '#52dddf'
                document.body.style.transition = '.8s'
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
                document.body.style.backgroundColor = '#eac348'
                document.body.style.transition = '.8s'
            }
        } else if (fsex[2].checked){
            gen = 'Não binario'
            img.setAttribute('src', 'naobinario.jpg')
            document.body.style.backgroundColor = '#b2599f'
            document.body.style.transition = '.8s'
        }
    } 
    res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    res.appendChild(img)
}