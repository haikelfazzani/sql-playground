import React, { useState, useEffect } from 'react';
import './SidebaWrapper.css';

export default function SidebaWrapper ({ children, show = false }) {

  const [isNavOpen, setIsNavOpen] = useState(show);

  useEffect(() => {
    setIsNavOpen(show)

  }, [show]);

  const closeNav = () => {
    setIsNavOpen(false);
  }

  return (
    <div className={"sidenav " + (isNavOpen ? "w-25" : "0")}>
      <div className="w-100 d-flex justify-content-between align-items-center bg-warning mb-2 py-2 pr-2 pl-2 ">
        <span className="text-uppercase">
          <i className="fa fa-database"></i> History tables creations
        </span>
        <span onClick={closeNav}>&times;</span>
      </div>
      <div className="pr-2 pl-2">{children}</div>
    </div>
  );
}