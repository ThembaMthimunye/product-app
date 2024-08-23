import { useState } from 'react';
import image from '../assets/nike.png';
import backgroundImage from '../assets/bg-nike.jpg'; // Import your background image

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-white opacity-60">
        <div className="flex items-center flex-1">
          <h1 className="text-black font-bold text-3xl pl-8">NIKE</h1>
        </div>
        <ul className="flex space-x-4 flex-1 justify-center relative">
          <li><a href="#home" className="text-black hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="text-black hover:text-gray-300">About</a></li>
          <li><a href="#products" className="text-black hover:text-gray-300">Products</a></li>
          <li 
            className="relative cursor-pointer"
            onClick={toggleDropdown}
          >
            <a href="#pages" className="text-black hover:text-gray-300">Pages</a>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg w-48">
                <li><a href="#page1" className="block px-4 py-2 hover:bg-gray-200">Home</a></li>
                <li><a href="#page2" className="block px-4 py-2 hover:bg-gray-200">About</a></li>
                <li><a href="#page3" className="block px-4 py-2 hover:bg-gray-200">Products</a></li>
                <li><a href="#page3" className="block px-4 py-2 hover:bg-gray-200">Contacts</a></li>
              </ul>
            )}
          </li>
          <li><a href="#contacts" className="text-black hover:text-gray-300">Contacts</a></li>
        </ul>
        <div className="flex-1 flex justify-end">
          <button className="bg-black text-white py-2 px-4 rounded">Shop Now</button>
        </div>
      </nav>
      
      <section 
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex items-center gap-4 w-full max-w-screen-xl px-8 bg-opacity-50 bg-gray-900 text-white">
          <div className="flex-1">
            <h1 className="text-3xl p-4">Unleashing Your Every Step</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, non placeat culpa
              quia inventore error, explicabo esse molestias itaque consequuntur, illo dolorum rerum. Obcaecati cupiditate dolores 
              aliquam vel quia. Voluptas ullam porro provident laboriosam voluptatibus totam sed 
              tempora repellendus sequi dolore nulla in ex repudiandae iure dignissimos impedit, architecto deserunt?</p>

              <div>
                 <button className="p-2 m-2 bg-orange-600 rounded-full">Get Started</button>
              </div>
          </div>
          <div className="flex-1">
            <img src={image} className="w-[350px]" alt="Nike"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
