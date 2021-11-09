<template>
  <div class="home">
    <link
      rel="styleshet"
      href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
    />
    <link
      rel="styleshet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"
    />
    <div class="container">
      <section class="main-section">
        <div class="content">
          <p class="titulo">Bem vindo a Pesquisa</p>
          <p class="titulo">de Satisfação</p>
          <p class="legenda">Dê seu feedback sobre o colégio</p>
          <button class="btnred">Acessar Formulário</button>
        </div>

        <img src="./../assets/media/modelo.png" alt="" />
        <div class="inner"></div>
      </section>
      <section class="slides">
        <div class="slide1">
          <p class="perg">Como é feito o formulário?</p>
          <p class="info">
            Acessando o formulário, você irá se deparar com uma
          </p>
          <p class="info">
            lista de itens relacionados ao colégio, onde poderá
          </p>
          <p class="info">
            opinar sua satisfação sobre um determinado tópico e
          </p>
          <p class="info">se ele é relevante para a instituição.</p>
        </div>
        <div class="slide2">
          <p class="perg">Para que ele serve?</p>
          <p class="info">
            A Pesquisa de Satisfação é utilizada pela instituição
          </p>
          <p class="info">para se obter uma análise facilitada de como a</p>
          <p class="info">qualidade de ensino e a organização estrutural do</p>
          <p class="info">colégio é vista pelos alunos.</p>
        </div>
        <div class="slide3">
          <p class="perg">Alguma dúvida?</p>
          <p class="info">
            Contate seu professor para mais informações sobre a plataforma!
          </p>
        </div>
      </section>
    </div>
    <footer class="footer">
      <section class="footer-left">
        <img class="img-logo" src="./../assets/media/senai-logo.png" alt="" />
        <div class="socials">
          <a href="#"
            ><img class="icons" src="./../assets/media/face.svg" alt=""
          /></a>
          <a href="#"
            ><img class="icons" src="./../assets/media/insta.svg" alt=""
          /></a>
          <a href="#"
            ><img class="icons" src="./../assets/media/link.svg" alt=""
          /></a>
          <a href="#"
            ><img class="icons" src="./../assets/media/twit.svg" alt=""
          /></a>
        </div>
      </section>
      <section class="footer-right">
        <section class="right-left">
          <li class="paginas">
            <p class="titulo">Menu</p>

            <ul class="box">
              <li><a href="#">Início</a></li>
              <li><a href="#">Tutorial</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </li>
        </section>
        <section class="right-right">
          <li class="contato">
            <p class="titulo">E-mail</p>
            <p class="dados">secretariaonline@senai.com.br</p>
            <p class="titulo">Fone</p>
            <p class="dados">(19) 3655-2494</p>
          </li>
        </section>
      </section>
      <!-- <div class="footer-bottom">
        <p>All Right reserved by &copy;conceptial</p>
      </div> -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="sass">
@import "scss/Home"
</style>
