import Food from './Food';

const FoodList = () => {
    return (
        <div className="container mb-2">
            <Food food="rice" classes="Carbohydrate" time="45mins" />
            <Food food="Atama" classes="Vegetable" time="30mins" />
            <Food food="Edikikong" classes="Vegetable" time="30mins" />
            <Food food="Beans" classes="Protein" time="60mins" />
            <Food food="White Soup" classes="Carbohydrate/Protein" time="50mins" />
            <Food food="Oha Soup" classes="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nihil et vero consequatur praesentium molestiae, eveniet ipsam voluptatem velit repellat assumenda vel atque doloremque nesciunt voluptatibus! Sapiente assumenda sequi distinctio." time="50mins" />

        </div>
    );
}

export default FoodList;
