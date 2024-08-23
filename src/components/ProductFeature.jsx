import product from '..//image/product.png';
import { SiNike } from 'react-icons/si';
// hackathon Project\src\image\product.png

const ProductFeature = () => {
    return (
        <div className="p-5   bg-[#e7ecf1] bg-opacity-70" >
            <div className="text-center p-4 ">
                <div className=''>
                    <SiNike className=" color-black-600 text-[20rem] font-bold text-black ml-[43rem] w-full max-w-sm rounded-lg shadow-lg bg-[white]" />
                </div>

                <h3 className=" md:text-lg lg:text-xl mx-auto mt-[7rem] max-w-4xl font-bold font-sans text-black leading-relaxed">
                    Nike uses various cushioning technologies, such as Zoom Air, React foam, and Air Max,
                    to provide a comfortable and responsive ride. These technologies help absorb impact and provide energy return.
                </h3>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[7rem] pr-[20rem] pl-[18rem]">
                <div className="  text-center">
                    <div className="flex items-center mb-4">
                        <SiNike className="text-6xl font-bold text-black mb-2" />
                        <p>Cushioning: Nike uses various cushioning technologies.</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <SiNike className="text-6xl font-bold text-black mb-2" />
                        <p>Support and Stability: Different models offer varying  .</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <SiNike className="text-6xl font-bold text-black mb-2" />
                        <p>Design and Aesthetics: Nike is known for its stylishn  </p>
                    </div>


                </div>

                <div className="flex justify-center items-center">
                    <img className="w-full max-w-sm rounded-lg shadow-lg bg-[white]" src={product} alt="Nike Product" />
                </div>

                <div className="  text-center">
                    <div className="flex items-center mb-4">
                        <SiNike className="text-6xl font-bold text-black mb-2" />
                        <p>Cushioning: Nike uses various cushioning technologies.</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <SiNike className="text-6xl font-bold text-black mb-2" />
                        <p>Support and Stability: Different models offer varying  .</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <SiNike className="text-6xl font-bold text-black mb-2" />
                        <p>Design and Aesthetics: Nike is known for its stylish </p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ProductFeature;
