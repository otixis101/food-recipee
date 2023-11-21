
const page = () => {
    return (
        <>
            <div className="max-w-3xl px-8 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
                <div className="max-w-2xl">

                    <div className="flex justify-between items-center mb-6">
                        <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                            <div className="flex-shrink-0">
                                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                            </div>

                            <div className="grow">
                                <div className="flex justify-between items-center gap-x-2">
                                    <div>

                                        <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                                            <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                                                <span className="font-semibold text-gray-800">
                                                    Leyla Ludic
                                                </span>


                                                <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl dark:bg-black" role="tooltip">

                                                    <div className="p-4 sm:p-5">
                                                        <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                                                            <div className="flex-shrink-0">
                                                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                                                            </div>

                                                            <div className="grow">
                                                                <p className="text-lg font-semibold text-gray-200">
                                                                    Leyla Ludic
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm text-gray-400">
                                                            Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over the world.
                                                        </p>
                                                    </div>



                                                    <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                                                        <ul className="text-xs space-x-3">
                                                            <li className="inline-block">
                                                                <span className="font-semibold text-gray-200">56</span>
                                                                <span className="text-gray-400">articles</span>
                                                            </li>
                                                            <li className="inline-block">
                                                                <span className="font-semibold text-gray-200">1k+</span>
                                                                <span className="text-gray-400">followers</span>
                                                            </li>
                                                        </ul>

                                                        <div>
                                                            <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                                                </svg>
                                                                Follow
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>


                                        <ul className="text-xs text-gray-500">
                                            <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                                                Jan 18
                                            </li>
                                            <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                                                8 min read
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="space-y-5 md:space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold md:text-3xl ">Recipe for making [Food Name]</h2>

                            <figure>
                                <img className="w-full object-cover rounded-xl" src="/food-image.jpg" alt="Image Description" />
                            </figure>
                            <p className="text-lg text-gray-800">Indulge in the delightful flavors of our [Recipe Name]. This [cuisine type] classic is perfect for [occasion] and guaranteed to impress</p>
                        </div>




                        <div className="flex flex-col gap-6">
                            <h1 className="text-lg font-semibold">
                                Ingredients:
                            </h1>
                            <ul role="list" class="flex flex-wrap gap-4">
                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-gray-100 text-alternate">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        Ingredient 1
                                    </span>
                                </li>
                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-gray-100 text-alternate">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        Ingredient 2
                                    </span>
                                </li>
                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-gray-100 text-alternate">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        Ingredient 3
                                    </span>
                                </li>
                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-gray-100 text-alternate">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        Ingredient 4
                                    </span>
                                </li>
                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-gray-100 text-alternate">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        Ingredient 5
                                    </span>
                                </li>
                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-gray-100 text-alternate">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        Ingredient 6
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="my-8 flex flex-col gap-4">
                            <h1 className="text-lg font-semibold">Instructions:</h1>
                            <ul class="list-disc text-gray-800 space-y-6">
                                <li>
                                    <p className="text-sm font-semibold">Preparation:</p>
                                    <span className="text-sm text-gray-600">
                                        Now this is a story all about how, my life got flipped turned upside down klsajlkmds asahsjsd
                                        sdjkshfskldf eore mcpo xapod p sdopkpdsmx p askjahidiuwo siohcnwoqfhuhf dcisudbb d c dib djibsjahd
                                        asjsjhhdc hjdc dsdcnzkkncxzn saix aoa aojka d
                                    </span>
                                </li>
                                <li>
                                    <p className="text-sm font-semibold">Cooking Guide:</p>
                                    <span className="text-sm text-gray-600">
                                        Now this is a story all about how, my life got flipped turned upside down klsajlkmds asahsjsd
                                        sdjkshfskldf eore mcpo xapod p sdopkpdsmx p askjahidiuwo siohcnwoqfhuhf dcisudbb d c dib djibsjahd
                                        asjsjhhdc hjdc dsdcnzkkncxzn saix aoa aojka d
                                    </span>
                                </li>
                                <li>
                                    <p className="text-sm font-semibold">Enjoy:</p>
                                    <span className="text-sm text-gray-600">
                                        Now this is a story all about how, my life got flipped turned upside down...
                                    </span>
                                </li>

                            </ul>
                        </div>



                    </div>

                </div>
            </div >


        </>



    )
}

export default page