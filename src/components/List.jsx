var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
    { "id": 1, "text": "cheese" },
    { "id": 2, "text": "milk" },
    { "id": 3, "text": "eggs" },
    { "id": 4, "text": "toast" },
    { "id": 5, "text": "sausages" }
];

var List = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />
        });
        return (
            <ul>{listItems}</ul>
        );
    }
});
module.exports = List;
