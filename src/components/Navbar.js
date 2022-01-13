import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div className='p-4 border-b-4 flex flex-row justify-center'>
                <div className='pr-20'>
                    <Link to={'#'}>Company Logo</Link>
                </div>

                <div className='flex flex-wrap justify-between text-green-400'>
                    <Link to={'#'} className='px-2'>for individuals</Link>
                    <Link to={'#'} className='px-2'>for businesses</Link>
                    <Link to={'#'} className='px-2'>for outreach</Link>
                    <Link to={'#'} className='px-2'>Store</Link>
                    <Link to={'#'} className='px-2'>Blog</Link>
                    <Link to={'#'} className='px-2'>About</Link>
                </div>

                <div className='pl-20 inline-flex'>
                    <Link to="#" className='px-2' >
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16" >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                    </Link>
                    <Link to="#" className='px-2' >
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16" >
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                        </svg>
                    </Link>
                </div>
                {/* <div className='px-4'>
                </div> */}

               
            </div>
        )
    }
}

export default Navbar;
