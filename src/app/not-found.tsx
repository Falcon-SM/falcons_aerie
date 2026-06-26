import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '20px' }}>
            <h2>Page Not Found</h2>
            <div className="hr-elegant-container" style={{ width: '100%', maxWidth: '800px', margin: '20px 0' }}>
                <svg
                    viewBox="0 0 800 160"
                    className="hr-elegant-svg"
                    preserveAspectRatio="none"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                >
                    <path
                        className="elegant-thread thread-left"
                        d="M 0 100 L 390 100 C 390 10, 280 10, 280 80 C 280 140, 420 140, 400 100 L 800 100"
                    />
                    <path
                        className="elegant-thread thread-right"
                        d="M 800 100 L 410 100 C 410 10, 520 10, 520 80 C 520 140, 380 140, 400 100 L 0 100"
                    />
                </svg>
            </div>
            <Link href="/" className='return-home-btn'>
                Return Home
            </Link>
        </div>
    )
}
