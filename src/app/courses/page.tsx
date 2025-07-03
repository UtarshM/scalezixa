
import Link from "next/link";
import { courses } from "@/lib/content";
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
import { ArrowRight, BarChart, Clock } from "lucide-react";
import { Icons } from "@/components/icons";

export default function CoursesPage() {
  return (
    <>
      <section className="w-full py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Our AI Training Programs
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore our comprehensive curriculum designed to empower the next
              generation of AI leaders and innovators.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card
                key={course.slug}
                className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader>
                   <div className="mb-4">
                     <Icons.brainCircuit className="h-10 w-10 text-primary" />
                   </div>
                  <CardTitle className="font-headline text-2xl">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                        <BarChart className="h-4 w-4 text-primary"/>
                        <span className="font-medium text-muted-foreground">Level: <Badge variant="outline">{course.level}</Badge></span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary"/>
                        <span className="font-medium text-muted-foreground">Duration: {course.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/courses/${course.slug}`}>
                      View Course <ArrowRight className="ml-2 h-4 w-4" />
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
