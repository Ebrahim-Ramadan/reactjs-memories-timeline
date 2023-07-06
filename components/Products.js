import { NavLink, Outlet } from 'react-router-dom';
import featuredpage from '../assets/featured-bg.jpg'
import './Products.css'



  
export const Products = () => {
    return (
    

        <div className='page-content'>
                        <div className='featured' style={{display: 'flex', justifyContent: 'center' }}>
            <img src={featuredpage} alt='featured' style={{maxHeight:'332px', textAlign:'center'}}/>

            </div>
        <div className='searchbar' style={{padding:'20px 0px', display: 'flex',
    justifyContent: 'center'}}>

        </div>
                <div>
                <nav className='navbar-featured-desirebased'>
            <NavLink to='featured'>Featured</NavLink>
            <NavLink to='new'>Desire-based</NavLink>
        </nav>
        </div>


            <Outlet />
        </div>

    );
};