
import { Icons } from "@/components/icons";

const partners = [
  { name: "Startup India", logo: <Icons.startupIndia className="h-8 max-w-[150px] w-full text-muted-foreground" /> },
  { name: "Google Cloud", logo: <Icons.googleCloud className="h-8 max-w-[150px] w-full text-muted-foreground" /> },
  { name: "AWS", logo: <Icons.aws className="h-10 max-w-[100px] w-full text-muted-foreground" /> },
  { name: "Microsoft Azure", logo: <Icons.azure className="h-8 max-w-[150px] w-full text-muted-foreground" /> },
  { name: "OpenAI", logo: <Icons.openAI className="h-8 max-w-[150px] w-full text-muted-foreground" /> },
];

export function PartnerLogos() {
  return (
    <div className="w-full py-12 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-base font-semibold text-muted-foreground tracking-wider uppercase mb-8">
          Partners with Industry Leaders
        </h3>
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {partners.map((partner, index) => (
              <div key={index} className="mx-12 flex-shrink-0 flex items-center justify-center">
                {partner.logo}
              </div>
            ))}
          </div>
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap group-hover:[animation-play-state:paused]">
            {partners.map((partner, index) => (
              <div key={index + partners.length} className="mx-12 flex-shrink-0 flex items-center justify-center">
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
