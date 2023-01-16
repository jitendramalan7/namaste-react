import RestaurantCard from './RestaurantCard'
import restaurantList from '../constants'


const Body = () => {
    return (
       <div className="restraunt-list">
        {
            
            restaurantList?.data?.cards.map((restaurant) => {
               return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            })
        }
       </div>
    )
}

export default Body