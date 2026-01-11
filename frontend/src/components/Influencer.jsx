import "../pages/Services.css";
import img3 from "../assets/inf1.png";
import img2 from "../assets/inf2.png";
import img1 from "../assets/inf3.png";

export default function Influencer() {
    return (
        <>
            <section className="services-next influencer-section">

                {/* LEFT IMAGE GROUP */}
                <div className="services-images influencer-images">

                    <div className="img-column shift-down">
                        <img src={img1} alt="Influencer marketing" />
                    </div>

                    <div className="img-column shift-right">
                        <img src={img2} alt="Influencer marketing" />
                        <img src={img3} alt="Influencer marketing" />
                    </div>

                </div>

                {/* RIGHT TEXT */}
                <div className="services-text influencer-text">
                    <h2>Influencer Marketing</h2>

                    <p className="intro">
                        People connect with people — not promotions.
                    </p>

                    <p>
                        We curate collaborations that feel natural and aligned,
                        focusing on voices that resonate authentically with your
                        brand and its values.
                    </p>

                    <p>
                        Partnerships rooted in trust.
                    </p>
                </div>

            </section>
        </>
    );
}