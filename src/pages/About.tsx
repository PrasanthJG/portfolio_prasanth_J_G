// src/pages/About.tsx
import { Download, MapPin, Calendar, GraduationCap, Briefcase, Award, Code, Users, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import aboutImage from "../assets/about.png"
import resumePdf from "../assets/Prasanth_Resume.pdf";

const About = () => {
  const containerRef = useRef(null);
  
  // 3D effect for header
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  // 3D card hover effect
  const cardVariants: Variants = {
    rest: { 
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    },
    hover: (delay = 0) => ({
      rotateX: -3,
      rotateY: -3,
      scale: 1.03,
      zIndex: 50,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: { 
        duration: 0.3,
        delay: delay * 0.05,
        ease: "easeOut"
      }
    })
  };

  // 3D floating effect for stats cards
  const floatVariants: Variants = {
    float: (index: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 3 + index * 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  const handleDownload = () => {
    try {
      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = resumePdf;
      link.download = "Prasanth_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -15, 0],
            y: [0, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header with 3D text effect */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <motion.div 
            className="text-center md:text-left"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6"
              variants={headerVariants}
            >
              About <motion.span 
                className="gradient-text inline-block"
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 3, 0, -3, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Me
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl"
              variants={headerVariants}
            >
              Front-End Developer specializing in responsive web applications with React.js and JavaScript
            </motion.p>
          </motion.div>

          {/* Profile Image with 3D effect */}
          {/* <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              rotateY: 5,
              rotateX: 3,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
               <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl">
     Replace placeholder with image 
    <img
      src={aboutImage}
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-0" />
          </motion.div> */}
          <motion.div
  className="relative"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  whileHover={{
    rotateY: 5,
    rotateX: 3,
    transition: { duration: 0.3 }
  }}
>
  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl">
    {/* Replace placeholder with image */}
    <img
      src={aboutImage}
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Pulsing border effect */}
  <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-0" />
</motion.div>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  I'm a Front-End Developer with 1 year of hands-on experience building responsive, 
                  user-friendly web applications using React.js, JavaScript, HTML, CSS, and Bootstrap.
                </p>
                <p className="leading-relaxed">
                  I excel at turning design mockups into seamless, interactive interfaces while ensuring 
                  optimal performance and cross-browser compatibility. Passionate about clean, maintainable 
                  code, I actively stay updated with the latest technologies to deliver engaging user experiences.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you can find me exploring new frontend technologies, contributing 
                  to projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button onClick={handleDownload} className="glow-effect transform-gpu hover:scale-105 transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  Bengaluru, Karnataka
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  Available for work
                </div>
              </div>
            </motion.div>

            {/* Personal Interests with 3D hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Beyond Code</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Code, text: "Frontend Tech" },
                  { icon: Users, text: "UI Design" },
                  { icon: Coffee, text: "Problem Solving" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg card-gradient"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                    custom={index}
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Details with 3D effects */}
          <div className="space-y-8">
            {/* Stats Grid with floating effect */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "5+", label: "Projects Completed" },
                { value: "1+", label: "Years Experience" },
                { value: "40%", label: "Performance Boost" },
                { value: "20%", label: "Engagement Increase" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={floatVariants}
                  animate="float"
                >
                  <Card className="card-gradient">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Professional Experience Timeline with 3D */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="card-gradient">
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
                      <motion.div 
  className="relative pl-14"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="absolute left-4 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg animate-pulse"></div>
  <motion.div 
    className="bg-primary/5 border border-primary/20 rounded-lg p-4"
    variants={cardVariants}
    initial="rest"
    whileHover="hover"
  >
    <div className="flex items-center justify-between mb-2">
      <h4 className="font-bold text-lg text-accent">Front-End Developer</h4>
      <span className="text-sm text-accent font-medium">May 2025 - Present</span>
    </div>
    <p className="text-accent font-medium mb-2">PMHS Tech Solutions, Bengaluru</p>
    <ul className="text-muted-foreground text-sm space-y-1">
       <li>• Developed responsive web applications using React, TypeScript, and Tailwind CSS</li>
  <li>• Implemented state management solutions with Redux and Context API</li>
  <li>• Created reusable component libraries and design systems</li>
  <li>• Optimized application performance and user experience</li>
  <li>• Integrated with REST APIs and third-party services</li>
  <li>• Conducted manual testing and API validation</li>
    </ul>
  </motion.div>
</motion.div>
                      {/* Current Position */}
                      <motion.div 
                        className="relative pl-14"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute left-4 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg animate-pulse"></div>
                        <motion.div 
                          className="bg-primary/5 border border-primary/20 rounded-lg p-4"
                          variants={cardVariants}
                          initial="rest"
                          whileHover="hover"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg text-primary">WordPress Developer Intern</h4>
                            <span className="text-sm text-primary font-medium">Feb 2025 - Mar 2025</span>
                          </div>
                          <p className="text-primary font-medium mb-2">Connectia Technology, Mangaluru</p>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>• Developed and customized WordPress themes and plugins</li>
                            <li>• Implemented responsive web designs for desktop and mobile</li>
                            <li>• Optimized website speed and performance</li>
                            <li>• Ensured cross-browser compatibility and conducted testing</li>
                          </ul>
                        </motion.div>
                      </motion.div>

                      {/* Previous Position */}
                      <motion.div 
                        className="relative pl-14"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <div className="absolute left-4 top-1 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-md"></div>
                        <motion.div 
                          className="bg-accent/5 border border-accent/20 rounded-lg p-4"
                          variants={cardVariants}
                          initial="rest"
                          whileHover="hover"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg text-accent">Front-End Developer</h4>
                            <span className="text-sm text-accent font-medium">Jul 2023 - May 2024</span>
                          </div>
                          <p className="text-accent font-medium mb-2">Tech Story System Private Limited, Bengaluru</p>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>• Developed Admin Panel using React.js & Bootstrap</li>
                            <li>• Implemented responsive design across all devices</li>
                            <li>• Integrated API services for data retrieval</li>
                            <li>• Conducted manual testing and API validation</li>
                          </ul>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education Timeline with 3D */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    <span>Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-muted"></div>
                    
                    <div className="space-y-8">
                      {/* University Education */}
                      <motion.div 
                        className="relative pl-14"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute left-4 top-1 w-4 h-4 bg-muted rounded-full border-4 border-background shadow-md"></div>
                        <motion.div 
                          className="bg-muted/5 border border-muted/20 rounded-lg p-4"
                          variants={cardVariants}
                          initial="rest"
                          whileHover="hover"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg">B.E. Electronics & Communication Engineering</h4>
                            <span className="text-sm text-muted-foreground font-medium">2018 - 2022</span>
                          </div>
                          <p className="text-muted-foreground font-medium mb-2">Bharathidasan Engineering College, Anna University</p>
                        </motion.div>
                      </motion.div>

                      {/* High School */}
                      <motion.div 
                        className="relative pl-14"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <div className="absolute left-4 top-1 w-4 h-4 bg-muted/50 rounded-full border-4 border-background shadow-sm"></div>
                        <motion.div 
                          className="bg-muted/5 border border-muted/10 rounded-lg p-4"
                          variants={cardVariants}
                          initial="rest"
                          whileHover="hover"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg">Higher Secondary Education</h4>
                            <span className="text-sm text-muted-foreground font-medium">2016 - 2018</span>
                          </div>
                          <p className="text-muted-foreground font-medium mb-2">Sri Sathya Sai Matric Hr Sec School</p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements with 3D */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div 
                className="card-gradient rounded-xl p-6"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-bold">Achievements</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm">Improved website performance by 40% through optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm">Increased user engagement by 20% through responsive design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-muted rounded-full animate-pulse"></div>
                    <span className="text-sm">Completed 5 WordPress projects within one month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm">Boosted functionality by 30% through API integration</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3D Parallax effect for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-b from-accent/10 to-transparent rounded-full opacity-15 transform translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default About;