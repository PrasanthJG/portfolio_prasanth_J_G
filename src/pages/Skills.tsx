// // import { Code, Palette, Database, Globe, Smartphone, Wrench } from "lucide-react";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Progress } from "@/components/ui/progress";

// // const Skills = () => {
// //   const skillCategories = [
// //     {
// //       title: "Frontend Development",
// //       icon: Code,
// //       skills: [
// //         { name: "React/Next.js", level: 95 },
// //         { name: "TypeScript", level: 90 },
// //         { name: "JavaScript", level: 95 },
// //         { name: "HTML/CSS", level: 98 },
// //         { name: "Tailwind CSS", level: 90 },
// //         { name: "Vue.js", level: 75 }
// //       ]
// //     },
// //     {
// //       title: "Backend Development",
// //       icon: Database,
// //       skills: [
// //         { name: "Node.js", level: 88 },
// //         { name: "Python", level: 82 },
// //         { name: "PostgreSQL", level: 85 },
// //         { name: "MongoDB", level: 80 },
// //         { name: "REST APIs", level: 92 },
// //         { name: "GraphQL", level: 75 }
// //       ]
// //     },
// //     {
// //       title: "Design & UI/UX",
// //       icon: Palette,
// //       skills: [
// //         { name: "Figma", level: 85 },
// //         { name: "Adobe XD", level: 80 },
// //         { name: "UI Design", level: 88 },
// //         { name: "UX Research", level: 75 },
// //         { name: "Prototyping", level: 82 },
// //         { name: "Design Systems", level: 90 }
// //       ]
// //     },
// //     {
// //       title: "DevOps & Tools",
// //       icon: Wrench,
// //       skills: [
// //         { name: "Git/GitHub", level: 95 },
// //         { name: "Docker", level: 80 },
// //         { name: "AWS", level: 75 },
// //         { name: "Vercel", level: 90 },
// //         { name: "CI/CD", level: 78 },
// //         { name: "Testing", level: 85 }
// //       ]
// //     },
// //     {
// //       title: "Mobile Development",
// //       icon: Smartphone,
// //       skills: [
// //         { name: "React Native", level: 82 },
// //         { name: "Expo", level: 85 },
// //         { name: "Mobile UI", level: 80 },
// //         { name: "App Store", level: 70 },
// //         { name: "Native APIs", level: 75 },
// //         { name: "Performance", level: 78 }
// //       ]
// //     },
// //     {
// //       title: "Web Technologies",
// //       icon: Globe,
// //       skills: [
// //         { name: "Performance", level: 88 },
// //         { name: "SEO", level: 85 },
// //         { name: "Accessibility", level: 82 },
// //         { name: "PWA", level: 80 },
// //         { name: "WebSocket", level: 75 },
// //         { name: "Web APIs", level: 90 }
// //       ]
// //     }
// //   ];

// //   const tools = [
// //     "VS Code", "Figma", "GitHub", "Postman", "Chrome DevTools",
// //     "Slack", "Notion", "Jira", "Adobe Creative Suite", "Terminal"
// //   ];

// //   return (
// //     <div className="pt-16">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
// //         {/* Header */}
// //         <div className="text-center mb-16 animate-fade-in">
// //           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
// //             My <span className="gradient-text">Skills</span>
// //           </h1>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
// //             A comprehensive overview of my technical skills and expertise across different domains.
// //           </p>
// //         </div>

// //         {/* Skills Grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// //           {skillCategories.map((category, categoryIndex) => {
// //             const IconComponent = category.icon;
// //             return (
// //               <Card 
// //                 key={category.title} 
// //                 className="card-gradient hover-lift animate-scale-in"
// //                 style={{ animationDelay: `${categoryIndex * 0.1}s` }}
// //               >
// //                 <CardHeader>
// //                   <CardTitle className="flex items-center gap-3">
// //                     <div className="p-2 bg-primary/20 rounded-lg">
// //                       <IconComponent className="h-5 w-5 text-primary" />
// //                     </div>
// //                     {category.title}
// //                   </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="space-y-4">
// //                     {category.skills.map((skill, skillIndex) => (
// //                       <div key={skill.name}>
// //                         <div className="flex justify-between items-center mb-2">
// //                           <span className="text-sm font-medium">{skill.name}</span>
// //                           <span className="text-sm text-muted-foreground">{skill.level}%</span>
// //                         </div>
// //                         <Progress 
// //                           value={skill.level} 
// //                           className="h-2"
// //                           style={{ 
// //                             animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` 
// //                           }}
// //                         />
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             );
// //           })}
// //         </div>

// //         {/* Tools Section */}
// //         <div className="animate-slide-in">
// //           <h2 className="text-3xl font-bold mb-8 text-center">Tools & Technologies</h2>
// //           <div className="flex flex-wrap justify-center gap-4">
// //             {tools.map((tool, index) => (
// //               <div
// //                 key={tool}
// //                 className="px-4 py-2 bg-card/50 border border-border rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
// //                 style={{ animationDelay: `${index * 0.05}s` }}
// //               >
// //                 {tool}
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Experience Summary */}
// //         <div className="mt-20 text-center animate-fade-in">
// //           <h2 className="text-3xl font-bold mb-8">Experience Highlights</h2>
// //           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
// //             <div className="space-y-2">
// //               <div className="text-4xl font-bold gradient-text">5+</div>
// //               <div className="text-muted-foreground">Years of Experience</div>
// //             </div>
// //             <div className="space-y-2">
// //               <div className="text-4xl font-bold gradient-text">50+</div>
// //               <div className="text-muted-foreground">Projects Completed</div>
// //             </div>
// //             <div className="space-y-2">
// //               <div className="text-4xl font-bold gradient-text">15+</div>
// //               <div className="text-muted-foreground">Technologies Mastered</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Skills;

// // src/pages/Skills.tsx
// import { Code, Palette, Database, Globe, Smartphone, Wrench } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Frontend Development",
//       icon: Code,
//       skills: [
//         { name: "React.js", level: 90 },
//         { name: "JavaScript", level: 85 },
//         { name: "HTML5", level: 95 },
//         { name: "CSS3", level: 90 },
//         { name: "Bootstrap", level: 85 },
//         { name: "Responsive Design", level: 92 }
//       ]
//     },
//     // {
//     //   title: "UI/UX Design",
//     //   icon: Palette,
//     //   skills: [
//     //     { name: "UI Design", level: 85 },
//     //     { name: "User Experience", level: 80 },
//     //     { name: "Wireframing", level: 75 },
//     //     { name: "Prototyping", level: 70 },
//     //     { name: "Figma", level: 75 }
//     //   ]
//     // },
//     {
//       title: "Tools & Technologies",
//       icon: Wrench,
//       skills: [
//         { name: "Git/GitHub", level: 85 },
//         { name: "VS Code", level: 90 },
//         { name: "Chrome DevTools", level: 88 },
//         { name: "Postman", level: 80 },
//         { name: "API Integration", level: 85 }
//       ]
//     },
//     {
//       title: "Other Skills",
//       icon: Globe,
//       skills: [
//         { name: "WordPress", level: 80 },
//         { name: "Performance Optimization", level: 85 },
//         { name: "Cross-Browser Testing", level: 90 },
//         { name: "Problem Solving", level: 88 }
//       ]
//     }
//   ];

//   const tools = [
//     "VS Code", "GitHub", "Postman", "Bootstrap", "Tailwind CSS", "React DevTools", "Responsive Design Tools"
//   ];
//   // const tools = [
//   //   "VS Code", "GitHub", "Postman", "Chrome DevTools", "Figma",
//   //   "Bootstrap", "Tailwind CSS", "React DevTools", "NPM", "Responsive Design Tools"
//   // ];

//   return (
//     <div className="pt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
//             My <span className="gradient-text">Skills</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Technical expertise and competencies in frontend development and UI design
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {skillCategories.map((category, categoryIndex) => {
//             const IconComponent = category.icon;
//             return (
//               <Card 
//                 key={category.title} 
//                 className="card-gradient hover-lift animate-scale-in"
//                 style={{ animationDelay: `${categoryIndex * 0.1}s` }}
//               >
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-3">
//                     <div className="p-2 bg-primary/20 rounded-lg">
//                       <IconComponent className="h-5 w-5 text-primary" />
//                     </div>
//                     {category.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {category.skills.map((skill, skillIndex) => (
//                       <div key={skill.name}>
//                         <div className="flex justify-between items-center mb-2">
//                           <span className="text-sm font-medium">{skill.name}</span>
//                           <span className="text-sm text-muted-foreground">{skill.level}%</span>
//                         </div>
//                         <Progress 
//                           value={skill.level} 
//                           className="h-2"
//                           style={{ 
//                             animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` 
//                           }}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Tools Section */}
//         <div className="animate-slide-in">
//           <h2 className="text-3xl font-bold mb-8 text-center">Tools & Technologies</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {tools.map((tool, index) => (
//               <div
//                 key={tool}
//                 className="px-4 py-2 bg-card/50 border border-border rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
//                 style={{ animationDelay: `${index * 0.05}s` }}
//               >
//                 {tool}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Experience Summary */}
//         <div className="mt-20 text-center animate-fade-in">
//           <h2 className="text-3xl font-bold mb-8">Experience Highlights</h2>
//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div className="space-y-2">
//               <div className="text-4xl font-bold gradient-text">1+</div>
//               <div className="text-muted-foreground">Years Experience</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-4xl font-bold gradient-text">5+</div>
//               <div className="text-muted-foreground">Projects Completed</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-4xl font-bold gradient-text">15+</div>
//               <div className="text-muted-foreground">Skills Mastered</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

// src/pages/Skills.tsx
import { useState } from "react";
import { Code, Palette, Database, Globe, Smartphone, Wrench, Award, ExternalLink, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import image1 from "../assets/CERTIFICATE_LANDING_PAGE~7TDAYFXE1LCS.jpeg"
import image2 from "../assets/image2.png"
import image3 from "../assets/Prasanth_G_4225383_page-0001.jpg"
import image4 from "../assets/Prasanth_G_4203023 (1)_page-0001.jpg"
import image5 from "../assets/Prasanth_G_4202978_page-0001.jpg"
import image6 from "../assets/Prasanth_G_3961858_page-0001.jpg"
import image7 from "../assets/certificate_page-0001.jpg"
import image8 from "../assets/Profile _ freeCodeCamp.org_page-0001.jpg"

type Certification = {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string | null;
  credentialId: string;
  credentialUrl: string;
  description: string;
   imageUrl?: string; 
};

const Skills = () => {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Responsive Design", level: 92 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Chrome DevTools", level: 88 },
        { name: "Postman", level: 80 },
        { name: "API Integration", level: 85 }
      ]
    },
    {
      title: "Other Skills",
      icon: Globe,
      skills: [
        { name: "WordPress", level: 80 },
        { name: "Performance Optimization", level: 85 },
        { name: "Cross-Browser Testing", level: 90 },
        { name: "Problem Solving", level: 88 }
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Build a free website with WordPress",
      issuer: "Coursera Project Network",
      issueDate: "Jan 2025",
      expiryDate: "Jan 2025",
      credentialId: "7TDAYFXE1LCS",
      credentialUrl: "#",
      description: "Learn to create and customize websites using WordPress, including themes, plugins, and content management.",
      imageUrl:image1,
    },
    {
      id: 2,
      title: "Introduction to Microsoft Excel",
      issuer: "Coursera Project Network",
      issueDate: "Jan 2025",
      expiryDate: "Jan 2025",
      credentialId: "PE90GSRALMWQ",
      credentialUrl: "#",
      description: "Fundamental skills in Microsoft Excel including formulas, data analysis, and spreadsheet management.",
      imageUrl:image2,
    },
    {
      id: 3,
      title: "Telephone Etiquette",
      issuer: "TCS iON",
      issueDate: "Oct 2024",
      expiryDate: "Dec 2024",
      credentialId: "66788-26829114-1016",
      credentialUrl: "#",
      description: "Professional telephone communication skills and customer service etiquette.",
      imageUrl:image3,
    },
    {
      id: 4,
      title: "Email Etiquette",
      issuer: "TCS iON",
      issueDate: "Oct 2024",
      expiryDate: "Nov 2024",
      credentialId: "66785-26829114-1016",
      credentialUrl: "#",
      description: "Professional email writing and communication best practices.",
      imageUrl:image4,
    },
    {
      id: 5,
      title: "Presentation Skills",
      issuer: "TCS iON",
      issueDate: "Oct 2024",
      expiryDate: "Nov 2024",
      credentialId: "66756-26829114-1016",
      credentialUrl: "#",
      description: "Effective presentation techniques and public speaking skills.",
      imageUrl:image5,
    },
    {
      id: 6,
      title: "Communication Skills",
      issuer: "TCS iON",
      issueDate: "Aug 2024",
      expiryDate: "Aug 2024",
      credentialId: "91306-26829114-1016",
      credentialUrl: "#",
      description: "Comprehensive communication skills for professional environments.",
      imageUrl:image6,
    },
    {
      id: 7,
      title: "Java & Python Full Stack Development",
      issuer: "KodNest",
      issueDate: "Aug 2023",
      expiryDate: "Mar 2024",
      credentialId: "KODPN2H54",
      credentialUrl: "#",
      description: "Full-stack web development training covering Java, Python, and modern web technologies.",
      imageUrl:image7,
    },
    {
      id: 8,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      issueDate: "Dec 2023",
      expiryDate: "Jan 2024",
      credentialId: "prasanth-j-g-rwd",
      credentialUrl: "#",
      description: "Certification in creating responsive web designs that work across all devices and screen sizes.",
      imageUrl:image8,
    }
  ];

  const tools = [
    "VS Code", "GitHub", "Postman","HTML5","CSS3","JavaScript", "Bootstrap", "Tailwind CSS", "React DevTools", "Responsive Design Tools"
  ];

  const handleCertificationClick = (certification: Certification) => {
    setSelectedCertification(certification);
    setIsDialogOpen(true);
  };

  const handleShowCredential = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical expertise and competencies in frontend development and UI design
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="card-gradient hover-lift animate-scale-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                          style={{ 
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` 
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mb-16 animate-slide-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Licenses & <span className="gradient-text">Certifications</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.id}
                className="cursor-pointer hover-lift border-border/50 hover:border-primary/30 transition-all duration-300"
                onClick={() => handleCertificationClick(cert)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Award className="h-5 w-5 text-blue-500" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>Issued {cert.issueDate}</span>
                      {/* {cert.expiryDate && ( */}
                        <span className="text-orange-500">Expired {cert.expiryDate}</span>
                      {/* )} */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="animate-slide-in mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Tools & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool}
                className="px-4 py-2 bg-card/50 border border-border rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-8">Experience Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">1+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">5+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">15+</div>
              <div className="text-muted-foreground">Skills Mastered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certification Details
            </DialogTitle>
          </DialogHeader>
          
          {selectedCertification && (
  <div className="space-y-6">
    {/* Header */}
    <div className="space-y-3">
      <h3 className="text-xl font-bold leading-tight">
        {selectedCertification.title}
      </h3>
      <p className="text-lg text-primary font-medium">
        {selectedCertification.issuer}
      </p>
    </div>

    {/* Description */}
    <div>
      <h4 className="font-semibold mb-2">Description</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {selectedCertification.description}
      </p>
    </div>

    {/* Certificate Image Preview */}
    {selectedCertification.imageUrl && (
      <div>
        <h4 className="font-semibold mb-3">Certificate Preview</h4>
        <div className="border-2 border-dashed border-border rounded-lg p-4 bg-muted/20">
          <img 
            src={selectedCertification.imageUrl} 
            alt={`${selectedCertification.title} Certificate`}
            className="w-full h-auto max-h-64 object-contain rounded cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => window.open(selectedCertification.imageUrl, '_blank')}
          />
          <p className="text-xs text-muted-foreground text-center mt-2">
            Click on the image to view full size
          </p>
        </div>
      </div>
    )}

    {/* Details */}
    <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
      <div>
        <h4 className="font-semibold text-sm mb-1">Issue Date</h4>
        <p className="text-sm">{selectedCertification.issueDate}</p>
      </div>
      {selectedCertification.expiryDate && (
        <div>
          <h4 className="font-semibold text-sm mb-1">Expiry Date</h4>
          <p className="text-sm text-orange-500">{selectedCertification.expiryDate}</p>
        </div>
      )}
      <div className="col-span-2">
        <h4 className="font-semibold text-sm mb-1">Credential ID</h4>
        <p className="text-sm font-mono">{selectedCertification.credentialId}</p>
      </div>
    </div>

    {/* Actions */}
    <div className="flex gap-3 pt-4">
      {/* {selectedCertification.imageUrl && ( */}
        <Button 
          className="flex-1"
          onClick={() => window.open(selectedCertification.imageUrl, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View Certificate
        </Button>
       {/* )} */}
      {/* <Button 
        className="flex-1"
        onClick={() => handleShowCredential(selectedCertification.credentialUrl)}
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        Show Credential
      </Button>
      <Button 
        variant="outline" 
        onClick={() => setIsDialogOpen(false)}
      >
        Close
      </Button> */}
    </div>
  </div>
)}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Skills;