import React from 'react'

interface TitleInterface {
    value: string
    variant?: 'light' | 'dark'
}

export default function Title({ value, variant = 'dark' }: TitleInterface) {
    return (
        <div className="relative flex items-center justify-center">
            <h1
                className={`text-4xl ${
                    variant === 'dark' ? 'text-gray-800' : 'text-white'
                } font-bold border-b-4 border-church-800 z-10`}
            >
                {value}
            </h1>
            <span
                className={`absolute text-8xl font-bold ${
                    variant === 'dark' ? 'text-church-200' : 'text-church-900'
                } uppercase z-0`}
            >
                {value}
            </span>
        </div>
    )
}
