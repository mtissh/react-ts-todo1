import React from 'react'

interface Props {
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    onClick?: any // Todo 関数を呼びたい。どの型が適しているか調査し、書き直す。
    className?: string
    disabled?: boolean
}

const Button: React.FC<Props> = ({
                                      children,
                                      type,
                                      onClick,
                                      className,
                                      disabled= false,
                                  }) => {

    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>

    )
}

export default Button
