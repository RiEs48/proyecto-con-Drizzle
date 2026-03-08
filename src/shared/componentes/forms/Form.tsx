import React, { FormHTMLAttributes } from "react"
import clsx from "clsx"

type Props = FormHTMLAttributes<HTMLFormElement>

export default function Form(props: Props) {
    // extraemos  con clsx  
    const { className } = props
    return (
        <form {...props} action="" className={clsx("mt-10 space-y-3", className)}>
            {props.children}



        </form>
    )
}
