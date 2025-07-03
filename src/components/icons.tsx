
import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      <path d="M8 7v4" />
      <path d="M12 7v4" />
      <path d="M16 7v4" />
      <path d="M8 13h8" />
    </svg>
  ),
  brainCircuit: (props: SVGProps<SVGSVGElement>) => (
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 5a3 3 0 1 0-5.993.131" />
      <path d="M12 5a3 3 0 1 0 5.993.131" />
      <path d="M12 5a3 3 0 1 0 .13-5.994" />
      <path d="M12 19a3 3 0 1 0-5.993-.131" />
      <path d="M12 19a3 3 0 1 0 5.993-.131" />
      <path d="M12 19a3 3 0 1 0 .13 5.994" />
      <path d="M19 12a3 3 0 1 0-.131-5.993" />
      <path d="M19 12a3 3 0 1 0 .131 5.993" />
      <path d="M5 12a3 3 0 1 0-.131-5.993" />
      <path d="M5 12a3 3 0 1 0 .131 5.993" />
      <path d="M12 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
      <path d="M12 12v-2" />
      <path d="M12 12h2" />
      <path d="M12 12v2" />
      <path d="M12 12h-2" />
    </svg>
  )
};
