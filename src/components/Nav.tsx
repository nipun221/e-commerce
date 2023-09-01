import Searchbar from "./Searchbar"

const Nav = () => {
  return (
    <header className='padding-x absolute z-10 w-full'>
        <nav className="flex justify-between items-center bg-blue-200 h-[60px] max-container">
            <a href="/"><h2 className='text-2xl font-mono text-black font-[650] p-6'>Boom-mart</h2></a>
            <Searchbar/>
            <div className='flex justify-between items-center p-4'>
                <a href="/">

                    <h2 className='text-[15px] font-mono text-black font-[600] p-2'>Cart</h2>
                </a>
                <a href="/"><h2 className='text-[15px] font-mono text-black font-[600] p-4'>Profile</h2></a>
                <a href="/"><h2 className='text-[15px] font-mono text-black font-[600] p-4'>GitHub</h2></a>
            </div>
        </nav>
    </header>
  )
}

export default Nav