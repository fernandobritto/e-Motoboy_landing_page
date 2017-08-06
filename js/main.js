

var Page = React.createClass({
    displayName: "Page",

    render: function () {
        return React.createElement(
            "myElement",
            null,
            React.createElement(BannerTop, null),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(Textos, { title: "E-Motoboy" }),
                React.createElement(Textos, { subTitle: "O aplicativo E-Motoboy \xE9 uma ferramenta atrelada ao sistema Ecl\xE9tica Food Manager, software que atua atendendo desde pequenos quiosques de alimenta\xE7\xE3o at\xE9 grandes redes e franquias. " }),
                React.createElement(Textos, { text1: "Principais caracter\xEDsticas do E-Motoboy:" }),
                React.createElement(Textos, { list: "- Agiliza as entregas dos pedidos feitos pelos clientes. - Cont\xE9m mapa do local da entrega facilitando a vida do entregador. - Interface simples e funcional. - Com as entregas chegando diretamente para o celular do motoboy, a loja economizar\xE1 tempo e papel. - Integrado com o software da Ecl\xE9tica, o lojista tem relat\xF3rio do tempo de suas entregas." })
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));