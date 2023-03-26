import farmer from "./icons/farmer.png";
import consumer from "./icons/consumer.png";
import wholesale from "./icons/wholesale.png";
import retailer from "./icons/retailer.png";
import show from "./icons/view.png";
import hide from "./icons/hide.png";


import tomatoI from "./icons/tomato.png";
import onion from "./icons/onion.png";
import chillies from "./icons/chillies.png";
import okra from "./icons/okra.png";
import brinjal from "./icons/brinjal.png";
import carrot from "./icons/carrot.png";
import beetroot from "./icons/beetroot.png";
import cabbage from "./icons/cabbage.png";
import taro from "./icons/taro.png";


interface Vegetable {
    [key:string]:string,
    english: string,
    tamil: string,
    img: string
}

interface UserType {
    [key:string]:string,
    english: string,
    tamil: string,
    img: string
}

const Vegetables: Vegetable[] = [
    {
        english: "Tomoto",
        tamil: "தக்காளி",
        img: tomatoI
    },
    {
        english: "Onion",
        tamil: "வெங்காயம்",
        img: onion
    },
    {
        english: "Chillies",
        tamil: "மிளகாய்",
        img: chillies
    },
    {
        english: "Cabbage",
        tamil: "முட்டைக்கோஸ்",
        img: cabbage
    },
    {
        english: "Okra",
        tamil: "ஓக்ரா",
        img: okra
    },
    {
        english: "Beetroot",
        tamil: "பீட்ரூட்",
        img: beetroot
    },
    {
        english: "Small Onion",
        tamil: "சின்ன வெங்காயம்",
        img: onion
    },
    {
        english: "Brinjal",
        tamil: "கத்தரிக்காய்",
        img: brinjal
    },
    {
        english: "Carrot",
        tamil: "கேரட்",
        img: carrot
    },
    {
        english: "Taro",
        tamil: "சாமை",
        img: taro
    },
]


export const userTypes : UserType[] = [
    {
        img:farmer,
        english:"Farmer",
        tamil: "உழவர்"
    }, 
    {
        img:consumer,
        english:"Consumer",
        tamil: "நுகர்வோர்"
    }, 
    {
        img:retailer,
        english:"Retailer",
        tamil: "சில்லறை விற்பனையாளர்"
    }, 
    {
        img:wholesale,
        english:"Wholesale Dealer",
        tamil: "மொத்த வியாபாரி"
    }
] 



export {
    farmer,
    consumer,
    wholesale,
    retailer,
    Vegetables,
    show,
    hide,
}