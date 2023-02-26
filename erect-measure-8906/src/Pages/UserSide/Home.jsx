import Slider from "react-slick";
import FeaturedBrands from "../../Components/UserSide/FeaturedBrands";
import FullBody from "../../Components/UserSide/FullBody";
import ShopHealth from "../../Components/UserSide/ShopHealth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pathology from "../../Components/UserSide/Pathology";
import Homeopathic from "../../Components/UserSide/Homeopathic";
export default function Home() {
  const Shop_by_health_concerns = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
      name: "Diabetes Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
      name: "Cardiac Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png",
      name: "Stomach Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png",
      name: "Liver Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png",
      name: "Bone, Joint & Muscle Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png",
      name: "Kidney Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6f9a726a-4a98-42e6-a834-67381be5e330.png",
      name: "Derma Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4a788b46-97f3-460e-afb6-428368f779ee.png",
      name: "Respiratory Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/631e3dca-3d5b-49f8-832b-8341ec4784e7.png",
      name: "Eye Care",
    },
  ];
  const slider1 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Featured_Brands = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/83191a9e-18f2-4eef-9118-b3caa90e4590.png",
      name: "Veet",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/9fd34e54-f6a3-4f15-916c-07ca0e6a94a8.png",
      name: "Colgate",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/db5371fa-b446-4e04-b342-5044a9f1ad2f.png",
      name: "Zandu",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/21dcb5bd-a5d1-4ce6-932a-f5bb376a23fe.png",
      name: "Protiex",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/3630d9e4-0e2f-4be7-b1ba-0d0674ddd736.png",
      name: "mCaffeine",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/33efbce4-e766-48cf-a3f3-e710da832c7c.png",
      name: "Medtech",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/0ce2c32d-22ae-4a4f-8e1c-e615e13bee66.png",
      name: "contour",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/8b77c71c-4e7b-48c5-94d6-811748118d10.png",
      name: "Tejasya Ayurveda",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a307b427-631d-436b-bdfc-4a221836588d.png",
      name: "TATA 1mg Health Products",
    },
  ];

  const slider2 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Full_body_health_checkups = [
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Comprehensive Gold Full Body Checkup",
      desc: "Includes 78 Tests",
      rating: "4.9",
      price: 2099,
      O_price: 4198,
      discount: "50 % off",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Good Health Smart Package",
      desc: "Includes 3 Tests",
      rating: "4.9",
      price: 399,
      O_price: 800,
      discount: "50 % off",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Good Health Silver Package",
      desc: "Includes 58 Tests",
      rating: "4.9",
      price: 649,
      O_price: 1298,
      discount: "50 % off",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Comprehensive Silver Full Body Checkup",
      desc: "Includes 71 Tests",
      rating: "4.9",
      price: 1699,
      O_price: 3398,
      discount: "50 % off",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Women Wellness Premium Package",
      desc: "Includes 46 Tests",
      rating: "4.9",
      price: 1799,
      O_price: 3598,
      discount: "50 % off",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Comprehensive Platinum Full Body Checkup",
      desc: "Includes 91 Tests",
      rating: "4.9",
      price: 3499,
      O_price: 6998,
      discount: "50 % off",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Good Health Platinum Package",
      desc: "Includes 65 Tests",
      rating: "4.9",
      price: 1299,
      O_price: 2598,
      discount: "50 % off",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Senior Citizen Advanced Package",
      desc: "Includes 60 Tests",
      rating: "4.9",
      price: 1599,
      O_price: 3198,
      discount: "50 % off",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Men Health Premium Package",
      desc: "Includes 44 Tests",
      rating: "4.9",
      price: 1799,
      O_price: 3598,
      discount: "50 % off",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Fever Package Extensive",
      desc: "Includes 41 Tests",
      rating: "4.9",
      price: 999,
      O_price: 1199,
      discount: "16 % off",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Senior Citizen Comprehensive Package Male",
      desc: "Includes 75 Tests",
      rating: "4.9",
      price: 3600,
      O_price: 6900,
      discount: "50 % off",
    },

    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Senior Citizen Comprehensive Package Male",
      desc: "Includes 75 Tests",
      rating: "4.9",
      price: 3600,
      O_price: 6900,
      discount: "47 % off",
    },
    {
      img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      name: "Good Health Gold Package",
      desc: "Includes 63 Tests",
      rating: "4.9",
      price: 949,
      O_price: 1898,
      discount: "50 % off",
    },
  ];

  const slider3 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Pathol = [
    {
      name: "Complete Blood Count",
      desc: "CBP",
      detail: "Provided by 4 Labs",
      price: 299,
      O_price: 400,
      discount: "25% off",
    },
    {
      name: "Thyroid profile Total",
      desc: "Thyroid function Test,TFT",
      detail: "Provided by 3 Labs",
      price: 320,
      O_price: 600,
      discount: "46% off",
    },
    {
      name: "Lipid profile,Non Fasting",
      desc: "Provided by 1 Labs",
      price: 320,
      O_price: 500,
      discount: "35% off",
      detail: "",
    },
    {
      name: "Vitamin D (25-OH)",
      desc: "25-Hydroxy Cholecalciferol",
      detail: "Provided by 3 Labs",
      price: 370,
      O_price: 1749,
      discount: "78% off",
    },
    {
      name: "Lipid Profile",
      desc: "Provided by 3 Labs",
      price: 320,
      O_price: 500,
      discount: "35% off",
      detail: "",
    },
    {
      name: "Coronavirus Covid -19 Test",
      desc: "Sars-Cov-2 Test",
      detail: "Provided by 1 Labs",
      price: 500,
      O_price: "Nil",
      discount: "NA",
    },
    {
      name: "H1N1 H3N2 inf B Quality",
      desc: "Influenza",
      detail: "Provided by 1 Labs",
      price: 3500,
      O_price: 4500,
      discount: "22% off",
    },
    {
      name: "Diabetes Screening",
      desc: "Diabetes Panel,Basic(HbA1c)",
      detail: "Provided by 4 Labs",
      price: 450,
      O_price: "Nil",
      discount: "NA",
    },
    {
      name: "Liver Function Test",
      desc: "Hepatic Function Test",
      detail: "Provided by 3 Labs",
      price: 370,
      O_price: 675,
      discount: "45% off",
    },
    {
      name: "Frequent Pain Check Profile",
      desc: "Joint Pain",
      detail: "Provided by 1 Labs",
      price: 150,
      O_price: 500,
      discount: "69% off",
    },
  ];

  const homeo = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/h42pkvhvgszup5qsl5j8.jpg",
      name: "SBL Justicia Adhatoda Mother Tincture Q",
      desc: " Bottle of 30 ml Mother Tincture",
      detail: "Delivery by",
      price: 75,
      O_price: 105,
      discount: "% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/jqut5zvsa2tla3zspjyb.jpg",
      name: "SBL Stobal Cough Syrup",
      desc: "1 Bottle of 180 ml Syrup",
      detail: "Delivery by",
      price: 124,
      O_price: 165,
      discount: "25% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/jrj44xs0x6zct4hur8y2.jpg",
      name: "Dr. Reckeweg R9 Cough Drop",
      desc: "1 Bottle of 22 ml Drop",
      detail: "Delivery by",
      price:243 ,
      O_price:270 ,
      discount: "10% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/krgx88eqixqegmk8h9zy.jpg",
      name: "Dr Willmar Schwabe India Alpha-Coff Cough Syrup",
      desc: "1 Bottle of 100 ml Syrup",
      detail: "Delivery by",
      price:99 ,
      O_price:115 ,
      discount: "14% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/dkxxobch5ytazpho9ktr.jpg",
      name: "Dr. Reckeweg Bio-Combination 6 (BC 6) Tablet",
      desc: "1 Bottle of 20 gm Biocombination Tablet",
      detail: "Delivery by",
      price:171 ,
      O_price:185 ,
      discount: "7% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/jqok5v4o4cktyl96zgwy.jpg",
      name: "Dr. Reckeweg R8 Jut-U-Sin Cough Syrup",
      desc: "1 Bottle of 150 ml Syrup",
      detail: "Delivery by",
      price:403 ,
      O_price: 490,
      discount: "17% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/zvo5jraqmpp5okczrqas.png",
      name: "SBL Stobal Cough Syrup",
      desc: "1 Bottle of 115 ml Syrup",
      detail: "Delivery by",
      price: 78,
      O_price: 110,
      discount: "29% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/mwas834rwbrukt1akcdn.jpg",
      name: "SBL AF-Tabs Tablet",
      desc: "1 Bottle of 25 gm Tablet",
      detail: "Delivery by",
      price: 114,
      O_price: 155,
      discount: "26% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/yqawfpoknnz8wwmifzlz.jpg",
      name: "Medisynth Kofeez Cough Syrup",
      desc: "2 Bottles (minimum) of 120 ml Syrup",
      detail: "Delivery by",
      price:114 ,
      O_price: 120,
      discount: "5% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/olvcy3bqjgddi4bpmbkx.jpg",
      name: "Dr Willmar Schwabe India Tussikind Tablet",
      desc: "1 Bottle of 10 gm Tablet",
      detail: "Delivery by",
      price: 116,
      O_price: 120,
      discount: "3% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/f8vgpzszk59fq6comiem.jpg",
      name: "Bakson's Aller Aid Tablet",
      desc: "1 Bottle of 75 tablets",
      detail: "Delivery by",
      price:178 ,
      O_price:215 ,
      discount: "1% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/l303ax3rdxccw583puxa.jpg",
      name: "SBL Bio-Combination 6 Tablet",
      desc: "1 Bottle of 25 gm Biocombination Tablet",
      detail: "Delivery by",
      price:75 ,
      O_price:105 ,
      discount: "28% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/pgd9uf76vrp10iidffhn.jpg",
      name: "SBL Hepar Sulphur Dilution 200 CH",
      desc: "1 Bottle of 30 ml Dilution",
      detail: "Delivery by",
      price:90 ,
      O_price: 105,
      discount: "14% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/dulhg3jfhqjsdlkyzovi.jpg",
      name: "Bakson's Kof Aid Tablet",
      desc: "1 Bottle of 75 tablets",
      detail: "Delivery by",
      price: 186,
      O_price:215 ,
      discount: "13% off",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/h7gskffzvh01rpcu48kf.jpg",
      name: "Dr. Reckeweg Chelidonium Maj Mother Tincture Q",
      desc: "1 Bottle of 20 ml Mother Tincture",
      detail: "Delivery by",
      price: 230,
      O_price: 255,
      discount: "10% off",
    },
    
  ];
  
  const slider7 = {
   
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="Home"
      style={{ width: "100%", overflow: "hidden", padding: "20px" }}
    >
      <h1>Home Page</h1>
      <h3 className="tagname">Shop by health concerns</h3>
      <div style={{ background: "white " }}>
        <Slider {...slider1}>
          {Shop_by_health_concerns.map((item,index) => (
            <ShopHealth name={item.name} img={item.img} key={index} />
          ))}
        </Slider>
      </div>
      <h3 className="tagname"> Featured Brands</h3>
      <Slider {...slider2}>
        {Featured_Brands.map((item) => (
          <FeaturedBrands name={item.name} img={item.img} />
        ))}
      </Slider>

      <h3 className="tagname">Full body health checkups</h3>
      <Slider {...slider3}>
        {Full_body_health_checkups.map((item,index) => (
          <FullBody
            name={item.name}
            img={item.img}
            desc={item.desc}
            price={item.price}
            O_price={item.O_price}
            discount={item.discount}
            rating={item.rating}
            key={index}
          />
        ))}
      </Slider>
      <h3 className="tagname">Pathology Tests | Up to 70% off</h3>
      <Slider {...slider3}>
        {Pathol.map((item) => (
          <Pathology
            name={item.name}
            desc={item.desc}
            detail={item.detail}
            price={item.price}
            O_price={item.O_price}
            discount={item.discount}
          />
        ))}
      </Slider>
      <h3 className="tagname">Homeopathic care for cold & cough</h3>
      <Slider {...slider7}>
        {homeo.map((item) => (
          <Homeopathic
            img={item.img}
            name={item.name}
            desc={item.desc}
            detail={item.detail}
            price={item.price}
            O_price={item.O_price}
            discount={item.discount}
          />
        ))}
      </Slider>
    </div>
  );
}
