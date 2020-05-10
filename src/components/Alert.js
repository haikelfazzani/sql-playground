import React, { useEffect, useState } from 'react';

export default function Alert ({ lesson, img, desc, show = false }) {

  const [isOpen, setIsOpen] = useState(show);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <div className="alert alert-success alert-dismissible fade show pr-0 pr-3" role="alert"
      style={{ display: isOpen ? 'block' : 'none' }}>

      <h5 className="alert-heading">{lesson}</h5>

      <pre className="m-0">{desc.trim()}</pre>

      {img.length > 25 && <img src={img} alt="siql preview" className="img-thumbnail" />}

      <button type="button" className="close" data-dismiss="alert" aria-label="Close"
        onClick={() => { setIsOpen(!isOpen) }}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}