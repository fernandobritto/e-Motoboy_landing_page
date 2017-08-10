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
                { href: "https://www.ecletica.com.br", target: "_blanck" },
                "Ecl\xE9tica"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://www.ecletica.com.br/sobre.html", target: "_blanck" },
                "Sobre"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://play.google.com/store/apps/details?id=br.com.ecletica.emotoboy&hl=pt", target: "_blanck" },
                "Google"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://itunes.apple.com/bw/app/e-motoboy/id1215731478?mt=8", target: "_blanck" },
                "Apple"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://www.ecletica.com.br/contato.html", target: "_blanck" },
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
            "p",
            { className: "text_initial" },
            "E-Motoboy \xE9 uma ferramenta atrelada ao sistema Ecl\xE9tica Food Manager que ir\xE1 potencializar a efic\xE1cia do seu sistema de delivery. Com este aplicativo, o motoboy ir\xE1 receber as informa\xE7\xF5es de entrega direto em seu aparelho celular, melhorando assim o fluxo de entregas e os canais de comunica\xE7\xE3o entre o lojista com o motoboy. Contendo uma interface simples, intuitiva e funcional, o Motoboy ir\xE1 contar com um sistema integrado de mapas no qual ir\xE1 mostrar as melhores rotas para os locais de entrega. Quanto ao lojista, o mesmo obter\xE1 o total controle do seu sistema de delivery com as informa\xE7\xF5es do tempo real de entrega e muitos outros benef\xEDcios disponibilizados pelo aplicativo."
          ),
          React.createElement("br", null),
          React.createElement("br", null),
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
              "Maior rapidez e agilidade na entrega dos pedidos de delivery, evoluindo o fluxo de entrega e viabilizando o canal de comunica\xE7\xE3o entre a loja e o motoboy."
            ),
            React.createElement(
              "li",
              null,
              "O aplicativo E-Motoboy cont\xE9m um sistema de mapas, no qual o entregador ira se orientar atrav\xE9s das melhores rotas para os locais da entrega."
            ),
            React.createElement(
              "li",
              null,
              "Com uma interface simples, intuitiva e funcional, que permite o entregado us\xE1-lo de maneira r\xE1pida e flu\xEDda."
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
          React.createElement("br", null),
          React.createElement("br", null)
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
            "A efici\xEAncia da sua entrega maximizada pela tecnologia"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "content_block" },
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "h2",
          null,
          "Ecl\xE9tica Tecnologia"
        ),
        React.createElement(
          "div",
          { className: "center" },
          "Com mais de 25 anos de experi\xEAncia e conhecimento no setor de automa\xE7\xE3o comercial, com foco em Food Service, a Ecl\xE9tica visa a otimiza\xE7\xE3o de processos operacionais oferecendo solu\xE7\xF5es especificas para gest\xE3o de neg\xF3cios, tornando as atividades de um ponto de venda muita mais pr\xE1ticas. Com sede em S\xE3o Paulo e parceria com revendas por todo territ\xF3rio nacional, a Ecl\xE9tica atende mais de 5000 pontos, atuando desde pequenos quiosques de alimenta\xE7\xE3o at\xE9 grandes redes e franquias."
        ),
        React.createElement("br", null)
      ),
      React.createElement("br", null),
      React.createElement("br", null)
    );
  }
});

var Rodape = React.createClass({
  displayName: "Rodape",

  render: function () {
    return React.createElement(
      "footer",
      null,
      React.createElement(
        "span",
        { className: "contacto" },
        "Entre em contato",
        React.createElement("br", null),
        " 4007-2225"
      ),
      React.createElement("div", { className: "logo_emotoboy" })
    );
  }
});