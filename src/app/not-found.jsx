import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function NotFoundPage() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
       <Link href="/">Go back to Home</Link>
    </div>
  );
}

