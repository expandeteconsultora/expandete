export function Brand({ className = "" }: { className?: string }) {
  return <span className={"brand " + className} aria-label="Expándete Más">expándete<span className="brand-plus" aria-hidden="true">+</span></span>;
}
