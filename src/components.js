var BannerTop = React.createClass({
    render:function(){
        return (
            <div>
            <div className="parallax_section">

            <div className="logo">
                <h1>E-Motoboy</h1>
            <h2 >Seu Delivery na Velocidade da Tecnologia</h2>
            </div>


        <div className="hero">
          <div className="parallax-layer layer-6" />
          <div className="parallax-layer layer-5" />
          <div className="parallax-layer layer-4" />
          <div className="parallax-layer bike-1" />
          <div className="parallax-layer bike-2" />
          <div className="parallax-layer layer-3" />
          <div className="parallax-layer layer-2" />
          <div className="parallax-layer layer-1" />
        </div>

        <nav>
          <ul>
            <li><a href="https://www.ecletica.com.br"  target="_blanck" >Eclética</a></li>
            <li><a href="https://www.ecletica.com.br/sobre.html"  target="_blanck" >Sobre</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=br.com.ecletica.emotoboy&hl=pt"  target="_blanck" >Google</a></li>
            <li><a href="https://itunes.apple.com/bw/app/e-motoboy/id1215731478?mt=8"  target="_blanck" >Apple</a></li>
            <li><a href="https://www.ecletica.com.br/contato.html"  target="_blanck" >Contato</a></li>
          </ul>
        </nav>
        </div>
      </div>

        );
    }
});
var Textos = React.createClass({
    render: function(){
        return (

        <div>
        <h3>{this.props.title}</h3>


        <div className="parallax_section parallax_image_first">
          <div className="center">
            <article>Rapidez e Agilidade </article>
          </div>
        </div>
        {/*Block with content*/}
        <div className="content_block">
          <div className="center">
            <p className="text_initial">E-Motoboy é uma ferramenta atrelada ao sistema Eclética Food Manager que irá potencializar a eficácia do seu sistema de delivery. Com este aplicativo, o motoboy irá receber as informações de entrega direto em seu aparelho celular, melhorando assim o fluxo de entregas e os canais de comunicação entre o lojista com o motoboy.
Contendo uma interface simples, intuitiva e funcional, o Motoboy irá contar com um sistema integrado de mapas no qual irá mostrar as melhores rotas para os locais de entrega.
Quanto ao lojista, o mesmo obterá o total controle do seu sistema de delivery com as informações do tempo real de entrega e muitos outros benefícios disponibilizados pelo aplicativo.
</p>
            <br /><br />
            <h2>Principais características do E-Motoboy:</h2>
            <ul>
                <li>Maior rapidez e agilidade na entrega dos pedidos de delivery, evoluindo o fluxo de entrega e viabilizando o canal de comunicação entre a loja e o motoboy.</li>
                <li>O aplicativo E-Motoboy contém um sistema de mapas, no qual o entregador ira se orientar através das melhores rotas para os locais da entrega.</li>
                <li>Com uma interface simples, intuitiva e funcional, que permite o entregado usá-lo de maneira rápida e fluída.</li>
                <li>Com as entregas chegando diretamente para o celular do motoboy, a loja economizará tempo e papel. </li>
                <li>Integrado com o software da Eclética, o lojista tem relatório do tempo de suas entregas.</li>
            </ul>
            <br /><br />
            </div>
        </div>
        <div className="parallax_section parallax_image_second">
          <div className="center">
            <article>A eficiência da sua entrega maximizada pela tecnologia  </article>
          </div>
        </div>
        {/*Block with content*/}
        <div className="content_block">
        <br /><br />
        <h2>Eclética Tecnologia</h2>
          <div className="center">Com mais de 25 anos de experiência e conhecimento no setor de automação comercial, com foco em Food Service, a Eclética visa a otimização de processos operacionais oferecendo soluções especificas para gestão de negócios, tornando as atividades de um ponto de venda muita mais práticas.
          Com sede em São Paulo e parceria com revendas por todo território nacional, a Eclética atende mais de 5000 pontos, atuando desde pequenos quiosques de alimentação até grandes redes e franquias. .</div>
          <br />
          </div>
        <br /><br />
        </div>

        );
    }
});
