import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-b'>
        <div>
          <Link to={"/"} className="flex">
            <span className="text-2xl text-blue-500">VENDORA.in</span>
          </Link>
          <p className='max-w-80 mt-3'>Vendora is a modern all-products e-commerce platform connecting buyers and sellers in a seamless marketplace.</p>
          <div className='flex items-center gap-3 mt-6'>
            <a href="#"><Facebook className='w-5 h-5'/></a>
            <a href="#"><Instagram className='w-5 h-5'/></a>
            <a href="#"><Twitter className='w-5 h-5'/></a>
            <a href="#"><Mail className='w-5 h-5'/></a>
          </div>
        </div>

        <div className='flex flex-wrap justify-between w-1/2 gap-8'>
            <div>
                <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                <ul className='mt-3 flex flex-col gap-1.5'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div>
                <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                <ul className='mt-3 flex flex-col gap-1.5'>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Terms of Services</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Insurance</a></li>
                </ul>
            </div>

            <div>
                <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                <ul className='mt-3 flex flex-col gap-1.5'>
                    <li><a href="#">Vendora-zone</a></li>
                    <li><a href="#">Uttarakhand, 248007</a></li>
                    <li><a href="#">+91 1234567893</a></li>
                    <li><a href="#">vendora.in@gmail.com</a></li>
                </ul>
            </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© 2025 Vendora | Empowering the Next Generation of Marketplaces.</p>
        <ul className='flex items-center gap-4'>
            <li><a href="#">Privacy</a></li>
            <li>|</li>
            <li><a href="#">Terms</a></li>
            <li>|</li>
            <li><a href="#">Cookies</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer
