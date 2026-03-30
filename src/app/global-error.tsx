'use client'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
                <h2>Error</h2>
                <p>{error.message}</p>
            </body>
        </html>
    )
}