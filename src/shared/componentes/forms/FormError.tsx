

export default function FormError({ children }: { children: React.ReactNode }) {
    return (
        <p className="border-l-2 p-2 font-bold bg-red-200 border-red-800 text-red-600 text-sm">
            {children}

        </p>
    )
}
