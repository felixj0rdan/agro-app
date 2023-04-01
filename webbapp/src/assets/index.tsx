import farmer from "./icons/farmer.png";
import consumer from "./icons/consumer.png";
import wholesale from "./icons/wholesale.png";
import retailer from "./icons/retailer.png";
import show from "./icons/view.png";
import hide from "./icons/hide.png";
import left from "./icons/left.png";
import right from "./icons/right.png";
import back from "./icons/back.png"


import tomatoI from "./icons/tomato.png";
import onion from "./icons/onion.png";
import chillies from "./icons/chillies.png";
import okra from "./icons/okra.png";
import brinjal from "./icons/brinjal.png";
import carrot from "./icons/carrot.png";
import beetroot from "./icons/beetroot.png";
import cabbage from "./icons/cabbage.png";
import taro from "./icons/taro.png";


export interface VegetableType {
    [key:string]:string,
    english: string,
    tamil: string,
    img: string
}

export interface UserType {
    [key:string]:string,
    english: string,
    tamil: string,
    img: string
}

export interface MarketType {
    [key:string]:string,
    english: string,
    tamil: string,
}

const Vegetables: VegetableType[] = [
    {
        id: "001",
        english: "Tomoto",
        tamil: "தக்காளி",
        img: tomatoI
    },
    {
        id: "002",
        english: "Onion",
        tamil: "வெங்காயம்",
        img: onion
    },
    {
        id: "003",
        english: "Chillies",
        tamil: "மிளகாய்",
        img: chillies
    },
    {
        id: "004",
        english: "Cabbage",
        tamil: "முட்டைக்கோஸ்",
        img: cabbage
    },
    {
        id: "005",
        english: "Okra",
        tamil: "வெண்டைக்காய்",
        img: okra
    },
    {
        id: "006",
        english: "Beetroot",
        tamil: "பீட்ரூட்",
        img: beetroot
    },
    {
        id: "007",
        english: "Small Onion",
        tamil: "சின்ன வெங்காயம்",
        img: onion
    },
    {
        id: "008",
        english: "Brinjal",
        tamil: "கத்தரிக்காய்",
        img: brinjal
    },
    {
        id: "009",
        english: "Carrot",
        tamil: "கேரட்",
        img: carrot
    },
    {
        id: "010",
        english: "Taro",
        tamil: "சாமைக்கிழங்கு",
        img: taro
    },

]

export const markets: MarketType[] = [
    {
        id: "001",
        english: "Vellore Tolgate",
        tamil: "வேலூர் டோல்கேட்",
    },
    {
        id: "002",
        english: "Katpadi",
        tamil: "காட்பாடி",
    },
    {
        id: "003",
        english: "Gudiyatam",
        tamil: "குடியாத்தம்",
    },
    {
        id: "004",
        english: "Kagithapattrai",
        tamil: "காகிதப்பட்டறை",
    },
    {
        id: "005",
        english: "Chennai Koyambedu",
        tamil: "சென்னை கோயம்பேடு",
    },
    
]


export const userTypes : UserType[] = [
    {
        id: "001",
        img:farmer,
        english:"Farmer",
        tamil: "உழவர்"
    }, 
    {
        id: "002",
        img:consumer,
        english:"Consumer",
        tamil: "நுகர்வோர்"
    }, 
    {
        id: "003",
        img:retailer,
        english:"Retailer",
        tamil: "சில்லறை வியாபாரி"
    }, 
    {
        id: "004",
        img:wholesale,
        english:"Wholesaler",
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
    left,
    right,
    back
}