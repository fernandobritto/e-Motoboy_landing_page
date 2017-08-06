

var Page = React.createClass({
    render: function(){
        return (
            <myElement>
                <BannerTop />
                <div className="container">
                    <Textos title="E-Motoboy" />
                    <Textos subTitle="O aplicativo E-Motoboy é uma ferramenta atrelada ao sistema Eclética Food Manager, software que atua atendendo desde pequenos quiosques de alimentação até grandes redes e franquias. " />
                    <Textos text1="Principais características do E-Motoboy:" />
                    <Textos list="- Agiliza as entregas dos pedidos feitos pelos clientes.
                            - Contém mapa do local da entrega facilitando a vida do entregador.
                            - Interface simples e funcional.
                            - Com as entregas chegando diretamente para o celular do motoboy, a loja economizará tempo e papel.
                            - Integrado com o software da Eclética, o lojista tem relatório do tempo de suas entregas." />
                </div>
            </myElement>
        );
    }
});



ReactDOM.render(
    <Page />,
    document.getElementById('page')
);
