import { faShield, faWallet, faCalendar, faGifts, faBasketShopping, faTruck,  } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import deji from '../images/deji.jpeg'
import benitah from '../images/benitah.jpeg'
import bukola from '../images/bukola.jpeg'

import bg1 from '../images/service-img3.jpeg'
import bg2 from '../images/service-img.jpeg'
import bg3 from '../images/heroBg3.jpg'
import bg4 from '../images/heroBg4.jpg'

// navlinks
export const navLinks = [
    {
        label: "Home",
        link: "#home",
        active: true
    },
    {
        label: "About",
        link: "#about",
        active: false
    },
    {
        label: "Services",
        link: "#services",
        active: false
    },
    {
        label: "Pricing",
        link: "#pricing",
        active: false
    },
    {
        label: "Testimonials",
        link: "#testimonials",
        active: false
    },
    {
        label: "Contact us",
        link: "#contact",
        active: false
    },
]

export const heroSlider = [
       {
        id:1,
        title: "Every Gift, A Canvas Of Love.",
        description: "Beat the rhythm of love to your special someone through bespoke gifts.",
        imageUrl: bg1,
        link: "#about"
        },
        
        {
          id:2,
          title: "Perfect Gift For Every Occasion.",
          description: "Make every occasion special with an ideal present.",
          imageUrl: bg2,
          link: "#about"
        },
        {
          id:3,  
          title: "Made Just For Them",
          description: "Diffuse your love with a gift that speaks their heart",
          imageUrl: bg3,
          link: "#about"
        },
        {
          id:4,  
          title: " You Are Worthy Of Love",
          description: "Pamper yourself with our ready-made love bundles..",
          imageUrl: bg4,
          link: "#about"
        }
      
] 

export const values = [

   



    {
        id:4,
        text: "Premium Service",
        icon: faShield
    },
    {
        id:2,
        text: "Secured Payment",
        icon: faWallet
    },
    {
        id:3,
        text: "24 Hours Active",
        icon: faCalendar
    },
    {
        id:4,
        text: "Accountability",
        icon: faCalendar
    },


]

export const servicesData = [
    {
      id: 1,
      icon: faGifts,
      title: "Ready-made Love Bundles",
      description: "Choose from our beautifully crafted packages that are carefully curated to spread love and joy."
    },
    {
      id: 2,
      icon: faBasketShopping,
      title: "Personalized Gift Selection",
      description: "We will help you curate a selection of thoughtful gifts tailored to your loved one's unique interests and preferences."
    },
    {
      id: 3,
      icon: faTruck,
      title: "Timely Delivery",
      description: "We ensure your gift arrives at your loved one's doorstep exactly when you want it to, so you can focus on the thought that counts."
    },
    {
      id: 4,
      icon: "🎉",
      title: "Event Planning Support",
      description: "Let us help you plan the perfect event! From choosing the right gifts for your guests to providing themed decorations, we’ll make your celebration unforgettable."
    }
  ]

  export const pricing = [

    {
        id: 1,
        tag: "Starter",
        price: "2,999",
        description: "Perfect for simple and thoughtful gifts to show your love.",
        features: [
            "1 Personalized Gift",
            "Custom Packaging",
            "Standard Delivery",
            "Personalized Message"
        ],
        active: false
    },
    {
        id: 2,
        tag: "Sweet Moments",
        price: "15,000",
        description: "A sweet bundle of treats to share memorable moments.",
        features: [
            "Assorted Candies",
            "Mini Chocolate Box",
            "Love Note",
            "Small Teddy Bear",
            "Decorative Bag"
        ],
        active: false
    },
    {
        id: 3,
        tag: "Love Luxe",
        price: "20,000",
        description: "A luxurious yet affordable choice for spreading love and joy.",
        features: [
            "Yoghurt",
            "Roll-on",
            "Chocolate",
            "Christmas Wishes Card",
            "Gift Bag"
        ],
        active: true
    },
    {
        id: 4,
        tag: "Love Luxe (Premium)",
        price: "25,000",
        description: "A premium gifting option with sweet treats and festive wishes.",
        features: [
            "6 Cupcakes",
            "Wine",
            "Chocolate",
            "Christmas Wishes Card",
            "Packaging Box"
        ],
        active: false
    },
     
    {
        id: 5,
        tag: "Elegant Touch",
        price: "40,000",
        description: "Sophisticated gifts with an elegant touch.",
        features: [
            "Luxury Perfume",
            "Silk Scarf",
            "Designer Candle",
            "Greeting Card",
            "Gift Box"
        ],
        active: false
    },
   
    {
        id: 6,
        tag: "Sapphire Woman",
        price: "50,500",
        description: "An elegant gift set for the sophisticated woman in your life.",
        features: [
            "Mini-set Nail Cutter",
            "Vacuum Set Flask",
            "Hair Straightener",
            "Journal",
            "Facemask",
            "Lip Gloss",
            "Pad",
            "Pocket Perfume",
            "Chocolate",
            "Christmas Wishes Card",
            "Packaging Box"
        ],
        active: true
    },
    {
        id: 7,
        tag: "Sapphire Man",
        price: "50,500",
        description: "A classy and practical gift for the modern man.",
        features: [
            "Roll-on",
            "Wine",
            "Clipper",
            "Belt",
            "Cufflinks",
            "Box",
            "Christmas Wishes Card",
            "Journal",
            "Groundnut"
        ],
        active: false
    },
    
   
];


// testimonials
export const testimonials = [
    {
        id: 1,
        name: "Bukola Johnson",
        position: "Loyal Customer",
        testimonial: "Made to Love made gifting so effortless! I didn’t know what to get my wife for our anniversary, but they took care of everything. She loved the surprise!",
        img: bukola // Replace with the actual image URL
    },
    {
        id: 2,
        name: "Deji Akinwunmi",
        position: "Satisfied Customer",
        testimonial: "The perfect solution for last-minute gifts! They picked out the perfect present, and it was delivered beautifully. Highly recommend!",
        img: deji // Replace with the actual image URL
    },
    {
        id: 3,
        name: "Benitah Onans",
        position: "Happy Customer",
        testimonial: "Made to Love is my go-to for special occasions. They always find the perfect gift, and I love the personalized touch they add!",
        img: benitah // Replace with the actual image URL
    }
];


export const socials =[
    {
        id:1,
        name: "facebook",
        icon: faFacebook,
        link: "https://www.facebook.com"
    },
    {
        id:2,
        name: "instagram",
        icon: faInstagram,
        link: "https://www.facebook.com",
    },
    {
        id:3,
        name: "twitter",
        icon: faTwitter,
        link: "https://www.facebook.com",
    }
]

export const  servicesContent = [
    {
        header: "our services",
        span: "responsibilites",
        text: "The that makes us stand out",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti consequatur numquam voluptates vitae officiis."
    }
]

export const  aboutContent = [
    {
        header: "our offers",
        span: "pricing",
        text: "Check out for ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti consequatur numquam voluptates vitae officiis."
    }
]

export const  pricingContent = [
    {
        header: "our offers",
        span: "pricing",
        text: "Check out for ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti consequatur numquam voluptates vitae officiis."
    }
]

export const  TestimonialsContent = [
    {
        header: "Testimonials",
        span : "1000+",
        text: "Over people trust us",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti consequatur numquam voluptates vitae officiis."
    }
] 
