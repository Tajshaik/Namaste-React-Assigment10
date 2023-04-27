export const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6299894&lng=79.43612949999999&page_type=DESKTOP_WEB_LISTING";

export function filterData(search,NewRestaraunt){
  return NewRestaraunt.filter(
     (res) => res.data.name.toLowerCase().includes(search.toString().toLowerCase()) )
 };

 export const Restaraunt_URL='https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.6299894&lng=79.43612949999999&submitAction=ENTER&restaurantId='

export const ResData = 
    [
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "164111",
            "name": "Hot Spot Cafe",
            "uuid": "20786405-cbe2-47be-b82c-79dec9c71012",
            "city": "69",
            "area": "Tata Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "oo76bjsygicdwe0xkqj1",
            "cuisines": [
              "Beverages",
              "Continental",
              "Italian",
              "Desserts",
              "Seafood",
              "Ice Cream",
              "Bakery",
              "Biryani",
              "American",
              "Grill"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 4,
            "slugs": {
              "restaurant": "hot-spot-cafe-opp-to-hangout-cafe-tata-nagar",
              "city": "tirupati"
            },
            "cityState": "69",
            "address": "New Balaji Colony, AIR By Pass Road, Tirupati",
            "locality": "New Balaji Colony",
            "parentId": 97530,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "Flat ₹125 off",
              "shortDescriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹125 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use MATCHDEAL125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                  "discountType": "Flat",
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
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
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
            "adTrackingID": "cid=6476754~p=1~eid=00000187-7f76-1e94-0d17-7fde00b10139",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "4 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "164111",
              "deliveryTime": 28,
              "minDeliveryTime": 28,
              "maxDeliveryTime": 28,
              "lastMileTravel": 4,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "80107",
            "name": "Di Table 9",
            "uuid": "2a115d23-01b9-4a0b-8e97-4013eaab4a6a",
            "city": "69",
            "area": "Tirupati",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "y7bpsdht2ngjp9ihon0d",
            "cuisines": [
              "Biryani",
              "Chinese",
              "South Indian",
              "North Indian",
              "Hyderabadi",
              "Rayalaseema",
              "Mughlai",
              "Snacks",
              "Seafood",
              "Andhra"
            ],
            "tags": [
              
            ],
            "costForTwo": 38000,
            "costForTwoString": "₹380 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 1.2999999523162842,
            "slugs": {
              "restaurant": "di-table-9-tp-area-tata-nagar",
              "city": "tirupati"
            },
            "cityState": "69",
            "address": "Tata Nagar, Tirupati, Andhra Pradesh 517501, India",
            "locality": "Korramenugunta",
            "parentId": 353708,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "Flat ₹125 off",
              "shortDescriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹125 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use MATCHDEAL125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2100,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2100",
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
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "80107",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 1.2999999523162842,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "598688",
            "name": "STARLIT SUITES TIRUPATI LLP",
            "uuid": "443c727f-6ff8-4a28-9644-30bdc3a78f83",
            "city": "69",
            "area": "Tata Nagar",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "fqfpzu115j7nkcagdqst",
            "cuisines": [
              "South Indian",
              "Chinese",
              "Biryani"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 0.10000000149011612,
            "slugs": {
              "restaurant": "starlit-suites-tirupati-llp-tata-nagar-tata-nagar",
              "city": "tirupati"
            },
            "cityState": "69",
            "address": "MOON D11743927OOR NO-19-1-23/2-1 TOWER C TEMPLE TOWN,OFF RENI GUNTA ROAD,CHINTALACHENU ,Chennayyagunta,Tirupati (Urban),Chittoor,Andhra Pradesh-517501",
            "locality": "Chintalachenu",
            "parentId": 357604,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "60% off",
              "shortDescriptionList": [
                {
                  "meta": "60% off | Use WELCOMEBACK",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                  "meta": "Use WELCOMEBACK",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2100,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2100",
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
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.1 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "598688",
              "deliveryTime": 24,
              "minDeliveryTime": 24,
              "maxDeliveryTime": 24,
              "lastMileTravel": 0.10000000149011612,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "417917",
            "name": "Di Table 9 New",
            "uuid": "ff70ccba-2ab0-4458-91eb-fc123c42bef2",
            "city": "69",
            "area": "Korlagunta",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "qo7c3w7pyuqp2vhtenny",
            "cuisines": [
              "South Indian",
              "North Indian",
              "Biryani",
              "Tandoor",
              "Chinese"
            ],
            "tags": [
              
            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 3.799999952316284,
            "slugs": {
              "restaurant": "di-table-9-korlagunta-korlagunta",
              "city": "tirupati"
            },
            "cityState": "69",
            "address": "6-1-65/1, SS VARADARAJNAGAR,K T ROAD, tirupati",
            "locality": "Kapila Teertham Road",
            "parentId": 353706,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "Flat ₹125 off",
              "shortDescriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹125 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use MATCHDEAL125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                  "discountType": "Flat",
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
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2100,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2100",
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
            "adTrackingID": "cid=6476059~p=4~eid=00000187-7f76-1e94-0d17-7fdf00b10469",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "3.7 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "417917",
              "deliveryTime": 24,
              "minDeliveryTime": 24,
              "maxDeliveryTime": 24,
              "lastMileTravel": 3.799999952316284,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.8",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "356932",
            "name": "Pizza Hut",
            "uuid": "608f5f9c-3bfd-4556-9730-b7588d019940",
            "city": "69",
            "area": "Tirumala",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "aprt56ba77nidx33v4mt",
            "cuisines": [
              "Pizzas"
            ],
            "tags": [
              
            ],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 2.5,
            "slugs": {
              "restaurant": "pizza-hut-stv-nagar-tirupati-korlagunta",
              "city": "tirupati"
            },
            "cityState": "69",
            "address": "PIZZA HUT at Ground Floor & First Floor located at 19-4-121/C, STV Nagar, Revenue Ward- 19, Tirupati, Chittoor, Andhra Pradesh-517501",
            "locality": "STV Nagar",
            "parentId": 721,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "Get every item under 199",
              "shortDescriptionList": [
                {
                  "meta": "Get every item under 199",
                  "discountType": "FinalPrice",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Get every item under 199",
                  "discountType": "FinalPrice",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "",
              "shortDescriptionList": [
                {
                  "meta": "",
                  "discountType": "FinalPrice",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Get every item under 199",
                  "discountType": "FinalPrice",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2100,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2100",
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
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "356932",
              "deliveryTime": 24,
              "minDeliveryTime": 24,
              "maxDeliveryTime": 24,
              "lastMileTravel": 2.5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "533816",
            "name": "Five Star Chicken",
            "uuid": "0c8aa33c-661a-457b-92a7-b9d5f1f3a385",
            "city": "69",
            "area": "Tata Nagar",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "shpl268lwvouvfrdl9tb",
            "cuisines": [
              "Snacks",
              "Continental"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 0.8999999761581421,
            "slugs": {
              "restaurant": "five-star-kitchen-tata-nagar-tata-nagar",
              "city": "tirupati"
            },
            "cityState": "69",
            "address": "D NO: - 19-3-1E, Renigunta Road, Postal Colony, Tirupati 517501",
            "locality": "Renigunta Road",
            "parentId": 376,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "60% off",
              "shortDescriptionList": [
                {
                  "meta": "60% off | Use WELCOMEBACK",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                  "meta": "Use WELCOMEBACK",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2100,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2100",
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
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "533816",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 0.8999999761581421,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 20,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "80656",
            "name": "Andhra Spice",
            "uuid": "c5230040-1463-4789-aee9-111b481e2f61",
            "city": "69",
            "area": "Tirumala",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "pnnakxxos7usskdxm4pu",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Chinese",
              "Indian",
              "Mughlai",
              "Hyderabadi",
              "Andhra",
              "Tandoor",
              "Seafood",
              "Punjabi"
            ],
            "tags": [
              
            ],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 2.700000047683716,
            "slugs": {
              "restaurant": "andhra-spice-air-bypass-rd-korlagunta",
              "city": "tirupati"
            },
            "cityState": "69",
            "address": "AIR Bypass Rd, SBI Colony, Royal Nagar, Tirupati, Andhra Pradesh 517501",
            "locality": "Stv Nagar",
            "parentId": 13971,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "Flat ₹125 off",
              "shortDescriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹125 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use MATCHDEAL125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                  "discountType": "Flat",
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
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2100,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2100",
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
            "adTrackingID": "cid=6460954~p=7~eid=00000187-7f76-1e94-0d17-7fe000b1075b",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.7 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "80656",
              "deliveryTime": 27,
              "minDeliveryTime": 27,
              "maxDeliveryTime": 27,
              "lastMileTravel": 2.700000047683716,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.5",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "98464",
            "name": "Perambur Sri Srinivasa PS4 Pure Veg Restaurant",
            "uuid": "9cfeb1d6-80e1-45dc-8529-55f18bdb95cf",
            "city": "69",
            "area": "Tirumala",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "bnhseopcrbvdcarasz2c",
            "cuisines": [
              "South Indian",
              "Sweets",
              "Thalis",
              "Chinese",
              "Juices"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 2,
            "slugs": {
              "restaurant": "perambur-sri-srinivasa-ps4-pure-veg-restaurant-leelamahal-circle-korlagunta",
              "city": "tirupati"
            },
            "cityState": "69",
            "address": "20-5-1,Tirumala bypass Road,Near Leelamahal Circle,tirupati 517501",
            "locality": "Tirumala Bypass Road",
            "parentId": 14153,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
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
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2100,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2100",
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
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "98464",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 2,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "140581",
            "name": "Cream Stone Ice Cream",
            "uuid": "76323905-29a5-4f6e-b9a0-34d2958a2b9e",
            "city": "69",
            "area": "Tata Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "0465abc3ad7327522519d6a195d10dfc",
            "cuisines": [
              "Ice Cream",
              "Desserts",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 13,
            "minDeliveryTime": 13,
            "maxDeliveryTime": 13,
            "slaString": "13 MINS",
            "lastMileTravel": 0.8999999761581421,
            "slugs": {
              "restaurant": "cream-stone-pedda-kapu-layout-tata-nagar",
              "city": "tirupati"
            },
            "cityState": "69",
            "address": "Bus Stand, Hotel Udayee International, Tirupati Road Opp. APSRTC, Tata Nagar, Tirupati, Andhra Pradesh 517501, India",
            "locality": "Puthalapathu Naidupeta Road",
            "parentId": 289,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2100,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2100",
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
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "140581",
              "deliveryTime": 13,
              "minDeliveryTime": 13,
              "maxDeliveryTime": 13,
              "lastMileTravel": 0.8999999761581421,
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
            "id": "80127",
            "name": "Kwality Spicy",
            "uuid": "36f69729-da96-4563-b47b-a10111751ed5",
            "city": "69",
            "area": "Tirumala",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "xdfha5siz8az8frn4u8g",
            "cuisines": [
              "Biryani",
              "Chinese",
              "North Indian",
              "Tandoor"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 17,
            "minDeliveryTime": 17,
            "maxDeliveryTime": 17,
            "slaString": "17 MINS",
            "lastMileTravel": 1.899999976158142,
            "slugs": {
              "restaurant": "kwality-spice-sanjay-gandhi-colony-korlagunta",
              "city": "tirupati"
            },
            "cityState": "69",
            "address": "Tirupati Rd, Navodaya Colony, Maruthi Nagar, Tirupati, Andhra Pradesh 517501, India",
            "locality": "Tirupati Road",
            "parentId": 14039,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "Flat ₹125 off",
              "shortDescriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹125 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use MATCHDEAL125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                  "discountType": "Flat",
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
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2100,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2100",
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
            "adTrackingID": "cid=6476755~p=10~eid=00000187-7f76-1e94-0d17-7fe100b10a18",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.8 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "80127",
              "deliveryTime": 17,
              "minDeliveryTime": 17,
              "maxDeliveryTime": 17,
              "lastMileTravel": 1.899999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        }
]
/*

              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "164111",
                  "name": "Hot Spot Cafe",
                  "uuid": "20786405-cbe2-47be-b82c-79dec9c71012",
                  "city": "69",
                  "area": "Tata Nagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "oo76bjsygicdwe0xkqj1",
                  "cuisines": [
                    "Beverages",
                    "Continental",
                    "Italian",
                    "Desserts",
                    "Seafood",
                    "Ice Cream",
                    "Bakery",
                    "Biryani",
                    "American",
                    "Grill"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "slaString": "28 MINS",
                  "lastMileTravel": 4,
                  "slugs": {
                    "restaurant": "hot-spot-cafe-opp-to-hangout-cafe-tata-nagar",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "New Balaji Colony, AIR By Pass Road, Tirupati",
                  "locality": "New Balaji Colony",
                  "parentId": 97530,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "Flat ₹125 off",
                    "shortDescriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
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
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2400,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2400,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2400",
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
                  "adTrackingID": "cid=6476754~p=1~eid=00000187-7f76-1e94-0d17-7fde00b10139",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "164111",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 4,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.9",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "80107",
                  "name": "Di Table 9",
                  "uuid": "2a115d23-01b9-4a0b-8e97-4013eaab4a6a",
                  "city": "69",
                  "area": "Tirupati",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "y7bpsdht2ngjp9ihon0d",
                  "cuisines": [
                    "Biryani",
                    "Chinese",
                    "South Indian",
                    "North Indian",
                    "Hyderabadi",
                    "Rayalaseema",
                    "Mughlai",
                    "Snacks",
                    "Seafood",
                    "Andhra"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 38000,
                  "costForTwoString": "₹380 FOR TWO",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "slaString": "25 MINS",
                  "lastMileTravel": 1.2999999523162842,
                  "slugs": {
                    "restaurant": "di-table-9-tp-area-tata-nagar",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "Tata Nagar, Tirupati, Andhra Pradesh 517501, India",
                  "locality": "Korramenugunta",
                  "parentId": 353708,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "Flat ₹125 off",
                    "shortDescriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "80107",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.8",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "598688",
                  "name": "STARLIT SUITES TIRUPATI LLP",
                  "uuid": "443c727f-6ff8-4a28-9644-30bdc3a78f83",
                  "city": "69",
                  "area": "Tata Nagar",
                  "totalRatingsString": "Too Few Ratings",
                  "cloudinaryImageId": "fqfpzu115j7nkcagdqst",
                  "cuisines": [
                    "South Indian",
                    "Chinese",
                    "Biryani"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 24,
                  "minDeliveryTime": 24,
                  "maxDeliveryTime": 24,
                  "slaString": "24 MINS",
                  "lastMileTravel": 0.10000000149011612,
                  "slugs": {
                    "restaurant": "starlit-suites-tirupati-llp-tata-nagar-tata-nagar",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "MOON D11743927OOR NO-19-1-23/2-1 TOWER C TEMPLE TOWN,OFF RENI GUNTA ROAD,CHINTALACHENU ,Chennayyagunta,Tirupati (Urban),Chittoor,Andhra Pradesh-517501",
                  "locality": "Chintalachenu",
                  "parentId": 357604,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                      {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.1 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "598688",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 0.10000000149011612,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "--",
                  "totalRatings": 0,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "417917",
                  "name": "Di Table 9 New",
                  "uuid": "ff70ccba-2ab0-4458-91eb-fc123c42bef2",
                  "city": "69",
                  "area": "Korlagunta",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "qo7c3w7pyuqp2vhtenny",
                  "cuisines": [
                    "South Indian",
                    "North Indian",
                    "Biryani",
                    "Tandoor",
                    "Chinese"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 24,
                  "minDeliveryTime": 24,
                  "maxDeliveryTime": 24,
                  "slaString": "24 MINS",
                  "lastMileTravel": 3.799999952316284,
                  "slugs": {
                    "restaurant": "di-table-9-korlagunta-korlagunta",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "6-1-65/1, SS VARADARAJNAGAR,K T ROAD, tirupati",
                  "locality": "Kapila Teertham Road",
                  "parentId": 353706,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "Flat ₹125 off",
                    "shortDescriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
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
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                  "adTrackingID": "cid=6476059~p=4~eid=00000187-7f76-1e94-0d17-7fdf00b10469",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3.7 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "417917",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 3.799999952316284,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.8",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "356932",
                  "name": "Pizza Hut",
                  "uuid": "608f5f9c-3bfd-4556-9730-b7588d019940",
                  "city": "69",
                  "area": "Tirumala",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "aprt56ba77nidx33v4mt",
                  "cuisines": [
                    "Pizzas"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 35000,
                  "costForTwoString": "₹350 FOR TWO",
                  "deliveryTime": 24,
                  "minDeliveryTime": 24,
                  "maxDeliveryTime": 24,
                  "slaString": "24 MINS",
                  "lastMileTravel": 2.5,
                  "slugs": {
                    "restaurant": "pizza-hut-stv-nagar-tirupati-korlagunta",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "PIZZA HUT at Ground Floor & First Floor located at 19-4-121/C, STV Nagar, Revenue Ward- 19, Tirupati, Chittoor, Andhra Pradesh-517501",
                  "locality": "STV Nagar",
                  "parentId": 721,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "Get every item under 199",
                    "shortDescriptionList": [
                      {
                        "meta": "Get every item under 199",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Get every item under 199",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "",
                    "shortDescriptionList": [
                      {
                        "meta": "",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Get every item under 199",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "356932",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 2.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.8",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "533816",
                  "name": "Five Star Chicken",
                  "uuid": "0c8aa33c-661a-457b-92a7-b9d5f1f3a385",
                  "city": "69",
                  "area": "Tata Nagar",
                  "totalRatingsString": "20+ ratings",
                  "cloudinaryImageId": "shpl268lwvouvfrdl9tb",
                  "cuisines": [
                    "Snacks",
                    "Continental"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "slaString": "25 MINS",
                  "lastMileTravel": 0.8999999761581421,
                  "slugs": {
                    "restaurant": "five-star-kitchen-tata-nagar-tata-nagar",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "D NO: - 19-3-1E, Renigunta Road, Postal Colony, Tirupati 517501",
                  "locality": "Renigunta Road",
                  "parentId": 376,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                      {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.8 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "533816",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 0.8999999761581421,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.8",
                  "totalRatings": 20,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "80656",
                  "name": "Andhra Spice",
                  "uuid": "c5230040-1463-4789-aee9-111b481e2f61",
                  "city": "69",
                  "area": "Tirumala",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "pnnakxxos7usskdxm4pu",
                  "cuisines": [
                    "Biryani",
                    "North Indian",
                    "Chinese",
                    "Indian",
                    "Mughlai",
                    "Hyderabadi",
                    "Andhra",
                    "Tandoor",
                    "Seafood",
                    "Punjabi"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 35000,
                  "costForTwoString": "₹350 FOR TWO",
                  "deliveryTime": 27,
                  "minDeliveryTime": 27,
                  "maxDeliveryTime": 27,
                  "slaString": "27 MINS",
                  "lastMileTravel": 2.700000047683716,
                  "slugs": {
                    "restaurant": "andhra-spice-air-bypass-rd-korlagunta",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "AIR Bypass Rd, SBI Colony, Royal Nagar, Tirupati, Andhra Pradesh 517501",
                  "locality": "Stv Nagar",
                  "parentId": 13971,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "Flat ₹125 off",
                    "shortDescriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
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
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                  "adTrackingID": "cid=6460954~p=7~eid=00000187-7f76-1e94-0d17-7fe000b1075b",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.7 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "80656",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 2.700000047683716,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.5",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "98464",
                  "name": "Perambur Sri Srinivasa PS4 Pure Veg Restaurant",
                  "uuid": "9cfeb1d6-80e1-45dc-8529-55f18bdb95cf",
                  "city": "69",
                  "area": "Tirumala",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "bnhseopcrbvdcarasz2c",
                  "cuisines": [
                    "South Indian",
                    "Sweets",
                    "Thalis",
                    "Chinese",
                    "Juices"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "slaString": "25 MINS",
                  "lastMileTravel": 2,
                  "slugs": {
                    "restaurant": "perambur-sri-srinivasa-ps4-pure-veg-restaurant-leelamahal-circle-korlagunta",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "20-5-1,Tirumala bypass Road,Near Leelamahal Circle,tirupati 517501",
                  "locality": "Tirumala Bypass Road",
                  "parentId": 14153,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
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
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "98464",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 2,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "140581",
                  "name": "Cream Stone Ice Cream",
                  "uuid": "76323905-29a5-4f6e-b9a0-34d2958a2b9e",
                  "city": "69",
                  "area": "Tata Nagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "0465abc3ad7327522519d6a195d10dfc",
                  "cuisines": [
                    "Ice Cream",
                    "Desserts",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 13,
                  "minDeliveryTime": 13,
                  "maxDeliveryTime": 13,
                  "slaString": "13 MINS",
                  "lastMileTravel": 0.8999999761581421,
                  "slugs": {
                    "restaurant": "cream-stone-pedda-kapu-layout-tata-nagar",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "Bus Stand, Hotel Udayee International, Tirupati Road Opp. APSRTC, Tata Nagar, Tirupati, Andhra Pradesh 517501, India",
                  "locality": "Puthalapathu Naidupeta Road",
                  "parentId": 289,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.8 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "140581",
                    "deliveryTime": 13,
                    "minDeliveryTime": 13,
                    "maxDeliveryTime": 13,
                    "lastMileTravel": 0.8999999761581421,
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
                  "id": "80127",
                  "name": "Kwality Spicy",
                  "uuid": "36f69729-da96-4563-b47b-a10111751ed5",
                  "city": "69",
                  "area": "Tirumala",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "xdfha5siz8az8frn4u8g",
                  "cuisines": [
                    "Biryani",
                    "Chinese",
                    "North Indian",
                    "Tandoor"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 17,
                  "minDeliveryTime": 17,
                  "maxDeliveryTime": 17,
                  "slaString": "17 MINS",
                  "lastMileTravel": 1.899999976158142,
                  "slugs": {
                    "restaurant": "kwality-spice-sanjay-gandhi-colony-korlagunta",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "Tirupati Rd, Navodaya Colony, Maruthi Nagar, Tirupati, Andhra Pradesh 517501, India",
                  "locality": "Tirupati Road",
                  "parentId": 14039,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "Flat ₹125 off",
                    "shortDescriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
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
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                  "adTrackingID": "cid=6476755~p=10~eid=00000187-7f76-1e94-0d17-7fe100b10a18",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.8 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "80127",
                    "deliveryTime": 17,
                    "minDeliveryTime": 17,
                    "maxDeliveryTime": 17,
                    "lastMileTravel": 1.899999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.0",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "80056",
                  "name": "Spicy Paradise",
                  "uuid": "db1e22a3-3168-4395-b3d3-5275fcc0f269",
                  "city": "69",
                  "area": "Tirumala",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "bih4aepjk30kblfkynox",
                  "cuisines": [
                    "Biryani",
                    "Kebabs",
                    "Tandoor",
                    "North Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 20,
                  "minDeliveryTime": 20,
                  "maxDeliveryTime": 20,
                  "slaString": "20 MINS",
                  "lastMileTravel": 1.399999976158142,
                  "slugs": {
                    "restaurant": "spicy-paradise-tp-area-tata-nagar",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "TP area, Tirupati, Andhra Pradesh 517501",
                  "locality": "Tata Nagar",
                  "parentId": 13072,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "Flat ₹125 off",
                    "shortDescriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.3 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "80056",
                    "deliveryTime": 20,
                    "minDeliveryTime": 20,
                    "maxDeliveryTime": 20,
                    "lastMileTravel": 1.399999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.8",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "338323",
                  "name": "Biryaniwala",
                  "uuid": "d6eefeab-a1f9-4f31-bd26-268689275d18",
                  "city": "69",
                  "area": "Tata Nagar",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "vupg5m693e3plrktauqu",
                  "cuisines": [
                    "Biryani",
                    "North Indian",
                    "Chinese",
                    "Tandoor",
                    "Desserts",
                    "Punjabi"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 19,
                  "minDeliveryTime": 19,
                  "maxDeliveryTime": 19,
                  "slaString": "19 MINS",
                  "lastMileTravel": 2,
                  "slugs": {
                    "restaurant": "biryaniwala-tata-nagar-tata-nagar",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "survey no 139/1,beside Axis bank,air bypass main road,near laxmipuram circle,Tirupati,517501",
                  "locality": "Laxmipuram Circle",
                  "parentId": 1673,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "Flat ₹125 off",
                    "shortDescriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "338323",
                    "deliveryTime": 19,
                    "minDeliveryTime": 19,
                    "maxDeliveryTime": 19,
                    "lastMileTravel": 2,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.8",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "87109",
                  "name": "Chillies Restaurant - KT Road",
                  "uuid": "42715b1a-19a8-4ac1-b984-a1cd8e950b33",
                  "city": "69",
                  "area": "Tirumala",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "dfexphbwumz4zbambcyy",
                  "cuisines": [
                    "Biryani",
                    "North Indian",
                    "Chinese",
                    "Tandoor",
                    "Kebabs"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 24,
                  "minDeliveryTime": 24,
                  "maxDeliveryTime": 24,
                  "slaString": "24 MINS",
                  "lastMileTravel": 3,
                  "slugs": {
                    "restaurant": "chillies-restaurant-kapila-teertham-road-korlagunta",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "18/1/18-9 Kapila Teertham Road, Near, Anna Rao Circle, Srinivasa Nagar, Dwaraka Nagar, Tirupati, Andhra Pradesh 517501, India",
                  "locality": "Kapila Teertham Road",
                  "parentId": 14037,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
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
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                  "adTrackingID": "cid=6460968~p=13~eid=00000187-7f76-1e94-0d17-7fe200b10d1a",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "87109",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 3,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.0",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "693421",
                  "name": "NR Biryani Centre",
                  "uuid": "c54b0d3a-6501-4b60-baae-d87aa562ea07",
                  "city": "69",
                  "area": "Tata Nagar",
                  "totalRatingsString": "Too Few Ratings",
                  "cloudinaryImageId": "f594f4f63d3e00e93203f02d40e38d24",
                  "cuisines": [
                    "Biryani",
                    "South Indian",
                    "Snacks"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "slaString": "25 MINS",
                  "lastMileTravel": 0.8999999761581421,
                  "slugs": {
                    "restaurant": "nr-biryani-centre-tata-nagar-tata-nagar",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "D No.22-5-146 Kothapalli Annamaya Chennayyagunta , Tirupati-517501",
                  "locality": "Chennayyagunta",
                  "parentId": 415203,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                      {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.8 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "693421",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 0.8999999761581421,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "--",
                  "totalRatings": 0,
                  "new": true
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "635019",
                  "name": "Chinese Hills",
                  "uuid": "bcb5dd71-d440-4512-8cfa-2a4d62239ba3",
                  "city": "69",
                  "area": "Korramenugunta",
                  "totalRatingsString": "Too Few Ratings",
                  "cloudinaryImageId": "x6cal4tyc89sxkpioccc",
                  "cuisines": [
                    "Chinese"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 26,
                  "minDeliveryTime": 26,
                  "maxDeliveryTime": 26,
                  "slaString": "26 MINS",
                  "lastMileTravel": 0.699999988079071,
                  "slugs": {
                    "restaurant": "chinese-hills-tata-nagar-tata-nagar",
                    "city": "tirupati"
                  },
                  "cityState": "69",
                  "address": "19-3-10/A2, Opp. HDFC Bank, Srinivasapuram, Renigunta Road, Chittoor, Andhra Pradesh-517501",
                  "locality": "Renigunta Road",
                  "parentId": 361600,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                      {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
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
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.6 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "635019",
                    "deliveryTime": 26,
                    "minDeliveryTime": 26,
                    "maxDeliveryTime": 26,
                    "lastMileTravel": 0.699999988079071,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "--",
                  "totalRatings": 0,
                  "new": false
                },
                "subtype": "basic"
              }
            ]
*/