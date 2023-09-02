import CartCountBadge from "./CartCountBadge"
import Searchbar from "./Searchbar"
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'

const Nav = () => {
  return (
    <header className='sticky top-0 padding-x absolute z-10 w-full bg-white'>
        <nav className="flex justify-between items-center h-[60px] max-container">
            <a href="/"><span className='text-2xl font-mono font-[650] p-6 bg-gradient-to-r text-transparent bg-clip-text from-blue-700 to-purple-500'>GamingHub.com</span></a>
            <Searchbar/>
            <div className="flex gap-4 p-6">
                <div className="icon__wrapper">
                    <AiOutlineUser/>
                </div>
                <div className="icon__wrapper relative">
                    <AiOutlineShoppingCart/>
                    <CartCountBadge size='w-5 h-5'/>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Nav