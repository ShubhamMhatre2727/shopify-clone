function Hero() {

    

  return (
    <div className="w-full bg-inherit relative">
        <video muted autoPlay loop className="w-full">
            {
                (window.innerWidth > 600)?
                <source src="src/assets/hero-big.webm" />
                :
                <source src="src/assets/hero-small.webm"  />
            }
        </video>
        
        <div className="absolute top-1/5 text-6xl font-light w-full px-4">
            <h1>Be the next</h1>
            <h1>Category creator</h1>

            <p className=" w-9/12 text-lg font-normal mt-10">Dream big, build fast, and grow far on Shopify.</p>

            <button className="bg-white text-black text-lg font-semibold rounded-full p-2 w-full">Start for free</button>
            
            <p className="text-center text-lg font-normal mt-2">
                <a href="" className="border-b-2">Why we build Shopify</a>
            </p>
        </div>
    </div>
  )
}

export default Hero