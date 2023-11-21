import React from 'react'

const Newsletter = () => {
  return (
    <div className="max-w-6xl py-10 px-8 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        <div className="max-w-xl text-center mx-auto">
            <div className="mb-5">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight ">Sign up to our newsletter</h2>
            </div>

            <form>
            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div className="w-full">
                <label for="hero-input" className="sr-only">Search</label>
                <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-alternate focus:ring-alternate disabled:opacity-50 disabled:pointer-events-none " placeholder="Enter your email"/>
                </div>
                <a className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-alternate text-white hover:bg-alternate disabled:opacity-50 disabled:pointer-events-none" href="#">
                Subscribe
                </a>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Newsletter