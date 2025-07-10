import { Download, MapPin, Calendar, GraduationCap, Briefcase, Award, Code, Users, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="pt-16">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="animate-slide-in space-y-12">
            <div>
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
                <Button className="glow-effect transform-gpu hover:scale-105 transition-all duration-300">
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

            {/* Personal Interests */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Beyond Code</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 rounded-lg card-gradient transform-gpu hover:scale-105 transition-all duration-300">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="text-sm">Open Source</span>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg card-gradient transform-gpu hover:scale-105 transition-all duration-300">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-sm">Mentoring</span>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg card-gradient transform-gpu hover:scale-105 transition-all duration-300">
                  <Coffee className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">Coffee Enthusiast</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Details */}
          <div className="animate-scale-in space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-gradient hover-lift transform-gpu transition-all duration-300 hover:rotate-1">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="card-gradient hover-lift transform-gpu transition-all duration-300 hover:-rotate-1">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="card-gradient hover-lift transform-gpu transition-all duration-300 hover:rotate-1">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              <Card className="card-gradient hover-lift transform-gpu transition-all duration-300 hover:-rotate-1">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </CardContent>
              </Card>
            </div>

            {/* Professional Experience Timeline */}
            <Card className="card-gradient transform-gpu hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span>Professional Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted"></div>
                  
                  <div className="space-y-8">
                    {/* Current Position */}
                    <div className="relative pl-14">
                      <div className="absolute left-4 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg animate-pulse"></div>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 transform-gpu hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg text-primary">Senior Full Stack Developer</h4>
                          <span className="text-sm text-primary font-medium">2022 - Present</span>
                        </div>
                        <p className="text-primary font-medium mb-2">TechCorp Inc.</p>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Led development of 15+ web applications using React and Node.js</li>
                          <li>• Mentored 5 junior developers and established coding standards</li>
                          <li>• Increased application performance by 40% through optimization</li>
                          <li>• Architected scalable microservices for enterprise clients</li>
                        </ul>
                      </div>
                    </div>

                    {/* Previous Position */}
                    <div className="relative pl-14">
                      <div className="absolute left-4 top-1 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-md"></div>
                      <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 transform-gpu hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg text-accent">Full Stack Developer</h4>
                          <span className="text-sm text-accent font-medium">2020 - 2022</span>
                        </div>
                        <p className="text-accent font-medium mb-2">StartupXYZ</p>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Built scalable web applications from scratch</li>
                          <li>• Collaborated with design team to implement pixel-perfect UIs</li>
                          <li>• Integrated third-party APIs and payment systems</li>
                          <li>• Reduced server costs by 30% through code optimization</li>
                        </ul>
                      </div>
                    </div>

                    {/* First Position */}
                    <div className="relative pl-14">
                      <div className="absolute left-4 top-1 w-4 h-4 bg-muted rounded-full border-4 border-background shadow-md"></div>
                      <div className="bg-muted/5 border border-muted/20 rounded-lg p-4 transform-gpu hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg">Junior Developer</h4>
                          <span className="text-sm text-muted-foreground font-medium">2019 - 2020</span>
                        </div>
                        <p className="text-muted-foreground font-medium mb-2">WebAgency Pro</p>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• Developed responsive websites using HTML, CSS, and JavaScript</li>
                          <li>• Learned modern frameworks and development practices</li>
                          <li>• Contributed to team projects and gained industry experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education Timeline */}
            <Card className="card-gradient transform-gpu hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <span>Education & Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-muted"></div>
                  
                  <div className="space-y-8">
                    {/* Recent Certification */}
                    <div className="relative pl-14">
                      <div className="absolute left-4 top-1 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                      <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 transform-gpu hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg text-accent">AWS Certified Solutions Architect</h4>
                          <span className="text-sm text-accent font-medium">2023</span>
                        </div>
                        <p className="text-accent font-medium mb-2">Amazon Web Services</p>
                        <p className="text-muted-foreground text-sm">Professional level certification demonstrating expertise in designing distributed systems on AWS</p>
                      </div>
                    </div>

                    {/* Google Certification */}
                    <div className="relative pl-14">
                      <div className="absolute left-4 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md"></div>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 transform-gpu hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg text-primary">Google Cloud Professional Developer</h4>
                          <span className="text-sm text-primary font-medium">2022</span>
                        </div>
                        <p className="text-primary font-medium mb-2">Google Cloud Platform</p>
                        <p className="text-muted-foreground text-sm">Expertise in designing, building, and deploying applications on Google Cloud Platform</p>
                      </div>
                    </div>

                    {/* University Education */}
                    <div className="relative pl-14">
                      <div className="absolute left-4 top-1 w-4 h-4 bg-muted rounded-full border-4 border-background shadow-md"></div>
                      <div className="bg-muted/5 border border-muted/20 rounded-lg p-4 transform-gpu hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg">Computer Science, B.S.</h4>
                          <span className="text-sm text-muted-foreground font-medium">2016 - 2020</span>
                        </div>
                        <p className="text-muted-foreground font-medium mb-2">University of Technology</p>
                        <div className="text-muted-foreground text-sm space-y-1">
                          <p>• Summa Cum Laude, GPA: 3.9/4.0</p>
                          <p>• Dean's List all semesters</p>
                          <p>• Specialized in Software Engineering and Database Systems</p>
                          <p>• Senior capstone project: Real-time collaboration platform</p>
                        </div>
                      </div>
                    </div>

                    {/* High School */}
                    <div className="relative pl-14">
                      <div className="absolute left-4 top-1 w-4 h-4 bg-muted/50 rounded-full border-4 border-background shadow-sm"></div>
                      <div className="bg-muted/5 border border-muted/10 rounded-lg p-4 transform-gpu hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg">High School Diploma</h4>
                          <span className="text-sm text-muted-foreground font-medium">2012 - 2016</span>
                        </div>
                        <p className="text-muted-foreground font-medium mb-2">Tech High School</p>
                        <p className="text-muted-foreground text-sm">Valedictorian, President of Computer Science Club</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="card-gradient transform-gpu hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Winner - TechCorp Innovation Award 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Speaker - React Conference 2022</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-muted rounded-full"></div>
                  <span className="text-sm">Open Source Contributor - 500+ GitHub contributions</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;