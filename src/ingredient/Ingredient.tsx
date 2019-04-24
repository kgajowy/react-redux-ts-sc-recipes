import React, {useState} from 'react'
import styled from 'styled-components'
import {Checkbox, CheckboxLabel} from '../components'
import {Input} from '../components/input/Input'
import {Remove} from '../components/remove/Remove'
import {Ingredient as IngredientProps} from '../interfaces/ingredient'

interface Props {
    ingredient: IngredientProps
    onChange: (ingredient: IngredientProps) => any
    onDelete: (ingredient: IngredientProps) => any
}

const Ingredient: React.FunctionComponent<Props> = ({ingredient, onChange, onDelete}) => {
    const [required, switchRequired] = useState(ingredient.required)

    return (
        // div, otherwise applies flex from parent
        <Container>
            <Input
                defaultValue={ingredient.name}
                autoSave
                onSubmit={(value) => {
                    ingredient.name = value
                    onChange(ingredient)
                }}
                inputProps={{
                    placeholder: 'Ingredient name...',
                }}
            />
            <Checkbox type='checkbox' checked={required} onChange={(e) => {
                switchRequired(e.target.checked)
                ingredient.required = e.target.checked
                onChange(ingredient)
            }}/>
            <CheckboxLabel>Required?</CheckboxLabel>
            <Remove onClick={() => onDelete(ingredient)}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`


export default Ingredient
