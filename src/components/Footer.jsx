import React from 'react';
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal text-base-content w-11/12 mx-auto py-10 sm:mr-2">
            <aside>
                <h1 className="text-3xl font-bold text-[#2E7D32] ">UrbanGarden</h1>
                <p className='sm:text-[16px]'>
                  A family of passionate gardeners.

                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav className='p-0 m-0'>
                <h6 className="footer-title">Follow us</h6>
                <div className='flex gap-2'>
                    <SocialIcon url="https://www.facebook.com/" style={{ height: 30, width: 30 }}/>
                    <SocialIcon url="https://www.linkedin.com/" style={{ height: 30, width: 30 }}/>
                    <SocialIcon url="https://twitter.com/" style={{ height: 30, width: 30 }}/>
                    <SocialIcon url="https://github.com/" style={{ height: 30, width: 30 }}/>
                </div>
            </nav>
        </footer> 
    );
};

export default Footer;