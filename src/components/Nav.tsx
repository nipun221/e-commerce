import Searchbar from "./Searchbar"
import Cart from "../assets/icons8-cart-30.png"
import User from "../assets/icons8-male-user-50.png"
import Github from "../assets/icons8-github-64.png"

const Nav = () => {
  return (
    <header className='padding-x absolute z-10 w-full'>
        <nav className="flex justify-between items-center bg-blue-200 h-[60px] max-container">
            <a href="/"><h2 className='text-2xl font-mono text-black font-[650] p-6'>Boom-mart</h2></a>
            <Searchbar/>
            <div className='flex justify-between items-center p-4'>
                <a href="/">
                    <p className='text-[15px] font-mono text-black font-[600] p-2'>
                        <img 
                            src={Cart}
                            alt="Cart"
                            width={28}
                            height={28}
                        />
                        Cart 
                    </p>
                </a>
                <a href="/">
                    <p className='text-[15px] font-mono text-black font-[600] p-2'>
                        <img 
                            src={User}
                            alt="User"
                            width={28}
                            height={28}
                        />
                        User
                    </p>
                </a>
                <a href="https://github.com/nipun221/e-commerce">
                    <h2 className='text-[15px] font-mono text-black font-[600] p-2'>
                        <img 
                            src={Github}
                            alt="Github"
                            width={28}
                            height={28}
                        />
                        GitHub
                    </h2>
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Nav