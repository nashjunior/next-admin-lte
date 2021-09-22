import React from 'react';
import NextLink from 'next/link';

type ILinkProps = {
  to: string;
};

const Link: React.FC<ILinkProps> = ({ to, children }) => {
  return (
    <NextLink href={to}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
