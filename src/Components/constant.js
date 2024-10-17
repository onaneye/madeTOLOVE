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
        tag: "Basic",
        price: 19.99,
        description: "A basic plan to get you started with essential features.",
        features: [
            "1 Website",
            "10 GB Storage",
            "24/7 Support",
            "Basic Analytics"
        ],
        active: false
    },
    {
        id: 2,
        tag: "Standard",
        price: 39.99,
        description: "A standard plan with more features for growing businesses.",
        features: [
            "5 Websites",
            "50 GB Storage",
            "24/7 Support",
            "Advanced Analytics",
            "Email Marketing Tools"
        ],
        active: true,
    },
    {
        id: 3,
        tag: "Premium",
        price: 79.99,
        description: "A premium plan with all the features for maximum performance.",
        features: [
            "Unlimited Websites",
            "200 GB Storage",
            "Priority Support",
            "Comprehensive Analytics",
            "SEO Tools",
            "Email Marketing Tools"
        ],
        active: false,
    }
];

// testimonials
export const testimonials = [
    {
        id: 1,
        name: "Bukola Johnson",
        position: "CEO, Tech Innovations",
        testimonial: "This service transformed our business! The support team is always ready to help, and the features are exactly what we needed.",
        img: bukola // Replace with the actual image URL
    },
    {
        id: 2,
        name: "Deji Akinwunmi",
        position: "Marketing Manager, Creative Agency",
        testimonial: "I can't recommend this enough! The user-friendly interface and powerful tools made our campaigns so much more effective.",
        img: deji // Replace with the actual image URL
    },
    {
        id: 3,
        name: "Benitah  Onans",
        position: "Founder, E-commerce Store",
        testimonial: "An incredible platform! It’s easy to use and packed with features. Our sales have increased significantly since we started using it.",
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
