import Product from "../interfaces/product.interface";

const rand = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TitleArray = [
    "Яблоко",
    "Банан",
    "Апельсин",
    "Клубника",
    "Виноград",
    "Брокколи",
    "Морковь",
    "Капуста",
    "Помидор",
    "Огурец",
    "Пицца",
    "Спагетти",
    "Суши",
    "Бургер",
    "Торт",
    "Салат",
    "Суп",
    "Печенье",
    "Рис",
    "Картофель"
]


const RenderProductList = (length: number = 10): Product[] => {
    return Array.from({ length: length }, () => ({
        img: "https://static.tildacdn.com/tild6439-6561-4330-b262-653263333332/kazan_category_outsi.jpg",
        title: TitleArray[rand(0, TitleArray.length - 1)],
        squirrels: rand(0, 5),
        fats: rand(0, 20),
        carbohydrates: rand(2, 5),
        callories: rand(2, 8)
    }))
}

export default RenderProductList