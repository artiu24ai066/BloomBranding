import "../pages/Services.css";
import img1 from "../assets/sm1.png";
import img2 from "../assets/sm5.png";
import img3 from "../assets/sm3.png";
import img4 from "../assets/sm4.png";

export default function SocialMedia() {
    return (
        <>

            <section className="services-next social-media">

                {/* LEFT IMAGE GROUP */}
                <div className="services-images social-images">

                    <div className="img-column">
                        <img src={img1} alt="Social media visual" />
                        <img src={img2} alt="Social media visual" />
                    </div>

                    <div className="img-column shift-down">
                        <img src={img3} alt="Social media visual" />
                        <img src={img4} alt="Social media visual" />
                    </div>

                </div>

                {/* RIGHT TEXT */}
                <div className="services-text social-text">
                    <h2>Social Media Marketing</h2>

                    <p className="intro">
                        Your brand lives across different spaces — each defined by its own mood
                        and rhythm.
                    </p>

                    <p>
                        We design content that adapts effortlessly without losing its core
                        identity.
                    </p>

                    <p className="italic">
                        From <em>jewellery</em> to <em>cafés</em>, <em>fashion</em> to <em>home</em>,
                        your brand remains instantly recognisable.
                    </p>
                </div>

            </section>
        </>
    );
}