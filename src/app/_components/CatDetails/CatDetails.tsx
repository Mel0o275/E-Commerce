export default function CatDetails({ data }: { data: any }) {
  if (!data) {
    return <p className="text-center py-10">No category data available</p>;
  }

  return (
    <div className="container w-full md:w-[80%] mx-auto p-6 flex flex-col items-center mt-12">
      <div className="relative w-[500px] h-[500px] rounded-2xl overflow-hidden shadow-md">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            {data.name}
          </h1>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {data?.slug || "Browse the best products in this category."}
        </p>
      </div>
    </div>
  )
}
