var 
    React = require('react'),
    TestChild = require('./testChild.jsx');

module.exports = React.createClass({
    render: function(){
        return (
            <div>
                <h1> This is the parent.</h1>
                <TestChild name="TestChild"/>
            </div>
        );
    }
});
