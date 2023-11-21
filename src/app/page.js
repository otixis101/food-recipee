import Newsletter from '@/components/Newsletter'
import Image from 'next/image'


export default function Home() {
  return (
    <main >

      <div className="max-w-[85rem] mx-auto px-8 py-12 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-8 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight ">Discover Culinary Delights from Around the World with <span className="text-primary">Recipee.</span></h1>
            <p className="mt-3 text-base md:text-lg text-gray-700 ">Passed down Recipes and Secret Formulas from generations... Explore a World of Flavors, One Recipe at a Time.</p>


            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a className="py-5 px-16 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-alternate text-white hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none" href="#">
                Get Cooking Today
              </a>
              {/* <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " href="#">
                Contact sales team
              </a> */}
            </div>

            <div className='my-8 w-full'>

              <div className="relative w-full lg:w-2/3 my-1">
                <input type="text" id="hs-hero-signup-form-floating-input-last-name" className="peer px-6 py-4 block w-full rounded-full shadow-lg shadow-gray-100 border border-gray-200 text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="Search for a Recipe" />
                <a class="absolute top-1 end-1 bottom-1 inline-flex justify-center items-center aspect-square text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition " href="#">
                  <svg class="flex-shrink-0 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </a>
                <label htmlFor="hs-hero-signup-form-floating-input-last-name" className="absolute top-0 start-0 px-6 py-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">Find Your Next Favorite Recipe</label>
              </div>
              <small className='text-xs text-secondary'>Browse by Cuisine, Dietary Preferences, or Occasion</small>
            </div>


          </div>


          <div className="relative ms-4">
            <img className="w-full aspect-[1/1.25] rounded-md" src="/hero-image.jpg" alt="Image Description" />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>


            <div className="absolute bottom-0 start-0">
              <svg className="w-2/3 ms-auto h-auto text-white dark:text-slate-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                <rect x="531" y="49" width="99" height="99" fill="currentColor" />
              </svg>
            </div>

          </div>

        </div>

      </div>

      {/* Another Section */}



      <div class="max-w-[85rem] px-8 py-10 sm:px-6 lg:px-8 lg:py-24 mx-auto">
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">Delight Your Palate with Our Featured Recipes</h2>
          <p class="mt-1 text-gray-600 ">From Classic Comforts to Exotic Delicacies, Explore a Feast of Culinary Inspiration</p>
        </div>

        <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">

          <a class="group rounded-xl overflow-hidden" href="/view-recipe">
            <div class="sm:flex">
              <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="/food-image.jpg" alt="Image Description" />
              </div>

              <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  Recipe Name
                </h3>
                <p class="mt-3 text-gray-600 ">
                  Savor the rich flavors of this [type of cuisine] classic. Perfect for [occasion or season]
                </p>
                <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  View Recipe
                  <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </p>
              </div>
            </div>
          </a>


          <a class="group rounded-xl overflow-hidden" href="/view-recipe">
            <div class="sm:flex">
              <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="/food-image.jpg" alt="Image Description" />
              </div>

              <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  Recipe Name
                </h3>
                <p class="mt-3 text-gray-600 ">
                  Savor the rich flavors of this [type of cuisine] classic. Perfect for [occasion or season]
                </p>
                <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  View Recipe
                  <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </p>
              </div>
            </div>
          </a>


          <a class="group rounded-xl overflow-hidden" href="/view-recipe">
            <div class="sm:flex">
              <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="/food-image.jpg" alt="Image Description" />
              </div>

              <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  Recipe Name
                </h3>
                <p class="mt-3 text-gray-600 ">
                  Savor the rich flavors of this [type of cuisine] classic. Perfect for [occasion or season]
                </p>
                <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  View Recipe
                  <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </p>
              </div>
            </div>
          </a>


          <a class="group rounded-xl overflow-hidden" href="/view-recipe">
            <div class="sm:flex">
              <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="/food-image.jpg" alt="Image Description" />
              </div>

              <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  Recipe Name
                </h3>
                <p class="mt-3 text-gray-600 ">
                  Savor the rich flavors of this [type of cuisine] classic. Perfect for [occasion or season]
                </p>
                <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  View Recipe
                  <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </p>
              </div>
            </div>
          </a>


        </div>

        <div className="flex justify-center w-full p-8">
          <a className='text-center block p-4 text-sm rounded-full border cursor-pointer hover:bg-gray-50 hover:text-secondary' href="/recipes">View More</a>
        </div>

      </div>



      <Newsletter />


    </main >
  )
}
