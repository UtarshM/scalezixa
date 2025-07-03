
import Link from "next/link";
import { workshops } from "@/lib/content";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Icons } from "@/components/icons";

export default function WorkshopsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              AI Workshops
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Intensive, hands-on workshops designed to teach you specific AI skills in a short amount of time.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {workshops.map((workshop) => (
              <Card
                key={workshop.slug}
                className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader>
                   <div className="flex justify-between items-center mb-4">
                     <Icons.brainCircuit className="h-10 w-10 text-primary" />
                     <Badge variant={workshop.type === 'Free' ? 'default' : 'secondary'}>{workshop.type}</Badge>
                   </div>
                  <CardTitle className="font-headline text-2xl">
                    {workshop.title}
                  </CardTitle>
                  <CardDescription>{workshop.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary"/>
                        <span className="font-medium text-muted-foreground">Date: {workshop.date}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary"/>
                        <span className="font-medium text-muted-foreground">Duration: {workshop.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/workshops/${workshop.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
