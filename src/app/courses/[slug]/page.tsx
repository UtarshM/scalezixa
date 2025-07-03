
import { notFound } from "next/navigation";
import Image from "next/image";
import { courses } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, BookOpen, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type CoursePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="default" className="mb-4">{course.level}</Badge>
              <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                {course.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {course.description}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm font-medium">
                 <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary"/>
                    <span>{course.duration}</span>
                 </div>
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primary"/>
                    <span>{course.level}</span>
                 </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
                <Card className="p-6 flex flex-col items-center text-center shadow-lg">
                    <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage src={course.instructor.image} alt={course.instructor.name} />
                        <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{course.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
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
                    <BookOpen className="h-8 w-8 mr-3 text-primary"/>
                    Course Curriculum
                 </h2>
                 <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                    {course.modules.map((module, index) => (
                         <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold">{module.title}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {module.content}
                            </AccordionContent>
                         </AccordionItem>
                    ))}
                 </Accordion>
            </div>
            <div className="md:col-span-1">
                 <Card className="p-6 sticky top-24 shadow-lg">
                    <CardContent className="p-0">
                         <h2 className="font-headline text-2xl font-bold mb-4">What You'll Learn</h2>
                         <ul className="space-y-3">
                            {course.objectives.map((objective, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{objective}</span>
                                </li>
                            ))}
                         </ul>
                         <Button size="lg" className="w-full mt-8">Enroll Now</Button>
                    </CardContent>
                 </Card>
            </div>
        </div>
      </section>
    </>
  );
}
