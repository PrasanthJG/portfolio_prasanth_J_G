import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 5 years of experience in web development and design, I specialize in creating
            modern, responsive applications using React, TypeScript, and cutting-edge technologies.
            I believe in writing clean, maintainable code and designing intuitive user experiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;