const About = () => {
  return (
    <section className="bg-[#1b1d24] w-screen min-h-screen text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">ABOUT US</h1>
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto text-center mb-12">
          <p className="text-lg leading-relaxed">
            Stride Sneakers is a premier footwear brand dedicated to redefining style, comfort, and performance for sneaker enthusiasts around the world. Established in 2010, our company has quickly risen to prominence by delivering innovative designs that resonate with both casual wearers and dedicated athletes alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">MISSION</h2>
            <p className="leading-relaxed">
              At Stride Sneakers, our mission is to empower individuals to move with confidence and style. We believe that every step should be supported by exceptional comfort, cutting-edge technology, and bold design. Our commitment to quality and innovation drives us to create sneakers that elevate your everyday experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">VISION</h2>
            <p className="leading-relaxed">
              Our vision is to become the global leader in sneaker culture by continuously pushing the boundaries of design, comfort, and sustainability. We are dedicated to crafting footwear that not only meets the demands of the modern world but also sets new trends in the industry.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">WHY US?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">UNMATCHED COMFORT</h3>
                <p className="leading-relaxed">
                  Our sneakers are designed with advanced cushioning and support technologies to ensure all-day comfort, no matter where your journey takes you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">DURABILITY</h3>
                <p className="leading-relaxed">
                  Every pair of Stride Sneakers is built to last, using premium materials and rigorous testing to ensure they withstand the test of time.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">STYLISH DESIGNS</h3>
                <p className="leading-relaxed">
                  We stay ahead of the trends, offering sneakers that are not only functional but also make a fashion statement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">SUSTAINABILITY</h3>
                <p className="leading-relaxed">
                  We are committed to reducing our environmental impact by incorporating eco-friendly materials and practices into our manufacturing process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
