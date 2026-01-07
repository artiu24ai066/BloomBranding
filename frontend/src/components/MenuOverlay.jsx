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
                    {menuItems.map((item, index) => (
                        <button 
                            key={index}
                            className={`menu-link ${index === 0 ? "active" : ""} ${item.color}`}
                        >
                            <img src={item.icon} alt={item.label} className="menu-icon" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>

                <div className="menu-text">
                    <p className="menu-subtitle">Every Brand has a</p>
                    <h2 className="menu-highlight story">STORY</h2>
                    <p className="menu-subtitle">We make yours</p>
                    <h2 className="menu-highlight bloom">BLOOM</h2>
                </div>
            </div>
        </div>
    );
};

export default MenuOverlay;
