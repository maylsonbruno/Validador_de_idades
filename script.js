function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
    var fano= document.getElementById('nasc')
    var res = document.getElementById("res")
 if (fano.value.length==0 || Number(fano.value) > ano) {
          alert('Verifique  os dados informados e tente novamente')
    }else{
 var fsex = document.getElementsByName('sex')
 var idade = ano - Number(fano.value)
 var genero = ''
 var img = document.createElement('img')
 img.setAttribute('id','foto')
 if (fsex[0].checked) {
      genero = 'Homen'
      if (idade>=0&&idade<10 ){
         img.setAttribute('src','homemcrianca2.jpg')
         img.style.borderRadius='120px'
         img.style.marginRight='80px'
      }else if(idade>=10&&idade<21){
         img.setAttribute('src','homemjovem2.jpg')
         img.style.borderRadius='120px'
         img.style.marginRight='80px'
      }else if(idade <50){
         img.setAttribute('src','homemadulto2.jpg')
         img.style.borderRadius='120px'
         img.style.marginRight='80px'
      }else{
         img.setAttribute('src','homemidoso2.jpg')
         img.style.borderRadius='120px'
         img.style.marginRight='80px'
      }
 }
 else if (fsex[1].checked) {
    genero = 'Mulher'
    if (idade>=0&&idade<10 ){
      img.setAttribute('src','mulhercrianca1.jpg')
      img.style.borderRadius='120px'
      img.style.marginRight='80px'
   }else if(idade>=10&&idade<21){
      img.setAttribute('src','mulherjovem1.jpg')
      img.style.borderRadius='120px'
      img.style.marginRight='80px'
   }else if(idade <50 ){
      img.setAttribute('src','mulheradulta1.jpg')
      img.style.borderRadius='120px'
      img.style.marginRight='80px'
   }else{
      img.setAttribute('src','mulheridosa1.jpg')
      img.style.borderRadius='120px'
      img.style.marginRight='80px'
   }
 }
 
 res.innerHTML=`detectamos ${genero} ${idade} Ano`
 res.appendChild(img)
    }

}