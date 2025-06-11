import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-8">Page Not Found</h2>
      <p className="mb-8 text-gray-400 text-center max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-[#FBB04C] text-black rounded-full hover:bg-[#FBB04C]/80 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
} 