import Link from 'next/link';

const NavigationHeader: React.FC = () => {
    return (
        <header>
            <nav className="flex items-center text-black justify-between p-4 bg-gray-200">
                <Link href="/">
                    Home
                </Link>
                <Link href="/products">
                    Products
                </Link>
                <Link href="/login">
                    About
                </Link>
                <Link href="/profile">
                    Profile
                </Link>
            </nav>
        </header>
    );
};

export default NavigationHeader;