import React from "react";
import "./Footer.css";
import logo_best_crochet from "../Assets/logo-best-crochet.png";
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024. Todos os direitos reservados - Best Crochet.</p>
      <div className="footer-section">
        <div className="company-info">
          <img src={logo_best_crochet} alt="Loja de Crochê" />
          <p>A EMPRESA</p>
          <p>
            <a href="https://lojadocroche.com.br">lojadocroche.com.br</a>
          </p>
          <p>
            <a href="mailto:contato@lojadocroche.com.br">
              contato@lojadocroche.com.br
            </a>
          </p>
          <p>Atendimento: 10:30 às 18:00 horas</p>
          <p>
            <a href="https://wa.me/5511999999999">Comprar Pelo WhatsApp</a>
          </p>
          <div className="social-media">
            <a href="#">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="youtube-icon.png" alt="YouTube" />
            </a>
          </div>
        </div>

        <div className="institutional">
          <p>INSTITUCIONAL</p>
          <ul>
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a href="#">Sua Melhor Loja de Crochê Online</a>
            </li>
            <li>
              <a href="#">Garantia de Satisfação</a>
            </li>
            <li>
              <a href="#">Entrega de Produtos de Crochê</a>
            </li>
            <li>
              <a href="#">Peças de Crochê Especiais</a>
            </li>
            <li>
              <a href="#">Crochê Online</a>
            </li>
            <li>
              <a href="#">Cidades Atendidas</a>
            </li>
            <li>
              <a href="#">História da Loja</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Sugestões de Produtos</a>
            </li>
          </ul>
        </div>

        <div className="services">
          <p>SERVIÇOS</p>
          <ul>
            <li>
              <a href="#">Fale Conosco</a>
            </li>
            <li>
              <a href="#">Minha Conta</a>
            </li>
            <li>
              <a href="#">Segurança e Privacidade</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Política de Cookies</a>
            </li>
          </ul>
        </div>

        <div className="security">
          <p>SEGURANÇA</p>
          <div className="security-logos">
            <img src="security-logo1.png" alt="Site Seguro" />
            <img src="security-logo2.png" alt="PayPal" />
            <img src="security-logo3.png" alt="Empresa Verificada" />
          </div>
        </div>

        <div className="payment-methods">
          <p>FORMAS DE PAGAMENTO</p>
          <div className="payment-logos">
            <img src="visa.png" alt="Visa" />
            <img src="mastercard.png" alt="MasterCard" />
            <img src="amex.png" alt="American Express" />
            <img src="boleto.png" alt="Boleto" />
            <img src="pix.png" alt="PIX" />
            <img src="itau.png" alt="Itaú" />
            <img src="bradesco.png" alt="Bradesco" />
            <img src="bb.png" alt="Banco do Brasil" />
            <img src="santander.png" alt="Santander" />
          </div>
        </div>
      </div>

      <div className="footer-links">
        <div className="product-links">
          <p>Peças de Crochê por Ocasião</p>
          <ul>
            <li>
              <a href="#">Aniversário</a>
            </li>
            <li>
              <a href="#">Casamento</a>
            </li>
            <li>
              <a href="#">Natal</a>
            </li>
            <li>
              <a href="#">Ano Novo</a>
            </li>
            <li>
              <a href="#">Páscoa</a>
            </li>
            <li>
              <a href="#">Dia das Mães</a>
            </li>
            <li>
              <a href="#">Dia dos Pais</a>
            </li>
            <li>
              <a href="#">Formatura</a>
            </li>
            <li>
              <a href="#">Chá de Bebê</a>
            </li>
          </ul>
        </div>

        <div className="product-types">
          <p>Peças de Crochê por Tipo</p>
          <ul>
            <li>
              <a href="#">Tapetes</a>
            </li>
            <li>
              <a href="#">Toalhas</a>
            </li>
            <li>
              <a href="#">Roupas</a>
            </li>
            <li>
              <a href="#">Acessórios</a>
            </li>
            <li>
              <a href="#">Decoração</a>
            </li>
            <li>
              <a href="#">Amigurumis</a>
            </li>
          </ul>
        </div>

        <div className="special-offers">
          <p>Ofertas e Datas Especiais</p>
          <ul>
            <li>
              <a href="#">Promoção de Aniversário</a>
            </li>
            <li>
              <a href="#">Promoção de Natal</a>
            </li>
            <li>
              <a href="#">Liquidação de Verão</a>
            </li>
            <li>
              <a href="#">Black Friday</a>
            </li>
          </ul>
        </div>

        <div className="sitemap">
          <p>
            <a href="#">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
