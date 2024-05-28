import "./CSS/NotFound.css";
import Footer from "../Components/Footer/Footer";
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="conteudos">
        <div>
          <h1>Erro 404.</h1>
          <h2>Página Não Encontrada...</h2>
        </div>
        <div>
          <div class="gearbox">
            <div class="overlay"></div>
            <div class="gear one">
              <div class="gear-inner">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
            </div>
            <div class="gear two">
              <div class="gear-inner">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
            </div>
            <div class="gear three">
              <div class="gear-inner">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
            </div>
            <div class="gear four large">
              <div class="gear-inner">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
