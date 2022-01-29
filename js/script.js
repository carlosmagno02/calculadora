function calcular(tipo,valor) {
    resultado = document.getElementById('resultado')
    if(tipo == 'acao'){
      if(valor == 'c'){
        resultado.value = ''
      }

      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        resultado.value += valor
      }

      if(valor === '='){
        resultado.value = eval(resultado.value)
      }
    }else if(tipo == 'valor'){
      resultado.value += valor
    }
  }