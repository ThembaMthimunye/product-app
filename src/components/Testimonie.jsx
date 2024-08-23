import img1 from '../assets/pic1.jpg';
import img2 from '../assets/pic2.jpg';
import img3 from '../assets/pic3.jpg';
import img4 from '../assets/pic6.jpg';
import img5 from '../assets/pic8.jpg';
// import img4 from '../assets/pic4.jpg';

const testimonies = [
  { id: 1, img: img1, text: "These sneakers are incredibly comfortable! I’ve been wearing them for weeks and my feet never get tired. The cushioning is fantastic and they look great with any outfit.", name: "Alex Johnson" },
  { id: 2, img: img2, text: "I’ve always struggled with finding the right fit for my sneakers, but these fit perfectly. The quality is top-notch, and I love the unique design. Definitely worth the investment.", name: "Jordan Lee" },
  { id: 3, img: img3, text: "These sneakers are perfect for both running and casual wear. The grip is excellent, and they’re surprisingly lightweight. I’ve recommended them to all my friends.", name: "Sam Patel" },
  { id: 4, img: img4, text: "I’m impressed with the durability of these sneakers. After months of daily use, they still look brand new. The style is versatile and they’ve quickly become my go-to pair.", name: "Taylor Morgan" },
  { id: 4, img: img5, text: "I’m impressed with the durability of these sneakers. After months of daily use, they still look brand new. The style is versatile and they’ve quickly become my go-to pair.", name: "Taylor Morgan" },
];

const Testimonies = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-center mt-[25px]">
        <h2 className="text-4xl font-bold text-gray-800">TESTIMONIES</h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-[55px]">
        {testimonies.slice(0, 4).map(({ id, img, text, name }) => (
          <div key={id} className="bg-white p-6 rounded-lg shadow-lg max-w-xs flex flex-col items-center">
            <img src={img} alt={`Testimony ${id}`} className="object-cover rounded-full w-30 h-40 mb-4" />
            <p className="text-gray-600 text-center mt-6">{text}</p>
            <p className="font-semibold text-gray-800 mt-8">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
