import Cards from './cards.js';
import hotelsData from './data.js';


const CardsList = props =>{
        return(
            <div className="cardsList">
                {
                hotelsData.map(card => (<Cards name={card.name} city={card.city} country={card.country} rooms={card.rooms} price={card.price} lon={card.lon} lat={card.lat} photo={card.photo} description={card.description} />))
                }
            </div>
        )
};

export default CardsList;
