var BannerTop = React.createClass({
    render:function(){
        return (
            <div>
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

        );
    }
});
var Textos = React.createClass({
    render: function(){
        return (
            <div className="row">
                <h1>{ this.props.title }</h1>
                <h3>{ this.props.subTitle }</h3>
                <h4>{ this.props.text1 }</h4>
                <p>{ this.props.list }</p>

            </div>
        );
    }
});

