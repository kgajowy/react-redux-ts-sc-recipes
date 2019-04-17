import React, {useState} from 'react'
import {Checkbox, CheckboxLabel, Input} from '../components'
import {Ingredient as IngredientProps} from '../interfaces/ingredient'

interface Props {
    ingredient: IngredientProps
    onChange: (ingredient: IngredientProps) => any
}

const Ingredient: React.FunctionComponent<Props> = ({ingredient: {required: defaultRequired = false, name: defaultName, ...rest}, onChange}) => {
    const [required, switchRequired] = useState(defaultRequired)
    const [name, changeName] = useState(defaultName)

    return (
        // div, otherwise applies flex from parent
        <div>
            <Input value={name}
                   type='text'
                   placeholder='Ingredient name...'
                   onChange={(e) => {
                       changeName(e.target.value)
                       onChange({...rest, name: e.target.value, required})
                   }}/>

            <Checkbox type='checkbox' checked={required} onChange={(e) => {
                switchRequired(e.target.checked)
                onChange({...rest, name, required: e.target.checked})
            }}/>
            <CheckboxLabel>Required?</CheckboxLabel>
        </div>
    )
}


export default Ingredient
