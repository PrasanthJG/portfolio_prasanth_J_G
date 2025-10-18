// src/pages/Home.tsx
import { ArrowRight, Github, Linkedin, Mail, Code, Palette, MessageSquare, User, Briefcase, Award, Globe, Zap, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      
<section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Right Column becomes Top on mobile */}
    <div className="relative flex items-center justify-center order-1 md:order-2">
      {/* Mobile / tablet circular 3D image */}
      <div className="md:hidden relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden 
        bg-gradient-to-tr from-purple-500 via-blue-500 to-green-500 p-[4px] animate-spin-slow">
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
          <img 
            src="/src/assets/Gemini_Generated_Image_9s5m0i9s5m0i9s5m-removebg-preview2222.png" 
            alt="Prasanth J G"
            className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Desktop image normal */}
      <div className="hidden md:block">
        <img 
          src="/src/assets/Gemini_Generated_Image_9s5m0i9s5m0i9s5m-removebg-preview.png" 
          alt="Prasanth J G"
          className="w-[300px] h-auto"
        />
      </div>
    </div>

    {/* Left Column - Text Content */}
    <div className="
  text-center md:text-left        /* center text on mobile, left on md+ */
  animate-fade-in order-2 md:order-1
">
  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
    Hi, I'm <br/>
    <span className="gradient-text">Prasanth J G</span>
  </h1>

  <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
    Front-End Developer | React Developer
    {/* Front-End Developer | React Specialist */}
  </h2>

  <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed mx-auto md:mx-0">
    I create responsive, user-friendly web applications with React.js and modern JavaScript.
    Passionate about clean code, intuitive interfaces, and performance optimization.
  </p>

  <div className="
    animate-scale-in flex flex-col sm:flex-row gap-4 
    items-center md:items-start justify-center md:justify-start mb-12
  ">
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
  <div className="
    animate-slide-in flex justify-center md:justify-start 
    space-x-6
  ">
    {/* <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
    >
      <Github className="h-6 w-6" />
    </a> */}
    <a
      href="https://www.linkedin.com/in/prasanth2409/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
    >
      <Linkedin className="h-6 w-6" />
    </a>
    <a
      href="mailto:prasanthjg56@gmail.com"
      className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transition-transform"
    >
      <Mail className="h-6 w-6" />
    </a>
  </div>
</div>

  </div>

  {/* Background floating elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-glow-pulse"></div>
    <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-glow-pulse delay-1000"></div>
    <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-lg animate-float delay-2000"></div>
  </div>
</section>

      {/* Quick About */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">
            Turning Designs Into <span className="gradient-text">Reality</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            With 1+ years of experience in frontend development, I specialize in creating
            responsive web applications using React, JavaScript, and modern CSS frameworks.
            I transform design mockups into pixel-perfect, interactive interfaces with optimal 
            performance and cross-browser compatibility.
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
              From concept to deployment, I build responsive interfaces with clean code and modern technologies.
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
                  1+ years of frontend development experience specializing in React.js and responsive design.
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
                  5+ successful projects including web applications, admin panels, and WordPress sites.
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
                  Expert in React.js, JavaScript, HTML/CSS, Bootstrap, and responsive web design.
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
                  Interested in collaborating? Let's discuss how I can contribute to your project.
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
                <h4 className="text-2xl font-bold mb-2">Performance Boost</h4>
                <p className="text-muted-foreground mb-4">Improved website performance by 40% through optimization techniques</p>
                <div className="text-3xl font-bold gradient-text">40%</div>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift transform-gpu transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">User Engagement</h4>
                <p className="text-muted-foreground mb-4">Increased user engagement by 20% through responsive UI design</p>
                <div className="text-3xl font-bold gradient-text">20%</div>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift transform-gpu transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Project Delivery</h4>
                <p className="text-muted-foreground mb-4">Completed 5 WordPress projects within one month</p>
                <div className="text-3xl font-bold gradient-text">5 Projects</div>
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
            I work with modern frontend technologies to build responsive, performant applications
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "GitHub"].map((tech, index) => (
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
              Showcasing projects that demonstrate my technical expertise and problem-solving skills
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project 1 - Car Wash Service App */}
            <Card className="card-gradient hover-lift group transform-gpu transition-all duration-500 hover:scale-105">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" ><img src="/src/assets/Screenshot 2025-10-08 004842.png"/></div>
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                    The Future Med Service App
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="glow-effect">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-2xl flex items-center justify-between">
                 TheFutureMed Healthcare Platform
                  <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Comprehensive medical education and professional development platform with AI integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Bootstrap", "API Integration", "Responsive"].map((tech) => (
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

            {/* Project 2 - WordPress Projects */}
            <Card className="card-gradient hover-lift group transform-gpu transition-all duration-500 hover:scale-105">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" ><img src="/src/assets/Screenshot 2025-10-08 004208.png"/></div>
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                    WordPress Projects
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="glow-effect">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-2xl flex items-center justify-between">
                  WordPress Development
                  <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Multiple WordPress projects including Arabi ksa, St Mary, Consultancy, Medshop, Champion.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["WordPress", "Theme Customization", "Performance", "Responsive"].map((tech) => (
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
            Let's collaborate and create a responsive, user-friendly web experience that exceeds expectations.
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