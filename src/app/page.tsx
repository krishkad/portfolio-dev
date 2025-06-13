"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  CheckCircle,
  ChevronRight,
  Code,
  Contact,
  FileText,
  Github,
  Mail,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Rocket,
  Search,
  Star,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=800&fit=crop",
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React & Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      liveDemo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Portfolio Dashboard",
      description: "Analytics dashboard for tracking portfolio performance",
      tech: ["React", "TypeScript", "Chart.js", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      liveDemo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      liveDemo: "#",
      github: "#",
    },
  ];

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies",
      icon: Code,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design solutions that enhance user experience",
      icon: Star,
    },
    {
      title: "SEO Optimization",
      description: "Improve your website visibility and search engine rankings",
      icon: Search,
    },
    {
      title: "Web App Maintenance",
      description: "Ongoing support and maintenance for your web applications",
      icon: Contact,
    },
  ];

  const developmentSteps = [
    {
      step: 1,
      title: "Initial Contact",
      description:
        "Reach out via email or direct message to discuss your project needs",
      icon: Mail,
      duration: "Day 1",
      color: "bg-blue-500",
    },
    {
      step: 2,
      title: "Discovery Call",
      description:
        "Google Meet session to understand requirements and project scope",
      icon: MessageCircle,
      duration: "Day 2-3",
      color: "bg-purple-500",
    },
    {
      step: 3,
      title: "Design Phase",
      description:
        "Create wireframes and designs using Figma for visual approval",
      icon: Palette,
      duration: "Week 1",
      color: "bg-pink-500",
    },
    {
      step: 4,
      title: "Design Approval",
      description: "Review and refine designs based on your feedback",
      icon: CheckCircle,
      duration: "Week 1-2",
      color: "bg-green-500",
    },
    {
      step: 5,
      title: "Development Starts",
      description: "Begin coding your project with modern technologies",
      icon: Code,
      duration: "Week 2+",
      color: "bg-orange-500",
    },
    {
      step: 6,
      title: "Daily Updates",
      description:
        "Regular progress reports and preview links for transparency",
      icon: Calendar,
      duration: "Ongoing",
      color: "bg-cyan-500",
    },
    {
      step: 7,
      title: "Testing & QA",
      description: "Thorough testing across devices and browsers",
      icon: Search,
      duration: "Final Week",
      color: "bg-yellow-500",
    },
    {
      step: 8,
      title: "Final Handover",
      description:
        "Complete project delivery with source code and documentation",
      icon: Rocket,
      duration: "Delivery Day",
      color: "bg-red-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Krrish delivered an exceptional website that exceeded our expectations. The attention to detail and professional approach made the entire process smooth and enjoyable.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
      company: "TechStart Inc.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, Innovation Labs",
      content:
        "Outstanding work on our web application. Great attention to detail, timely delivery, and excellent communication throughout the project. Highly recommended!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=face",
      company: "Innovation Labs",
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      content:
        "Working with Krrish was a game-changer for our business. The website not only looks amazing but also performs exceptionally well. Professional and reliable.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      company: "GrowthCo",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React",
      excerpt:
        "Learn the best practices for creating scalable and maintainable React applications in 2024.",
      date: "March 15, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      link: "#",
    },
    {
      id: 2,
      title: "The Future of UI/UX Design Trends",
      excerpt:
        "Exploring upcoming design trends and how they will shape user experiences in the coming years.",
      date: "March 10, 2024",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
      link: "#",
    },
    {
      id: 3,
      title: "Optimizing Website Performance",
      excerpt:
        "Essential techniques for improving website speed and performance for better user experience.",
      date: "March 5, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop",
      link: "#",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % developmentSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Devwithkrrish
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Process", "Services", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors hover:text-blue-500 ${
                      isScrolled ? "text-foreground" : "text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div
              className={`md:hidden mt-4 pb-4 ${
                isScrolled ? "bg-background/95" : "bg-black/90"
              } backdrop-blur-sm rounded-lg`}
            >
              <div className="flex flex-col space-y-4 px-4 py-4">
                {["About", "Projects", "Process", "Services", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-left py-2 transition-colors hover:text-blue-500 ${
                        isScrolled ? "text-foreground" : "text-white"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-dvh flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            I&apos;m Krrish
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in opacity-90">
            Web Developer & UI/UX Enthusiast
          </p>
          <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto animate-fade-in">
            Creating digital experiences that combine beautiful design with
            powerful functionality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black  hover:bg-white hover:text-black px-6 md:px-8 py-3"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <img
                src="/my-profile.jpg"
                alt="Krrish"
                className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-blue-500"
              />
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I&apos;m a passionate web developer with over 5 years of
                experience creating digital solutions that make a difference. I
                specialize in modern web technologies and love bringing creative
                ideas to life through code.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {["React", "TypeScript", "Node.js", "UI/UX"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="p-2 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              A showcase of my recent work and creative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 flex-1"
                    >
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Walkthrough Section */}
      <section id="process" className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Development Walkthrough</h2>
            <p className="text-xl text-muted-foreground">
              A step-by-step process showing how our collaboration works
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500"></div>

            <div className="space-y-12">
              {developmentSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } group`}
                >
                  {/* Animated Timeline dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${step.color} border-4 border-background rounded-full z-10 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg`}
                  >
                    <div
                      className={`absolute inset-0 ${step.color} rounded-full animate-ping opacity-75`}
                    ></div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                  >
                    <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group-hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div
                            className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white mr-4 shadow-lg`}
                          >
                            <step.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">
                              {step.title}
                            </h3>
                            <p className="text-sm text-blue-500 font-medium">
                              {step.duration}
                            </p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Interactive Cards */}
          <div className="lg:hidden">
            {/* Progress indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {developmentSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeStep
                        ? "bg-blue-500 scale-125"
                        : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Active Step Card */}
            <div className="relative min-h-[350px]  mb-8">
              {developmentSteps.map((step, index) => (
                <Card
                  key={step.step}
                  className={`absolute  inset-0 transition-all duration-500 ${
                    index === activeStep
                      ? "opacity-100 transform translate-x-0 scale-100"
                      : index < activeStep
                      ? "opacity-0 transform -translate-x-full scale-95"
                      : "opacity-0 transform translate-x-full scale-95"
                  } hover:shadow-xl`}
                >
                  <CardContent className="p-8 text-center">
                    {/* Step number with animation */}
                    <div className="relative mb-6">
                      <div
                        className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-white mx-auto shadow-xl`}
                      >
                        <step.icon className="w-10 h-10" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {step.duration}
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="flex items-center space-x-2"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Previous</span>
              </Button>

              <div className="text-sm text-muted-foreground">
                {activeStep + 1} of {developmentSteps.length}
              </div>

              <Button
                variant="outline"
                onClick={() =>
                  setActiveStep(
                    Math.min(developmentSteps.length - 1, activeStep + 1)
                  )
                }
                disabled={activeStep === developmentSteps.length - 1}
                className="flex items-center space-x-2"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Step List for quick navigation */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {developmentSteps.map((step, index) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-3 rounded-lg border transition-all duration-300 text-left ${
                    index === activeStep
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-muted hover:border-blue-300 hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center text-white mb-2`}
                  >
                    <step.icon className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-medium truncate">
                    {step.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {step.duration}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive web solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="pt-6">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground">
              What my clients say about working with me
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-blue-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-muted-foreground">
              Insights, tutorials, and thoughts on web development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-500 group-hover:text-white transition-colors"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your next project? Let&apos;s talk!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Send Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell me about your project..."
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <Button
                      className="w-full bg-blue-500 hover:bg-blue-600"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <a
                        href="mailto:krrish@example.com"
                        className="flex items-center text-muted-foreground hover:text-blue-500 transition-colors"
                      >
                        <Mail className="w-5 h-5 mr-3" />
                        krrish@example.com
                      </a>
                      <a
                        href="tel:+1234567890"
                        className="flex items-center text-muted-foreground hover:text-blue-500 transition-colors"
                      >
                        <Phone className="w-5 h-5 mr-3" />
                        +1 (234) 567-890
                      </a>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-5 h-5 mr-3" />
                        Available for freelance work
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com"
                        className="flex items-center justify-center w-10 h-10 bg-muted rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="mailto:krrish@example.com"
                        className="flex items-center justify-center w-10 h-10 bg-muted rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Devwithkrrish</h3>
              <p className="text-muted-foreground">
                Web Developer & UI/UX Enthusiast creating digital experiences
                that matter.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "About", "Projects", "Services", "Contact"].map(
                  (link) => (
                    <button
                      key={link}
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="block text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      {link}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-2">
                <a
                  href="mailto:krrish@example.com"
                  className="flex items-center text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  krrish@example.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Krrish. All rights reserved. Built with React &
              TailwindCSS.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:krrish@example.com"
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
