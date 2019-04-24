import React, {Component} from 'react'
import RecipeContainer from './recipe/RecipeContainer'

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>New items require pressing enter or clicking on plus sign to be added.</li>
                    <li>Editing existing items has 'autosave' (with debounce) feature</li>
                </ul>
                <RecipeContainer/>
            </div>
        )
    }
}

export default App
