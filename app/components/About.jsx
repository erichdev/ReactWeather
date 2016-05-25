var React = require('react');

var About = (props) => {
    return (
        <div>

            <h1 className="text-center">About</h1>
            <p>A simple weather application built with React.</p>
            <p>Here are some tools I used: </p>
            <ul>
                <li>React</li>
                <li>OpenWeatherMap</li>
            </ul>
        </div>
    )
};

module.exports = About;