import React from 'react';
import pic1 from "../../assets/pic1.png"
import {Link} from "react-router-dom";
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
import {PiHandPeace} from "react-icons/pi";
const Footer = () => {
    return (
        <div style={{backgroundColor:"#ECF5FF"}}>
            <div className='mt-16 mx-16 font-montserrat'>
                <footer className="footer text-base-content p-10">
                    <aside>
                        <img src={pic1} className="w-14 h-20" alt="img"/>
                        <p className="font-montserrat text-lg">
                            Design amazing digital experiences <br/> that create more happy in the world.
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <Link to="/" className="text-lg hover:animate-blink">Overview</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Features</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Solutions</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Tutorials</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Pricing</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Releases</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <Link to="/" className="text-lg hover:animate-blink">About us</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Careers</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Press</Link>
                        <Link to="/" className="text-lg hover:animate-blink">News</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Media kit</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Contact</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <Link to="/" className="text-lg hover:animate-blink">Blog</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Newsletter</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Events</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Help centre</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Tutorials</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Support</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <Link to="/" className="text-lg hover:animate-blink">Twitter</Link>
                        <Link to="/" className="text-lg hover:animate-blink">LinkedIn</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Facebook</Link>
                        <Link to="/" className="text-lg hover:animate-blink">GitHub</Link>
                        <Link to="/" className="text-lg hover:animate-blink">AngelList</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Dribbble</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <Link to="/" className="text-lg hover:animate-blink">Terms</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Privacy</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Cookies</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Licenses</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Settings</Link>
                        <Link to="/" className="text-lg hover:animate-blink">Contact</Link>
                    </nav>
                </footer>
                <footer className="footer text-base-content border-base-300 border-t px-10 py-4 mt-5 mb-5">
                    <aside className="grid-flow-col items-center mt-7">
                        <p>
                            © 2024 Heritage- Nest . All rights reserved.
                        </p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end mt-7 mb-5">
                        <div
                            style={{ color: '#0059B1' }}
                            className="grid grid-flow-col gap-4 text-2xl"
                        >
                            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                                <FaLinkedin />
                            </a>
                            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                                <FaFacebook />
                            </a>
                            <a href="https://example.com" aria-label="Peace" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                                <PiHandPeace />
                            </a>
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;