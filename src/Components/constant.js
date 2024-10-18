import { faShield, faWallet, faCalendar, faGifts, faBasketShopping, faTruck,  } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import deji from '../images/deji.jpeg'
import benitah from '../images/benitah.jpeg'
import bukola from '../images/bukola.jpeg'

import bg1 from '../images/heroBg.jpeg'
import bg2 from '../images/service-img.jpeg'
import bg3 from '../images/heroBg3.jpg'
import bg4 from '../images/heroBg4.jpg'

// navlinks
export const navLinks = [
    {
        label: "Home",
        link: "£home",
        active: true
    },
    {
        label: "About",
        link: "about",
        active: false
    },
    {
        label: "Services",
        link: "£services",
        active: false
    },
    {
        label: "Pricing",
        link: "£offers",
        active: false
    },
    {
        label: "Testimonials",
        link: "£testimonials",
        active: false
    },
    {
        label: "Contact us",
        link: "contact",
        active: false
    },
    {
        label: "Blog",
        link: "£blog",
        active: false
    }
]

export const heroSlider = [
       {
        id:1,
        title: "Perfect gift for every ocassion",
        description: "Make it extra special with custom messages and designs.",
        imageUrl: bg1,
        link: "/shop/personalized"
        },
        
        {
          id:2,
          title: "Personalized Gifts",
          description: "Make it extra special with custom messages and designs.",
          imageUrl: bg2,
          link: "/shop/personalized"
        },
        {
          id:3,  
          title: "Luxury Hampers",
          description: "Pamper your loved ones with premium selections.",
          imageUrl: bg3,
          link: "/shop/hampers"
        },
        {
          id:4,  
          title: "Last-Minute Gifts",
          description: "Need a gift in a hurry? We've got you covered.",
          imageUrl: bg4,
          link: "/shop/last-minute"
        }
      
] 

export const values = [
    {
        id:1,
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
      title: "Personalized Gifts",
      description: "Create unique gifts tailored to your loved ones. Choose from custom engravings, photos, and special messages to make your gift truly one-of-a-kind."
    },
    {
      id: 2,
      icon: faBasketShopping,
      title: "Gift Baskets",
      description: "Explore a variety of curated gift baskets filled with gourmet treats, spa essentials, or themed items. Perfect for any occasion, from birthdays to holidays."
    },
    {
      id: 3,
      icon: faTruck,
      title: "Same-Day Delivery",
      description: "Need a gift in a hurry? Our same-day delivery service ensures your surprise arrives on time, no matter the occasion. Just select, order, and relax!"
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
        price: 29.99,
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
        tag: "Deluxe",
        price: 59.99,
        description: "Ideal for making a lasting impression with more curated gifts.",
        features: [
            "3 Curated Gifts",
            "Premium Packaging",
            "Fast Delivery",
            "Personalized Message",
            "Gift Wrapping Service"
        ],
        active: true,
    },
    {
        id: 3,
        tag: "Luxury",
        price: 99.99,
        description: "A premium plan offering the best, most luxurious gift experience.",
        features: [
            "Unlimited Gift Selection",
            "Luxury Packaging",
            "Same-Day Delivery",
            "Personalized Message & Video",
            "Exclusive Gift Wrapping",
            "Priority Customer Support"
        ],
        active: false,
    }
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
