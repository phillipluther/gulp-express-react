(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var 
    React = require('react'),
    TestParent = require('./testParent.jsx');
React.render(React.createElement(TestParent, null), document.getElementById('app'));

},{"./testParent.jsx":3,"react":"react"}],2:[function(require,module,exports){
var React = require('react');
module.exports = React.createClass({displayName: "exports",
    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("p", null, React.createElement("strong", null, this.props.name), " wired up properly.")
            )
        );
    }
});

},{"react":"react"}],3:[function(require,module,exports){
var 
    React = require('react'),
    TestChild = require('./testChild.jsx');

module.exports = React.createClass({displayName: "exports",
    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, " This is the parent."), 
                React.createElement(TestChild, {name: "TestChild"})
            )
        );
    }
});
},{"./testChild.jsx":2,"react":"react"}]},{},[1]);

//# sourceMappingURL=scripts-bundle.js.map