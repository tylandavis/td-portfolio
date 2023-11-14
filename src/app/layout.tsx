import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Tylan Davis - Designer and Software Engineer',
	description:
		'Designer and developer, building open-source web apps and interfaces in Grand Rapids, MI.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
