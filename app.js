import React  from "react";
import ReactDOM from "react-dom/client";

/**
    * Header
    *  - Logo
    *  - Nav Items(Right Side)
    *  - Cart
    * Body
    * - Search Bar
    * - Restrauant List
    *  - Restraunt Card
    *      - Image
    *      - Name
    *      - Rating
    *      - Cusines
    * Footer
    *  - Links
    *  - Copyrights
*/

const Title = () => (
    <a href="/">
        <img 
        className="logo" 
        alt="logo" 
        src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" 
        />
    </a>
)
    


const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
      </div>
    );
}

// Config Driven UI

const restaurantList = {
    "data": {
        "title": "SEE ALL",
        "totalOpenRestaurants": 1630,
        "cards": [
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "427361",
                    "name": "Dhaba Ambarsar",
                    "uuid": "871dffd2-3d46-4d72-b021-1161e6a47fbb",
                    "city": "2",
                    "area": "Palam Vihar",
                    "totalRatingsString": "100+ ratings",
                    "cloudinaryImageId": "pzqq6ffjyl75kvwtkyrz",
                    "cuisines": [
                        "North Indian",
                        "Indian",
                        "Home Food",
                        "Desserts"
                    ],
                    "tags": [],
                    "costForTwo": 20000,
                    "costForTwoString": "₹200 FOR TWO",
                    "deliveryTime": 33,
                    "minDeliveryTime": 33,
                    "maxDeliveryTime": 33,
                    "slaString": "33 MINS",
                    "lastMileTravel": 3.799999952316284,
                    "slugs": {
                        "restaurant": "dhaba-ambarsar-palam-vihar-palam-vihar",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "Plot No. 528, Saini Plaza market, Opp H block, Palam Vihar, Gurgaon - 122017",
                    "locality": "Saini Plamarketza",
                    "parentId": 237844,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "50% off",
                        "shortDescriptionList": [
                            {
                                "meta": "50% off | Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "50% off up to ₹100 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "50% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "50% off up to ₹100 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=5675259~p=1~eid=00000185-b573-3d22-3ee8-aa4a00350130",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "3.7 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "427361",
                        "deliveryTime": 33,
                        "minDeliveryTime": 33,
                        "maxDeliveryTime": 33,
                        "lastMileTravel": 3.799999952316284,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.0",
                    "totalRatings": 100,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "1214",
                    "name": "Om Sweets & Snacks",
                    "uuid": "21277595-1dc4-44d8-a2da-d9b5e8179ca0",
                    "city": "2",
                    "area": "Sector 14",
                    "totalRatingsString": "1000+ ratings",
                    "cloudinaryImageId": "pdqimfki4ka3effwsjgd",
                    "cuisines": [
                        "Sweets",
                        "North Indian",
                        "South Indian",
                        "Chinese",
                        "Snacks",
                        "Desserts",
                        "Bakery"
                    ],
                    "tags": [],
                    "costForTwo": 50000,
                    "costForTwoString": "₹500 FOR TWO",
                    "deliveryTime": 37,
                    "minDeliveryTime": 37,
                    "maxDeliveryTime": 37,
                    "slaString": "37 MINS",
                    "lastMileTravel": 4.199999809265137,
                    "slugs": {
                        "restaurant": "om-sweets-snacks-sector-14-sector-14-zone-zone-4",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "SCF 84-85, Shopping Complex, Sector 14 huda market.",
                    "locality": "Huda Market",
                    "parentId": 676,
                    "unserviceable": false,
                    "veg": true,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "10% off",
                        "shortDescriptionList": [
                            {
                                "meta": "10% off | Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "10% off up to ₹40 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "10% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "10% off up to ₹40 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "4.1 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "1214",
                        "deliveryTime": 37,
                        "minDeliveryTime": 37,
                        "maxDeliveryTime": 37,
                        "lastMileTravel": 4.199999809265137,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.3",
                    "totalRatings": 1000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "567080",
                    "name": "Nayi Dilli ke Paranthe",
                    "uuid": "e4b6a1d6-2252-409d-946f-d7f2254b37f1",
                    "city": "2",
                    "area": "Palam Vihar",
                    "totalRatingsString": "100+ ratings",
                    "cloudinaryImageId": "bvt4ytfu1brdft0mqsmw",
                    "cuisines": [
                        "Indian",
                        "North Indian",
                        "Tandoor"
                    ],
                    "tags": [],
                    "costForTwo": 30000,
                    "costForTwoString": "₹300 FOR TWO",
                    "deliveryTime": 32,
                    "minDeliveryTime": 32,
                    "maxDeliveryTime": 32,
                    "slaString": "32 MINS",
                    "lastMileTravel": 2.700000047683716,
                    "slugs": {
                        "restaurant": "nayi-dilli-ke-paranthe-palam-vihar-palam-vihar-2",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "Kitchen No. 8, Kitchen Plus Phase- V, Sector-19, Gurugram, Haryana-122001",
                    "locality": "Kitchen Plus Phase- V",
                    "parentId": 10616,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "20% off",
                        "shortDescriptionList": [
                            {
                                "meta": "20% off | Use PARTY",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "20% off | Use code PARTY",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "20% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use PARTY",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "20% off | Use code PARTY",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=5694019~p=4~eid=00000185-b573-3d22-3ee8-aa4b00350455",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "2.7 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "567080",
                        "deliveryTime": 32,
                        "minDeliveryTime": 32,
                        "maxDeliveryTime": 32,
                        "lastMileTravel": 2.700000047683716,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.2",
                    "totalRatings": 100,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "634473",
                    "name": "Chaayos Chai+Snacks=Relax",
                    "uuid": "46de7cfe-a08b-4f23-a6d8-af919e831423",
                    "city": "2",
                    "area": "Udhyog Vihar",
                    "totalRatingsString": "50+ ratings",
                    "cloudinaryImageId": "wwjb1ljpubdj5zpf4k8i",
                    "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets"
                    ],
                    "tags": [],
                    "costForTwo": 25000,
                    "costForTwoString": "₹250 FOR TWO",
                    "deliveryTime": 29,
                    "minDeliveryTime": 29,
                    "maxDeliveryTime": 29,
                    "slaString": "29 MINS",
                    "lastMileTravel": 3.799999952316284,
                    "slugs": {
                        "restaurant": "chaayos-chaisnacksrelax-sector-4-palam-vihar",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "Shop No. 393, PH-III, Udyog Vihar, Gurgaon, Gurugram, Haryana-122001",
                    "locality": "Sector 4",
                    "parentId": 281782,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "50% off",
                        "shortDescriptionList": [
                            {
                                "meta": "50% off | Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "50% off up to ₹100 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "50% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "50% off up to ₹100 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=5718373~p=7~eid=00000185-b573-3d22-3ee8-aa4c00350752",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "3.7 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "634473",
                        "deliveryTime": 29,
                        "minDeliveryTime": 29,
                        "maxDeliveryTime": 29,
                        "lastMileTravel": 3.799999952316284,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.4",
                    "totalRatings": 50,
                    "new": true
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "19412",
                    "name": "Pizza Hut",
                    "uuid": "236a06fb-6d9d-4172-a5a0-bc70c1d38d28",
                    "city": "2",
                    "area": "Sector 23A",
                    "totalRatingsString": "500+ ratings",
                    "cloudinaryImageId": "g1iv8okd7vczv0zw3wpu",
                    "cuisines": [
                        "Pizzas"
                    ],
                    "tags": [],
                    "costForTwo": 40000,
                    "costForTwoString": "₹400 FOR TWO",
                    "deliveryTime": 29,
                    "minDeliveryTime": 29,
                    "maxDeliveryTime": 29,
                    "slaString": "29 MINS",
                    "lastMileTravel": 1.7000000476837158,
                    "slugs": {
                        "restaurant": "pizza-hut-delivery-palam-vihar-palam-vihar",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "Sco 63 Sector 23A Ggn. Haryana. Palam Vihar.",
                    "locality": "behind PETROL PUMP",
                    "parentId": 721,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "40% off",
                        "shortDescriptionList": [
                            {
                                "meta": "40% off | Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "40% off up to ₹80 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "40% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "40% off up to ₹80 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "1.7 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "19412",
                        "deliveryTime": 29,
                        "minDeliveryTime": 29,
                        "maxDeliveryTime": 29,
                        "lastMileTravel": 1.7000000476837158,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "3.9",
                    "totalRatings": 500,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "654071",
                    "name": "Beeji De Chole Bhature",
                    "uuid": "0f5d2cb3-dc4a-4f2f-9674-bcb9844e7f07",
                    "city": "2",
                    "area": "Sushant Lok 1 ",
                    "totalRatingsString": "20+ ratings",
                    "cloudinaryImageId": "101674767d7d611b9f60db88702ece7c",
                    "cuisines": [
                        "North Indian",
                        "Punjabi",
                        "Street Food"
                    ],
                    "tags": [],
                    "costForTwo": 30000,
                    "costForTwoString": "₹300 FOR TWO",
                    "deliveryTime": 34,
                    "minDeliveryTime": 34,
                    "maxDeliveryTime": 34,
                    "slaString": "34 MINS",
                    "lastMileTravel": 5.800000190734863,
                    "slugs": {
                        "restaurant": "beeji-de-chole-bhature-dlf-phase-4-dlf-phase-4",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "UG-3,BESTECH CENTER POINT SUSHANT  LOK-1,A-BLOCK GURUGRAM, Gurgaon,  Gurugram, Haryana-122002",
                    "locality": "Bestech centre point",
                    "parentId": 9772,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "10% off",
                        "shortDescriptionList": [
                            {
                                "meta": "10% off | Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "10% off up to ₹40 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "10% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "10% off up to ₹40 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=5618375~p=10~eid=00000185-b573-3d22-3ee8-aa4d00350a5a",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "5.8 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "654071",
                        "deliveryTime": 34,
                        "minDeliveryTime": 34,
                        "maxDeliveryTime": 34,
                        "lastMileTravel": 5.800000190734863,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.2",
                    "totalRatings": 20,
                    "new": true
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "20138",
                    "name": "Harish Bakery",
                    "uuid": "0c7611b1-41b3-4d85-a4d6-2b9e53d81a68",
                    "city": "2",
                    "area": "Sohna Chowk",
                    "totalRatingsString": "1000+ ratings",
                    "cloudinaryImageId": "jkuj5aui7wwmwc0eidog",
                    "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Desserts"
                    ],
                    "tags": [],
                    "costForTwo": 35000,
                    "costForTwoString": "₹350 FOR TWO",
                    "deliveryTime": 39,
                    "minDeliveryTime": 39,
                    "maxDeliveryTime": 39,
                    "slaString": "39 MINS",
                    "lastMileTravel": 6,
                    "slugs": {
                        "restaurant": "harish-bakery-old-railway-road-sohna-road",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "sco.1-2&4 jail land complex, Huda Shopping Center, Sohna Chowk, Gurugram-122001",
                    "locality": "Huda Shopping Center",
                    "parentId": 1676,
                    "unserviceable": false,
                    "veg": true,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "10% off",
                        "shortDescriptionList": [
                            {
                                "meta": "10% off | Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "10% off up to ₹40 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "10% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "10% off up to ₹40 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 1,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "6 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "20138",
                        "deliveryTime": 39,
                        "minDeliveryTime": 39,
                        "maxDeliveryTime": 39,
                        "lastMileTravel": 6,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "IT_IS_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.0",
                    "totalRatings": 1000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "532742",
                    "name": "Eat Pro Fit-Healthylicious",
                    "uuid": "36ae2436-5d00-433a-8ae6-c969854e477b",
                    "city": "2",
                    "area": "Global Foyer Mall",
                    "totalRatingsString": "100+ ratings",
                    "cloudinaryImageId": "zlwxuftvcocjktxjd4pd",
                    "cuisines": [
                        "Healthy Food",
                        "Continental",
                        "Italian",
                        "Mexican",
                        "Lebanese",
                        "Beverages"
                    ],
                    "tags": [],
                    "costForTwo": 30000,
                    "costForTwoString": "₹300 FOR TWO",
                    "deliveryTime": 33,
                    "minDeliveryTime": 33,
                    "maxDeliveryTime": 33,
                    "slaString": "33 MINS",
                    "lastMileTravel": 3,
                    "slugs": {
                        "restaurant": "eat-pro-fit-palam-vihar-palam-vihar",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "SHOP NO.-17 GLOBAL FOYER MALL PALAM VIHAR, Gurgaon, Gurugram, , Haryana, 122017",
                    "locality": "Global Foyer Mall",
                    "parentId": 320486,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "50% off",
                        "shortDescriptionList": [
                            {
                                "meta": "50% off | Use GUILTFREEJAN",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "50% off up to ₹125 | Use code GUILTFREEJAN",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "50% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use GUILTFREEJAN",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "50% off up to ₹125 | Use code GUILTFREEJAN",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=5659398~p=13~eid=00000185-b573-3d22-3ee8-aa4e00350d63",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "3 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "532742",
                        "deliveryTime": 33,
                        "minDeliveryTime": 33,
                        "maxDeliveryTime": 33,
                        "lastMileTravel": 3,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.1",
                    "totalRatings": 100,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "644822",
                    "name": "Mama's Pizzeria",
                    "uuid": "dd11af3b-8a68-4bf1-a2f2-3007907dd8c7",
                    "city": "2",
                    "area": "DLF Phase 4",
                    "totalRatingsString": "20+ ratings",
                    "cloudinaryImageId": "50df8eefe32c2c17ff8ba4f1b2c8c44b",
                    "cuisines": [
                        "Pizzas",
                        "Pastas"
                    ],
                    "tags": [],
                    "costForTwo": 50000,
                    "costForTwoString": "₹500 FOR TWO",
                    "deliveryTime": 38,
                    "minDeliveryTime": 38,
                    "maxDeliveryTime": 38,
                    "slaString": "38 MINS",
                    "lastMileTravel": 5.800000190734863,
                    "slugs": {
                        "restaurant": "mama’s-pizzeria-dlf-phase-4-dlf-phase-4",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "UG 2, BESTECH CENTER POINT, SUSHANT LOK 1 , A BLOCK. GURUGRAM-122002",
                    "locality": "A Block",
                    "parentId": 389127,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "60% off",
                        "shortDescriptionList": [
                            {
                                "meta": "60% off | Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "60% off up to ₹120 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "60% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "60% off up to ₹120 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=5711441~p=16~eid=00000185-b573-3d22-3ee8-aa4f00351075",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "5.8 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "644822",
                        "deliveryTime": 38,
                        "minDeliveryTime": 38,
                        "maxDeliveryTime": 38,
                        "lastMileTravel": 5.800000190734863,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.6",
                    "totalRatings": 20,
                    "new": true
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "5930",
                    "name": "Burger King",
                    "uuid": "faf4a891-e07e-4de4-9952-117b54f51a5b",
                    "city": "2",
                    "area": "Sector 28",
                    "totalRatingsString": "1000+ ratings",
                    "cloudinaryImageId": "wo6h0uqbit6yuoeudu0l",
                    "cuisines": [
                        "Burgers",
                        "American"
                    ],
                    "tags": [],
                    "costForTwo": 35000,
                    "costForTwoString": "₹350 FOR TWO",
                    "deliveryTime": 35,
                    "minDeliveryTime": 35,
                    "maxDeliveryTime": 35,
                    "slaString": "35 MINS",
                    "lastMileTravel": 5.900000095367432,
                    "slugs": {
                        "restaurant": "burger-king-dlf-phase-4",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "City Center Mall, Sector 28, MG Road, DLF City, Gurgaon, Haryana",
                    "locality": "MG Road",
                    "parentId": 166,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "60% off",
                        "shortDescriptionList": [
                            {
                                "meta": "60% off | Use STEALDEAL",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "60% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use STEALDEAL",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "5.9 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "5930",
                        "deliveryTime": 35,
                        "minDeliveryTime": 35,
                        "maxDeliveryTime": 35,
                        "lastMileTravel": 5.900000095367432,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.2",
                    "totalRatings": 1000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "27891",
                    "name": "Bakingo",
                    "uuid": "ad7d448d-753f-4954-959a-37cc8f8704f8",
                    "city": "2",
                    "area": "Gurgaon",
                    "totalRatingsString": "1000+ ratings",
                    "cloudinaryImageId": "mdkbnw5orkqj5ektnts6",
                    "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                    ],
                    "tags": [],
                    "costForTwo": 30000,
                    "costForTwoString": "₹300 FOR TWO",
                    "deliveryTime": 33,
                    "minDeliveryTime": 33,
                    "maxDeliveryTime": 33,
                    "slaString": "33 MINS",
                    "lastMileTravel": 4.800000190734863,
                    "slugs": {
                        "restaurant": "bakingo-sector-14-sector-14",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "M-14, Sector 14, Gurgaon Delhi NCR",
                    "locality": "sector 14",
                    "parentId": 3818,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "30% off",
                        "shortDescriptionList": [
                            {
                                "meta": "30% off | Use SWIGGYIT",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "30% off up to ₹75 | Use code SWIGGYIT",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "30% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use SWIGGYIT",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "30% off up to ₹75 | Use code SWIGGYIT",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=5716029~p=19~eid=00000185-b573-3d22-3ee8-aa5000351312",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "4.8 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "27891",
                        "deliveryTime": 33,
                        "minDeliveryTime": 33,
                        "maxDeliveryTime": 33,
                        "lastMileTravel": 4.800000190734863,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.3",
                    "totalRatings": 1000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "7325",
                    "name": "Burger point",
                    "uuid": "40dcc3f1-1aee-4ca2-820b-5b25eecf38f0",
                    "city": "2",
                    "area": "Sector 22",
                    "totalRatingsString": "100+ ratings",
                    "cloudinaryImageId": "vdiqaultdbq7zcbmnfra",
                    "cuisines": [
                        "Snacks",
                        "American"
                    ],
                    "tags": [],
                    "costForTwo": 20000,
                    "costForTwoString": "₹200 FOR TWO",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "slaString": "24 MINS",
                    "lastMileTravel": 0.800000011920929,
                    "slugs": {
                        "restaurant": "burger-point-huda-market-palam-vihar",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "Shop No 29, Sector 22, HUDA Market, Gurgaon",
                    "locality": "Huda Market",
                    "parentId": 168,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "0.8 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "7325",
                        "deliveryTime": 24,
                        "minDeliveryTime": 24,
                        "maxDeliveryTime": 24,
                        "lastMileTravel": 0.800000011920929,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.4",
                    "totalRatings": 100,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "64038",
                    "name": "Biryani By Kilo",
                    "uuid": "e07df3d5-a59d-494a-99c0-f6c1c39e824a",
                    "city": "2",
                    "area": "Palam Vihar",
                    "totalRatingsString": "500+ ratings",
                    "cloudinaryImageId": "brwy1dvhwiybkw1l4eet",
                    "cuisines": [
                        "Biryani",
                        "Hyderabadi",
                        "North Indian",
                        "Kebabs",
                        "Mughlai",
                        "Desserts"
                    ],
                    "tags": [],
                    "costForTwo": 80000,
                    "costForTwoString": "₹800 FOR TWO",
                    "deliveryTime": 49,
                    "minDeliveryTime": 49,
                    "maxDeliveryTime": 49,
                    "slaString": "49 MINS",
                    "lastMileTravel": 2.9000000953674316,
                    "slugs": {
                        "restaurant": "biryani-by-kilo-sector-20-palam-vihar",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "Shop no 1, GF, House 586, Sector 20, Dundahera",
                    "locality": "House 586",
                    "parentId": 130,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "50% off",
                        "shortDescriptionList": [
                            {
                                "meta": "50% off | Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "50% off up to ₹100 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "50% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "50% off up to ₹100 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=5610005~p=22~eid=00000185-b573-3d22-3ee8-aa5100351608",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "2.9 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "64038",
                        "deliveryTime": 49,
                        "minDeliveryTime": 49,
                        "maxDeliveryTime": 49,
                        "lastMileTravel": 2.9000000953674316,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.2",
                    "totalRatings": 500,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "859",
                    "name": "Bikanervala",
                    "uuid": "436e08a5-c0f6-4a2a-a035-7c5c0eb21d0e",
                    "city": "2",
                    "area": "Near Leisure Valley Park",
                    "totalRatingsString": "1000+ ratings",
                    "cloudinaryImageId": "vuafrem61ulxxi9ejhb8",
                    "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Desserts",
                        "South Indian",
                        "Sweets"
                    ],
                    "tags": [],
                    "costForTwo": 45000,
                    "costForTwoString": "₹450 FOR TWO",
                    "deliveryTime": 37,
                    "minDeliveryTime": 37,
                    "maxDeliveryTime": 37,
                    "slaString": "37 MINS",
                    "lastMileTravel": 6.300000190734863,
                    "slugs": {
                        "restaurant": "bikanervala-sector-29-huda-city",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "3-5, City Center, Near Leisure Valley Park, Sector 29",
                    "locality": "Near Leisure Valley Park",
                    "parentId": 45936,
                    "unserviceable": false,
                    "veg": true,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "10% off",
                        "shortDescriptionList": [
                            {
                                "meta": "10% off | Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "10% off up to ₹40 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "10% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "10% off up to ₹40 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 1,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "6.3 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "859",
                        "deliveryTime": 37,
                        "minDeliveryTime": 37,
                        "maxDeliveryTime": 37,
                        "lastMileTravel": 6.300000190734863,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "IT_IS_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.3",
                    "totalRatings": 1000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "439207",
                    "name": "Burgerama",
                    "uuid": "27c11935-f246-4923-b26b-5e8cfa24583c",
                    "city": "2",
                    "area": "Udyog Vihar",
                    "totalRatingsString": "100+ ratings",
                    "cloudinaryImageId": "jctsxsgq4g4wjviodrjp",
                    "cuisines": [
                        "American"
                    ],
                    "tags": [],
                    "costForTwo": 50000,
                    "costForTwoString": "₹500 FOR TWO",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "slaString": "28 MINS",
                    "lastMileTravel": 2.5999999046325684,
                    "slugs": {
                        "restaurant": "burgerama-palam-vihar-palam-vihar",
                        "city": "gurgaon"
                    },
                    "cityState": "2",
                    "address": "Plot No .628,udyog Vihar , phase 5 , sector 19 , Gurgaon",
                    "locality": "Udyog Vihar",
                    "parentId": 8993,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "aggregatedDiscountInfo": {
                        "header": "40% off",
                        "shortDescriptionList": [
                            {
                                "meta": "40% off | Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "40% off up to ₹80 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                        "header": "40% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "40% off up to ₹80 | Use code TRYNEW",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                    },
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [],
                        "totalFees": 0,
                        "message": "",
                        "title": "",
                        "amount": "",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=5701284~p=25~eid=00000185-b573-3d22-3ee8-aa520035190b",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "2.5 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "439207",
                        "deliveryTime": 28,
                        "minDeliveryTime": 28,
                        "maxDeliveryTime": 28,
                        "lastMileTravel": 2.5999999046325684,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.5",
                    "totalRatings": 100,
                    "new": false
                },
                "subtype": "basic"
            }
        ],
        "totalRestaurants": 1630
    }
}


const RestrauntCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    // const {name, cuisines, avgRating, cloudinaryImageId} = restaurant?.data; // object destructuring
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}


const Body = () => {
    return (
       <div className="restraunt-list">
        {
            restaurantList?.data?.cards.map((restaurant) => {
               return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
            })
        }
       </div>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}
const styleObj = {
    backgroundColor: "red"
}

// const jsx = (
//     <div style = { styleObj }>
//         <h1>JSX</h1>
//         <h1>JSX Second</h1>
//     </div>
// );

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
