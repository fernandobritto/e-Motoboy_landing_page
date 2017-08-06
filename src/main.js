

var Page = React.createClass({
    render: function(){
        return (
            <myElement>
                <BannerTop />
                <div className="container">
                    <Textos title="My component title!" />
                    

                </div>
            </myElement>
        );
    }
});



ReactDOM.render(
    <Page />,
    document.getElementById('page')
);
