import "../pages/Services.css";
import img1 from "../assets/cd1.png";
import img2 from "../assets/cd2.png";
import img3 from "../assets/cd3.png";
export default function Creative() {
    return (
        <>
            <section className="services-next creative-section">

                {/* LEFT TEXT */}
                <div className="services-text creative-text">
                    <h2>Creative Design</h2>

                    <p className="intro">
                        Creativity is where ideas begin to take form.
                    </p>

                    <p>
                        We explore visual languages through design that feels
                        expressive yet intentional — allowing ideas to evolve
                        into something memorable and refined.
                    </p>

                    <p>
                        Designed to feel, not just to be seen.
                    </p>
                </div>

                {/* RIGHT IMAGE GROUP */}
                <div className="services-images creative-images">
                    <div className="one">
                        <div className="img-column shift-up">
                            <img src={img1} alt="Creative design visual" />
                        </div>
                    </div>
                    <div className="two">

                        <div className="img-column shift-middle">
                            <img src={img2} alt="Creative design visual" />
                        </div>

                        <div className="img-column shift-down">
                            <img src={img3} alt="Creative design visual" />
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}