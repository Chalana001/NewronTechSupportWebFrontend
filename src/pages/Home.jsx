import { useState } from 'react'
import '../styles/home.css'

export default function Home() {
	const [menuActive, setMenuActive] = useState(false)

	const handleHamburgerClick = () => {
		setMenuActive(!menuActive)
	}

	const closeMenu = () => {
		setMenuActive(false)
	}

	return (
		<div>
			<nav className="navbar">
				<div className="nav-container">
					<div className="nav-logo">
						<i className="fas fa-microchip"></i>
						<span className="brand-text">Newron Tech Support</span>
					</div>
					<ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
						<li className="nav-item">
							<a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
						</li>
						<li className="nav-item">
							<a href="/products" className="nav-link" onClick={closeMenu}>Products</a>
						</li>
						<li className="nav-item">
							<a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
						</li>
						<li className="nav-item">
							<a href="/about" className="nav-link" onClick={closeMenu}>About</a>
						</li>
						<li className="nav-item">
							<a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
						</li>
					</ul>
					<div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
				</div>
			</nav>

			<main>
				<section id="home" className="hero">
					<div className="hero-particles" />
					<div className="hero-container container">
						<div className="hero-content">
							<h1 className="hero-title">Your One-Stop Tech Shop</h1>
							<p className="hero-subtitle">Premium computer parts, custom PC builds, mobile phones, and accessories. Quality guaranteed.</p>
							<div className="hero-buttons">
								<a href="/shop" className="btn btn-primary">Shop Now</a>
								<a href="#services" className="btn btn-secondary">Our Services</a>
							</div>
						</div>
						<div className="hero-image">
							<div className="hero-graphic">
								<i className="fas fa-desktop"></i>
								<i className="fas fa-mobile-alt"></i>
								<i className="fas fa-laptop"></i>
							</div>
						</div>
					</div>
				</section>

				<section className="features">
					<div className="container">
						<div className="features-grid">
							<div className="feature-card">
								<i className="fas fa-tools" />
								<h3>Expert PC Building</h3>
								<p>Custom PC builds tailored to your needs with premium components</p>
							</div>
							<div className="feature-card">
								<i className="fas fa-shield-alt" />
								<h3>Quality Guaranteed</h3>
								<p>All products come with warranty and expert support</p>
							</div>
							<div className="feature-card">
								<i className="fas fa-shipping-fast" />
								<h3>Fast Delivery</h3>
								<p>Quick shipping and local pickup available</p>
							</div>
							<div className="feature-card">
								<i className="fas fa-headset" />
								<h3>Expert Support</h3>
								<p>Technical support and consultation services</p>
							</div>
						</div>
					</div>
				</section>

				<section id="services" className="services">
					<div className="container">
						<h2 className="section-title">Our Services</h2>
						<div className="services-grid">
							<div className="service-card">
								<div className="service-icon">
									<i className="fas fa-cogs" />
								</div>
								<h3>Custom PC Building</h3>
								<p>We build custom PCs tailored to your specific needs - gaming, work, or general use. Expert assembly with cable management.</p>
								<ul>
									<li>Component selection consultation</li>
									<li>Professional assembly</li>
									<li>OS installation & setup</li>
									<li>Performance testing</li>
								</ul>
							</div>
							<div className="service-card">
								<div className="service-icon">
									<i className="fas fa-wrench" />
								</div>
								<h3>PC Repair & Maintenance</h3>
								<p>Fast and reliable computer repair services for all types of issues. Hardware and software troubleshooting.</p>
								<ul>
									<li>Hardware diagnostics</li>
									<li>Virus removal</li>
									<li>Data recovery</li>
									<li>System optimization</li>
								</ul>
							</div>
							<div className="service-card">
								<div className="service-icon">
									<i className="fas fa-mobile-alt" />
								</div>
								<h3>Mobile Services</h3>
								<p>Complete mobile phone services including sales, repairs, and accessories. Screen replacement and battery services.</p>
								<ul>
									<li>Screen replacement</li>
									<li>Battery replacement</li>
									<li>Data transfer</li>
									<li>Accessory installation</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="tech-support">
					<div className="curved-lines">
						<div className="curve curve-1" />
						<div className="curve curve-2" />
						<div className="curve curve-3" />
					</div>
					<div className="container">
						<div className="tech-support-content">
							<div className="tech-support-text">
								<h2 className="tech-support-title">Newron Tech Support</h2>
								<p className="tech-support-subtitle">Professional technical support and consultation services for all your computing needs</p>
								<div className="tech-support-features">
									<div className="tech-feature">
										<i className="fas fa-headset" />
										<div>
											<h3>24/7 Support</h3>
											<p>Round-the-clock technical assistance</p>
										</div>
									</div>
									<div className="tech-feature">
										<i className="fas fa-certificate" />
										<div>
											<h3>Certified Experts</h3>
											<p>Qualified technicians with years of experience</p>
										</div>
									</div>
									<div className="tech-feature">
										<i className="fas fa-rocket" />
										<div>
											<h3>Quick Solutions</h3>
											<p>Fast diagnosis and efficient problem resolution</p>
										</div>
									</div>
									<div className="tech-feature">
										<i className="fas fa-shield-alt" />
										<div>
											<h3>Warranty Coverage</h3>
											<p>All repairs backed by comprehensive warranty</p>
										</div>
									</div>
								</div>
								<div className="tech-support-actions">
									<a href="#contact" className="btn btn-primary">Get Support Now</a>
									<a href="tel:+94704589764" className="btn btn-outline">
										<i className="fas fa-phone" />
										Call
									</a>
								</div>
							</div>
							<div className="tech-support-visual">
								<div className="support-graphic">
									<div className="support-circle">
										<i className="fas fa-laptop-code" />
									</div>
									<div className="support-particles">
										<div className="particle" />
										<div className="particle" />
										<div className="particle" />
										<div className="particle" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="about-preview">
					<div className="container">
						<div className="about-content">
							<div className="about-text">
								<h2>About Newron Tech Support</h2>
								<p>Founded with a passion for technology, Newron Tech Support has been serving our community with premium computer parts, custom builds, and mobile solutions for over 5 years.</p>
								<p>Our team of certified technicians and tech enthusiasts are here to help you find the perfect solution for your computing needs.</p>
								<a href="/about" className="btn btn-primary">Learn More</a>
							</div>
							<div className="about-image">
								<div className="about-graphic">
									<i className="fas fa-store" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="contact" className="contact">
					<div className="container">
						<h2 className="section-title">Get In Touch</h2>
						<div className="contact-content">
							<div className="contact-info">
								<div className="contact-item">
									<i className="fas fa-map-marker-alt" />
									<div>
										<h3>Address</h3>
										<p>1D, Industrial zone, Girandurukotte</p>
									</div>
								</div>
								<div className="contact-item">
									<i className="fas fa-phone" />
									<div>
										<h3>Phone</h3>
										<p>+94704589764</p>
									</div>
								</div>
								<div className="contact-item">
									<i className="fas fa-envelope" />
									<div>
										<h3>Email</h3>
										<p>ckalhara7277@gmail.com</p>
									</div>
								</div>
								<div className="contact-item">
									<i className="fas fa-clock" />
									<div>
										<h3>Hours</h3>
										<p>Monday - Sunday: 8AM-7PM</p>
									</div>
								</div>
							</div>
							<div className="contact-form">
								<form>
									<div className="form-group">
										<input type="text" placeholder="Your Name" required />
									</div>
									<div className="form-group">
										<input type="email" placeholder="Your Email" required />
									</div>
									<div className="form-group">
										<input type="tel" placeholder="Your Phone" />
									</div>
									<div className="form-group">
										<select>
											<option value="">Select Service</option>
											<option value="pc-build">PC Building</option>
											<option value="repair">PC Repair</option>
											<option value="mobile">Mobile Services</option>
											<option value="consultation">Consultation</option>
										</select>
									</div>
									<div className="form-group">
										<textarea placeholder="Your Message" rows="5" required></textarea>
									</div>
									<button type="submit" className="btn btn-primary">Send Message</button>
								</form>
							</div>
						</div>
					</div>
				</section>

				<footer className="footer">
					<div className="container">
						<div className="footer-content">
							<div className="footer-section">
								<div className="footer-logo">
									<i className="fas fa-microchip" />
									<span className="brand-text">Newron Tech Support</span>
								</div>
								<p>Your trusted partner for all things tech. Quality products, expert service, competitive prices.</p>
								<div className="social-links">
									<a href="#"><i className="fab fa-facebook" /></a>
									<a href="#"><i className="fab fa-twitter" /></a>
									<a href="#"><i className="fab fa-instagram" /></a>
									<a href="#"><i className="fab fa-linkedin" /></a>
								</div>
							</div>
							<div className="footer-section">
								<h3>Quick Links</h3>
								<ul>
									<li><a href="#home">Home</a></li>
									<li><a href="/products">Products</a></li>
									<li><a href="#services">Services</a></li>
									<li><a href="/about">About</a></li>
									<li><a href="#contact">Contact</a></li>
								</ul>
							</div>
							<div className="footer-section">
								<h3>Products</h3>
								<ul>
									<li><a href="/products">Computer Parts</a></li>
									<li><a href="/products">PC Builds</a></li>
									<li><a href="/products">Mobile Phones</a></li>
									<li><a href="/products">Accessories</a></li>
									<li><a href="/products">Gaming Gear</a></li>
								</ul>
							</div>
							<div className="footer-section">
								<h3>Services</h3>
								<ul>
									<li><a href="#services">Custom PC Building</a></li>
									<li><a href="#services">PC Repair</a></li>
									<li><a href="#services">Mobile Repair</a></li>
									<li><a href="#services">Data Recovery</a></li>
									<li><a href="#services">Consultation</a></li>
								</ul>
							</div>
						</div>
						<div className="footer-bottom">
							<p>&copy; 2024 Newron Tech Support. All rights reserved.</p>
						</div>
					</div>
				</footer>
			</main>
		</div>
	)
}

