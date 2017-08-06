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
        
      </div>

        );
    }
});
var Textos = React.createClass({
    render: function(){
        return (
            <div className="row">
                <h1>{ this.props.title }</h1>
            </div>
        );
    }
});

