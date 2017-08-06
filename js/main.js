

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
                React.createElement(Textos, { title: "My component title!" })
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));