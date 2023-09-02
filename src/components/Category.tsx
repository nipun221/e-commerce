import CategoryCard from "./CategoryCard"

const data = [
    {
        id: 1,
        name: 'Item 1',
        count: "9 Products",
        image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id: 2,
        name: 'Item 2',
        count: "8 Products",
        image: "https://m.media-amazon.com/images/I/61bX2AoGj2L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id: 3,
        name: 'Item 3',
        count: "7 Products",
        image: "https://m.media-amazon.com/images/I/71lYhcc++AL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id: 1,
        name: 'Item 1',
        count: "9 Products",
        image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id: 2,
        name: 'Item 2',
        count: "8 Products",
        image: "https://m.media-amazon.com/images/I/61bX2AoGj2L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id: 3,
        name: 'Item 3',
        count: "7 Products",
        image: "https://m.media-amazon.com/images/I/71lYhcc++AL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id: 1,
        name: 'Item 1',
        count: "9 Products",
        image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id: 2,
        name: 'Item 2',
        count: "8 Products",
        image: "https://m.media-amazon.com/images/I/61bX2AoGj2L._AC_UL480_FMwebp_QL65_.jpg",
    },
]

const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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