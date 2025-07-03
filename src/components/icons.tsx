
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
  ),
  startupIndia: (props: SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 242.3 35.2" {...props} fill="currentColor"><path d="M22.5,35.2A22.52,22.52,0,0,1,8.3,1.9L12,5.2A17.5,17.5,0,1,0,34.8,17h5.1A22.53,22.53,0,0,1,22.5,35.2Z"></path><path d="M49,17.6H71.3V31.5H76V1.9H49Zm22.2-11H71.3V13H49V6.6H71.2Z"></path><path d="M98.6,1.9H82.4V31.5h4.7V18.1h9.3a8.1,8.1,0,0,0,8.1-8.1,7.94,7.94,0,0,0-7.8-8.1Zm-.3,11.5H87.1V6.6h11.2a3.35,3.35,0,0,1,0,6.7Z"></path><path d="M120.3,1.9H108.6l-8.6,30.3h5.2l1.6-6h13l1.6,6h5.2Zm-3.2,19.3H112l3.1-11,3.1,11Z"></path><path d="M152.8,17.5a14.2,14.2,0,0,1-14.2-14.2H127.3v30H132v-15a9.5,9.5,0,0,0,19.1,0v15h4.7v-30h-11A14.2,14.2,0,0,1,152.8,17.5Z"></path><path d="M165.7,1.9V31.5h4.7V1.9Z"></path><path d="M178.6,1.9l-6,14.8,6.1,14.8h5.3l-3.6-9.2,3.6-9.1h3.1l-6,14.8,6.1,14.8h5.3l-3.6-9.2,3.6-9.1h3.1l-6,14.8,6.1,14.8h5.3L202,20.2l-3.5,9.2h5.2l8.6-30.3H207l-6.9,24-6.9-24h-5.2l-6.9,24-6.9-24h-5.2l-6.9,24-6.9-24Z"></path><path d="M216.9,1.9V31.5h4.7V1.9Z"></path><path d="M229.5,1.9V31.5h4.7V17.6h12.9V31.5h4.7V1.9H234.2v11H229.5Z"></path></svg>
  ),
  googleCloud: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 128 25" {...props} fill="currentColor"><path d="M36.14,1.3H24.36L14.7,12.5,24.36,23.7h11.78L26.48,12.5ZM69.46,14.3v4.44h9.88c-.4,2.96-3.32,5.26-7.14,5.26-4.44,0-8.04-3.68-8.04-8.2s3.6-8.2,8.04-8.2c2.5,0,4.22.98,5.18,2.06l3.58-3.32C74.8,3.58,71.18,1.3,66.62,1.3c-7.44,0-13.5,6.06-13.5,13.52s6.06,13.52,13.5,13.52c7.66,0,13.06-5.32,13.06-13.24,0-1-.1-1.68-.22-2.52Zm34.36-9s-3.48-2-7-2-7.3,1.92-7.3,6.34v8.12h17.18V13.24h-13.1V9.58c0-1.42.7-2.22,2-2.22s2.12.8,2.12.8Zm13.5,17.84V13.24h-1.84L94.7,23.14h-3.3L86.6,13.24h-1.84v9.9h-4V4.14h7.52l5.48,10.1,5.46-10.1h7.54v18.98Z"></path><path d="M12.44,24.32,0,12.5,12.44.68H16.8L4.36,12.5,16.8,24.32Z"></path></svg>
  ),
  aws: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 39" {...props} fill="currentColor"><path d="M8.5,19.9a18.5,18.5,0,0,0,32.4,14L35.2,29A13.8,13.8,0,0,1,8.5,19.9Z"></path><path d="M41.4,2.1A18.5,18.5,0,0,0,22.2,2.8l5.8,5.3A13.8,13.8,0,0,1,41.4,2.1Z"></path><path d="M60.9,18.2a18.5,18.5,0,0,0-9.6-16l-5.6,5.1a13.8,13.8,0,0,1,7.2,12Zm-56.7,0a18.5,18.5,0,0,0,9.6,16l5.6-5.1a13.8,13.8,0,0,1-7.2-12Z"></path></svg>
  ),
  azure: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 128 35" {...props} fill="currentColor"><path d="M78.29,20.84,69.57,35H64.33l13-22.42,13.08,22.42H85.1ZM0,35V0H35.89V4.68H4.68V15.19H33.23V19.8H4.68V30.32H35.89V35Zm39.19,0V0h4.68V35Zm8.55,0V0h21.4c9.13,0,14.65,5.16,14.65,12.38,0,5.16-3,9.5-7.79,11.2l9.8,11.42H89.2L80,24.18H52.42v10.8Zm4.78-4.68h12.2c6.41,0,9.91-3.35,9.91-7.7,0-4.82-3.83-7.7-9.91-7.7H52.42Z"></path></svg>
  ),
};
