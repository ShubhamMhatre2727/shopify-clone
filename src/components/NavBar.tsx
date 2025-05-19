import shopifyLogo from '../assets/shopify_logo_darkbg.svg'

function NavBar({setIsOpen}:{setIsOpen:(prevState:any)=>void}) {

    function toggleSidebar(){
        setIsOpen((prevState:boolean) => !prevState)
    }           

  return (
    <div className="fixed top-0 w-full flex justify-between items-center  py-4 bg-transparent z-20 sm:px-24 px-4">
        <div className='flex items-center space-x-12'>
            <img src={shopifyLogo} alt="" className='w-24 sm:w-32' />

        <div className="hidden sm:flex space-x-8 text-md [&>a]:hover:underline">
            <a href="">Solutions</a>
            <a href="">Pricing</a>
            <a href="">Resources</a>
            <a href="">Enterprise</a>
            <a href="">What's New</a>
        </div>
        </div>

        <div className='sm:hidden' onClick={toggleSidebar}>burger</div>
    </div>
      )
}

export default NavBar