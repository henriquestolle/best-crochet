import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import logo_best_crochet from "../Components/Assets/logo-best-crochet.png";
import "./CSS/About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <p className="pagination">
        Home {`>`} Loja {`>`} Sobre Nós
      </p>
      <div className="conteudo">
        <p className="conteudo-titulo">Sobre Nós</p>
        <div className="texto-sobre">
          <div className="titulo">
            <p>Best Crochet</p>
            <hr />
            <div className="paragrafo">
              <div>
                <p className="topico">Nossa História</p>
                <p>
                  Best Crochet foi criada em 2021 com o objetivo de oferecer
                  produtos artesanais de alta qualidade. Atendemos clientes de
                  Joinville (SC) e região, trazendo o melhor do artesanato
                  diretamente para a sua casa. Desde o início, nossa paixão pelo
                  crochê e pelo trabalho manual nos guiou a criar peças únicas e
                  especiais.
                </p>
              </div>
              <div>
                <p className="topico">Nossa Missão</p>
                <p>
                  Nossa missão é proporcionar aos nossos clientes produtos
                  artesanais que combinam criatividade, cuidado e carinho.
                  Acreditamos que cada peça deve contar uma história e trazer um
                  toque especial para o dia a dia de quem a utiliza.
                </p>
              </div>
              <div className="lista-valores">
                <p className="topico">Nossos Valores</p>
                <ol>
                  <li>
                    <strong>Criatividade:</strong> Valorizamos a originalidade
                    em cada produto que criamos.
                  </li>
                  <li>
                    <strong>Qualidade:</strong> Cada peça é feita com materiais
                    selecionados e atenção aos detalhes.
                  </li>
                  <li>
                    <strong>Comunidade:</strong> Orgulhamo-nos de atender e
                    apoiar a comunidade de Joinville e região
                  </li>
                  <li>
                    <strong>Cuidado:</strong> Trabalhamos com dedicação para
                    garantir a satisfação dos nossos clientes.
                  </li>
                  <li>
                    <strong>Carinho:</strong> Colocamos amor em cada ponto e em
                    cada detalhe das nossas criações.
                  </li>
                </ol>
              </div>
            </div>
            <hr />
            <img src={logo_best_crochet} alt="Logo Best Crochet" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
