/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';

const productImages = [
  { id: 1, src: 'https://deluxpromocao.myshopify.com/cdn/shop/files/Design_sem_nome_-_2025-08-27T205732.296.png?v=1756339092&width=1024', alt: 'Kit 42 Potes Herméticos Empilháveis Quadrado Resistente' },
  { id: 2, src: 'https://deluxpromocao.myshopify.com/cdn/shop/files/br-11134207-7r98o-mci8mxe0bx2q00.jpg?v=1756338140&width=1024', alt: 'Vista interna dos potes com alimentos' },
  { id: 3, src: 'https://deluxpromocao.myshopify.com/cdn/shop/files/br-11134207-7r98o-mci8mxe093xu76.jpg?v=1756338140&width=1024', alt: 'Potes empilhados demonstrando economia de espaço' },
  { id: 4, src: 'https://deluxpromocao.myshopify.com/cdn/shop/files/br-11134207-7r98o-mci8mxe0aiia4d.jpg?v=1756338140&width=1024', alt: 'Tampas com vedação hermética' },
  { id: 5, src: 'https://deluxpromocao.myshopify.com/cdn/shop/files/br-11134207-7r98o-mci8mxe07pde51.jpg?v=1756338140&width=1024', alt: 'Variedade de tamanhos dos potes' },
  { id: 6, src: 'https://deluxpromocao.myshopify.com/cdn/shop/files/br-11134207-7r98o-mci8mxe0dbn67c.jpg?v=1756338140&width=1024', alt: 'Potes com etiquetas e colheres medidoras' },
  { id: 7, src: 'https://deluxpromocao.myshopify.com/cdn/shop/files/br-11134207-7r98o-mci8mxe04w8ib5.jpg?v=1756338140&width=1024', alt: 'Dimensões dos diferentes potes do kit' },
  { id: 8, src: 'https://deluxpromocao.myshopify.com/cdn/shop/files/br-11134207-7r98o-mci8mxe06asy41.jpg?v=1756338140&width=1024', alt: 'Potes organizados em uma despensa' },
];

const PixIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="45" height="25" fill="none" aria-labelledby="pi-pix">
        <title id="pi-pix">Pix</title>
        <g clipPath="url(#pi-pix-a)">
            <path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"/>
            <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"/>
            <path fill="#939598" fillRule="evenodd" d="M18.125 8.246c-1.202 0-2.162.937-2.162 2.077v6.882a.216.216 0 1 1-.431 0v-6.882c0-1.393 1.168-2.509 2.593-2.509l2.107.003c1.42.003 2.585 1.117 2.585 2.505v1.465c0 1.393-1.169 2.509-2.594 2.509h-2.977a.216.216 0 0 1 0-.432h2.977c1.202 0 2.162-.937 2.162-2.077v-1.465c0-1.136-.956-2.07-2.154-2.073l-2.106-.003Zm4.849-.216c0-.12.096-.217.216-.217h.914c.313 0 .615.12.84.337.224.216.35.51.35.82v5.14a.216.216 0 1 1-.43 0V8.97a.708.708 0 0 0-.22-.51.778.778 0 0 0-.54-.215h-.914a.216.216 0 0 1-.216-.216Z" clipRule="evenodd"/>
            <path fill="#32BCAD" d="m24.883 7.233-.414-.4a.255.255 0 0 1-.077-.18.247.247 0 0 1 .077-.18l.414-.399a.269.269 0 0 1 .373 0l.414.4a.252.252 0 0 1 .077.18.247.247 0 0 1-.077.18l-.414.399a.263.263 0 0 1-.186.074.272.272 0 0 1-.187-.074Z"/>
            <path stroke="#939598" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth=".432" d="M26.833 8.025h.906c.466 0 .913.178 1.243.496l2.12 2.045a.705.705 0 0 0 .497.198.726.726 0 0 0 .498-.198l2.112-2.037c.33-.318.777-.497 1.243-.497h.737"/>
            <path fill="#939598" fillRule="evenodd" d="M31.6 11.542a.51.51 0 0 0-.348.138l-2.12 2.045c-.37.357-.872.557-1.393.557h-.906a.216.216 0 1 1 0-.432h.906a1.57 1.57 0 0 0 1.093-.436l2.12-2.044a.92.92 0 0 1 .647-.26.942.942 0 0 1 .647.26m0 0 2.113 2.037c.288.278.682.436 1.093.436h.737a.216.216 0 1 1 0 .431h-.737c-.52 0-1.022-.2-1.393-.557l-2.112-2.037a.489.489 0 0 0-.348-.138" clipRule="evenodd"/>
            <path fill="#32BCAD" d="M10.343 15.372c-.454 0-.882-.17-1.204-.48l-1.74-1.678a.34.34 0 0 0-.456 0l-1.745 1.683a1.698 1.698 0 0 1-.553.357 1.746 1.746 0 0 1-.652.124H3.65l2.203 2.124a1.808 1.808 0 0 0 2.491 0l2.209-2.13h-.21ZM3.993 9.44c.455 0 .883.17 1.205.48l1.745 1.684a.33.33 0 0 0 .457 0l1.739-1.677a1.714 1.714 0 0 1 1.204-.481h.21l-2.209-2.13a1.808 1.808 0 0 0-2.491 0L3.65 9.44h.343Z"/>
            <path fill="#32BCAD" d="M12.38 11.208 11.045 9.92a.262.262 0 0 1-.095.018h-.607c-.315 0-.618.122-.842.337l-1.74 1.677a.833.833 0 0 1-.59.235.859.859 0 0 1-.59-.235L4.836 10.27a1.222 1.222 0 0 0-.843-.337h-.746a.26.26 0 0 1-.09-.017l-1.34 1.292a1.656 1.656 0 0 0 0 2.402l1.34 1.293a.259.259 0 0 1 .09-.018h.746c.316 0 .619-.122.843-.337l1.745-1.683a.878.878 0 0 1 1.18 0l1.74 1.677c.224.215.527.336.842.337h.607c.034 0 .066.007.095.019l1.335-1.288a1.656 1.656 0 0 0 0-2.402"/>
        </g>
        <defs><clipPath id="pi-pix-a"><path fill="#fff" d="M0 0h38v24H0z"/></clipPath></defs>
    </svg>
);

const TruckIcon = () => (
    <svg role="presentation" fill="none" focusable="false" strokeWidth="1.2" width="24" height="24" className="icon icon-picto-truck" viewBox="0 0 24 24">
        <path d="M19 17.798h1.868a1.714 1.714 0 0 0 1.715-1.715V11.25a3.274 3.274 0 0 0-3.275-3.274H14.395l-.097 7.869" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M8.71 18.175c1.565 0 3.094-.16 4.572-.321m-9.94-.087a1.78 1.78 0 0 1-1.576-1.56c-.189-1.594-.407-3.256-.407-4.96 0-1.705.216-3.366.405-4.96a1.783 1.783 0 0 1 1.577-1.56c1.725-.186 3.523-.409 5.37-.409s3.644.223 5.368.408a1.783 1.783 0 0 1 1.578 1.56c.066.564.136 1.135.199 1.714" stroke="currentColor"></path>
        <path d="M16.061 21.069a2.894 2.894 0 1 1 0-5.793 2.894 2.894 0 0 1 0 5.794v-.001ZM5.832 21.069a2.894 2.894 0 1 1 0-5.792 2.894 2.894 0 0 1 0 5.793v-.001Z" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const ShippingInfo: React.FC = () => {
  const [location, setLocation] = useState('Carregando informações...');

  useEffect(() => {
    fetch('https://wtfismyip.com/json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const locationString = data?.YourFuckingLocation || 'sua região';
        const region = locationString.replace(", Brazil", "");
        setLocation(`para <b>${region} e Região</b>`);
      })
      .catch(error => {
        console.error('Error fetching location:', error);
        setLocation('para sua região');
      });
  }, []);

  return (
    <div className="fretefundo">
      <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{
          background: 'var(--product-truck-background)',
          margin: '0px 8px',
          width: '38px',
          borderRadius: '6px',
          padding: '1px 6px'
      }}>
          <path d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="var(--product-truck-color)" className="fill-ffffff" style={{ fill: 'var(--product-truck-background)' }}></path>
          <path d="M13 16V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1m8-1a1 1 0 0 1-1 1H9m4-1V8a1 1 0 0 1 1-1h2.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V16a1 1 0 0 1-1 1h-1m-6-1a1 1 0 0 0 1 1h1M5 17a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m6 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0" stroke="var(--product-truck-color)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="stroke-374151"></path>
      </svg>
      <div className="ttl-frete">
          <p>Frete Grátis: Envio de 2 à 5 dias</p>
          <span className="ip-frete" dangerouslySetInnerHTML={{ __html: location }}></span>
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const [activeImage, setActiveImage] = useState(productImages[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call before redirecting
    setTimeout(() => {
        window.location.href = 'https://pay.sunize.com.br/KgJsmOCY';
    }, 1500);
  };


  return (
    <>
      {isLoading && (
        <div id="zedy-loading-screen">
            <img src="//deluxpromocao.myshopify.com/cdn/shop/files/Captura_de_tela_2025-08-27_200427.png?v=1756336489&width=173" alt="Logo" className="zedy-logo" />
            <div className="zedy-spinner"></div>
            <p>Estamos preparando o seu pedido...</p>
        </div>
      )}

      <header className="header">
        <div className="container">
          <a href="/" className="header__logo">
            <img src="//deluxpromocao.myshopify.com/cdn/shop/files/Captura_de_tela_2025-08-27_200427.png?v=1756336489&width=173" alt="Loja Logo" width="173" height="54" />
          </a>
        </div>
      </header>

      <main role="main" id="main">
        <section className="section">
          <div className="container product-container">
            <div className="product-gallery">
              <div className="product-gallery__main-image">
                <img src={activeImage.src} alt={activeImage.alt} />
              </div>
              <div className="product-gallery__thumbnail-list">
                {productImages.map(image => (
                  <button
                    key={image.id}
                    className={`product-gallery__thumbnail ${activeImage.id === image.id ? 'is-active' : ''}`}
                    onClick={() => setActiveImage(image)}
                    aria-label={`Ver imagem ${image.id}`}
                  >
                    <img src={image.src.replace('width=1024', 'width=128')} alt={image.alt} />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-info">
              <h1 className="product-info__title">Kit 42 Potes Herméticos Empilháveis Quadrado Resistente</h1>
              
              <div className="product-info__price">
                <span className="price-list__sale-price">R$ 77,94</span>
                <span className="price-list__compare-at-price">R$ 129,90</span>
                <span className="badge">40% OFF</span>
              </div>

              <div className="product-info__buy-buttons">
                <a href="https://pay.sunize.com.br/KgJsmOCY"
                   onClick={handleBuyNow} 
                   className="button button--primary">
                  COMPRAR AGORA
                </a>
              </div>
              
              <ShippingInfo />

              <div className="payment-methods">
                <p>Formas de Pagamento</p>
                <div className="payment-icons">
                   <PixIcon />
                </div>
              </div>

               <div className="product-info__offer-list">
                    <div className="offer">
                        <div className="offer__title">
                           <TruckIcon />
                           <span className="bold text-sm">Devoluções Gratuitas</span>
                        </div>
                        <p className="prose text-sm">Estorno de 100% do seu dinheiro 7 dias após o recebimento da mercadoria.</p>
                    </div>
                    <div className="offer">
                        <span className="bold text-sm">Pagamentos e informações estão seguros</span>
                        <p className="prose text-sm">Site oficial com todos os direitos reservados</p>
                    </div>
                </div>

              <div className="product-info__description prose">
                <h3>Conjunto Completo com 42 Unidades</h3>
                <p>Este kit inclui 42 potes organizadores de alimentos em 7 tamanhos diferentes para atender a todas as suas necessidades de armazenamento.</p>
                <ul>
                  <li>6 - unidades extra grandes (2,8L)</li>
                  <li>6 - unidades grandes (2,0L)</li>
                  <li>6 - unidades médias (1,4L)</li>
                  <li>6 - unidades pequenas (0,8L)</li>
                  <li>6 - unidades extras pequenas (0,52L)</li>
                  <li>6 - unidades mínimas (140ml)</li>
                  <li>6 - unidades micro (60ml)</li>
                </ul>
                <h3>Material Seguro e Durável</h3>
                <p>Os recipientes são fabricados com plástico de alta qualidade, isentos de BPA, garantindo que não haja cheiro de plástico ou matéria tóxica.</p>
                <h3>Vedação Hermética para Conservação</h3>
                <p>Cada tampa possui quatro travas laterais e um anel de vedação de silicone preto, garantindo um fechamento firme.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--newsletter">
            <div className="container newsletter-content">
                <h2 className="h2">Receba ofertas e descontos exclusivos</h2>
                <p>Concordo em receber ofertas e descontos da loja por e-mail conforme a Política de privacidade.</p>
                <form className="form" action="#">
                    <div className="fieldset-with-submit">
                        <div className="form-control">
                            <input id="newsletter-email" className="input" type="email" placeholder="Seu e-mail" required />
                        </div>
                        <button type="submit" className="button button--secondary">
                           Inscrever-se
                        </button>
                    </div>
                </form>
            </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__block-list">
                    <div className="footer__block">
                        <p className="bold">Central de Atendimento</p>
                        <ul>
                            <li>Atendimento: seg. à sáb. 10 às 19h</li>
                            <li>Contato: (11) 3028-5399</li>
                            <li>Email: atendimento@havan.com.br</li>
                        </ul>
                    </div>
                     <div className="footer__block">
                        <p className="bold">Institucional</p>
                         <ul>
                            <li>Nossa história</li>
                            <li>Trabalhe conosco</li>
                            <li>Projetos e patrocínios</li>
                        </ul>
                    </div>
                </div>
            </div>
             <div className="footer__aside">
                <p className="footer__copyright">1986 - 2025 HAVAN S.A. CNPJ: 79.379.491.0008-50 | Rod. Antônio Heil, 250 - Centro II, Brusque - SC, 88353-100</p>
            </div>
        </div>
      </footer>
    </>
  );
};

export default App;