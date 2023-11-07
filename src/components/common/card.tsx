import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const Card = ({ className, children }: Props) => {
  return (
    <div className={`relative mb-10 inline-block ${className}`}>
      <div className="relative z-10 rounded-3xl bg-catalina-tile p-4 md:p-8">
        {children}
      </div>
      <div className="absolute -bottom-4 -left-4 z-0 h-full w-full rounded-3xl bg-bootstrap-leather" />
    </div>
  );
};

export default Card;
