import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>Lorem Ipsum</h1>
            <ul>
                <Link to='#'><li>Home</li></Link>
                <Link to='#'><li>Link 1</li></Link>
                <Link to='#'><li>Link 2</li></Link>
                <Link to='#'><li>Link 3</li></Link>
            </ul>
        </div>
    )
}