
import Slider from "react-slick"
import FeaturedBrands from "../../Components/UserSide/FeaturedBrands";
import FullBody from "../../Components/UserSide/FullBody";
import ShopHealth from "../../Components/UserSide/ShopHealth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    }
  

 
  ];
  const slider1 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const Featured_Brands = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/70c724a3-78e6-4151-a2cc-968f89464eb1.png",
      name: "Complan",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5751f9c3-115d-45cb-a273-65dcb0affe5b.png",
      name: "Zandu",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5cdc9366-3c6b-4c36-a459-01e1184452cd.png",
      name: "Mamaearth",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b9655ea4-7223-4203-947a-45e7febbd13a.png",
      name: "Hansaplast",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c5e9fcc0-1d0a-4317-9b9f-ff902a0e6ff3.png",
      name: "Baidyanath",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6901e177-b881-496b-91ec-d43ef877d783.png",
      name: "Optimum Nutrition",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e3acb5e4-9421-4ab9-83b4-0445be405693.png",
      name: "Cetaphil",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/11136b2a-8544-480f-ad7d-f2c208d09b36.png",
      name: "Tejasya Ayurveda",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ead930c9-e893-4777-a303-b6ec5e95c249.png",
      name: "TATA 1mg Health Products",
    },
    
  ];


  const slider2 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const Full_body_health_checkups = [
    {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Comprehensive Gold Full Body Checkup",
    desc:"Includes 78 Tests",
    rating:"4.9",
    price:2099,
    O_price:4198,
    discount:"50 % off"

  },
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Good Health Smart Package",
    desc:"Includes 3 Tests",
    rating:"4.9",
    price:399,
    O_price:800,
    discount:"50 % off"

  },
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Good Health Silver Package",
    desc:"Includes 58 Tests",
    rating:"4.9",
    price:649,
    O_price:1298,
    discount:"50 % off"

  },
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Comprehensive Silver Full Body Checkup",
    desc:"Includes 71 Tests",
    rating:"4.9",
    price:1699,
    O_price:3398,
    discount:"50 % off"

  },
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Women Wellness Premium Package",
    desc:"Includes 46 Tests",
    rating:"4.9",
    price:1799,
    O_price:3598,
    discount:"50 % off"

  },
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Comprehensive Platinum Full Body Checkup",
    desc:"Includes 91 Tests",
    rating:"4.9",
    price:3499,
    O_price:6998,
    discount:"50 % off"

  },
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Good Health Platinum Package",
    desc:"Includes 65 Tests",
    rating:"4.9",
    price:1299,
    O_price:2598,
    discount:"50 % off"

  },
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Senior Citizen Advanced Package",
    desc:"Includes 60 Tests",
    rating:"4.9",
    price:1599,
    O_price:3198,
    discount:"50 % off"

  },
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Men Health Premium Package",
    desc:"Includes 44 Tests",
    rating:"4.9",
    price:1799,
    O_price:3598,
    discount:"50 % off"

  },
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Fever Package Extensive",
    desc:"Includes 41 Tests",
    rating:"4.9",
    price:999,
    O_price:1199,
    discount:"16 % off"

  },
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Senior Citizen Comprehensive Package Male",
    desc:"Includes 75 Tests",
    rating:"4.9",
    price:3600,
    O_price:6900,
    discount:"50 % off"

  },
  
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Senior Citizen Comprehensive Package Male",
    desc:"Includes 75 Tests",
    rating:"4.9",
    price:3600,
    O_price:6900,
    discount:"47 % off"

  },
  {
    img:"https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    name:"Good Health Gold Package",
    desc:"Includes 63 Tests",
    rating:"4.9",
    price:949,
    O_price:1898,
    discount:"50 % off"

  },
  ];

  const slider3 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };





  
>>>>>>> 542aa1287acd11be136b3b2c155c9206cece1cd5
  return (
    <div className="Home" style={{width:"100%",overflow:"hidden",padding:"20px"}}>
      <h1>Home Page</h1>
<<<<<<< HEAD
      <h1>Welcome</h1>
      <button onClick={handleAuth}>logout</button>
=======

      <h3 className="tagname">Shop by health concerns</h3>
     <div style={{background:"white "}}>
       
     <Slider {...slider1}>
     
     {Shop_by_health_concerns.map((item) => (
       <ShopHealth
         name={item.name}
         img={item.img}
        
       />
     ))}
   </Slider>
     </div>
   <h3 className="tagname"> Featured Brands</h3>
      <Slider {...slider2}>
     
     {Featured_Brands.map((item) => (
       < FeaturedBrands
         name={item.name}
         img={item.img}
        
       />
     ))}
   </Slider>
   
   <h3 className="tagname">Full body health checkups</h3>
      <Slider {...slider3}>
     
     {Full_body_health_checkups.map((item) => (
       < FullBody
         name={item.name}
         img={item.img}
         desc={item.desc}
         price={item.price}
         O_price={item.O_price}
         discount={item.discount}
         rating={item.rating}

        
       />
     ))}
   </Slider>




>>>>>>> 542aa1287acd11be136b3b2c155c9206cece1cd5
    </div>
  );
}