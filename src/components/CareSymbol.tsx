export type CareShape = "basin" | "triangle" | "square" | "iron" | "circle";

export interface CareSymbolProps {
  shape: CareShape;
  /** text inside the shape (e.g. "30", "P") */
  text?: string;
  /** number of dots inside the shape */
  dots?: number;
  /** number of bars under the shape (delicate programs) */
  bars?: number;
  /** diagonal stripes inside a triangle (oxygen bleach) */
  stripes?: boolean;
  /** hand symbol inside the basin */
  hand?: boolean;
  /** circle inside a square (tumble dry) */
  circleInSquare?: boolean;
  /** drying line orientation inside a square */
  dryLine?: "horizontal" | "vertical";
  /** crossed out */
  crossed?: boolean;
  label: string;
}

/**
 * Inline SVG rendering of ISO 3758 textile care symbols.
 */
export function CareSymbol({
  shape,
  text,
  dots = 0,
  bars = 0,
  stripes = false,
  hand = false,
  circleInSquare = false,
  dryLine,
  crossed = false,
  label,
}: CareSymbolProps) {
  const stroke = "currentColor";
  const sw = 2.4;

  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label={label}
      className="h-12 w-12 shrink-0 text-foreground"
      fill="none"
      stroke={stroke}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {shape === "basin" && (
        <path d="M6 18 h36 v10 a8 8 0 0 1 -8 8 h-20 a8 8 0 0 1 -8 -8 z M6 18 c4 -6 8 -2 12 -6" />
      )}
      {shape === "triangle" && <path d="M24 8 L42 40 H6 Z" />}
      {shape === "square" && <rect x="7" y="9" width="34" height="30" rx="2" />}
      {shape === "circle" && <circle cx="24" cy="24" r="15" />}
      {shape === "iron" && (
        <path d="M7 33 h34 c0 -10 -6 -18 -14 -18 h-8 c-4 0 -6 2 -8 6 z" />
      )}

      {circleInSquare && <circle cx="24" cy="24" r="9" />}

      {dryLine === "horizontal" && <line x1="13" y1="20" x2="35" y2="20" />}
      {dryLine === "vertical" && <line x1="24" y1="14" x2="24" y2="34" />}

      {stripes && (
        <>
          <line x1="17" y1="34" x2="27" y2="18" />
          <line x1="24" y1="34" x2="34" y2="18" />
        </>
      )}

      {hand && <path d="M15 27 c4 -5 10 -6 15 -3 M30 24 v4" />}

      {text && (
        <text
          x="24"
          y={shape === "triangle" ? 34 : shape === "basin" ? 31 : 29}
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          stroke="none"
          fill="currentColor"
        >
          {text}
        </text>
      )}

      {dots > 0 &&
        Array.from({ length: dots }).map((_, i) => (
          <circle
            key={i}
            cx={24 + (i - (dots - 1) / 2) * 8}
            cy={shape === "iron" ? 26 : 24}
            r="1.8"
            fill="currentColor"
            stroke="none"
          />
        ))}

      {bars > 0 &&
        Array.from({ length: bars }).map((_, i) => (
          <line key={i} x1="14" y1={41 + i * 4} x2="34" y2={41 + i * 4} />
        ))}

      {crossed && (
        <>
          <line x1="6" y1="6" x2="42" y2="42" />
          <line x1="42" y1="6" x2="6" y2="42" />
        </>
      )}
    </svg>
  );
}
