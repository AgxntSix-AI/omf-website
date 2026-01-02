import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  GraduationCap,
  BookOpen,
  Play,
  Award,
  Clock,
  Users,
  Star,
  TrendingUp,
  Target,
  CheckCircle2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/advisor-portal/university")({
  component: UniversityPage,
})

// Learning paths
const learningPaths = [
  {
    title: "New Advisor Fundamentals",
    level: "Beginner",
    courses: 6,
    duration: "8 hours",
    color: "bg-green-500/10 text-green-600",
    description: "Essential knowledge for advisors just starting their career with OM Financial.",
  },
  {
    title: "Advanced Sales Techniques",
    level: "Intermediate",
    courses: 8,
    duration: "12 hours",
    color: "bg-blue-500/10 text-blue-600",
    description: "Take your sales skills to the next level with proven strategies and techniques.",
  },
  {
    title: "Leadership Development",
    level: "Advanced",
    courses: 5,
    duration: "10 hours",
    color: "bg-purple-500/10 text-purple-600",
    description: "Develop leadership skills to grow your team and expand your practice.",
  },
]

// Sample courses
interface Course {
  id: string
  title: string
  description: string
  level: "beginner" | "intermediate" | "advanced"
  duration: string
  modules: number
  instructor: string
  ceCredits?: number
}

const courses: Course[] = [
  {
    id: "1",
    title: "Insurance Fundamentals",
    description: "Comprehensive overview of life, health, and living benefits insurance products.",
    level: "beginner",
    duration: "2 hours",
    modules: 8,
    instructor: "OM Financial Training Team",
    ceCredits: 2,
  },
  {
    id: "2",
    title: "Needs-Based Selling",
    description: "Learn to identify client needs and present solutions that address their unique situations.",
    level: "beginner",
    duration: "1.5 hours",
    modules: 6,
    instructor: "Sales Development Team",
    ceCredits: 1.5,
  },
  {
    id: "3",
    title: "Segregated Funds Mastery",
    description: "Deep dive into segregated fund products, features, and client positioning.",
    level: "intermediate",
    duration: "3 hours",
    modules: 10,
    instructor: "Product Specialists",
    ceCredits: 3,
  },
  {
    id: "4",
    title: "Estate Planning Strategies",
    description: "Help clients protect and transfer wealth to future generations effectively.",
    level: "intermediate",
    duration: "2.5 hours",
    modules: 8,
    instructor: "Wealth Planning Team",
    ceCredits: 2.5,
  },
  {
    id: "5",
    title: "Building a High-Performing Team",
    description: "Strategies for recruiting, training, and developing a successful advisory team.",
    level: "advanced",
    duration: "4 hours",
    modules: 12,
    instructor: "Leadership Development",
    ceCredits: 4,
  },
  {
    id: "6",
    title: "Business Development Mastery",
    description: "Advanced strategies for growing your practice and maximizing client relationships.",
    level: "advanced",
    duration: "3 hours",
    modules: 10,
    instructor: "Business Development Team",
    ceCredits: 3,
  },
]

const levelInfo = {
  beginner: { label: "Beginner", color: "bg-green-500/10 text-green-600" },
  intermediate: { label: "Intermediate", color: "bg-blue-500/10 text-blue-600" },
  advanced: { label: "Advanced", color: "bg-purple-500/10 text-purple-600" },
}

function UniversityPage() {
  return (
    <div className="min-h-svh">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/advisor-portal">
              <ArrowLeft className="h-4 w-4" />
              Back to Advisor Portal
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="max-w-3xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                OM Financial University
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                Advance your career with structured learning paths, professional certifications, and CE-accredited courses designed for insurance advisors.
              </p>
              <Button size="lg" className="gap-2">
                <Play className="h-4 w-4" />
                Start Learning
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Learning Paths
              </h2>
              <p className="text-muted-foreground">
                Follow structured paths designed for your experience level and career goals.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {learningPaths.map((path, index) => (
              <BlurFade key={path.title} delay={0.15 + index * 0.05} inView>
                <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all group">
                  <CardHeader>
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${path.color} mb-4 w-fit`}>
                      {path.level}
                    </div>
                    <CardTitle className="text-lg">{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {path.courses} courses
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {path.duration}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Target className="h-4 w-4" />
                      Start Path
                    </Button>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <BookOpen className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Course Catalog
              </h2>
              <p className="text-muted-foreground">
                Browse individual courses and earn CE credits as you learn.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <BlurFade key={course.id} delay={0.15 + index * 0.05} inView>
                <Card className="h-full flex flex-col hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${levelInfo[course.level].color}`}>
                        {levelInfo[course.level].label}
                      </span>
                      {course.ceCredits && (
                        <span className="flex items-center gap-1 text-xs text-accent-foreground bg-accent/20 px-2 py-0.5 rounded">
                          <Star className="h-3 w-3" />
                          {course.ceCredits} CE Credits
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-end">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.modules} modules
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Play className="h-4 w-4" />
                      Start Course
                    </Button>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Earn Certifications
              </h2>
              <p className="text-muted-foreground">
                Complete learning paths to earn recognized certifications that demonstrate your expertise.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Certified Life Specialist", courses: 8, earned: 156 },
              { title: "Investment Expert", courses: 6, earned: 124 },
              { title: "Health Insurance Pro", courses: 5, earned: 89 },
              { title: "Sales Leader", courses: 10, earned: 67 },
            ].map((cert, index) => (
              <BlurFade key={cert.title} delay={0.2 + index * 0.05} inView>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent-foreground mb-4">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.courses} courses required
                    </p>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {cert.earned} advisors certified
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, label: "Total Courses", value: "50+" },
              { icon: Star, label: "CE Credits Available", value: "100+" },
              { icon: Users, label: "Advisors Enrolled", value: "800+" },
              { icon: CheckCircle2, label: "Courses Completed", value: "5,000+" },
            ].map((stat, index) => (
              <BlurFade key={stat.label} delay={0.2 + index * 0.05} inView>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
              <TrendingUp className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Invest in Your Growth
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Start your learning journey today and take your career to new heights with OM Financial University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Play className="h-4 w-4" />
                Start Learning
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/advisor-portal">
                  Back to Portal
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
