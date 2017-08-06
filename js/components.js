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
            )
        );
    }
});