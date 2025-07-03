
import { notFound } from "next/navigation";
import Image from "next/image";
import { workshops } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Calendar, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type WorkshopPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return workshops.map((workshop) => ({
    slug: workshop.slug,
  }));
}

export default function WorkshopPage({ params }: WorkshopPageProps) {
  const workshop = workshops.find((w) => w.slug === params.slug);

  if (!workshop) {
    notFound();
  }

  return (
    <>
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant={workshop.type === 'Free' ? 'default' : 'secondary'} className="mb-4 text-base">{workshop.type} Workshop</Badge>
              <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                {workshop.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {workshop.description}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm font-medium">
                 <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary"/>
                    <span>{workshop.date}</span>
                 </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary"/>
                    <span>{workshop.duration}</span>
                 </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
                <Card className="p-6 flex flex-col items-center text-center shadow-lg">
                    <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage src={workshop.instructor.image} alt={workshop.instructor.name} />
                        <AvatarFallback>{workshop.instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{workshop.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{workshop.instructor.title}</p>
                    <Button asChild variant="outline" size="sm" className="mt-4">
                        <Link href="/contact">Ask a question</Link>
                    </Button>
                </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                 <h2 className="font-headline text-3xl font-bold mb-6 flex items-center">
                    <Zap className="h-8 w-8 mr-3 text-primary"/>
                    Workshop Curriculum
                 </h2>
                 <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                    {workshop.topics.map((topic, index) => (
                         <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold">{topic.title}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {topic.content}
                            </AccordionContent>
                         </AccordionItem>
                    ))}
                 </Accordion>
            </div>
            <div className="md:col-span-1">
                 <Card className="p-6 sticky top-24 shadow-lg">
                    <CardContent className="p-0">
                         <h2 className="font-headline text-2xl font-bold mb-4">Key Takeaways</h2>
                         <ul className="space-y-3">
                            {workshop.takeaways.map((takeaway, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{takeaway}</span>
                                </li>
                            ))}
                         </ul>
                         <Button size="lg" className="w-full mt-8">
                           {workshop.type === 'Free' ? 'Register for Free' : 'Enroll Now'}
                         </Button>
                    </CardContent>
                 </Card>
            </div>
        </div>
      </section>
    </>
  );
}
