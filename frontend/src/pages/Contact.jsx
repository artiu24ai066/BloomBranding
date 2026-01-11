import "./Contact.css";
import Footer from "../components/Footer";
function Contact() {
	return (
		<section className="contact-section">
			<div className="contact-container">
				<div className="top">
					<h2>✨ Let’s Collaborate ✨</h2>
					<p className="subtitle">Start your brand journey with us!</p>
					<div className="contact-info">
						<p>
							<strong>Our Instagram handle:</strong> <a href="#">@bloom.branding_</a>
						</p>
						<p>
							<strong>Visit us:</strong> 📍 Location
						</p>
						<p>
							<strong>Drop us a Mail:</strong> hello.bloombranding@gmail.com
						</p>
					</div>
				</div>

				<div className="flex">
					<div className="contact-left">
						<h3 className="contact-quote">Let’s Begin <br /> Something Beautiful</h3>
						<p className="small-text">
							READY TO WATCH YOUR BRAND BLOOM?
							<br />
							We create thoughtful spaces where ideas grow with clarity and purpose.
							Share a little about your vision, and we’ll take it from there.
						</p>
					</div>

					<div className="contact-right">
						<form className="contact-form">
							<input type="text" placeholder="First Name*" />
							<input type="text" placeholder="Last Name*" />
							<input type="email" placeholder="Email*" />

							<p className="services-title">Services</p>
							<div className="services">
								<label><input type="checkbox" /> Branding</label>
								<label><input type="checkbox" /> Social Media Marketing</label>
								<label><input type="checkbox" /> Production</label>
								<label><input type="checkbox" /> Influencer Marketing</label>
								<label><input type="checkbox" /> Creative Design</label>
							</div>

							<textarea placeholder="Tell us about your project"></textarea>
						</form>
						</div>

        <div className="contact-left">

          <h3 className="contact-quote">
            Let’s Begin <br /> Something Beautiful
          </h3>

          <p className="small-text">
            READY TO WATCH YOUR BRAND BLOOM?
            <br />
            We create thoughtful spaces where ideas grow with clarity and purpose.
            Share a little about your vision, and we’ll take it from there.
          </p>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="First Name*" />
            <input type="text" placeholder="Last Name*" />
            <input type="email" placeholder="Email*" />

            <p className="services-title">Services</p>
            <div className="services">
              <label><input type="checkbox" /> Branding</label>
              <label><input type="checkbox" /> Social Media Marketing</label>
              <label><input type="checkbox" /> Production</label>
              <label><input type="checkbox" /> Influencer Marketing</label>
              <label><input type="checkbox" /> Creative Design</label>
            </div>

            <textarea placeholder="Tell us about your project"></textarea>

            <button type="submit">Let’s Begin</button>
          </form>
        </div>
        </div>

      </div>
      <div className="foot">

      <Footer/>
      </div>
    </section>
  );
}

export default Contact;
