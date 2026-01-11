import "../pages/Services.css";
import img2 from "../assets/brand1.png";
import img1 from "../assets/brand2.png";
import img3 from "../assets/brand3.png";
function Brand() {
    return (
        <>
            <section className="services-next">
                {/* LEFT TEXT */}
                <div className="services-text">
                    <h2>Branding</h2>

                    <p className="intro">
                        Every brand begins as a thought – a quiet idea waiting for the right
                        environment to grow.
                    </p>

                    <p>
                        At Bloom Branding, we nurture brands by understanding their story,
                        values, and vision, shaping identities that feel intentional,
                        meaningful, and true.
                    </p>
                </div>

                {/* RIGHT IMAGES */}
                <div className="services-images">
                    <div className="img-main">
                        <img src={img1} alt="Brand visual" />
                    </div>

                    <div className="img-stack">
                        <img src={img2} alt="Brand portrait" />
                        <img src={img3} alt="Brand portrait" />
                    </div>
                </div>

            </section>
        </>
    );
}

export default Brand;