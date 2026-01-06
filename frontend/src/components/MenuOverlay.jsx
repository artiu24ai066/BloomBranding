import CTAButton from "./CTAButton";
const MenuOverlay = ({ onClose }) => {
    return (
        <div className="menu-overlay">
            {/* Top Bar */}
            <div className="menu-top">
                <button className="close-btn" onClick={onClose}>
                    ✕
                </button>

                <h3 className="brand">Bloom Branding</h3>
                <CTAButton prompt={"Get in Touch"} />
            </div>

            {/* Main Content */}
            <div className="menu-content">
                <div className="menu-links">
                    <button className="menu-link active">Our Journey</button>
                    <button className="menu-link">Our Work</button>
                    <button className="menu-link">Services</button>
                </div>

                <div className="menu-text">
                    <h2>
                        Every Brand has a <span>STORY</span>
                    </h2>
                    <h2>
                        We make yours <span className="bloom">BLOOM</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default MenuOverlay;
