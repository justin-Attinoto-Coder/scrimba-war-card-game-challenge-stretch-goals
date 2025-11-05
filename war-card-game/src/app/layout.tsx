import React from 'react';
import './globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>War Card Game</title>
                <meta name="description" content="A visually stunning War Card Game with advanced animations and gradient effects." />
            </head>
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;