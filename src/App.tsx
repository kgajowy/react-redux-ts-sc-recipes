import React, {Component} from 'react'
import Recipe from './recipe/Recipe'

const recipe = {
    name: 'pomidorowa',
    ingredients: [{
        name: 'pomidory',
        required: true,
        id: 0,
    }, {
        name: 'pieprz',
        id: 1,
    }]
}

class App extends Component {
    render() {
        return (
            <div>
                <Recipe {...recipe}/>
            </div>
        )
    }
}

export default App
