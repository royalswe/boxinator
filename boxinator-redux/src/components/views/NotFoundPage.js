import React from 'react';

class HomePage extends React.Component {

    render() {
        // Just a simple 404 page
        return (
            <div>
                <h2>404</h2> 
                <h4>Could not find the page <code>{window.location.pathname}</code></h4>
            </div>
        )
    }
}

export default HomePage;