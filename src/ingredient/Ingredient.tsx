import React, {useState} from 'react'
import {Checkbox, CheckboxLabel, InputUi} from '../components'
import {Ingredient as IngredientProps} from '../interfaces/ingredient'

interface Props {
    ingredient: IngredientProps
    onChange: (ingredient: IngredientProps) => any
}

const Ingredient: React.FunctionComponent<Props> = ({ingredient, onChange}) => {
    const [required, switchRequired] = useState(ingredient.required)
    const [name, changeName] = useState(ingredient.name)

    return (
        // div, otherwise applies flex from parent
        <div>
            <InputUi value={name}
                     type='text'
                     placeholder='Ingredient name...'
                     onChange={(e) => {
                         changeName(e.target.value)
                         ingredient.name = e.target.value
                         onChange(ingredient)
                     }}/>
            <Checkbox type='checkbox' checked={required} onChange={(e) => {
                switchRequired(e.target.checked)
                ingredient.required = e.target.checked
                onChange(ingredient)
            }}/>
            <CheckboxLabel>Required?</CheckboxLabel>
        </div>
    )
}


export default Ingredient
