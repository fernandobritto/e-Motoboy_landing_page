var BannerTop = React.createClass({
  displayName: "BannerTop",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "parallax_section" },
        React.createElement(
          "div",
          { className: "logo" },
          React.createElement(
            "h1",
            null,
            "E-Motoboy"
          ),
          React.createElement(
            "h2",
            null,
            "Seu Delivery na Velocidade da Tecnologia"
          )
        ),
        React.createElement(
          "div",
          { className: "hero" },
          React.createElement("div", { className: "parallax-layer layer-6" }),
          React.createElement("div", { className: "parallax-layer layer-5" }),
          React.createElement("div", { className: "parallax-layer layer-4" }),
          React.createElement("div", { className: "parallax-layer bike-1" }),
          React.createElement("div", { className: "parallax-layer bike-2" }),
          React.createElement("div", { className: "parallax-layer layer-3" }),
          React.createElement("div", { className: "parallax-layer layer-2" }),
          React.createElement("div", { className: "parallax-layer layer-1" })
        ),
        React.createElement(
          "nav",
          null,
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://www.ecletica.com.br" },
                "Ecl\xE9tica"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://www.ecletica.com.br/sobre.html" },
                "Sobre"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://play.google.com/store/apps/details?id=br.com.ecletica.emotoboy&hl=pt" },
                "Google"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://itunes.apple.com/bw/app/e-motoboy/id1215731478?mt=8" },
                "Apple"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://www.ecletica.com.br/contato.html" },
                "Contato"
              )
            )
          )
        )
      )
    );
  }
});
var Textos = React.createClass({
  displayName: "Textos",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        this.props.title
      ),
      React.createElement(
        "div",
        { className: "parallax_section parallax_image_first" },
        React.createElement(
          "div",
          { className: "center" },
          React.createElement(
            "article",
            null,
            "Rapidez e Agilidade "
          )
        )
      ),
      React.createElement(
        "div",
        { className: "content_block" },
        React.createElement(
          "div",
          { className: "center" },
          React.createElement(
            "h2",
            null,
            "Principais caracter\xEDsticas do E-Motoboy:"
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              "Agiliza as entregas dos pedidos feitos pelos clientes."
            ),
            React.createElement(
              "li",
              null,
              "Cont\xE9m mapa do local da entrega facilitando a vida do entregador."
            ),
            React.createElement(
              "li",
              null,
              "Interface simples e funcional."
            ),
            React.createElement(
              "li",
              null,
              "Com as entregas chegando diretamente para o celular do motoboy, a loja economizar\xE1 tempo e papel. "
            ),
            React.createElement(
              "li",
              null,
              "Integrado com o software da Ecl\xE9tica, o lojista tem relat\xF3rio do tempo de suas entregas."
            )
          ),
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tempor lorem. Proin egestas sagittis orci sit amet ultricies. Etiam nec pharetra justo, scelerisque scelerisque elit. Nam pretium purus eu neque pretium accumsan. Proin eget pulvinar dui. Vestibulum nulla magna, auctor quis mollis eget, hendrerit nec enim. Nam commodo feugiat metus, ac auctor mi. Quisque sed ante eget arcu sollicitudin sodales nec nec nunc."
        )
      ),
      React.createElement(
        "div",
        { className: "parallax_section parallax_image_second" },
        React.createElement(
          "div",
          { className: "center" },
          React.createElement(
            "article",
            null,
            "Some text Parallax "
          )
        )
      ),
      React.createElement(
        "div",
        { className: "content_block" },
        React.createElement(
          "div",
          { className: "center" },
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tempor lorem. Proin egestas sagittis orci sit amet ultricies. Etiam nec pharetra justo, scelerisque scelerisque elit. Nam pretium purus eu neque pretium accumsan. Proin eget pulvinar dui. Vestibulum nulla magna, auctor quis mollis eget, hendrerit nec enim. Nam commodo feugiat metus, ac auctor mi. Quisque sed ante eget arcu sollicitudin sodales nec nec nuncjhgjghj."
        )
      ),
      React.createElement("br", null),
      React.createElement("br", null)
    );
  }
});