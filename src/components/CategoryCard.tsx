interface Props {
    image: string;
    name: string;
    count: string;
}

const CategoryCard: React.FC<Props> = ({ image, name, count }) => {
  return (
    <div className="w-[350px] h-[100px] border border-gray-200 hover:border-gray-400 hover:scale-105 transition-transform rounded-lg">
        <div className="flex justify-between items-center">
            <div className="space-y-4">
                <h3 className="font-medium text-xl text-center mt-2 px-4">{name}</h3>
                <p className="text-gray-500 text-center">{count}</p>
            </div>
            <img src={image} alt={name} className="w-[100px]" />
        </div>
    </div>
  )
}

export default CategoryCard