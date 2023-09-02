interface Props {
    image: string;
    name: string;
    count: string;
}

const CategoryCard: React.FC<Props> = ({ image, name, count }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-400 hover:scale-105 transition-transform rounded-lg">
        <div className="flex justify-between items-center">
            <div className="space-y-4">
                <h3 className="font-medium text-xl">{name}</h3>
                <p className="text-gray-500">{count}</p>
            </div>
            <img src={image} alt={name} className="w-20 h-20 object-cover rounded-full" />
        </div>
    </div>
  )
}

export default CategoryCard