import { Download, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-slide-in">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                I started my journey in web development 5 years ago, driven by a passion for creating
                beautiful and functional digital experiences. What began as curiosity about how websites
                work has evolved into a deep expertise in modern web technologies.
              </p>
              <p className="leading-relaxed">
                I specialize in full-stack development with a focus on React, TypeScript, and Node.js.
                I'm passionate about clean code, user experience, and staying up-to-date with the latest
                industry trends and best practices.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open
                source projects, or sharing knowledge with the developer community through blog posts
                and mentoring.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="glow-effect">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                San Francisco, CA
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                Available for work
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="animate-scale-in">
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-gradient hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="card-gradient hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="card-gradient hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              <Card className="card-gradient hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </CardContent>
              </Card>
            </div>

            {/* Education & Experience */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Education & Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">Senior Full Stack Developer</h4>
                  <p className="text-muted-foreground text-sm">TechCorp Inc. • 2022 - Present</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold">Full Stack Developer</h4>
                  <p className="text-muted-foreground text-sm">StartupXYZ • 2020 - 2022</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <h4 className="font-semibold">Computer Science, B.S.</h4>
                  <p className="text-muted-foreground text-sm">University of Technology • 2016 - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;