import katex from 'katex';
import { React, useEffect, useRef } from 'react';
import "katex/dist/katex.min.css";

function Katex({ texExpression, className }: { texExpression: string, className: string }) {
  const containerRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    katex.render(texExpression, containerRef.current as HTMLInputElement);
  }, [texExpression]);

  return <div ref={containerRef} className={className} />;
}

export default Katex;
