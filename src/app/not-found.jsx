import Link from 'next/link';


const NotFoundPage = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Link href="/">Go back to Home</Link>
            
        </div>
    );
};

export default NotFoundPage;