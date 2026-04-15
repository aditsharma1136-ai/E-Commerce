import Footer from '../Components/Footer'
import { Link, Outlet } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      {/* CATEGORY LINKS */}
      <div className='flex items-center justify-center gap-8'>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-500 text-gray-600 my-7' to='/shop/men'>Men's Category</Link>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-500 text-gray-600 my-7' to='/shop/women'>Women's Category</Link>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-500 text-gray-600 my-7' to='/shop/kids'>Kids Category</Link>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-500 text-gray-600 my-7' to='/shop/beauty'>Beauty</Link>
      </div>
      <Outlet />

      <Footer />
    </div>
  );
};

export default Shop;