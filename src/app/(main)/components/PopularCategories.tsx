'use client'

function CategoriesCard() {
    return (
        <div className="max-w-sm p-6 bg-white rounded-2xl shadow-md text-center border border-gray-200">
            <div className="flex justify-center items-center mb-4">
                <div className="p-3 bg-violet-100 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8 text-violet-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.232 5.232a2.828 2.828 0 114 4L7.5 21H3v-4.5l12.232-12.268z"
                        />
                    </svg>
                </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Home Renovation</h2>
            <p className="text-gray-600 mt-2">
                Painting, flooring, kitchen, bathroom renovations
            </p>
        </div>
    )
}

export default function PopularCategories() {
    return (
        <section className="py-16">
            <div className="text-center md:text-left space-y-6 flex flex-col">
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Popular categories
                    </h1>
                </div>
                <div className="flex justify-center">
                    <p className="text-lg text-gray-600">
                        Browse through our most popular service categories
                    </p>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 items-center gap-8 px-6 pt-12">
                <CategoriesCard/>
                <CategoriesCard/>
                <CategoriesCard/>
                <CategoriesCard/>
                <CategoriesCard/>
                <CategoriesCard/>
                <CategoriesCard/>
                <CategoriesCard/>
            </div>
        </section>
    );
}
