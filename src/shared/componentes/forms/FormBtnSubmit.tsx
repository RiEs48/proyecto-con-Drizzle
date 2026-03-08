import clsx from "clsx"
import { InputHTMLAttributes } from "react"
type Prop = InputHTMLAttributes<HTMLInputElement>
export default function FormBtnSubmit(props: Prop) {

    const { value, className } = props
    return (
        <input {...props} type="submit" className={clsx("bg-green-700 w-full p-2 uppercase font-bold text-white mt-5", className, value)} />
    )
}
