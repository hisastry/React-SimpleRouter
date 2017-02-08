import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
    render: function() {
        return <p>Template</p>
    }
});

ReactDOM.render(<App/>, document.querySelector('#app'));