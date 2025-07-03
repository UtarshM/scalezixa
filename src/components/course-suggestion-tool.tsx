
"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Loader2 } from "lucide-react";
import { courses } from "@/lib/content";
import Link from "next/link";
import { Badge } from "./ui/badge";

const colleges = [
  { value: "computer-science-engg", label: "Computer Science / Engineering" },
  { value: "computer-science-bsc", label: "BSc Computer Science" },
];

type SuggestedCourse = typeof courses[0];

export function CourseSuggestionTool() {
  const [selectedCollege, setSelectedCollege] = useState<string | null>(null);
  const [suggestedCourses, setSuggestedCourses] = useState<
    SuggestedCourse[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSuggestion = () => {
    if (!selectedCollege) return;

    setIsLoading(true);
    setSuggestedCourses(null);

    // Simulate AI processing delay
    setTimeout(() => {
      // Since all fields are CS-related, we recommend all available courses.
      const recommendations: SuggestedCourse[] = courses;
      setSuggestedCourses(recommendations);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select onValueChange={setSelectedCollege}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your field of study..." />
              </SelectTrigger>
              <SelectContent>
                {colleges.map((college) => (
                  <SelectItem key={college.value} value={college.value}>
                    {college.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              onClick={handleSuggestion}
              disabled={!selectedCollege || isLoading}
              className="w-full sm:w-auto"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Bot className="mr-2 h-4 w-4" />
              )}
              Get Suggestion
            </Button>
          </div>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center mt-8 flex items-center justify-center text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          <p>Our AI is thinking...</p>
        </div>
      )}

      {suggestedCourses && (
        <div className="mt-8">
          <h3 className="text-center font-headline text-2xl font-semibold mb-6">
            Recommended For You
          </h3>
          <div className="grid gap-4">
            {suggestedCourses.map((course) => (
              <Link href={`/courses/${course.slug}`} key={course.slug}>
                <Card className="hover:border-primary transition-colors hover:bg-secondary">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span className="font-headline">{course.title}</span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2">
                      {course.description}
                    </p>
                    <div className="mt-4 flex gap-2">
                       <Badge variant="outline">{course.level}</Badge>
                       <Badge variant="outline">{course.duration}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
