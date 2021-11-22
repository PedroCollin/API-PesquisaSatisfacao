<template>
  <div class="obg">
    <h1 id="title">Obrigado!</h1>
    
    <div class="areaSub">
      <h1 id="subT">Seu formulário foi enviado. Agora, vamos analisar com carinho suas escolhas.</h1>
    </div>

    <a href="" class="btn btn-white btn-animate">Concluir</a>
  </div>
</template>
<style lang="scss">
  .obg {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;  
  }
  #title{
    font-family: 'Varela Round';
    font-size: 90px;
    color: #000000;
  }
  #subT{
    font-size: 2rem;
    font-weight: 300;
    color: #727272;
  }
  .areaSub{
    width: 50%;
  }
  .btn{
    display: flex;
    align-items: center;
    justify-content: center;  
    width: 417px;
    height: 93px;
    background-color: #C22A1F;
    font-size: 40px;
    color: white;
    border: 0px ;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    margin-top: 90px;
    transition: all 0.3s;
  }

  .btn:hover {
    transform: translateY(-3px);
    transition: all 0.3s;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width:440px){
    .btn{
      width: 300px;
      margin-top: 45px;
    }
    #title{
      font-size: 75px;
    }
    #subT{
      font-size: 36px;
    }
    .areaSub{
      width: 75%;
      margin-top: -20px;
    }
  }

</style>