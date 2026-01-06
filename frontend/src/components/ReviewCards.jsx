import './Reviewcards.css';
const ReviewCards = () => {
  return (
    <section data-sticker="wrap" className="walloflove_wrap">
      <div className="walloflove_contain u-container">
        {/* Title */}
        <div className="walloflove_title">
          <h2 className="u-heading-style-display1 u-weight-bold">
            WALL <br /> OF <br /> LOVE
          </h2>
        </div>

        {/* Draggable Cards */}
        <div data-cursor-marquee-text="Drag Me" className="walloflove_cards">
          <div className="draggable-list-wrap w-dyn-list">
            <div role="list" className="draggable-list w-dyn-items">

              {/* Card 1 */}
              <div role="listitem" className="draggable-item w-dyn-item">
                <div
                  data-sticker="item"
                  className="draggable-card"
                  style={{
                    transform:
                      "translate(-50%, -50%) translate3d(-39px, -91px, 0) rotate(-6deg)",
                    cursor: "grab",
                    zIndex: 1004,
                  }}
                >
                  <div className="postcard_wrap u-bg-shadow">
                    <div className="postcard_contain">
                      <div className="postcard_img">
                        <img
                          className="g_visual_img u-cover-absolute"
                          src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b37c680671f554521b4ce_Macaron%20making%20workshop%20with%20paris%20by%20emily%20glasses%20and%20champagne.avif"
                          alt="Macaron making workshop"
                          loading="lazy"
                        />
                      </div>

                      <div className="postcard_content">
                        <div className="postcard_avatar_img">
                          <img
                            className="g_visual_img u-cover-absolute"
                            src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b368ac5a2dfc9d0ad72af_Macaron%20making%20decorating%20set%20up.avif"
                            alt="Avatar"
                            loading="lazy"
                          />
                        </div>

                        <div>
                          <div className="u-text-style-small u-mb-1">
                            Stacey, United Kingdom
                          </div>
                          <div className="u-text-style-small">
                            Macaron-Making Workshop
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div role="listitem" className="draggable-item w-dyn-item">
                <div
                  data-sticker="item"
                  className="draggable-card"
                  style={{
                    transform:
                      "translate(-50%, -50%) translate3d(-453px, 149px, 0) rotate(0.6deg)",
                    cursor: "grab",
                    zIndex: 1003,
                  }}
                >
                  <div className="postcard_wrap u-bg-shadow">
                    <div className="postcard_contain">
                      <div className="postcard_img">
                        <img
                          className="g_visual_img u-cover-absolute"
                          src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b72fbb66c0333480d311c_Seine%20Cruise%20Macarons%20Polaroid.avif"
                          alt="Seine Cruise"
                          loading="lazy"
                        />
                      </div>

                      <div className="postcard_content">
                        <div className="postcard_avatar_img">
                          <img
                            className="g_visual_img u-cover-absolute"
                            src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b724c40b28e1c65e3a118_Seine%20Cruise%20macarons%20and%20champagne.avif"
                            alt="Avatar"
                            loading="lazy"
                          />
                        </div>

                        <div>
                          <div className="u-text-style-small u-mb-1">
                            Arina, France
                          </div>
                          <div className="u-text-style-small">
                            Champagne Seine Cruise
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 👉 Remaining cards should follow the SAME pattern */}
            </div>
          </div>
        </div>

        {/* Shuffle Button */}
        <div className="stacked-cards__controls">
          <button
            data-stacked-cards-control="next"
            className="shuffle-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="shuffle-btn__icon-svg"
            >
              <path d="M1 4V10H7" stroke="currentColor" strokeWidth="2" />
              <path d="M23 20V14H17" stroke="currentColor" strokeWidth="2" />
              <path
                d="M20.5 9C19.6 6.7 18 5 15.8 3.9
                   C13.6 2.8 11.2 2.7 9 3.5
                   C7.7 4 6.6 4.7 5.6 5.6L1 10
                   M23 14L18.4 18.4
                   C16.7 20.1 14.4 21 12 21
                   C9.6 21 7.3 20.1 5.6 18.4"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="shuffle-btn__span">Shuffle</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;
