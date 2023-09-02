import CategoryCard from "./CategoryCard"

const data = [
    {
        id: 1,
        name: 'Apple Macbook Series',
        count: "9 Products",
        image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id: 2,
        name: 'HP Gaming Series',
        count: "8 Products",
        image: "https://m.media-amazon.com/images/I/51UAd405cWL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 3,
        name: 'Asus Vivobook Series',
        count: "7 Products",
        image: "https://m.media-amazon.com/images/I/71lYhcc++AL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id: 4,
        name: 'Sony Playstation Series',
        count: "9 Products",
        image: "https://m.media-amazon.com/images/I/51wPWj--fAL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 5,
        name: 'Microsoft Xbox Series',
        count: "8 Products",
        image: "https://m.media-amazon.com/images/I/51Fh2GpJs0L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 6,
        name: 'Hp All-in-One Series',
        count: "7 Products",
        image: "https://m.media-amazon.com/images/I/71rk11Fh8JL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 7,
        name: 'In Playstation Games',
        count: "9 Products",
        image: "https://m.media-amazon.com/images/I/61A5Y9xISzL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 8,
        name: 'In PC accessories',
        count: "8 Products",
        image: "https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_UY327_FMwebp_QL65_.jpg",
    },
]

const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
            {data.map((el) => (
                <CategoryCard 
                    key={el.id}
                    name={el.name}
                    count={el.count}
                    image={el.image}
                />
            ))}
        </div>
    </div>
  )
}

export default Category