import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { animate, createScope, splitText, stagger, type Scope } from "animejs";

type AnimatedTextLogo = {
  text: string;
  onComplete: Dispatch<SetStateAction<boolean>>;
};

export function AnimatedTextLogo({ text, onComplete }: AnimatedTextLogo) {
  const textRef = useRef(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    // Get all characters from text.
    const { chars } = splitText("#text", { words: false, chars: true });

    // Creating scope of animation
    scope.current = createScope({ root: textRef }).add(() => {
      // Fade in animation
      const fadeIn = animate(chars, {
        // Property keyframes
        opacity: [0, 0.5, 1],
        scale: [1, 0.8],
        duration: 2000,
        delay: stagger(200),
        ease: "inOutCirc",
      });

      // After fade in animation completes, start flicker animation.
      fadeIn.onComplete = () => {
        const lastChar = chars[chars.length - 1];

        const flicker = animate(lastChar, {
          opacity: [0.4, 2, 0.5, 1],
          duration: 2000,
          delay: 500,
          ease: "outElastic(1,0.3)",
        });

        // After completing flicker animation set animation complete true.
        flicker.onComplete = () => {
          onComplete(true);
        };
      };
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current?.revert();
  }, []);

  return (
    <div className="flex justify-center items-center h-svh">
      <h1 ref={textRef} id="text" className="text-5xl">
        {text}
      </h1>
    </div>
  );
}
