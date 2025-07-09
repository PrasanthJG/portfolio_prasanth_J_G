import { ArrowRight, Github, Linkedin, Mail, Code, Palette, MessageSquare, User, Briefcase, Award, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Alex Johnson</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
              Full Stack Developer & UI/UX Designer
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              I create beautiful, functional digital experiences that solve real-world problems.
              Passionate about clean code, modern design, and innovative solutions.
            </p>
          </div>

          <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild size="lg" className="glow-effect">
              <Link to="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-slide-in flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-glow-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-glow-pulse delay-1000"></div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">
            Turning Ideas Into <span className="gradient-text">Reality</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            With over 5 years of experience in web development and design, I specialize in creating
            modern, responsive applications using React, TypeScript, and cutting-edge technologies.
            I believe in writing clean, maintainable code and designing intuitive user experiences.
          </p>
        </div>
      </section>

      {/* What I Do - Overview of All Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              What I <span className="gradient-text">Do</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, I bring your digital vision to life with modern technologies and creative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Preview */}
            <Card className="card-gradient hover-lift group transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <User className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <span>About Me</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  5+ years of experience in full-stack development with a passion for creating exceptional digital experiences.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full group-hover:border-primary transition-colors">
                  <Link to="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Projects Preview */}
            <Card className="card-gradient hover-lift group transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Code className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                  <span>Projects</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  50+ successful projects including e-commerce platforms, SaaS applications, and modern web apps.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full group-hover:border-accent transition-colors">
                  <Link to="/projects">View Portfolio</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Skills Preview */}
            <Card className="card-gradient hover-lift group transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Palette className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <span>Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Expert in React, TypeScript, Node.js, and modern web technologies with cloud deployment experience.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full group-hover:border-primary transition-colors">
                  <Link to="/skills">Explore Skills</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Preview */}
            <Card className="card-gradient hover-lift group transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                  <span>Get In Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ready to start your next project? Let's discuss how we can bring your ideas to life.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full group-hover:border-accent transition-colors">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              Experience <span className="gradient-text">Highlights</span>
            </h3>
            <p className="text-xl text-muted-foreground">
              Key achievements and milestones in my professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-gradient hover-lift transform-gpu transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Senior Developer</h4>
                <p className="text-muted-foreground mb-4">Leading development teams and architecting scalable solutions</p>
                <div className="text-3xl font-bold gradient-text">2022-Present</div>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift transform-gpu transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">AWS Certified</h4>
                <p className="text-muted-foreground mb-4">Solutions Architect with cloud expertise and best practices</p>
                <div className="text-3xl font-bold gradient-text">2023</div>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift transform-gpu transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Global Impact</h4>
                <p className="text-muted-foreground mb-4">Projects used by thousands of users across multiple countries</p>
                <div className="text-3xl font-bold gradient-text">50K+ Users</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">
            Technology <span className="gradient-text">Stack</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            I work with cutting-edge technologies to build modern, scalable, and performant applications
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Docker"].map((tech, index) => (
              <div
                key={tech}
                className="p-6 rounded-lg card-gradient hover-lift transform-gpu transition-all duration-300 hover:scale-110 hover:rotate-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-lg font-semibold">{tech}</div>
              </div>
            ))}
          </div>
          
          <Button asChild size="lg" className="mt-12 glow-effect">
            <Link to="/skills">
              <Zap className="mr-2 h-5 w-5" />
              View All Skills
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing some of my best work that demonstrates technical expertise and creative problem-solving
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project 1 - E-Commerce Platform */}
            <Card className="card-gradient hover-lift group transform-gpu transition-all duration-500 hover:scale-105">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
                  <img 
                    src="/src/assets/ecommerce-project.jpg" 
                    alt="E-Commerce Platform"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="glow-effect">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-2xl flex items-center justify-between">
                  E-Commerce Platform
                  <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full group-hover:glow-effect transition-all duration-300">
                  <Link to="/projects">
                    View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project 2 - Task Management App */}
            <Card className="card-gradient hover-lift group transform-gpu transition-all duration-500 hover:scale-105">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
                  <img 
                    src="/src/assets/task-management.jpg" 
                    alt="Task Management App"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="glow-effect">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-2xl flex items-center justify-between">
                  Task Management App
                  <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Firebase", "Material-UI", "WebSocket"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full group-hover:glow-effect transition-all duration-300" variant="outline">
                  <Link to="/projects">
                    View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="transform-gpu hover:scale-105 transition-all duration-300">
              <Link to="/projects">
                <Code className="mr-2 h-5 w-5" />
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Build Something <span className="gradient-text">Amazing?</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and turn your vision into a stunning digital reality that exceeds expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glow-effect transform-gpu hover:scale-105 transition-all duration-300">
              <Link to="/contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start a Project
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transform-gpu hover:scale-105 transition-all duration-300">
              <Link to="/projects">
                <Code className="mr-2 h-5 w-5" />
                See My Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;