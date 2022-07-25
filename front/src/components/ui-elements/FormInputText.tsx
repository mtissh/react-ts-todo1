import React from 'react'

interface Props {
    onChange: any // Todo 関数を呼びたい。どの型が適しているか調査し、書き直す。
    className?: string
    placeholder?: string
    value?: string
    disabled?: boolean
}

const FormInputText: React.FC<Props> = ({
                                     value= "",
                                     onChange,
                                     placeholder= "",
                                     className,
                                     disabled= false,
                                 }) => {
    return (
        <input
            type="text"
            className={className}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
        />
    )
}

export default FormInputText
