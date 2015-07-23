var React = require('react');
module.exports = React.createClass({
    render: function(){
        return (
            <div>
                <p><strong>{this.props.name}</strong> wired up properly.</p>
            </div>
        );
    }
});