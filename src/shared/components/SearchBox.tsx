import React from 'react'
import { useForm } from '../../hooks/useForm'

interface Props {
    onInputValue: ( inputValue: string ) => void;
    searchboxClass: string;
}

// export const SearchBox = ( { onInputValue = ( inputValue: string ) => {} }, {isMain}: { isMain: boolean}  ) => {
export const SearchBox = ( { onInputValue, searchboxClass }: Props ) => {
    const { onInputChange, onResetForm, formState } = useForm({
        inputValue: '',
    });


    const { inputValue } = formState;

    const onSubmit = ( e: React.FormEvent  ) => {
        e.preventDefault();
        onInputValue( inputValue.trim().replace(' ', '') );
        onResetForm();
    }

    return (
        <form onSubmit={ onSubmit } >
            <input
                type="text"
                placeholder="New search"
                name="inputValue"
                value={ inputValue }
                onChange={ onInputChange }
                className={ searchboxClass }
            />
        </form>
    )
}
