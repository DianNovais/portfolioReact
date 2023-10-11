import $ from "jquery";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const fadeInConatiner = (id: string) => {
  useEffect(() => {
    $(id).fadeIn(3000);
  }, []);
};

export const typedText = (ref: any, data: string[]) => {
  const typed = useRef<any>(null);

  useEffect(() => {
    const options = {
      strings: data,
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
    };

    
      typed.current = new Typed(ref.current, options);

      return () => {
        typed.current.destroy();
      };
    
  }, []);
};
