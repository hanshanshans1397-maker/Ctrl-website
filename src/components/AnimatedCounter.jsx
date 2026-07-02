import { useCountUp } from '../hooks/useCountUp';

export function AnimatedCounter({ value, duration, className, ...rest }) {
  const { ref, value: displayValue } = useCountUp(value, { duration });

  return (
    <span ref={ref} className={className} {...rest}>
      {displayValue}
    </span>
  );
}
