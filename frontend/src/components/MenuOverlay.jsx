import CTAButton from "./CTAButton";
const MenuOverlay = ({ onClose }) => {
    const menuItems = [
        { label: "Our Journey", icon: "/menu-icon-journey.svg", color: "journey" },
        { label: "Our Work", icon: "/menu-icon-work.svg", color: "work" },
        { label: "Services", icon: "/menu-icon-services.svg", color: "services" },
    ];

    return (
        <div className="menu-overlay">
            {/* Top Bar */}
            <div className="menu-top">
                <button className="close-btn" onClick={onClose}>
                    ✕
                </button>

                <h3 className="menu-brand-title">Bloom Branding</h3>
                <CTAButton prompt={"Get in Touch"} />
            </div>

            {/* Main Content */}
            <div className="menu-content">
                <div className="menu-links">
                    <h3 className="discover">Discover More</h3>
                    {/* <h3>Discover More</h3> */}
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`menu-link ${index === 0 ? "active" : ""} ${item.color}`}
                        >
                            <img src={item.icon} className="menu-icon" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>

                <div className="menu-text type-container">
                    <p className="type-line">Every Brand has a</p>

                    <h2 className="type-word gradient-story">
                        STORY
                    </h2>

                    <p className="type-line delay">We make yours</p>

                    <h2 className="type-word gradient-bloom">
                        BLOOM
                    </h2>
                </div>

            </div>
        </div>
    );
};

export default MenuOverlay;
