import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type CountdownProps = {
  start: boolean;
  setStartCountdown: Dispatch<SetStateAction<boolean>>;
  countdown: number;
};

export function Countdown({
  start,
  setStartCountdown,
  countdown,
}: CountdownProps) {
  const intervalID = useRef<number | undefined>(undefined);

  const [count, setCount] = useState(countdown);

  const startCountdown = () => {
    let localCount = countdown;
    clearInterval(intervalID.current);
    intervalID.current = setInterval(() => {
      if (localCount > 0) {
        localCount--;
        setCount(localCount);
      } else {
        clearInterval(intervalID.current);
        setStartCountdown(false);
      }
    }, 1000);
  };

  useEffect(() => {
    if (start) {
      startCountdown();
    }
  }, [start]);

  return <div>{count}s</div>;
}
