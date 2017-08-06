

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
                React.createElement(Textos, { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, quam sed hendrerit lacinia, eros nibh congue ligula, vitae pharetra massa mauris consectetur orci. Quisque a fermentum dui. Quisque elit nunc, congue in orci eu, varius malesuada justo. Suspendisse maximus mauris non arcu ultrices, tristique sodales leo fringilla. Nullam laoreet sem ut justo scelerisque dapibus. Aenean at ipsum sem. Sed iaculis sodales efficitur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, quam sed hendrerit lacinia, eros nibh congue ligula, vitae pharetra massa mauris consectetur orci. Quisque a fermentum dui. Quisque elit nunc, congue in orci eu, varius malesuada justo. Suspendisse maximus mauris non arcu ultrices, tristique sodales leo fringilla. Nullam laoreet sem ut justo scelerisque dapibus. Aenean at ipsum sem. Sed iaculis sodales efficitur. Donec quis est non nisl pellentesque ornare. Suspendisse at aliquam metus, a malesuada mauris. Vivamus nulla ante, iaculis in dolor eget, pretium tristique quam. Mauris lacus libero, faucibus vitae quam a, dignissim tincidunt arcu. Ut feugiat tincidunt odio id efficitur. Morbi sit amet arcu sed enim sagittis elementum. Ut dictum mi eu tempor bibendum. Vestibulum sodales convallis lorem vitae aliquet." })
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));