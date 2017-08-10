

var Page = React.createClass({
    displayName: "Page",

    render: function () {
        return React.createElement(
            "myElement",
            null,
            React.createElement(
                "div",
                { className: "container-fluid" },
                React.createElement(BannerTop, null),
                React.createElement(Textos, { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, quam sed hendrerit lacinia, eros nibh congue ligula, vitae pharetra massa mauris consectetur orci. Quisque a fermentum dui. Quisque elit nunc, congue in orci eu, varius malesuada justo. Suspendisse maximus mauris non arcu ultrices, tristique sodales leo fringilla. Nullam laoreet sem ut justo scelerisque dapibus. Aenean at ipsum sem. Sed iaculis sodales efficitur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus mauris non arcu ultrices, tristique sodales leo fringilla. Nullam laoreet sem ut justo scelerisque dapibus. Aenean at ipsum sem. Sed iaculis sodales efficitur." }),
                React.createElement(Rodape, null)
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));