
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BrainCircuit,
  GraduationCap,
  Star,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { courses, testimonials } from '@/lib/content';
import { CourseSuggestionTool } from '@/components/course-suggestion-tool';
import { Icons } from '@/components/icons';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[1rem_1rem] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)] dark:bg-grid-slate-400/[0.05]"></div>
          <div className="relative z-10">
            <Badge
              variant="secondary"
              className="mb-4 text-sm font-medium animate-fade-in-up"
            >
              Unlock Your AI Potential
            </Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up [animation-delay:200ms]">
              The Future of Intelligence, <br />
              <span className="text-primary">Mastered.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl animate-fade-in-up [animation-delay:400ms]">
              Scalezix Academy provides world-class AI training programs to
              equip you with the skills to lead in the new era of technology.
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
              <Button asChild size="lg">
                <Link href="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="suggestion-tool"
        className="w-full py-16 md:py-24 bg-secondary"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Not Sure Where to Start?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let our AI-powered tool suggest the perfect course based on your
              current field of study.
            </p>
          </div>
          <CourseSuggestionTool />
        </div>
      </section>

      <section id="courses" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Premier AI Programs
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Dive into our comprehensive courses, designed to take you from
              novice to expert.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course, index) => (
              <Card
                key={course.slug}
                className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icons.brainCircuit className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">
                      {course.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {course.description.substring(0, 120)}...
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center font-semibold text-sm">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    <span>{course.level}</span>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/courses/${course.slug}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="ghost">
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Success Stories from Our Graduates
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Hear what our alumni have to say about their journey with
              Scalezix Academy.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {testimonials.slice(0, 2).map((testimonial) => (
              <Card
                key={testimonial.name}
                className="bg-card p-6 border-l-4 border-primary"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-foreground">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                </CardContent>
                <CardFooter className="p-0 mt-4 flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Build the Future?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-lg text-muted-foreground">
            Join thousands of learners and become an AI expert. Your journey
            starts here.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/courses">Start Learning Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
