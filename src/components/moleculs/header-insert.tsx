import React, { ReactNode } from 'react';

interface HeaderInsertProps {
  title: string;
  children?: ReactNode | string;
}

const HeaderInsert: React.FC<HeaderInsertProps> = ({ title, children }) => (
  <section className="header-insert" >
    <div className="header-insert__title"> {title}</div>
    <p className="header-insert__description"> {children}</p>
  </section>
);

export default HeaderInsert;
