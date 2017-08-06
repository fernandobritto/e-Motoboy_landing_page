var BannerTop = React.createClass({
    displayName: "BannerTop",

    render: function () {
        return React.createElement(
            "div",
            null,
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
        );
    }
});
var Textos = React.createClass({
    displayName: "Textos",

    render: function () {
        return React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "h1",
                null,
                this.props.title
            ),
            React.createElement(
                "h3",
                null,
                this.props.subTitle
            ),
            React.createElement(
                "h4",
                null,
                this.props.text1
            ),
            React.createElement(
                "p",
                null,
                this.props.list
            )
        );
    }
});