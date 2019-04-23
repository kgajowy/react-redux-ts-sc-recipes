import {shallow, ShallowWrapper} from 'enzyme'
import React from 'react'
import {Checkbox, InputUi} from '../components'
import {Ingredient as IngredientType} from '../interfaces/ingredient'
import Ingredient from './Ingredient'

describe('MyComponent', () => {
    let onChange: jest.Mock
    let ingredient: IngredientType

    beforeEach(() => {
        onChange = jest.fn()
        ingredient = {
            id: 0,
            name: ''
        }
    })

    it('should render', () => {
        expect(() => shallow(<Ingredient ingredient={ingredient} onChange={onChange}/>)).not.toThrow()
    })

    describe(`when it has require props provided`, () => {
        let component: ShallowWrapper
        beforeEach(() => {
            ingredient = {
                id: 0,
                name: 'Noodle'
            }
            component = shallow(<Ingredient ingredient={ingredient} onChange={onChange}/>)
        })

        it(`should contain Ingredient name`, () => {
            expect(component.find(InputUi).length).toEqual(1)
            expect(component.find(InputUi).get(0).props.value).toEqual(ingredient.name)
        })

        it(`should have unchecked input if not required`, () => {
            expect(component.find(Checkbox).length).toEqual(1)
            expect(component.find(Checkbox).get(0).props.checked).toEqual(false)
        })

        it(`should have checked input if ingredient is required`, () => {
            component = shallow(<Ingredient ingredient={{...ingredient, required: true}} onChange={onChange}/>)
            expect(component.find(Checkbox).get(0).props.checked).toEqual(true)
        })

        describe(`when changing name`, () => {
            const newName = 'Ramen'
            beforeEach(() => {
                onChange.mockReset()
                component.find(InputUi).simulate('change', {target: {value: newName}})
            })

            it(`should trigger onChange`, () => {
                expect(onChange).toHaveBeenCalledWith({id: ingredient.id, name: newName, required: false})
            })

            it(`should change the name`, () => {
                expect(component.find(InputUi).get(0).props.value).toEqual(newName)
            })
        })
        describe(`when toggling required flag`, () => {
            beforeEach(() => {
                onChange.mockReset()
                component.find(Checkbox).simulate('change', {target: {checked: !ingredient.required}})
            })

            it(`should trigger onChange`, () => {
                expect(onChange).toHaveBeenCalledWith({...ingredient, required: !ingredient.required})
            })

            it(`should change the value of checkbox`, () => {
                expect(component.find(Checkbox).get(0).props.checked).toEqual(!ingredient.required)
            })
        })
    })

})
