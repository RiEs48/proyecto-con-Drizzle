import clsx from "clsx"
import React from "react"

type Props = {
    children: React.ReactNode
    nivel?: 1 | 2 | 3 | 4 | 5 | 6
    className?: string
}


export default function Heading({ children, nivel = 1, className }: Props) {

    const Etiqueta: React.ElementType = `h${nivel}`
    const tamañoMap: Record<number, string> = {

        1: 'text-4xl',
        2: 'text-3xl',
        3: 'text-2xl',
        4: 'text-xl',
        5: 'text-lg',
        6: 'text-sm',
    }

    return (
        <Etiqueta className={clsx("font-black uppercase", tamañoMap[nivel], className)}>
            {children}
        </Etiqueta>
    )
}
