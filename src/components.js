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
            <li><a href="https://www.ecletica.com.br">Eclética</a></li>
            <li><a href="https://www.ecletica.com.br/sobre.html">Sobre</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=br.com.ecletica.emotoboy&hl=pt">Google</a></li>
            <li><a href="https://itunes.apple.com/bw/app/e-motoboy/id1215731478?mt=8">Apple</a></li>
            <li><a href="https://www.ecletica.com.br/contato.html">Contato</a></li>
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
            <h2>Principais características do E-Motoboy:</h2>
            <ul>
                <li>Agiliza as entregas dos pedidos feitos pelos clientes.</li>
                <li>Contém mapa do local da entrega facilitando a vida do entregador.</li>
                <li>Interface simples e funcional.</li>
                <li>Com as entregas chegando diretamente para o celular do motoboy, a loja economizará tempo e papel. </li>
                <li>Integrado com o software da Eclética, o lojista tem relatório do tempo de suas entregas.</li>
            </ul>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tempor lorem. Proin egestas sagittis orci sit amet ultricies. Etiam nec pharetra justo, scelerisque scelerisque elit. Nam pretium purus eu neque pretium accumsan. Proin eget pulvinar dui. Vestibulum nulla magna, auctor quis mollis eget, hendrerit nec enim. Nam commodo feugiat metus, ac auctor mi. Quisque sed ante eget arcu sollicitudin sodales nec nec nunc.</div>
        </div>
        <div className="parallax_section parallax_image_second">
          <div className="center">
            <article>A eficiência da sua entrega maximizada pela tecnologia  </article>
          </div>
        </div>
        {/*Block with content*/} 
        <div className="content_block">
          <div className="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tempor lorem. Proin egestas sagittis orci sit amet ultricies. Etiam nec pharetra justo, scelerisque scelerisque elit. Nam pretium purus eu neque pretium accumsan. Proin eget pulvinar dui. Vestibulum nulla magna, auctor quis mollis eget, hendrerit nec enim. Nam commodo feugiat metus, ac auctor mi. Quisque sed ante eget arcu sollicitudin sodales nec nec nuncjhgjghj.</div>
        </div>
        <br /><br />
        </div>

        );
    }
});

