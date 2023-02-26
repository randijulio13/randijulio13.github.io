import React, { forwardRef } from "react";

const Section = forwardRef((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <section
      {...otherProps}
      ref={ref}
      className={`${className} relative flex w-full flex-col items-center justify-center px-4`}
    >
      {children}
    </section>
  );
});

export default Section;
