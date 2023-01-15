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
const config = [
    {
        type: "carousel",
        cards: [
            {
                offerName:"50% off"
            },
            {
                offerName:"No Delivery Charge"
            },
        ]
    },
    {
        type: "restraunts",
        cards: [
            {
                name: "Burger King",
                image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wo6h0uqbit6yuoeudu0l",
                cusines: ["Burger", "American"],
                ratings: "4.2"
            },
            {
                name: "KFC",
                image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wo6h0uqbit6yuoeudu0l",
                cusines: ["Burger", "American"],
                ratings: "4.2"
            },
        ]
    }
]

const restrauntList = [
    {
        name: "Burger King",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wo6h0uqbit6yuoeudu0l",
        cusines: ["Burger", "American"],
        ratings: "4.2"
    },
    {
        name: "Burger King",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wo6h0uqbit6yuoeudu0l",
        cusines: ["Burger", "American"],
        ratings: "4.2"
    },
    {
        name: "Burger King",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wo6h0uqbit6yuoeudu0l",
        cusines: ["Burger", "American"],
        ratings: "4.2"
    },
    {
        name: "Burger King",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wo6h0uqbit6yuoeudu0l",
        cusines: ["Burger", "American"],
        ratings: "4.2"
    },
    {
        name: "Burger King",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wo6h0uqbit6yuoeudu0l",
        cusines: ["Burger", "American"],
        ratings: "4.2"
    },

]

const RestrauntCard = () => {
    return (
        <div className="card">
            <img src={burgerKing.image}/>
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(", ")}</h3>
            <h4>{burgerKing.ratings} stars</h4>
        </div>
    )
}


const Body = () => {
    return (
       <div className="restraunt-list">
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
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
