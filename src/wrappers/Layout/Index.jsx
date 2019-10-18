import React from 'react';

// components
import Navbar from '../../components/Navbar/Index';

const Layout = ({ urlRoute, children }) => {
  return (
    <main>
      <Navbar urlRoute={urlRoute} />
      {children}
    </main>
  );
};

export default Layout;
