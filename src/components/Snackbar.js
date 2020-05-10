import React, { useState, useEffect } from 'react';
import './Snackbar.css';

export default function Snackbar ({ txt, show = false }) {

  const [isOpen, setIsOpen] = useState(show);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return <span
    className={"bg-danger snackbar " + (isOpen ? "show" : "")}
    onClick={() => { setIsOpen(!isOpen) }}>
    <i className="fas fa-info-circle"></i> {txt}
  </span>;
}