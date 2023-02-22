import React, { useState } from "react";

const SlideShow = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "https://www.1mg.com/otc/accu-chek-instant-s-blood-glucometer-with-10-test-strips-free-otc390357",
    "https://onemg.gumlet.io/2e0ac6fd-4189-4d76-8c43-9de444678702_1663822449.jpeg?w=1269&h=250&format=auto",
    "https://onemg.gumlet.io/a_ignore,w_1269,h_250,c_fit,q_auto,f_auto/912f861c-6250-47b6-b643-92e3b5e1fce0.png",
    "https://onemg.gumlet.io/a_ignore,w_1269,h_250,c_fit,q_auto,f_auto/290b5970-99ed-4022-b29e-095ad9b40199.png",
    "https://onemg.gumlet.io/a_ignore,w_1269,h_250,c_fit,q_auto,f_auto/49a3b635-a507-45a4-a54b-0b791e19e536.png",
  ];

  const nextImage = () => {
    let newIndex = imageIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    setImageIndex(newIndex);
  };

  setInterval(nextImage, 3000);

  return (
    <div className="slideshow">
      <img src={images[imageIndex]} alt="nah" />;
    </div>
  );
};

export default SlideShow;
