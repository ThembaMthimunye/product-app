import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white-800 text-black p-8 ">
            <div className="container mx-auto px-5">
                <div className="flex flex-col md:flex-row md:justify-between">

                    <div className="mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold mb-2 text-orange-500">Nike </h1>
                        <p className="text-gray-400">
                            ike uses various cushioning technologies, such as Zoom Air, React foam, and Air Max, to provide a comfortable and responsive ride. These technologies help absorb impact and provide energy return.
                        </p>
                    </div>


                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-lg font-semibold mb-2 text-orange-500">Links</h2>
                            <ul className="space-y-2 ">
                                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                                <li><a href="#" className="hover:text-gray-400">About</a></li>
                                <li><a href="#" className="hover:text-gray-400">Services</a></li>
                                <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </div>


                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-orange-500">Follow Us</h2>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
                                <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
                                <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
                                <a href="#" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="border-t border-gray-700 pt-4 text-center">
                    <p className="text-gray-400 text-sm mt-[1rem]">
                        Nike Website. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
