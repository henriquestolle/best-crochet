import "./CSS/Contact.css";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <p className="pagination">
        Home {`>`} Loja {`>`} Contato
      </p>
      <div className="conteudo">
        <p className="conteudo-titulo">Contato</p>
        <div className="titulo">
          <p>Best Crochet</p>
          <hr />
          <div className="paragrafo">
            <div>
              <p className="topico">Contato</p>
              <p>
                Adoramos ouvir nossos clientes! Se você tiver alguma dúvida,
                comentário ou sugestão, entre em contato conosco através do
                e-mail: bestcrochetjoinville@gmail.com.
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/47988883180?text=Olá,%20tudo%20bem?"
          target="_blank"
        >
          <div className="whatsapp">WhatsApp</div>
        </a>
        <div />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
