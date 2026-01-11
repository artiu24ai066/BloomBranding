import "./Services.css";

import Navbar from "../components/Navbar";
import Brand from "../components/Brand.jsx";
import Footer from "../components/Footer";
import ServicesCard from "../components/ServicesCards";
import SocialMedia from "../components/SocialMedia";
import Product from "../components/Product";
import Influencer from "../components/Influencer.jsx";
import Creative from "../components/Creative.jsx";

import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";
import img4 from "../assets/c4.png";

function Services() {
    return (
        <>
            <Navbar />
            <section className="services">
                <div className="services-inner">
                    {/* TEXT BLOCK */}
                    <div className="services-text">
                        <h2>
                            Thoughtfully built <br />
                            for brands that want to bloom
                        </h2>
                        <p>
                            Bloom Branding was created with a simple belief — that growth happens
                            best in the right environment. We help brands find clarity, shape
                            their identity, and grow with intention. Through thoughtful strategy,
                            refined visual language, and meaningful design, we create spaces
                            where ideas are nurtured and potential is allowed to unfold.
                        </p>

                        <span className="services-link">EXPLORE OUR STUDIO</span>
                    </div>

                    {/* IMAGES */}
                    <div className="services-images">
                        <img src={img1} alt="" className="img img-top" />
                        <img src={img2} alt="" className="img img-bottom-left" />
                        <img src={img3} alt="" className="img img-bottom-right" />
                        <img src={img4} alt="" className="img img-right-tall" />
                    </div>

                </div>
                <ServicesCard />
                <Brand />
                <SocialMedia />
                <Product />
                <Influencer />
                <Creative />
            </section>
            <div className="foot">
                <Footer />
            </div>
        </>
    );
}

export default Services;
