import "../pages/Services.css";
import img3 from "../assets/prod1.png";
import img2 from "../assets/prod2.png";
import img1 from "../assets/prod3.png";

function Product() {
    return (
        <>
            <section className="services-next production-section">

                {/* LEFT TEXT */}
                <div className="services-text production-text">
                    <h2>Production</h2>

                    <p className="intro">
                        Stories are felt most when they’re seen.
                    </p>

                    <p>
                        From concept to execution, we bring ideas to life through thoughtful
                        visuals — capturing emotion, movement, and meaning in every frame.
                    </p>
                </div>

                {/* RIGHT IMAGE GROUP */}
                <div className="services-images production-images">

                    <div className="img-column shift-up">
                        <img src={img1} alt="Production visual" />
                    </div>

                    <div className="img-column">
                        <img src={img2} alt="Production visual" />
                        <img src={img3} alt="Production visual" />
                    </div>

                </div>

            </section>
        </>
    );
}

export default Product;