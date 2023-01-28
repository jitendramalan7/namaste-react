// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";

import { filterData } from "../utils/helper"


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  /* 
    empty dependency array => once after render
    deps array[search text] => once after initial render + everytime after rerender(my searchText is changes.)
  */
  useEffect(() => {
    // API call
    getRestaurants();
  }, [])

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.499802&lng=77.061617&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

  // const online = useOnline();
  // if(!online) {
  //   return <h1>🔴 Offline, please check your internet connection!!</h1>
  // }

  /* 
  Conditional Rendering
    If restaurant is empty => Shimmer UI
    If restaurant has data => Load actual data UI
  */

  if(!allRestaurants) return null;

  // if(filteredRestaurants?.length === 0) return <h1>No Restaurant Found.</h1>

  return (allRestaurants?.length === 0) ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="input"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick = { () => {
            const data = filterData(searchText, allRestaurants)
            setFilteredRestaurants(data)
        }
        } >Search</button>
      </div>
      <div className="restraunt-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}><RestaurantCard {...restaurant.data} key={restaurant.data.id} /></Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
