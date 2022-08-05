import React from 'react'
import {Link} from 'react-router-dom'
import './homePage.css' 

function HomePage() {
  return (
    <div>
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Home</Link>
                        <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    </form>
                </div>
            </nav>
        </header>
        <main>
            <div className='container'>
                <div className='bg-light p-5 mt-4 rounded-3'>
                    <h1>Welcome to the Wireframe Bakery</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio quia est repellendus accusamus, qui cumque ut ratione, totam consequatur rerum earum quos laborum pariatur sint perspiciatis nesciunt neque repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis est, voluptates distinctio dolor repellat eum placeat harum quibusdam fugit nobis asperiores alias nisi mollitia dolorem voluptatibus quae, nostrum dignissimos!</p>
                    <Link to='/pos' className='btn btn-primary'>Our Products</Link>
                </div>
            </div>
        </main>
    </div>
  )
}

export default HomePage