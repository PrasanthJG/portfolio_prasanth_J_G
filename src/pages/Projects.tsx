// // // // import { ExternalLink, Github, Calendar } from "lucide-react";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Badge } from "@/components/ui/badge";

// // // // const Projects = () => {
// // // //   const projects = [
// // // //     {
// // // //       id: 1,
// // // //       title: "E-Commerce Platform",
// // // //       description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
// // // //       image: "/src/assets/ecommerce-project.jpg",
// // // //       technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
// // // //       liveUrl: "https://example.com",
// // // //       githubUrl: "https://github.com",
// // // //       date: "2024",
// // // //       featured: true
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "Task Management App",
// // // //       description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
// // // //       image: "/src/assets/task-management.jpg",
// // // //       technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
// // // //       liveUrl: "https://example.com",
// // // //       githubUrl: "https://github.com",
// // // //       date: "2023",
// // // //       featured: true
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: "Weather Dashboard",
// // // //       description: "A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations and location-based services.",
// // // //       image: "/src/assets/weather-dashboard.jpg",
// // // //       technologies: ["Vue.js", "D3.js", "OpenWeather API", "Tailwind CSS"],
// // // //       liveUrl: "https://example.com",
// // // //       githubUrl: "https://github.com",
// // // //       date: "2023",
// // // //       featured: false
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       title: "Portfolio Website",
// // // //       description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and a clean design.",
// // // //       image: "/src/assets/portfolio-website.jpg",
// // // //       technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
// // // //       liveUrl: "https://example.com",
// // // //       githubUrl: "https://github.com",
// // // //       date: "2024",
// // // //       featured: false
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       title: "Blog Platform",
// // // //       description: "A content management system for bloggers with markdown support, SEO optimization, and social media integration.",
// // // //       image: "/placeholder.svg",
// // // //       technologies: ["Next.js", "Contentful", "Vercel", "SEO"],
// // // //       liveUrl: "https://example.com",
// // // //       githubUrl: "https://github.com",
// // // //       date: "2023",
// // // //       featured: false
// // // //     },
// // // //     {
// // // //       id: 6,
// // // //       title: "Mobile Fitness App",
// // // //       description: "A React Native fitness tracking app with workout plans, progress tracking, and social features for fitness enthusiasts.",
// // // //       image: "/placeholder.svg",
// // // //       technologies: ["React Native", "Redux", "AsyncStorage", "Charts"],
// // // //       liveUrl: "https://example.com",
// // // //       githubUrl: "https://github.com",
// // // //       date: "2022",
// // // //       featured: false
// // // //     }
// // // //   ];

// // // //   const featuredProjects = projects.filter(project => project.featured);
// // // //   const otherProjects = projects.filter(project => !project.featured);

// // // //   return (
// // // //     <div className="pt-16">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
// // // //         {/* Header */}
// // // //         <div className="text-center mb-16 animate-fade-in">
// // // //           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
// // // //             My <span className="gradient-text">Projects</span>
// // // //           </h1>
// // // //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
// // // //             A collection of projects that showcase my skills and passion for creating innovative digital solutions.
// // // //           </p>
// // // //         </div>

// // // //         {/* Featured Projects */}
// // // //         <div className="mb-20">
// // // //           <h2 className="text-3xl font-bold mb-8 animate-slide-in">Featured Projects</h2>
// // // //           <div className="grid lg:grid-cols-2 gap-8">
// // // //             {featuredProjects.map((project, index) => (
// // // //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
// // // //                 <CardHeader>
// // // //                   <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
// // // //                     <img 
// // // //                       src={project.image} 
// // // //                       alt={project.title}
// // // //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// // // //                     />
// // // //                   </div>
// // // //                   <div className="flex items-center justify-between">
// // // //                     <CardTitle className="text-xl">{project.title}</CardTitle>
// // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // //                       <Calendar className="h-4 w-4 mr-1" />
// // // //                       {project.date}
// // // //                     </div>
// // // //                   </div>
// // // //                 </CardHeader>
// // // //                 <CardContent>
// // // //                   <p className="text-muted-foreground mb-4 leading-relaxed">
// // // //                     {project.description}
// // // //                   </p>
// // // //                   <div className="flex flex-wrap gap-2 mb-6">
// // // //                     {project.technologies.map((tech) => (
// // // //                       <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
// // // //                         {tech}
// // // //                       </Badge>
// // // //                     ))}
// // // //                   </div>
// // // //                   <div className="flex gap-4">
// // // //                     <Button asChild size="sm" className="glow-effect">
// // // //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// // // //                         <ExternalLink className="h-4 w-4 mr-2" />
// // // //                         Live Demo
// // // //                       </a>
// // // //                     </Button>
// // // //                     <Button asChild variant="outline" size="sm">
// // // //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// // // //                         <Github className="h-4 w-4 mr-2" />
// // // //                         Code
// // // //                       </a>
// // // //                     </Button>
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Other Projects */}
// // // //         <div>
// // // //           <h2 className="text-3xl font-bold mb-8 animate-slide-in">Other Projects</h2>
// // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {otherProjects.map((project, index) => (
// // // //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
// // // //                 <CardHeader>
// // // //                   <div className="flex items-center justify-between mb-2">
// // // //                     <CardTitle className="text-lg">{project.title}</CardTitle>
// // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // //                       <Calendar className="h-4 w-4 mr-1" />
// // // //                       {project.date}
// // // //                     </div>
// // // //                   </div>
// // // //                   <p className="text-muted-foreground text-sm leading-relaxed">
// // // //                     {project.description}
// // // //                   </p>
// // // //                 </CardHeader>
// // // //                 <CardContent>
// // // //                   <div className="flex flex-wrap gap-1 mb-4">
// // // //                     {project.technologies.map((tech) => (
// // // //                       <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
// // // //                         {tech}
// // // //                       </Badge>
// // // //                     ))}
// // // //                   </div>
// // // //                   <div className="flex gap-2">
// // // //                     <Button asChild size="sm" variant="outline" className="flex-1">
// // // //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// // // //                         <ExternalLink className="h-3 w-3 mr-1" />
// // // //                         Demo
// // // //                       </a>
// // // //                     </Button>
// // // //                     <Button asChild size="sm" variant="outline" className="flex-1">
// // // //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// // // //                         <Github className="h-3 w-3 mr-1" />
// // // //                         Code
// // // //                       </a>
// // // //                     </Button>
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Projects;

// // // // src/pages/Projects.tsx
// // // import { ExternalLink, Github, Calendar } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";

// // // const Projects = () => {
// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "Mint District - Car Wash Service",
// // //       description: "Web-based car wash service application with intuitive interface for booking services and admin management.",
// // //       image: "/src/assets/car-wash.jpg",
// // //       technologies: ["React", "Bootstrap", "API Integration", "Responsive Design"],
// // //       liveUrl: "https://example.com",
// // //       githubUrl: "https://github.com",
// // //       date: "2023 - 2024",
// // //       featured: true
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "WordPress Projects",
// // //       description: "Multiple WordPress projects: Arabi ksa, St Mary, Consultancy, Medshop, Champion.",
// // //       image: "/src/assets/wordpress.jpg",
// // //       technologies: ["WordPress", "Theme Customization", "Performance", "Responsive"],
// // //       liveUrl: "https://example.com",
// // //       githubUrl: "https://github.com",
// // //       date: "2025",
// // //       featured: true
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Admin Panel",
// // //       description: "Admin panel developed with React.js & Bootstrap to improve task management and user experience.",
// // //       image: "/src/assets/admin-panel.jpg",
// // //       technologies: ["React", "Bootstrap", "API Integration", "UI Design"],
// // //       liveUrl: "https://example.com",
// // //       githubUrl: "https://github.com",
// // //       date: "2023 - 2024",
// // //       featured: false
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "E-Commerce Platform",
// // //       description: "Responsive e-commerce platform with product management and shopping cart functionality.",
// // //       image: "/src/assets/ecommerce.jpg",
// // //       technologies: ["React", "JavaScript", "CSS", "Responsive"],
// // //       liveUrl: "https://example.com",
// // //       githubUrl: "https://github.com",
// // //       date: "2023",
// // //       featured: false
// // //     }
// // //   ];

// // //   const featuredProjects = projects.filter(project => project.featured);
// // //   const otherProjects = projects.filter(project => !project.featured);

// // //   return (
// // //     <div className="pt-16">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
// // //         {/* Header */}
// // //         <div className="text-center mb-16 animate-fade-in">
// // //           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
// // //             My <span className="gradient-text">Projects</span>
// // //           </h1>
// // //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
// // //             A collection of projects that showcase my frontend development skills and problem-solving abilities.
// // //           </p>
// // //         </div>

// // //         {/* Featured Projects */}
// // //         <div className="mb-20">
// // //           <h2 className="text-3xl font-bold mb-8 animate-slide-in">Featured Projects</h2>
// // //           <div className="grid lg:grid-cols-2 gap-8">
// // //             {featuredProjects.map((project, index) => (
// // //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
// // //                 <CardHeader>
// // //                   <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
// // //                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
// // //                   </div>
// // //                   <div className="flex items-center justify-between">
// // //                     <CardTitle className="text-xl">{project.title}</CardTitle>
// // //                     <div className="flex items-center text-muted-foreground text-sm">
// // //                       <Calendar className="h-4 w-4 mr-1" />
// // //                       {project.date}
// // //                     </div>
// // //                   </div>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <p className="text-muted-foreground mb-4 leading-relaxed">
// // //                     {project.description}
// // //                   </p>
// // //                   <div className="flex flex-wrap gap-2 mb-6">
// // //                     {project.technologies.map((tech) => (
// // //                       <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
// // //                         {tech}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                   <div className="flex gap-4">
// // //                     <Button asChild size="sm" className="glow-effect">
// // //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// // //                         <ExternalLink className="h-4 w-4 mr-2" />
// // //                         Live Demo
// // //                       </a>
// // //                     </Button>
// // //                     <Button asChild variant="outline" size="sm">
// // //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// // //                         <Github className="h-4 w-4 mr-2" />
// // //                         Code
// // //                       </a>
// // //                     </Button>
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Other Projects */}
// // //         <div>
// // //           <h2 className="text-3xl font-bold mb-8 animate-slide-in">Other Projects</h2>
// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {otherProjects.map((project, index) => (
// // //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
// // //                 <CardHeader>
// // //                   <div className="flex items-center justify-between mb-2">
// // //                     <CardTitle className="text-lg">{project.title}</CardTitle>
// // //                     <div className="flex items-center text-muted-foreground text-sm">
// // //                       <Calendar className="h-4 w-4 mr-1" />
// // //                       {project.date}
// // //                     </div>
// // //                   </div>
// // //                   <p className="text-muted-foreground text-sm leading-relaxed">
// // //                     {project.description}
// // //                   </p>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <div className="flex flex-wrap gap-1 mb-4">
// // //                     {project.technologies.map((tech) => (
// // //                       <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
// // //                         {tech}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                   <div className="flex gap-2">
// // //                     <Button asChild size="sm" variant="outline" className="flex-1">
// // //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// // //                         <ExternalLink className="h-3 w-3 mr-1" />
// // //                         Demo
// // //                       </a>
// // //                     </Button>
// // //                     <Button asChild size="sm" variant="outline" className="flex-1">
// // //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// // //                         <Github className="h-3 w-3 mr-1" />
// // //                         Code
// // //                       </a>
// // //                     </Button>
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Projects;

// // // src/pages/Projects.tsx
// // import { ExternalLink, Github, Calendar } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";

// // const Projects = () => {
// //   const projects = [
// //     // WordPress Projects
// //     {
// //       id: 1,
// //       title: "Arabi KSA - E-commerce",
// //       description: "E-commerce website for a Saudi Arabian retail brand featuring product catalogs, shopping cart, and payment integration.",
// //       image: "/src/assets/arabi-ksa.jpg",
// //       technologies: ["WordPress", "WooCommerce", "Payment Gateway", "Arabic RTL"],
// //       liveUrl: "https://arabiksa.dsolutions.me/",
// //       // liveUrl: "https://example.com",
// //       // githubUrl: "https://github.com",
// //       date: "2025",
// //       featured: true,
// //       type: "wordpress"
// //     },
// //     {
// //       id: 2,
// //       title: "St Mary - Educational Institution",
// //       description: "School website with course listings, event calendar, faculty directory, and student portal integration.",
// //       image: "/src/assets/st-mary.jpg",
// //       technologies: ["WordPress", "LearnDash", "Events Calendar", "Student Portal"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2025",
// //       featured: true,
// //       type: "wordpress"
// //     },
// //     {
// //       id: 3,
// //       title: "Consultancy - Business Services",
// //       description: "Corporate website for a consultancy firm with service pages, case studies, and client testimonial sections.",
// //       image: "/src/assets/consultancy.jpg",
// //       technologies: ["WordPress", "Elementor", "SEO Optimization", "Contact Forms"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2025",
// //       featured: true,
// //       type: "wordpress"
// //     },
// //     {
// //       id: 4,
// //       title: "Medshop - Medical Supplies",
// //       description: "Online store for medical equipment with product filtering, inventory management, and supplier integration.",
// //       image: "/src/assets/medshop.jpg",
// //       technologies: ["WordPress", "WooCommerce", "Inventory Management", "Supplier API"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2025",
// //       featured: true,
// //       type: "wordpress"
// //     },
// //     {
// //       id: 5,
// //       title: "Champion - Sports Brand",
// //       description: "Athletic brand website featuring product showcases, athlete endorsements, and event registration system.",
// //       image: "/src/assets/champion.jpg",
// //       technologies: ["WordPress", "Athlete Profiles", "Event Registration", "E-commerce"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2025",
// //       featured: true,
// //       type: "wordpress"
// //     },
    
// //     // React Projects
// //     {
// //       id: 6,
// //       title: "Mint District - Car Wash Service",
// //       description: "Web-based car wash service application with intuitive interface for booking services and admin management.",
// //       image: "/src/assets/car-wash.jpg",
// //       technologies: ["React", "Bootstrap", "API Integration", "Responsive Design"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2023 - 2024",
// //       featured: true,
// //       type: "react"
// //     },
// //     {
// //       id: 7,
// //       title: "Admin Dashboard",
// //       description: "Admin panel developed with React.js & Bootstrap to improve task management and user experience.",
// //       image: "/src/assets/admin-panel.jpg",
// //       technologies: ["React", "Bootstrap", "API Integration", "UI Design"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2023 - 2024",
// //       featured: false,
// //       type: "react"
// //     },
// //     {
// //       id: 8,
// //       title: "E-Commerce Platform",
// //       description: "Responsive e-commerce platform with product management and shopping cart functionality.",
// //       image: "/src/assets/ecommerce.jpg",
// //       technologies: ["React", "JavaScript", "CSS", "Responsive"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2023",
// //       featured: false,
// //       type: "react"
// //     }
// //   ];

// //   // Group projects by type
// //   const wordpressProjects = projects.filter(project => project.type === "wordpress");
// //   const reactProjects = projects.filter(project => project.type === "react");
  
// //   // Get featured projects (all WordPress and Mint District)
// //   const featuredProjects = projects.filter(project => project.featured);
  
// //   // Other projects (non-featured)
// //   const otherProjects = projects.filter(project => !project.featured);

// //   return (
// //     <div className="pt-16">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
// //         {/* Header */}
// //         <div className="text-center mb-16 animate-fade-in">
// //           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
// //             My <span className="gradient-text">Projects</span>
// //           </h1>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
// //             A collection of projects showcasing my WordPress and React development skills.
// //           </p>
// //         </div>

// //         {/* Featured Projects */}
// //         <div className="mb-20">
// //           <h2 className="text-3xl font-bold mb-8 animate-slide-in">Featured Projects</h2>
// //           <div className="grid lg:grid-cols-2 gap-8">
// //             {featuredProjects.map((project, index) => (
// //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
// //                 <CardHeader>
// //                   <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
// //                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
// //                   </div>
// //                   <div className="flex items-center justify-between">
// //                     <CardTitle className="text-xl">{project.title}</CardTitle>
// //                     <div className="flex items-center text-muted-foreground text-sm">
// //                       <Calendar className="h-4 w-4 mr-1" />
// //                       {project.date}
// //                     </div>
// //                   </div>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <p className="text-muted-foreground mb-4 leading-relaxed">
// //                     {project.description}
// //                   </p>
// //                   <div className="flex flex-wrap gap-2 mb-6">
// //                     {project.technologies.map((tech) => (
// //                       <Badge 
// //                         key={tech} 
// //                         variant="secondary" 
// //                         className={`bg-primary/10 text-primary border-primary/20 ${project.type === "wordpress" ? "bg-purple-500/10 text-purple-500 border-purple-500/20" : ""}`}
// //                       >
// //                         {tech}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                   <div className="flex gap-4">
// //                     <Button asChild size="sm" className="glow-effect">
// //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// //                         <ExternalLink className="h-4 w-4 mr-2" />
// //                         Live Demo
// //                       </a>
// //                     </Button>
// //                     <Button asChild variant="outline" size="sm">
// //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// //                         <Github className="h-4 w-4 mr-2" />
// //                         Code
// //                       </a>
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>

// //         {/* WordPress Projects Section */}
// //         <div className="mb-20">
// //           <div className="flex items-center justify-between mb-8">
// //             <h2 className="text-3xl font-bold animate-slide-in">
// //               WordPress <span className="gradient-text">Projects</span>
// //             </h2>
// //             <div className="bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full text-sm">
// //               5 Projects
// //             </div>
// //           </div>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {wordpressProjects.map((project, index) => (
// //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
// //                 <CardHeader>
// //                   <div className="flex items-center justify-between mb-2">
// //                     <CardTitle className="text-lg">{project.title}</CardTitle>
// //                     <div className="flex items-center text-muted-foreground text-sm">
// //                       <Calendar className="h-4 w-4 mr-1" />
// //                       {project.date}
// //                     </div>
// //                   </div>
// //                   <p className="text-muted-foreground text-sm leading-relaxed">
// //                     {project.description}
// //                   </p>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex flex-wrap gap-1 mb-4">
// //                     {project.technologies.map((tech) => (
// //                       <Badge 
// //                         key={tech} 
// //                         variant="secondary" 
// //                         className="text-xs bg-purple-500/10 text-purple-500 border-purple-500/20"
// //                       >
// //                         {tech}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                   <div className="flex gap-2">
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// //                         <ExternalLink className="h-3 w-3 mr-1" />
// //                         Demo
// //                       </a>
// //                     </Button>
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// //                         <Github className="h-3 w-3 mr-1" />
// //                         Code
// //                       </a>
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>

// //         {/* React Projects Section */}
// //         <div className="mb-20">
// //           <div className="flex items-center justify-between mb-8">
// //             <h2 className="text-3xl font-bold animate-slide-in">
// //               React <span className="gradient-text">Projects</span>
// //             </h2>
// //             <div className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm">
// //               3 Projects
// //             </div>
// //           </div>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {reactProjects.map((project, index) => (
// //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
// //                 <CardHeader>
// //                   <div className="flex items-center justify-between mb-2">
// //                     <CardTitle className="text-lg">{project.title}</CardTitle>
// //                     <div className="flex items-center text-muted-foreground text-sm">
// //                       <Calendar className="h-4 w-4 mr-1" />
// //                       {project.date}
// //                     </div>
// //                   </div>
// //                   <p className="text-muted-foreground text-sm leading-relaxed">
// //                     {project.description}
// //                   </p>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex flex-wrap gap-1 mb-4">
// //                     {project.technologies.map((tech) => (
// //                       <Badge 
// //                         key={tech} 
// //                         variant="secondary" 
// //                         className="text-xs bg-blue-500/10 text-blue-500 border-blue-500/20"
// //                       >
// //                         {tech}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                   <div className="flex gap-2">
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// //                         <ExternalLink className="h-3 w-3 mr-1" />
// //                         Demo
// //                       </a>
// //                     </Button>
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// //                         <Github className="h-3 w-3 mr-1" />
// //                         Code
// //                       </a>
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Other Projects */}
// //         <div>
// //           <h2 className="text-3xl font-bold mb-8 animate-slide-in">Other Projects</h2>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {otherProjects.map((project, index) => (
// //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
// //                 <CardHeader>
// //                   <div className="flex items-center justify-between mb-2">
// //                     <CardTitle className="text-lg">{project.title}</CardTitle>
// //                     <div className="flex items-center text-muted-foreground text-sm">
// //                       <Calendar className="h-4 w-4 mr-1" />
// //                       {project.date}
// //                     </div>
// //                   </div>
// //                   <p className="text-muted-foreground text-sm leading-relaxed">
// //                     {project.description}
// //                   </p>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex flex-wrap gap-1 mb-4">
// //                     {project.technologies.map((tech) => (
// //                       <Badge 
// //                         key={tech} 
// //                         variant="secondary" 
// //                         className={`text-xs ${project.type === "wordpress" ? "bg-purple-500/10 text-purple-500 border-purple-500/20" : "bg-blue-500/10 text-blue-500 border-blue-500/20"}`}
// //                       >
// //                         {tech}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                   <div className="flex gap-2">
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// //                         <ExternalLink className="h-3 w-3 mr-1" />
// //                         Demo
// //                       </a>
// //                     </Button>
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// //                         <Github className="h-3 w-3 mr-1" />
// //                         Code
// //                       </a>
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;


// // // src/pages/Projects.tsx
// // import { ExternalLink, Github, Calendar } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";

// // const Projects = () => {
// //   const projects = [
// //     // WordPress Projects
// //     {
// //       id: 1,
// //       title: "Arabi KSA - E-commerce",
// //       description: "E-commerce website for a Saudi Arabian retail brand featuring product catalogs, shopping cart, and payment integration.",
// //       image: "/src/assets/arabi-ksa.jpg",
// //       technologies: ["WordPress", "WooCommerce", "Payment Gateway", "Arabic RTL"],
// //       liveUrl: "https://arabiksa.dsolutions.me/",
// //       // liveUrl: "https://example.com",
// //       // githubUrl: "https://github.com",
// //       date: "2025",
// //       featured: true,
// //       type: "wordpress"
// //     },
// //     {
// //       id: 2,
// //       title: "St Mary - Educational Institution",
// //       description: "School website with course listings, event calendar, faculty directory, and student portal integration.",
// //       image: "/src/assets/st-mary.jpg",
// //       technologies: ["WordPress", "LearnDash", "Events Calendar", "Student Portal"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2025",
// //       featured: true,
// //       type: "wordpress"
// //     },
// //     {
// //       id: 3,
// //       title: "Consultancy - Business Services",
// //       description: "Corporate website for a consultancy firm with service pages, case studies, and client testimonial sections.",
// //       image: "/src/assets/consultancy.jpg",
// //       technologies: ["WordPress", "Elementor", "SEO Optimization", "Contact Forms"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2025",
// //       featured: true,
// //       type: "wordpress"
// //     },
// //     {
// //       id: 4,
// //       title: "Medshop - Medical Supplies",
// //       description: "Online store for medical equipment with product filtering, inventory management, and supplier integration.",
// //       image: "/src/assets/medshop.jpg",
// //       technologies: ["WordPress", "WooCommerce", "Inventory Management", "Supplier API"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2025",
// //       featured: true,
// //       type: "wordpress"
// //     },
// //     {
// //       id: 5,
// //       title: "Champion - Sports Brand",
// //       description: "Athletic brand website featuring product showcases, athlete endorsements, and event registration system.",
// //       image: "/src/assets/champion.jpg",
// //       technologies: ["WordPress", "Athlete Profiles", "Event Registration", "E-commerce"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2025",
// //       featured: true,
// //       type: "wordpress"
// //     },
    
// //     // React Projects
// //     {
// //       id: 6,
// //       title: "Mint District - Car Wash Service",
// //       description: "Web-based car wash service application with intuitive interface for booking services and admin management.",
// //       image: "/src/assets/car-wash.jpg",
// //       technologies: ["React", "Bootstrap", "API Integration", "Responsive Design"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2023 - 2024",
// //       featured: true,
// //       type: "react"
// //     },
// //     {
// //       id: 7,
// //       title: "Admin Dashboard",
// //       description: "Admin panel developed with React.js & Bootstrap to improve task management and user experience.",
// //       image: "/src/assets/admin-panel.jpg",
// //       technologies: ["React", "Bootstrap", "API Integration", "UI Design"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2023 - 2024",
// //       featured: false,
// //       type: "react"
// //     },
// //     {
// //       id: 8,
// //       title: "E-Commerce Platform",
// //       description: "Responsive e-commerce platform with product management and shopping cart functionality.",
// //       image: "/src/assets/ecommerce.jpg",
// //       technologies: ["React", "JavaScript", "CSS", "Responsive"],
// //       liveUrl: "https://example.com",
// //       githubUrl: "https://github.com",
// //       date: "2023",
// //       featured: false,
// //       type: "react"
// //     }
// //   ];

// //   // Group projects by type
// //   const wordpressProjects = projects.filter(project => project.type === "wordpress");
// //   const reactProjects = projects.filter(project => project.type === "react");
  
// //   // Get featured projects (all WordPress and Mint District)
// //   const featuredProjects = projects.filter(project => project.featured);
  
// //   // Other projects (non-featured)
// //   const otherProjects = projects.filter(project => !project.featured);

// //   return (
// //     <div className="pt-16">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
// //         {/* Header */}
// //         <div className="text-center mb-16 animate-fade-in">
// //           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
// //             My <span className="gradient-text">Projects</span>
// //           </h1>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
// //             A collection of projects showcasing my WordPress and React development skills.
// //           </p>
// //         </div>

// //         {/* Featured Projects */}
// //         <div className="mb-20">
// //           <h2 className="text-3xl font-bold mb-8 animate-slide-in">Featured Projects</h2>
// //           <div className="grid lg:grid-cols-2 gap-8">
// //             {featuredProjects.map((project, index) => (
// //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
// //                 <CardHeader>
// //                   <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
// //                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
// //                   </div>
// //                   <div className="flex items-center justify-between">
// //                     <CardTitle className="text-xl">{project.title}</CardTitle>
// //                     <div className="flex items-center text-muted-foreground text-sm">
// //                       <Calendar className="h-4 w-4 mr-1" />
// //                       {project.date}
// //                     </div>
// //                   </div>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <p className="text-muted-foreground mb-4 leading-relaxed">
// //                     {project.description}
// //                   </p>
// //                   <div className="flex flex-wrap gap-2 mb-6">
// //                     {project.technologies.map((tech) => (
// //                       <Badge 
// //                         key={tech} 
// //                         variant="secondary" 
// //                         className={`bg-primary/10 text-primary border-primary/20 ${project.type === "wordpress" ? "bg-purple-500/10 text-purple-500 border-purple-500/20" : ""}`}
// //                       >
// //                         {tech}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                   <div className="flex gap-4">
// //                     <Button asChild size="sm" className="glow-effect">
// //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// //                         <ExternalLink className="h-4 w-4 mr-2" />
// //                         Live Demo
// //                       </a>
// //                     </Button>
// //                     <Button asChild variant="outline" size="sm">
// //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// //                         <Github className="h-4 w-4 mr-2" />
// //                         Code
// //                       </a>
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>

// //         {/* WordPress Projects Section */}
// //         <div className="mb-20">
// //           <div className="flex items-center justify-between mb-8">
// //             <h2 className="text-3xl font-bold animate-slide-in">
// //               WordPress <span className="gradient-text">Projects</span>
// //             </h2>
// //             <div className="bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full text-sm">
// //               5 Projects
// //             </div>
// //           </div>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {wordpressProjects.map((project, index) => (
// //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
// //                 <CardHeader>
// //                   <div className="flex items-center justify-between mb-2">
// //                     <CardTitle className="text-lg">{project.title}</CardTitle>
// //                     <div className="flex items-center text-muted-foreground text-sm">
// //                       <Calendar className="h-4 w-4 mr-1" />
// //                       {project.date}
// //                     </div>
// //                   </div>
// //                   <p className="text-muted-foreground text-sm leading-relaxed">
// //                     {project.description}
// //                   </p>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex flex-wrap gap-1 mb-4">
// //                     {project.technologies.map((tech) => (
// //                       <Badge 
// //                         key={tech} 
// //                         variant="secondary" 
// //                         className="text-xs bg-purple-500/10 text-purple-500 border-purple-500/20"
// //                       >
// //                         {tech}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                   <div className="flex gap-2">
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// //                         <ExternalLink className="h-3 w-3 mr-1" />
// //                         Demo
// //                       </a>
// //                     </Button>
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// //                         <Github className="h-3 w-3 mr-1" />
// //                         Code
// //                       </a>
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>

// //         {/* React Projects Section */}
// //         <div className="mb-20">
// //           <div className="flex items-center justify-between mb-8">
// //             <h2 className="text-3xl font-bold animate-slide-in">
// //               React <span className="gradient-text">Projects</span>
// //             </h2>
// //             <div className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm">
// //               3 Projects
// //             </div>
// //           </div>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {reactProjects.map((project, index) => (
// //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
// //                 <CardHeader>
// //                   <div className="flex items-center justify-between mb-2">
// //                     <CardTitle className="text-lg">{project.title}</CardTitle>
// //                     <div className="flex items-center text-muted-foreground text-sm">
// //                       <Calendar className="h-4 w-4 mr-1" />
// //                       {project.date}
// //                     </div>
// //                   </div>
// //                   <p className="text-muted-foreground text-sm leading-relaxed">
// //                     {project.description}
// //                   </p>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex flex-wrap gap-1 mb-4">
// //                     {project.technologies.map((tech) => (
// //                       <Badge 
// //                         key={tech} 
// //                         variant="secondary" 
// //                         className="text-xs bg-blue-500/10 text-blue-500 border-blue-500/20"
// //                       >
// //                         {tech}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                   <div className="flex gap-2">
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// //                         <ExternalLink className="h-3 w-3 mr-1" />
// //                         Demo
// //                       </a>
// //                     </Button>
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// //                         <Github className="h-3 w-3 mr-1" />
// //                         Code
// //                       </a>
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Other Projects */}
// //         <div>
// //           <h2 className="text-3xl font-bold mb-8 animate-slide-in">Other Projects</h2>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {otherProjects.map((project, index) => (
// //               <Card key={project.id} className="card-gradient hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
// //                 <CardHeader>
// //                   <div className="flex items-center justify-between mb-2">
// //                     <CardTitle className="text-lg">{project.title}</CardTitle>
// //                     <div className="flex items-center text-muted-foreground text-sm">
// //                       <Calendar className="h-4 w-4 mr-1" />
// //                       {project.date}
// //                     </div>
// //                   </div>
// //                   <p className="text-muted-foreground text-sm leading-relaxed">
// //                     {project.description}
// //                   </p>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex flex-wrap gap-1 mb-4">
// //                     {project.technologies.map((tech) => (
// //                       <Badge 
// //                         key={tech} 
// //                         variant="secondary" 
// //                         className={`text-xs ${project.type === "wordpress" ? "bg-purple-500/10 text-purple-500 border-purple-500/20" : "bg-blue-500/10 text-blue-500 border-blue-500/20"}`}
// //                       >
// //                         {tech}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                   <div className="flex gap-2">
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
// //                         <ExternalLink className="h-3 w-3 mr-1" />
// //                         Demo
// //                       </a>
// //                     </Button>
// //                     <Button asChild size="sm" variant="outline" className="flex-1">
// //                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
// //                         <Github className="h-3 w-3 mr-1" />
// //                         Code
// //                       </a>
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;

// // src/pages/Projects.tsx
// import { useState } from "react";
// import { ExternalLink, Github, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// // Define project interface
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   detailedDescription?: string;
//   image: string;
//   technologies: string[];
//   liveUrl: string;
//   githubUrl?: string;
//   date: string;
//   featured: boolean;
//   type: "wordpress" | "react";
//   responsibilities?: string[];
//   challenges?: string[];
//   results?: string[];
// }

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const projects: Project[] = [
//     // WordPress Projects
//     {
//       id: 1,
//       title: "Arabi KSA - E-commerce",
//       description: "E-commerce website for a Saudi Arabian retail brand featuring product catalogs, shopping cart, and payment integration.",
//       detailedDescription: "A comprehensive e-commerce solution for the Saudi market with Arabic RTL support, payment gateway integration, and inventory management system.",
//       image: "/src/assets/arabi-ksa.jpg",
//       technologies: ["WordPress", "WooCommerce", "Payment Gateway", "Arabic RTL", "Elementor Pro"],
//       liveUrl: "https://arabiksa.dsolutions.me/",
//       date: "2025",
//       featured: true,
//       type: "wordpress",
//       responsibilities: [
//         "Designed and developed the complete e-commerce platform",
//         "Integrated payment gateway for Saudi market",
//         "Implemented RTL support for Arabic language",
//         "Optimized site performance for faster loading"
//       ],
//       challenges: [
//         "RTL language support implementation",
//         "Payment gateway integration for Saudi market regulations",
//         "Mobile responsiveness for Arabic content"
//       ],
//       results: [
//         "30% increase in online sales within first month",
//         "40% improvement in page load speed",
//         "95% positive feedback on user experience"
//       ]
//     },
//     {
//       id: 2,
//       title: "St Mary - Educational Institution",
//       description: "School website with course listings, event calendar, faculty directory, and student portal integration.",
//       image: "/src/assets/st-mary.jpg",
//       technologies: ["WordPress", "LearnDash", "Events Calendar", "Student Portal"],
//       liveUrl: "https://smis.edu.in/",
//       githubUrl: "https://github.com",
//       date: "2025",
//       featured: true,
//       type: "wordpress"
//     },
//     {
//       id: 3,
//       title: "Consultancy - Business Services",
//       description: "Corporate website for a consultancy firm with service pages, case studies, and client testimonial sections.",
//       image: "/src/assets/consultancy.jpg",
//       technologies: ["WordPress", "Elementor", "SEO Optimization", "Contact Forms"],
//       liveUrl: "https://ishasgmp.com/",
//       githubUrl: "https://github.com",
//       date: "2025",
//       featured: true,
//       type: "wordpress"
//     },
//     {
//       id: 4,
//       title: "Medshop - Medical Supplies",
//       description: "Online store for medical equipment with product filtering, inventory management, and supplier integration.",
//       image: "/src/assets/medshop.jpg",
//       technologies: ["WordPress", "WooCommerce", "Inventory Management", "Supplier API"],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       date: "2025",
//       featured: true,
//       type: "wordpress"
//     },
//     {
//       id: 5,
//       title: "Champion - Sports Brand",
//       description: "Athletic brand website featuring product showcases, athlete endorsements, and event registration system.",
//       image: "/src/assets/champion.jpg",
//       technologies: ["WordPress", "Athlete Profiles", "Event Registration", "E-commerce"],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       date: "2025",
//       featured: true,
//       type: "wordpress"
//     },
    
//     // React Projects
//     {
//       id: 6,
//       title: "PMHS Tech Solutions",
//       description: "Company website for PMHS Tech Solutions showcasing services, portfolio, and client testimonials.",
//       detailedDescription: "A modern, responsive website for a technology solutions company featuring service overviews, case studies, and a contact system.",
//       image: "/src/assets/pmhs-tech.jpg",
//       technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
//       liveUrl: "https://pmhstechsolutions.com/",
//       githubUrl: "https://github.com",
//       date: "2024",
//       featured: true,
//       type: "react",
//       responsibilities: [
//         "Designed and developed the complete frontend architecture",
//         "Implemented responsive design for all device sizes",
//         "Integrated smooth animations and transitions",
//         "Optimized for SEO and performance"
//       ],
//       challenges: [
//         "Creating a visually appealing design that maintains professionalism",
//         "Implementing complex animations without compromising performance",
//         "Ensuring cross-browser compatibility"
//       ],
//       results: [
//         "40% increase in lead generation compared to previous website",
//         "95+ score on Google PageSpeed Insights",
//         "Significantly improved user engagement metrics"
//       ]
//     },
//     {
//       id: 7,
//       title: "MedOrbis AI Assistant",
//       description: "AI-powered medical assistant platform providing intelligent responses to healthcare queries.",
//       detailedDescription: "An advanced AI assistant designed for the medical field, leveraging natural language processing to provide accurate healthcare information and support.",
//       image: "/src/assets/medorbis-ai.jpg",
//       technologies: ["React", "AI Integration", "WebSockets", "Tailwind CSS", "Node.js"],
//       liveUrl: "https://ai-assistant.medorbis.ai/",
//       githubUrl: "https://github.com",
//       date: "2024",
//       featured: true,
//       type: "react",
//       responsibilities: [
//         "Developed the frontend user interface for the AI chat system",
//         "Integrated with backend AI services and APIs",
//         "Implemented real-time messaging with WebSockets",
//         "Designed responsive layout for medical professionals"
//       ],
//       challenges: [
//         "Handling real-time data flow from AI services",
//         "Creating an intuitive UI for complex medical information",
//         "Ensuring HIPAA compliance for data security"
//       ],
//       results: [
//         "Successfully deployed and used by medical professionals",
//         "90% accuracy in routing medical inquiries appropriately",
//         "Positive feedback from healthcare providers"
//       ]
//     },
//     {
//       id: 8,
//       title: "MedOrbis Platform",
//       description: "Comprehensive medical platform offering AI-powered solutions for healthcare providers.",
//       detailedDescription: "A full-featured medical platform integrating AI technology with healthcare workflows, providing tools for diagnosis support, patient management, and medical research.",
//       image: "/src/assets/medorbis-platform.jpg",
//       technologies: ["React", "Redux", "GraphQL", "TypeScript", "Jest", "Cypress"],
//       liveUrl: "https://www.medorbis.ai/",
//       githubUrl: "https://github.com",
//       date: "2024",
//       featured: true,
//       type: "react",
//       responsibilities: [
//         "Developed core frontend components and pages",
//         "Implemented state management with Redux",
//         "Created comprehensive test suites",
//         "Collaborated with medical experts on UX design"
//       ],
//       challenges: [
//         "Managing complex state across multiple application sections",
//         "Ensuring accessibility for users with disabilities",
//         "Maintaining performance with large medical datasets"
//       ],
//       results: [
//         "Platform adopted by multiple healthcare institutions",
//         "Reduced diagnosis time by 25% in pilot studies",
//         "Achieved 99.9% uptime in production environment"
//       ]
//     },
//     {
//       id: 9,
//       title: "Mint District - Car Wash Service",
//       description: "Web-based car wash service application with intuitive interface for booking services and admin management.",
//       image: "/src/assets/car-wash.jpg",
//       technologies: ["React", "Bootstrap", "API Integration", "Responsive Design"],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       date: "2023 - 2024",
//       featured: false,
//       type: "react"
//     },
//     {
//   id: 10,
//   title: "Admin Dashboard",
//   description: "Admin panel developed with React.js & Bootstrap to improve task management and user experience.",
//   image: "/src/assets/admin-panel.jpg",
//   technologies: ["React", "Bootstrap", "API Integration", "UI Design"],
//   liveUrl: "https://example.com",
//   githubUrl: "https://github.com",
//   date: "2023 - 2024",
//   featured: false, // important
//   type: "react"
// },
// {
//   id: 11,
//   title: "E-Commerce Platform",
//   description: "Responsive e-commerce platform with product management and shopping cart functionality.",
//   image: "/src/assets/ecommerce.jpg",
//   technologies: ["React", "JavaScript", "CSS", "Responsive"],
//   liveUrl: "https://example.com",
//   githubUrl: "https://github.com",
//   date: "2023",
//   featured: false, // important
//   type: "react"
// }

//   ];

//   // Group projects by type
//   const wordpressProjects = projects.filter(project => project.type === "wordpress");
//   const reactProjects = projects.filter(project => project.type === "react");
  
//   // Get featured projects
//   const featuredProjects = projects.filter(project => project.featured);
  
//   // Other projects (non-featured)
//   const otherProjects = projects.filter(project => !project.featured);

//   const openProjectDialog = (project: Project, index: number) => {
//     setSelectedProject(project);
//     setCurrentIndex(index);
//     setIsDialogOpen(true);
//   };

//   const navigateProjects = (direction: "prev" | "next") => {
//     const currentProjectIndex = projects.findIndex(p => p.id === selectedProject?.id);
//     let newIndex;
    
//     if (direction === "next") {
//       newIndex = (currentProjectIndex + 1) % projects.length;
//     } else {
//       newIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
//     }
    
//     setSelectedProject(projects[newIndex]);
//     setCurrentIndex(newIndex);
//   };

//   // 3D Lines Background Component
//   const ThreeDLinesBackground = () => (
//     <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
//       {[...Array(15)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute bg-primary"
//           style={{
//             height: '1px',
//             width: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             transform: `rotate(${Math.random() * 180 - 90}deg)`,
//             opacity: Math.random() * 0.5 + 0.1,
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div className="pt-16 relative">
//       <ThreeDLinesBackground />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
//             My <span className="gradient-text">Projects</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             A collection of projects showcasing my WordPress and React development skills.
//           </p>
//         </div>

//         {/* Featured Projects */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-bold mb-8 animate-slide-in">Featured Projects</h2>
//           <div className="grid lg:grid-cols-2 gap-8">
//             {featuredProjects.map((project, index) => (
//               <Card 
//                 key={project.id} 
//                 className="card-gradient hover-lift animate-scale-in group cursor-pointer" 
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => openProjectDialog(project, index)}
//               >
//                 <CardHeader>
//                   <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
//                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
//                     <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
//                       <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
//                         View Details
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-xl">{project.title}</CardTitle>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {project.date}
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground mb-4 leading-relaxed">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.technologies.slice(0, 4).map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className={`bg-primary/10 text-primary border-primary/20 ${project.type === "wordpress" ? "bg-purple-500/10 text-purple-500 border-purple-500/20" : ""}`}
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                     {project.technologies.length > 4 && (
//                       <Badge variant="outline" className="bg-muted">
//                         +{project.technologies.length - 4} more
//                       </Badge>
//                     )}
//                   </div>
//                   <div className="flex gap-4">
//                     <Button asChild size="sm" className="glow-effect" onClick={(e) => e.stopPropagation()}>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-4 w-4 mr-2" />
//                         Live Demo
//                       </a>
//                     </Button>
//                     {/* {project.githubUrl && (
//                       <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
//                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="h-4 w-4 mr-2" />
//                           Code
//                         </a>
//                       </Button>
//                     )} */}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* WordPress Projects Section */}
//         <div className="mb-20">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl font-bold animate-slide-in">
//               WordPress <span className="gradient-text">Projects</span>
//             </h2>
//             <div className="bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full text-sm">
//               {wordpressProjects.length} Projects
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {wordpressProjects.map((project, index) => (
//               <Card 
//                 key={project.id} 
//                 className="card-gradient hover-lift animate-scale-in cursor-pointer" 
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => openProjectDialog(project, index)}
//               >
//                 <CardHeader>
//                   <div className="flex items-center justify-between mb-2">
//                     <CardTitle className="text-lg">{project.title}</CardTitle>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {project.date}
//                     </div>
//                   </div>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {project.description}
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-1 mb-4">
//                     {project.technologies.slice(0, 3).map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className="text-xs bg-purple-500/10 text-purple-500 border-purple-500/20"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                     {project.technologies.length > 3 && (
//                       <Badge variant="outline" className="text-xs bg-muted">
//                         +{project.technologies.length - 3}
//                       </Badge>
//                     )}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-3 w-3 mr-1" />
//                         Demo
//                       </a>
//                     </Button>
//                     {/* {project.githubUrl && (
//                       <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="h-3 w-3 mr-1" />
//                           Code
//                         </a>
//                       </Button>
//                     )} */}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* React Projects Section */}
//         <div className="mb-20">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl font-bold animate-slide-in">
//               React <span className="gradient-text">Projects</span>
//             </h2>
//             <div className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm">
//               {reactProjects.length} Projects
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {reactProjects.map((project, index) => (
//               <Card 
//                 key={project.id} 
//                 className="card-gradient hover-lift animate-scale-in cursor-pointer" 
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => openProjectDialog(project, index)}
//               >
//                 <CardHeader>
//                   <div className="flex items-center justify-between mb-2">
//                     <CardTitle className="text-lg">{project.title}</CardTitle>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {project.date}
//                     </div>
//                   </div>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {project.description}
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-1 mb-4">
//                     {project.technologies.slice(0, 3).map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className="text-xs bg-blue-500/10 text-blue-500 border-blue-500/20"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                     {project.technologies.length > 3 && (
//                       <Badge variant="outline" className="text-xs bg-muted">
//                         +{project.technologies.length - 3}
//                       </Badge>
//                     )}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-3 w-3 mr-1" />
//                         Demo
//                       </a>
//                     </Button>
//                     {/* {project.githubUrl && (
//                       <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="h-3 w-3 mr-1" />
//                           Code
//                         </a>
//                       </Button>
//                     )} */}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Other Projects */}
//         {/*{otherProjects.length > 0 && (
//           <div>
//             <h2 className="text-3xl font-bold mb-8 animate-slide-in">Other Projects</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {otherProjects.map((project, index) => (
//                 <Card 
//                   key={project.id} 
//                   className="card-gradient hover-lift animate-scale-in cursor-pointer" 
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                   onClick={() => openProjectDialog(project, index)}
//                 >
//                   <CardHeader>
//                     <div className="flex items-center justify-between mb-2">
//                       <CardTitle className="text-lg">{project.title}</CardTitle>
//                       <div className="flex items-center text-muted-foreground text-sm">
//                         <Calendar className="h-4 w-4 mr-1" />
//                         {project.date}
//                       </div>
//                     </div>
//                     <p className="text-muted-foreground text-sm leading-relaxed">
//                       {project.description}
//                     </p>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex flex-wrap gap-1 mb-4">
//                       {project.technologies.slice(0, 3).map((tech) => (
//                         <Badge 
//                           key={tech} 
//                           variant="secondary" 
//                           className={`text-xs ${project.type === "wordpress" ? "bg-purple-500/10 text-purple-500 border-purple-500/20" : "bg-blue-500/10 text-blue-500 border-blue-500/20"}`}
//                         >
//                           {tech}
//                         </Badge>
//                       ))}
//                       {project.technologies.length > 3 && (
//                         <Badge variant="outline" className="text-xs bg-muted">
//                           +{project.technologies.length - 3}
//                         </Badge>
//                       )}
//                     </div>
//                     <div className="flex gap-2">
//                       <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="h-3 w-3 mr-1" />
//                           Demo
//                         </a>
//                       </Button>
//                       {/* {project.githubUrl && (
//                         <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                           <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                             <Github className="h-3 w-3 mr-1" />
//                             Code
//                           </a>
//                         </Button>
//                       )}
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         )}*/}
//         {/* Other Projects Section */}
// {otherProjects.length > 0 && (
//   <div className="mb-20">
//     <h2 className="text-3xl font-bold mb-8 animate-slide-in">
//       Other <span className="gradient-text">Projects</span>
//     </h2>
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {otherProjects.map((project, index) => (
//         <Card 
//           key={project.id} 
//           className="card-gradient hover-lift animate-scale-in cursor-pointer" 
//           style={{ animationDelay: `${index * 0.1}s` }}
//           onClick={() => openProjectDialog(project, index)}
//         >
//           <CardHeader>
//             <div className="flex items-center justify-between mb-2">
//               <CardTitle className="text-lg">{project.title}</CardTitle>
//               <div className="flex items-center text-muted-foreground text-sm">
//                 <Calendar className="h-4 w-4 mr-1" />
//                 {project.date}
//               </div>
//             </div>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               {project.description}
//             </p>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-wrap gap-1 mb-4">
//               {project.technologies.slice(0, 3).map((tech) => (
//                 <Badge 
//                   key={tech} 
//                   variant="secondary" 
//                   className={`text-xs ${
//                     project.type === "wordpress"
//                       ? "bg-purple-500/10 text-purple-500 border-purple-500/20"
//                       : "bg-blue-500/10 text-blue-500 border-blue-500/20"
//                   }`}
//                 >
//                   {tech}
//                 </Badge>
//               ))}
//               {project.technologies.length > 3 && (
//                 <Badge variant="outline" className="text-xs bg-muted">
//                   +{project.technologies.length - 3}
//                 </Badge>
//               )}
//             </div>
//             <div className="flex gap-2">
//               <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                   <ExternalLink className="h-3 w-3 mr-1" />
//                   Demo
//                 </a>
//               </Button>
//               {/* Uncomment if you want GitHub code button */}
//               {/* {project.githubUrl && (
//                 <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                     <Github className="h-3 w-3 mr-1" />
//                     Code
//                   </a>
//                 </Button>
//               )} */}
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   </div>
// )}

//       </div>

//       {/* Project Detail Dialog */}
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//           {selectedProject && (
//             <>
//               <DialogHeader>
//                 <DialogTitle className="text-2xl flex items-center justify-between">
//                   {selectedProject.title}
//                   {/* <Button variant="ghost" size="icon" onClick={() => setIsDialogOpen(false)}>
//                     <X className="h-5 w-5" />
//                   </Button> */}
//                 </DialogTitle>
//               </DialogHeader>
              
//               <div className="grid md:grid-cols-2 gap-6 mt-4">
//                 <div>
//                   <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
//                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
//                   </div>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {selectedProject.technologies.map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className={`${selectedProject.type === "wordpress" ? "bg-purple-500/10 text-purple-500 border-purple-500/20" : "bg-blue-500/10 text-blue-500 border-blue-500/20"}`}
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
                  
//                   <div className="flex gap-4 mb-6">
//                     <Button asChild className="glow-effect">
//                       <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-4 w-4 mr-2" />
//                         Visit Live Site
//                       </a>
//                     </Button>
//                     {/* {selectedProject.githubUrl && (
//                       <Button asChild variant="outline">
//                         <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="h-4 w-4 mr-2" />
//                           View Code
//                         </a>
//                       </Button>
//                     )} */}
//                   </div>
                  
//                   <div className="flex items-center text-muted-foreground mb-4">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     Completed: {selectedProject.date}
//                   </div>
//                 </div>
                
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
//                   <p className="text-muted-foreground mb-6">
//                     {selectedProject.detailedDescription || selectedProject.description}
//                   </p>
                  
//                   {selectedProject.responsibilities && (
//                     <div className="mb-6">
//                       <h4 className="font-medium mb-2">My Responsibilities</h4>
//                       <ul className="list-disc pl-5 text-muted-foreground space-y-1">
//                         {selectedProject.responsibilities.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
                  
//                   {selectedProject.challenges && (
//                     <div className="mb-6">
//                       <h4 className="font-medium mb-2">Key Challenges</h4>
//                       <ul className="list-disc pl-5 text-muted-foreground space-y-1">
//                         {selectedProject.challenges.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
                  
//                   {selectedProject.results && (
//                     <div>
//                       <h4 className="font-medium mb-2">Results & Impact</h4>
//                       <ul className="list-disc pl-5 text-muted-foreground space-y-1">
//                         {selectedProject.results.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
              
//               <div className="flex justify-between mt-6 pt-4 border-t">
//                 <Button variant="outline" onClick={() => navigateProjects("prev")}>
//                   <ChevronLeft className="h-4 w-4 mr-2" />
//                   Previous Project
//                 </Button>
//                 <Button variant="outline" onClick={() => navigateProjects("next")}>
//                   Next Project
//                   <ChevronRight className="h-4 w-4 ml-2" />
//                 </Button>
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Projects;

// // src/pages/Projects.tsx
// import { useState } from "react";
// import { ExternalLink, Github, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// // Define project interface
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   detailedDescription?: string;
//   image: string;
//   video?: string;
//   technologies: string[];
//   liveUrl: string;
//   githubUrl?: string;
//   date: string;
//   featured: boolean;
//   type: "wordpress" | "react" | "freetime";
//   responsibilities?: string[];
//   challenges?: string[];
//   results?: string[];
// }

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const projects: Project[] = [
//     // WordPress Projects
//     // {
//     //   id: 1,
//     //   title: "Arabi KSA - E-commerce Platform",
//     //   description: "Complete e-commerce solution for Saudi Arabian market with Arabic RTL support and payment integration.",
//     //   detailedDescription: "Developed a comprehensive e-commerce platform specifically tailored for the Saudi market, featuring Arabic RTL support, multiple payment gateway integrations, and advanced inventory management system. The platform handles high traffic volumes while maintaining optimal performance.",
//     //   image: "/src/assets/arabi-ksa.jpg",
//     //   technologies: ["WordPress", "WooCommerce", "Payment Gateway", "Arabic RTL", "Elementor Pro", "SEO"],
//     //   liveUrl: "https://arabiksa.dsolutions.me/",
//     //   date: "2025",
//     //   featured: true,
//     //   type: "wordpress",
//     //   responsibilities: [
//     //     "Designed and developed complete e-commerce platform architecture",
//     //     "Integrated multiple payment gateways for Saudi market compliance",
//     //     "Implemented advanced RTL support for Arabic language",
//     //     "Optimized site performance and loading speeds",
//     //     "Developed custom WooCommerce extensions"
//     //   ],
//     //   challenges: [
//     //     "Complex RTL language implementation for e-commerce",
//     //     "Payment gateway integration with Saudi banking regulations",
//     //     "Mobile responsiveness for Arabic content display",
//     //     "High-performance optimization for product catalogs"
//     //   ],
//     //   results: [
//     //     "35% increase in online sales within first month of launch",
//     //     "45% improvement in page load speed and performance",
//     //     "98% positive user feedback on shopping experience",
//     //     "Successfully handled 10,000+ monthly visitors"
//     //   ]
//     // },
//     {
//       id: 2,
//       title: "St Mary's Educational Institution",
//       description: "Comprehensive educational website with student portal, course management, and event systems.",
//       detailedDescription: "Built a full-featured educational institution website with integrated learning management system, student portal, event calendar, and faculty management. The platform serves students, parents, and faculty with tailored interfaces for each user type.",
//       image: "/src/assets/Screenshot 2025-10-08 004304.png",
//       video: "https://drive.google.com/file/d/1S8WzOFUc_Ijunoq8UrdR_mW44B3D5O5G/view?usp=sharing",
//       // video: video4,
//       technologies: ["WordPress", "LearnDash", "Events Calendar", "Student Portal", "Elementor"],
//       liveUrl: "https://smis.edu.in/",
//       date: "2025",
//       featured: true,
//       type: "wordpress",
//       responsibilities: [
//         "Developed complete educational platform architecture",
//         "Integrated Learning Management System (LMS)",
//         "Created student and faculty portal systems",
//         "Implemented event management and calendar functionality"
//       ],
//       challenges: [
//         "Multiple user role management and permissions",
//         "LMS integration with existing systems",
//         "Secure student data handling",
//         "Mobile-friendly educational content delivery"
//       ],
//       results: [
//         "Streamlined student enrollment process by 60%",
//         "Improved parent-teacher communication efficiency",
//         "Successfully managed 500+ student accounts",
//         "Enhanced online learning experience"
//       ]
//     },
//     {
//       id: 3,
//       title: "Isha's GMP Consultancy",
//       description: "Professional consultancy website with service showcases, case studies, and client management.",
//       detailedDescription: "Developed a corporate website for a GMP consultancy firm featuring service showcases, detailed case studies, client testimonial systems, and lead generation forms. The design emphasizes professionalism and trust-building elements.",
//       image: "/src/assets/Screenshot 2025-10-08 004208.png",
//       video: "https://drive.google.com/file/d/1Nbqh0pH2HqXWFAPhY4kLzm-nG3mUpArY/view?usp=sharing",
//       // video: video1,
//       technologies: ["WordPress", "Elementor Pro", "SEO Optimization", "Contact Forms", "CRM Integration"],
//       liveUrl: "https://ishasgmp.com/",
//       date: "2025",
//       featured: true,
//       type: "wordpress",
//       responsibilities: [
//         "Designed and developed complete corporate website",
//         "Implemented lead generation and contact systems",
//         "Optimized for search engines and local SEO",
//         "Integrated analytics and tracking systems"
//       ],
//       challenges: [
//         "Creating professional corporate identity online",
//         "Lead generation optimization for consultancy services",
//         "Mobile-responsive design for business users",
//         "Integration with existing business processes"
//       ],
//       results: [
//         "40% increase in qualified lead generation",
//         "Improved search engine rankings for key terms",
//         "Enhanced online presence and brand authority",
//         "Streamlined client inquiry process"
//       ]
//     },
//     {
//       id: 4,
//       title: "MedOrbis Healthcare Platform",
//       description: "Advanced healthcare platform with AI integration and medical learning systems.",
//       detailedDescription: "Comprehensive medical platform integrating AI technology with healthcare workflows, providing tools for diagnosis support, patient management, medical research, and professional education. Features real-time chat, AI assistance, and subscription management.",
//       image: "/src/assets/Screenshot 2025-10-08 004652.png",
//       video: "https://drive.google.com/file/d/1y4Vy0zel9CXWgVo-CjKZrEhDwcOzn0ne/view?usp=sharing",
//       // video: video2,
//       technologies: ["React", "Redux", "GraphQL", "TypeScript", "AI Integration", "WebSockets"],
//       liveUrl: "https://www.medorbis.ai/",
//       date: "2025",
//       featured: true,
//       type: "react",
//       responsibilities: [
//         "Developed core frontend architecture and components",
//         "Implemented state management with Redux",
//         "Integrated AI services and real-time communication",
//         "Created comprehensive testing suites",
//         "Collaborated with medical experts on UX design"
//       ],
//       challenges: [
//         "Managing complex state across multiple application sections",
//         "Real-time data synchronization for medical information",
//         "HIPAA compliance and data security requirements",
//         "Performance optimization with large medical datasets"
//       ],
//       results: [
//         "Platform adopted by multiple healthcare institutions",
//         "Reduced diagnosis support time by 30% in pilot studies",
//         "Achieved 99.9% uptime in production environment",
//         "Positive feedback from medical professionals"
//       ]
//     },
//     {
//       id: 5,
//       title: "MedOrbis AI Assistant",
//       description: "AI-powered medical assistant providing intelligent healthcare responses and support.",
//       detailedDescription: "Advanced AI assistant specifically designed for the medical field, leveraging natural language processing and machine learning to provide accurate healthcare information, diagnostic support, and clinical assistance to medical professionals.",
//       image: "/src/assets/Screenshot 2025-09-12 230521.png",
//       video: "https://drive.google.com/file/d/1gtiW0NeDFavC0ELffBF3c7gQ2a5oaPAn/view?usp=sharing",
//       // video: video7,
//       technologies: ["React", "AI Integration", "WebSockets", "Tailwind CSS", "Node.js", "Real-time Chat"],
//       liveUrl: "https://ai-assistant.medorbis.ai/",
//       date: "2025",
//       featured: true,
//       type: "react",
//       responsibilities: [
//         "Developed AI chat interface and user experience",
//         "Integrated with backend AI services and APIs",
//         "Implemented real-time messaging with WebSockets",
//         "Designed responsive layout for medical workflows"
//       ],
//       challenges: [
//         "Real-time AI response handling and display",
//         "Creating intuitive UI for complex medical information",
//         "Ensuring HIPAA compliance for patient data",
//         "Scalability for multiple concurrent users"
//       ],
//       results: [
//         "90% accuracy in routing medical inquiries appropriately",
//         "Successfully deployed and used by healthcare providers",
//         "Reduced response time for medical queries by 70%",
//         "High user satisfaction among medical professionals"
//       ]
//     },
//     {
//       id: 6,
//       title: "PMHS Tech Solutions",
//       description: "Corporate website for technology solutions company showcasing services and expertise.",
//       detailedDescription: "Modern, responsive corporate website for PMHS Tech Solutions featuring service overviews, technical expertise showcases, case studies, client testimonials, and integrated contact systems. The design emphasizes technical capability and professional trust.",
//       image: "/src/assets/Screenshot 2025-09-12 230226.png",
//       video: "https://drive.google.com/file/d/1geSZoEDQz4SG6Z1jZilM7EXo5mg8AwdI/view?usp=sharing",
//       // video: video3,
//       technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "SEO"],
//       liveUrl: "https://pmhstechsolutions.com/",
//       date: "2025",
//       featured: true,
//       type: "react",
//       responsibilities: [
//         "Designed and developed complete frontend architecture",
//         "Implemented responsive design for all device sizes",
//         "Integrated smooth animations and micro-interactions",
//         "Optimized for SEO and core web vitals"
//       ],
//       challenges: [
//         "Creating visually appealing design while maintaining professionalism",
//         "Implementing complex animations without performance impact",
//         "Ensuring cross-browser compatibility",
//         "Mobile-first responsive design implementation"
//       ],
//       results: [
//         "45% increase in lead generation compared to previous website",
//         "95+ score on Google PageSpeed Insights",
//         "Significantly improved user engagement metrics",
//         "Enhanced online presence and brand recognition"
//       ]
//     },

//     // Free Time Projects
//     {
//       id: 7,
//       title: "Admin Dashboard System",
//       description: "Comprehensive admin panel with user management, analytics, and task coordination features.",
//       detailedDescription: "Feature-rich admin dashboard developed to streamline business operations, featuring user management, analytics dashboards, task coordination, and reporting systems. Built with modern React practices and responsive design principles.",
//       image: "/src/assets/admin-panel.jpg",
//       technologies: ["React", "Bootstrap", "API Integration", "Chart.js", "Responsive Design"],
//       liveUrl: "#",
//       githubUrl: "https://github.com",
//       date: "2023 - 2024",
//       featured: false,
//       type: "freetime",
//       responsibilities: [
//         "Developed complete admin dashboard architecture",
//         "Implemented user management and permission systems",
//         "Created data visualization and analytics components",
//         "Built responsive design for admin workflows"
//       ],
//       challenges: [
//         "Complex state management for admin functionalities",
//         "Real-time data updates and synchronization",
//         "User permission and role-based access control",
//         "Mobile-responsive admin interface design"
//       ],
//       results: [
//         "Improved admin task efficiency by 50%",
//         "Comprehensive user and data management capabilities",
//         "Responsive design for on-the-go administration",
//         "Modular architecture for easy feature expansion"
//       ]
//     },
//     {
//       id: 8,
//       title: "E-Commerce Platform",
//       description: "Full-featured e-commerce solution with product management and shopping cart functionality.",
//       detailedDescription: "Complete e-commerce platform built from ground up, featuring product catalog management, shopping cart, user authentication, order processing, and payment integration. Demonstrates full-stack development capabilities with modern web technologies.",
//       image: "/src/assets/ecommerce.jpg",
//       technologies: ["React", "JavaScript", "CSS3", "Responsive Design", "API Integration"],
//       liveUrl: "#",
//       githubUrl: "https://github.com",
//       date: "2023",
//       featured: false,
//       type: "freetime",
//       responsibilities: [
//         "Developed complete e-commerce frontend",
//         "Implemented shopping cart and checkout processes",
//         "Created product management interfaces",
//         "Built responsive product catalog and displays"
//       ],
//       challenges: [
//         "Shopping cart state management and persistence",
//         "Responsive product catalog with filtering",
//         "User authentication and session management",
//         "Checkout process optimization and UX"
//       ],
//       results: [
//         "Fully functional e-commerce platform",
//         "Optimized mobile shopping experience",
//         "Efficient product management system",
//         "Secure user authentication and data handling"
//       ]
//     },
//     {
//   id: 9,
//   title: "Callvante AI Voice Platform",
//   description: "Next-generation SaaS platform for intelligent AI voice agents handling customer engagement and business automation.",
//   detailedDescription: "Callvante is a comprehensive voice automation platform that empowers businesses with AI voice agents capable of handling bookings, rescheduling, promotions, and customer engagement 24/7. The platform features multi-language support, calendar integrations, and industry-specific solutions for healthcare, restaurants, real estate, and more.",
//   image: "/src/assets/Screenshot 2025-10-08 004748.png",
//   video: "https://drive.google.com/file/d/157yctAIUXQCyrstaxQMT5nP49kCp1HZy/view?usp=sharing", // You can add a video reference if available
//   // video: video5, // You can add a video reference if available
//   technologies: ["React", "Node.js", "WebRTC", "AI/ML", "WebSockets", "TypeScript", "Cloud Integration"],
//   liveUrl: "https://www.callvante.com/", // Assuming this is the URL
//   date: "2025",
//   featured: true,
//   type: "react",
//   responsibilities: [
//     "Developed frontend architecture for voice agent management",
//     "Implemented real-time voice communication features",
//     "Integrated calendar systems (Google Calendar, Outlook, Calendly)",
//     "Built multi-language and voice selection capabilities",
//     "Created subscription and billing management system",
//     "Developed analytics dashboard for call metrics and performance"
//   ],
//   challenges: [
//     "Real-time voice processing and low-latency communication",
//     "Multi-calendar synchronization and availability management",
//     "Natural language processing for industry-specific terminology",
//     "Scalability for handling concurrent voice calls",
//     "Data privacy and compliance across different industries"
//   ],
//   results: [
//     "Trusted by 100+ businesses across multiple industries",
//     "Achieved 99.5% accuracy rate in call handling",
//     "Reduced front desk workload by 30+ hours per week for clients",
//     "Supported 10+ languages with local accent variations",
//     "Maintained 99.9% uptime with 24/7 availability"
//   ]
// },{
//   id: 13,
//   title: "TheFutureMed Healthcare Platform",
//   description: "Comprehensive medical education and professional development platform with AI integration.",
//   detailedDescription: "Advanced healthcare platform empowering medical professionals through technology and community. Features include AI-powered medical assistance, comprehensive e-learning systems, interactive e-seminars, job portal, medical communities, and professional networking. The platform serves as a complete ecosystem for medical education, career advancement, and professional collaboration.",
//   image: "/src/assets/Screenshot 2025-10-08 004842.png",
//   video: "https://drive.google.com/file/d/1nXZRTFPnugh9TeExbJyX0YUgh2uA85Zl/view?usp=sharing",
//   // video: video6,
//   technologies: ["React", "Redux", "GraphQL", "TypeScript", "AI Integration", "WebSockets", "Real-time Chat", "Payment Integration"],
//   liveUrl: "https://www.thefuturemed.com/",
//   date: "2025",
//   featured: true,
//   type: "react",
//   responsibilities: [
//     "Developed complete frontend architecture and responsive components",
//     "Implemented state management with Redux for complex application state",
//     "Integrated AI medic agents and real-time communication features",
//     "Built comprehensive e-learning and e-seminar systems",
//     "Created community engagement and networking features",
//     "Developed job portal with advanced filtering and applications",
//     "Implemented secure authentication and user management",
//     "Collaborated with medical experts on educational content structure"
//   ],
//   challenges: [
//     "Managing multiple complex modules (E-Learning, Community, Jobs, Seminars)",
//     "Real-time synchronization for live seminars and community interactions",
//     "HIPAA compliance and secure handling of medical educational data",
//     "Performance optimization with large course libraries and user bases",
//     "Integration of AI medical assistance with accurate medical knowledge",
//     "Scalable architecture for growing medical professional community"
//   ],
//   results: [
//     "Platform adopted by thousands of medical professionals globally",
//     "Successful launch of 50+ certified e-learning courses",
//     "Active community with 10,000+ healthcare professionals",
//     "95% user satisfaction rate for AI medic agents",
//     "200+ successful job placements through the portal",
//     "99.8% platform uptime with scalable infrastructure"
//   ],
// },
// {
//   id: 10,
//   title: "Mint District - Car Wash Service",
//   description: "Comprehensive car wash service platform with customer booking, service management, and real-time scheduling.",
//   detailedDescription: "Mint District is a full-featured car wash service application that enables customers to easily book car wash services, select packages, and manage appointments. The platform includes admin dashboard for service management, employee scheduling, and business analytics.",
//   image: "/src/assets/car-wash.jpg",
//   technologies: ["React", "Bootstrap", "Node.js", "MongoDB", "REST API", "Responsive Design", "Payment Integration"],
//   liveUrl: "https://mintdistrict.example.com",
//   githubUrl: "https://github.com/username/mint-district",
//   date: "2023 - 2024",
//   featured: false,
//   type: "react",
//   responsibilities: [
//     "Developed customer-facing booking interface with service selection",
//     "Implemented admin dashboard for service and appointment management",
//     "Integrated payment processing system for seamless transactions",
//     "Created responsive design optimized for mobile and desktop",
//     "Built real-time scheduling system with calendar integration",
//     "Developed service package management and pricing system"
//   ],
//   challenges: [
//     "Real-time scheduling conflicts and availability management",
//     "Mobile-first design for on-the-go booking convenience",
//     "Payment gateway integration and transaction security",
//     "Service customization with add-ons and package options",
//     "Performance optimization for quick booking process"
//   ],
//   results: [
//     "Reduced booking time by 60% compared to phone reservations",
//     "Increased customer retention with easy rebooking features",
//     "Streamlined admin operations with centralized management",
//     "Achieved 95% mobile booking rate",
//     "Positive customer feedback on user-friendly interface"
//   ]
// },
// // {
// //   id: 11,
// //   title: "Medshop - Medical Supplies",
// //   description: "Comprehensive e-commerce platform for medical equipment with advanced filtering, inventory tracking, and multi-supplier integration.",
// //   detailedDescription: "Medshop is a specialized online marketplace for medical supplies and equipment, featuring real-time inventory management, supplier API integrations, and advanced product filtering for healthcare professionals. The platform serves hospitals, clinics, and individual practitioners with reliable medical equipment sourcing.",
// //   image: "/src/assets/medshop.jpg",
// //   technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Supplier API Integration", "Inventory Management", "Payment Gateway"],
// //   liveUrl: "https://medshop.example.com",
// //   githubUrl: "https://github.com/username/medshop",
// //   date: "2025",
// //   featured: true,
// //   type: "wordpress",
// //   responsibilities: [
// //     "Developed custom WooCommerce theme for medical equipment showcase",
// //     "Implemented real-time inventory synchronization with multiple suppliers",
// //     "Created advanced product filtering by medical specialty and equipment type",
// //     "Integrated supplier APIs for automated stock updates and pricing",
// //     "Built medical professional verification system",
// //     "Developed bulk ordering functionality for institutional customers"
// //   ],
// //   challenges: [
// //     "Real-time inventory synchronization across multiple supplier systems",
// //     "Medical equipment categorization and specialized filtering",
// //     "Handling complex shipping requirements for medical devices",
// //     "Regulatory compliance for medical equipment sales",
// //     "Managing product variations and compatibility information"
// //   ],
// //   results: [
// //     "Reduced inventory management time by 70% for administrators",
// //     "Increased sales conversion with advanced product discovery",
// //     "Achieved 99% inventory accuracy with real-time sync",
// //     "Expanded supplier network from 3 to 12 partners",
// //     "Received positive feedback from medical institutions"
// //   ]
// // },
// // {
// //   id: 12,
// //   title: "Champion - Sports Brand",
// //   description: "Dynamic athletic brand platform featuring product launches, athlete collaborations, and community event management.",
// //   detailedDescription: "Champion is a comprehensive sports brand website that showcases athletic apparel, features professional athlete endorsements, and manages event registrations. The platform combines e-commerce functionality with community engagement through events, athlete stories, and brand storytelling.",
// //   image: "/src/assets/champion.jpg",
// //   technologies: ["WordPress", "WooCommerce", "Event Management", "Athlete Profiles", "Community Features", "E-commerce"],
// //   liveUrl: "https://champion.example.com",
// //   githubUrl: "https://github.com/username/champion-sports",
// //   date: "2025",
// //   featured: true,
// //   type: "wordpress",
// //   responsibilities: [
// //     "Developed custom athlete profile system with endorsement management",
// //     "Implemented event registration and ticket management system",
// //     "Created product launch countdown and limited edition showcases",
// //     "Built community features including user-generated content",
// //     "Integrated social media feeds and athlete storytelling",
// //     "Developed size guides and product recommendation engine"
// //   ],
// //   challenges: [
// //     "Managing high-traffic during product launches and limited releases",
// //     "Integrating athlete content with e-commerce functionality",
// //     "Event capacity management and registration flow optimization",
// //     "Creating engaging user experience for sports enthusiasts",
// //     "Mobile optimization for on-the-go event registration"
// //   ],
// //   results: [
// //     "Sold out limited edition releases within hours of launch",
// //     "Increased event registration by 45% through streamlined process",
// //     "Grew social media engagement by 80% through integrated feeds",
// //     "Improved conversion rate with athlete-endorsed product showcases",
// //     "Built loyal community with user-generated content features"
// //   ]
// // },

//   ];

//   // Group projects by type
//   const wordpressProjects = projects.filter(project => project.type === "wordpress");
//   const reactProjects = projects.filter(project => project.type === "react");
//   const freetimeProjects = projects.filter(project => project.type === "freetime");
  
//   // Get featured projects
//   const featuredProjects = projects.filter(project => project.featured);

//   const openProjectDialog = (project: Project, index: number) => {
//     setSelectedProject(project);
//     setCurrentIndex(index);
//     setIsDialogOpen(true);
//   };

//   const navigateProjects = (direction: "prev" | "next") => {
//     const currentProjectIndex = projects.findIndex(p => p.id === selectedProject?.id);
//     let newIndex;
    
//     if (direction === "next") {
//       newIndex = (currentProjectIndex + 1) % projects.length;
//     } else {
//       newIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
//     }
    
//     setSelectedProject(projects[newIndex]);
//     setCurrentIndex(newIndex);
//   };

//   // 3D Lines Background Component
//   const ThreeDLinesBackground = () => (
//     <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
//       {[...Array(15)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute bg-primary"
//           style={{
//             height: '1px',
//             width: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             transform: `rotate(${Math.random() * 180 - 90}deg)`,
//             opacity: Math.random() * 0.5 + 0.1,
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div className="pt-16 relative">
//       <ThreeDLinesBackground />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
//             My <span className="gradient-text">Projects</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             A showcase of professional WordPress and React projects, along with personal initiatives developed during free time to explore new technologies and solutions.
//           </p>
//         </div>

//         {/* Featured Projects */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-bold mb-8 animate-slide-in">Featured <span className="gradient-text">Projects</span></h2>
//           <div className="grid lg:grid-cols-2 gap-8">
//             {featuredProjects.map((project, index) => (
//               <Card 
//                 key={project.id} 
//                 className="card-gradient hover-lift animate-scale-in group cursor-pointer" 
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => openProjectDialog(project, index)}
//               >
//                 <CardHeader>
//                   <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
//                     {project.video ? (
//                       <video 
//                         className="w-full h-full object-cover"
//                         muted
//                         loop
//                         playsInline
//                         preload="metadata"
//                         poster={project.image}
//                       >
//                         <source src={project.video} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     ) : (
//                       <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
//                         Project Preview
//                       </div>
//                     )}
//                     <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
//                       <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
//                         View Details
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-xl">{project.title}</CardTitle>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {project.date}
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground mb-4 leading-relaxed">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.technologies.slice(0, 4).map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className={`bg-primary/10 text-primary border-primary/20 ${
//                           project.type === "wordpress" 
//                             ? "bg-purple-500/10 text-purple-500 border-purple-500/20" 
//                             : "bg-blue-500/10 text-blue-500 border-blue-500/20"
//                         }`}
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                     {project.technologies.length > 4 && (
//                       <Badge variant="outline" className="bg-muted">
//                         +{project.technologies.length - 4} more
//                       </Badge>
//                     )}
//                   </div>
//                   <div className="flex gap-4">
//                     <Button asChild size="sm" className="glow-effect" onClick={(e) => e.stopPropagation()}>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-4 w-4 mr-2" />
//                         Live Demo
//                       </a>
//                     </Button>
//                     {project.githubUrl && (
//                       <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
//                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="h-4 w-4 mr-2" />
//                           Code
//                         </a>
//                       </Button>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* WordPress Projects Section */}
//         <div className="mb-20">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl font-bold animate-slide-in">
//               WordPress <span className="gradient-text">Development</span>
//             </h2>
//             <div className="bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full text-sm">
//               {wordpressProjects.length} Professional Projects
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {wordpressProjects.map((project, index) => (
//               <Card 
//                 key={project.id} 
//                 className="card-gradient hover-lift animate-scale-in cursor-pointer" 
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => openProjectDialog(project, index)}
//               >
//                 <CardHeader>
//                   <div className="flex items-center justify-between mb-2">
//                     <CardTitle className="text-lg">{project.title}</CardTitle>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {project.date}
//                     </div>
//                   </div>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {project.description}
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-1 mb-4">
//                     {project.technologies.slice(0, 3).map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className="text-xs bg-purple-500/10 text-purple-500 border-purple-500/20"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                     {project.technologies.length > 3 && (
//                       <Badge variant="outline" className="text-xs bg-muted">
//                         +{project.technologies.length - 3}
//                       </Badge>
//                     )}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-3 w-3 mr-1" />
//                         Demo
//                       </a>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* React Projects Section */}
//         <div className="mb-20">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl font-bold animate-slide-in">
//               React <span className="gradient-text">Development</span>
//             </h2>
//             <div className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm">
//               {reactProjects.length} Professional Projects
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {reactProjects.map((project, index) => (
//               <Card 
//                 key={project.id} 
//                 className="card-gradient hover-lift animate-scale-in cursor-pointer" 
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => openProjectDialog(project, index)}
//               >
//                 <CardHeader>
//                   <div className="flex items-center justify-between mb-2">
//                     <CardTitle className="text-lg">{project.title}</CardTitle>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {project.date}
//                     </div>
//                   </div>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {project.description}
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-1 mb-4">
//                     {project.technologies.slice(0, 3).map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className="text-xs bg-blue-500/10 text-blue-500 border-blue-500/20"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                     {project.technologies.length > 3 && (
//                       <Badge variant="outline" className="text-xs bg-muted">
//                         +{project.technologies.length - 3}
//                       </Badge>
//                     )}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-3 w-3 mr-1" />
//                         Demo
//                       </a>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Free Time Projects Section */}
//         {freetimeProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center justify-between mb-8">
//               <h2 className="text-3xl font-bold animate-slide-in">
//                 Personal <span className="gradient-text">Projects</span>
//               </h2>
//               <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm">
//                 {freetimeProjects.length} Free Time Projects
//               </div>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {freetimeProjects.map((project, index) => (
//                 <Card 
//                   key={project.id} 
//                   className="card-gradient hover-lift animate-scale-in cursor-pointer" 
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                   onClick={() => openProjectDialog(project, index)}
//                 >
//                   <CardHeader>
//                     <div className="flex items-center justify-between mb-2">
//                       <CardTitle className="text-lg">{project.title}</CardTitle>
//                       <div className="flex items-center text-muted-foreground text-sm">
//                         <Calendar className="h-4 w-4 mr-1" />
//                         {project.date}
//                       </div>
//                     </div>
//                     <p className="text-muted-foreground text-sm leading-relaxed">
//                       {project.description}
//                     </p>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex flex-wrap gap-1 mb-4">
//                       {project.technologies.slice(0, 3).map((tech) => (
//                         <Badge 
//                           key={tech} 
//                           variant="secondary" 
//                           className="text-xs bg-green-500/10 text-green-500 border-green-500/20"
//                         >
//                           {tech}
//                         </Badge>
//                       ))}
//                       {project.technologies.length > 3 && (
//                         <Badge variant="outline" className="text-xs bg-muted">
//                           +{project.technologies.length - 3}
//                         </Badge>
//                       )}
//                     </div>
//                     <div className="flex gap-2">
//                       {project.liveUrl !== "#" && (
//                         <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                           <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                             <ExternalLink className="h-3 w-3 mr-1" />
//                             Demo
//                           </a>
//                         </Button>
//                       )}
//                       {project.githubUrl && (
//                         <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                           <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                             <Github className="h-3 w-3 mr-1" />
//                             Code
//                           </a>
//                         </Button>
//                       )}
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Project Detail Dialog */}
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//           {selectedProject && (
//             <>
//               <DialogHeader>
//                 <DialogTitle className="text-2xl flex items-center justify-between">
//                   {selectedProject.title}
//                   {/* <Button variant="ghost" size="icon" onClick={() => setIsDialogOpen(false)}>
//                     <X className="h-5 w-5" />
//                   </Button> */}
//                 </DialogTitle>
//               </DialogHeader>
              
//               <div className="grid md:grid-cols-2 gap-6 mt-4">
//                 <div>
//                   <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
//                     {selectedProject.video ? (
//                       <video 
//                         className="w-full h-full object-cover"
//                         controls
//                         muted
//                         playsInline
//                         preload="metadata"
//                         poster={selectedProject.image}
//                          onError={(e) => {
//     console.error('Video failed to load:', selectedProject.video);
//     // You could set a fallback image or message here
//   }}
//                       >
//                         <source src={selectedProject.video} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     ) : (
//                       <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
//                         Project Preview
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {selectedProject.technologies.map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className={`${
//                           selectedProject.type === "wordpress" 
//                             ? "bg-purple-500/10 text-purple-500 border-purple-500/20" 
//                             : selectedProject.type === "react"
//                             ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
//                             : "bg-green-500/10 text-green-500 border-green-500/20"
//                         }`}
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
                  
//                   <div className="flex gap-4 mb-6">
//                     {selectedProject.liveUrl !== "#" && (
//                       <Button asChild className="glow-effect">
//                         <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="h-4 w-4 mr-2" />
//                           Visit Live Site
//                         </a>
//                       </Button>
//                     )}
//                     {selectedProject.githubUrl && (
//                       <Button asChild variant="outline">
//                         <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="h-4 w-4 mr-2" />
//                           View Code
//                         </a>
//                       </Button>
//                     )}
//                   </div>
                  
//                   <div className="flex items-center text-muted-foreground mb-4">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     Completed: {selectedProject.date}
//                   </div>

//                   <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                     selectedProject.type === "wordpress" 
//                       ? "bg-purple-500/10 text-purple-500" 
//                       : selectedProject.type === "react"
//                       ? "bg-blue-500/10 text-blue-500"
//                       : "bg-green-500/10 text-green-500"
//                   }`}>
//                     {selectedProject.type === "wordpress" && "WordPress Project"}
//                     {selectedProject.type === "react" && "React Project"}
//                     {selectedProject.type === "freetime" && "Personal Project"}
//                   </div>
//                 </div>
                
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
//                   <p className="text-muted-foreground mb-6">
//                     {selectedProject.detailedDescription || selectedProject.description}
//                   </p>
                  
//                   {selectedProject.responsibilities && (
//                     <div className="mb-6">
//                       <h4 className="font-medium mb-2">My Responsibilities</h4>
//                       <ul className="list-disc pl-5 text-muted-foreground space-y-1">
//                         {selectedProject.responsibilities.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
                  
//                   {selectedProject.challenges && (
//                     <div className="mb-6">
//                       <h4 className="font-medium mb-2">Key Challenges</h4>
//                       <ul className="list-disc pl-5 text-muted-foreground space-y-1">
//                         {selectedProject.challenges.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
                  
//                   {selectedProject.results && (
//                     <div>
//                       <h4 className="font-medium mb-2">Results & Impact</h4>
//                       <ul className="list-disc pl-5 text-muted-foreground space-y-1">
//                         {selectedProject.results.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
              
//               <div className="flex justify-between mt-6 pt-4 border-t">
//                 <Button variant="outline" onClick={() => navigateProjects("prev")}>
//                   <ChevronLeft className="h-4 w-4 mr-2" />
//                   Previous Project
//                 </Button>
//                 <Button variant="outline" onClick={() => navigateProjects("next")}>
//                   Next Project
//                   <ChevronRight className="h-4 w-4 ml-2" />
//                 </Button>
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Projects;


// // src/pages/Projects.tsx
// import { useState } from "react";
// import { ExternalLink, Github, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// // Define project interface
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   detailedDescription?: string;
//   image: string;
//   video?: string;
//   technologies: string[];
//   liveUrl: string;
//   githubUrl?: string;
//   date: string;
//   featured: boolean;
//   type: "wordpress" | "react" | "freetime";
//   responsibilities?: string[];
//   challenges?: string[];
//   results?: string[];
// }

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const projects: Project[] = [
//     // WordPress Projects
//     {
//       id: 1,
//       title: "Arabi KSA - E-commerce Platform",
//       description: "Complete e-commerce solution for Saudi Arabian market with Arabic RTL support and payment integration.",
//       detailedDescription: "Developed a comprehensive e-commerce platform specifically tailored for the Saudi market, featuring Arabic RTL support, multiple payment gateway integrations, and advanced inventory management system. The platform handles high traffic volumes while maintaining optimal performance.",
//       image: "/src/assets/arabi-ksa.jpg",
//       technologies: ["WordPress", "WooCommerce", "Payment Gateway", "Arabic RTL", "Elementor Pro", "SEO"],
//       liveUrl: "https://arabiksa.dsolutions.me/",
//       date: "2025",
//       featured: true,
//       type: "wordpress",
//       responsibilities: [
//         "Designed and developed complete e-commerce platform architecture",
//         "Integrated multiple payment gateways for Saudi market compliance",
//         "Implemented advanced RTL support for Arabic language",
//         "Optimized site performance and loading speeds",
//         "Developed custom WooCommerce extensions"
//       ],
//       challenges: [
//         "Complex RTL language implementation for e-commerce",
//         "Payment gateway integration with Saudi banking regulations",
//         "Mobile responsiveness for Arabic content display",
//         "High-performance optimization for product catalogs"
//       ],
//       results: [
//         "35% increase in online sales within first month of launch",
//         "45% improvement in page load speed and performance",
//         "98% positive user feedback on shopping experience",
//         "Successfully handled 10,000+ monthly visitors"
//       ]
//     },
//     {
//       id: 2,
//       title: "St Mary's Educational Institution",
//       description: "Comprehensive educational website with student portal, course management, and event systems.",
//       detailedDescription: "Built a full-featured educational institution website with integrated learning management system, student portal, event calendar, and faculty management. The platform serves students, parents, and faculty with tailored interfaces for each user type.",
//       image: "/src/assets/Screenshot 2025-10-08 004304.png",
//       video: "https://drive.google.com/file/d/1S8WzOFUc_Ijunoq8UrdR_mW44B3D5O5G/view?usp=sharing",
//       technologies: ["WordPress", "LearnDash", "Events Calendar", "Student Portal", "Elementor"],
//       liveUrl: "https://smis.edu.in/",
//       date: "2025",
//       featured: true,
//       type: "wordpress",
//       responsibilities: [
//         "Developed complete educational platform architecture",
//         "Integrated Learning Management System (LMS)",
//         "Created student and faculty portal systems",
//         "Implemented event management and calendar functionality"
//       ],
//       challenges: [
//         "Multiple user role management and permissions",
//         "LMS integration with existing systems",
//         "Secure student data handling",
//         "Mobile-friendly educational content delivery"
//       ],
//       results: [
//         "Streamlined student enrollment process by 60%",
//         "Improved parent-teacher communication efficiency",
//         "Successfully managed 500+ student accounts",
//         "Enhanced online learning experience"
//       ]
//     },
//     {
//       id: 3,
//       title: "Isha's GMP Consultancy",
//       description: "Professional consultancy website with service showcases, case studies, and client management.",
//       detailedDescription: "Developed a corporate website for a GMP consultancy firm featuring service showcases, detailed case studies, client testimonial systems, and lead generation forms. The design emphasizes professionalism and trust-building elements.",
//       image: "/src/assets/Screenshot 2025-10-08 004208.png",
//       video: "https://drive.google.com/file/d/1Nbqh0pH2HqXWFAPhY4kLzm-nG3mUpArY/view?usp=sharing",
//       technologies: ["WordPress", "Elementor Pro", "SEO Optimization", "Contact Forms", "CRM Integration"],
//       liveUrl: "https://ishasgmp.com/",
//       date: "2025",
//       featured: true,
//       type: "wordpress",
//       responsibilities: [
//         "Designed and developed complete corporate website",
//         "Implemented lead generation and contact systems",
//         "Optimized for search engines and local SEO",
//         "Integrated analytics and tracking systems"
//       ],
//       challenges: [
//         "Creating professional corporate identity online",
//         "Lead generation optimization for consultancy services",
//         "Mobile-responsive design for business users",
//         "Integration with existing business processes"
//       ],
//       results: [
//         "40% increase in qualified lead generation",
//         "Improved search engine rankings for key terms",
//         "Enhanced online presence and brand authority",
//         "Streamlined client inquiry process"
//       ]
//     },
//     {
//       id: 4,
//       title: "MedOrbis Healthcare Platform",
//       description: "Advanced healthcare platform with AI integration and medical learning systems.",
//       detailedDescription: "Comprehensive medical platform integrating AI technology with healthcare workflows, providing tools for diagnosis support, patient management, medical research, and professional education. Features real-time chat, AI assistance, and subscription management.",
//       image: "/src/assets/Screenshot 2025-10-08 004652.png",
//       video: "https://drive.google.com/file/d/1y4Vy0zel9CXWgVo-CjKZrEhDwcOzn0ne/view?usp=sharing",
//       technologies: ["React", "Redux", "GraphQL", "TypeScript", "AI Integration", "WebSockets"],
//       liveUrl: "https://www.medorbis.ai/",
//       date: "2025",
//       featured: true,
//       type: "react",
//       responsibilities: [
//         "Developed core frontend architecture and components",
//         "Implemented state management with Redux",
//         "Integrated AI services and real-time communication",
//         "Created comprehensive testing suites",
//         "Collaborated with medical experts on UX design"
//       ],
//       challenges: [
//         "Managing complex state across multiple application sections",
//         "Real-time data synchronization for medical information",
//         "HIPAA compliance and data security requirements",
//         "Performance optimization with large medical datasets"
//       ],
//       results: [
//         "Platform adopted by multiple healthcare institutions",
//         "Reduced diagnosis support time by 30% in pilot studies",
//         "Achieved 99.9% uptime in production environment",
//         "Positive feedback from medical professionals"
//       ]
//     },
//     {
//       id: 5,
//       title: "MedOrbis AI Assistant",
//       description: "AI-powered medical assistant providing intelligent healthcare responses and support.",
//       detailedDescription: "Advanced AI assistant specifically designed for the medical field, leveraging natural language processing and machine learning to provide accurate healthcare information, diagnostic support, and clinical assistance to medical professionals.",
//       image: "/src/assets/Screenshot 2025-09-12 230521.png",
//       video: "https://drive.google.com/file/d/1gtiW0NeDFavC0ELffBF3c7gQ2a5oaPAn/view?usp=sharing",
//       technologies: ["React", "AI Integration", "WebSockets", "Tailwind CSS", "Node.js", "Real-time Chat"],
//       liveUrl: "https://ai-assistant.medorbis.ai/",
//       date: "2025",
//       featured: true,
//       type: "react",
//       responsibilities: [
//         "Developed AI chat interface and user experience",
//         "Integrated with backend AI services and APIs",
//         "Implemented real-time messaging with WebSockets",
//         "Designed responsive layout for medical workflows"
//       ],
//       challenges: [
//         "Real-time AI response handling and display",
//         "Creating intuitive UI for complex medical information",
//         "Ensuring HIPAA compliance for patient data",
//         "Scalability for multiple concurrent users"
//       ],
//       results: [
//         "90% accuracy in routing medical inquiries appropriately",
//         "Successfully deployed and used by healthcare providers",
//         "Reduced response time for medical queries by 70%",
//         "High user satisfaction among medical professionals"
//       ]
//     },
//     {
//       id: 6,
//       title: "PMHS Tech Solutions",
//       description: "Corporate website for technology solutions company showcasing services and expertise.",
//       detailedDescription: "Modern, responsive corporate website for PMHS Tech Solutions featuring service overviews, technical expertise showcases, case studies, client testimonials, and integrated contact systems. The design emphasizes technical capability and professional trust.",
//       image: "/src/assets/Screenshot 2025-09-12 230226.png",
//       video: "https://drive.google.com/file/d/1geSZoEDQz4SG6Z1jZilM7EXo5mg8AwdI/view?usp=sharing",
//       technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "SEO"],
//       liveUrl: "https://pmhstechsolutions.com/",
//       date: "2025",
//       featured: true,
//       type: "react",
//       responsibilities: [
//         "Designed and developed complete frontend architecture",
//         "Implemented responsive design for all device sizes",
//         "Integrated smooth animations and micro-interactions",
//         "Optimized for SEO and core web vitals"
//       ],
//       challenges: [
//         "Creating visually appealing design while maintaining professionalism",
//         "Implementing complex animations without performance impact",
//         "Ensuring cross-browser compatibility",
//         "Mobile-first responsive design implementation"
//       ],
//       results: [
//         "45% increase in lead generation compared to previous website",
//         "95+ score on Google PageSpeed Insights",
//         "Significantly improved user engagement metrics",
//         "Enhanced online presence and brand recognition"
//       ]
//     },

//     // Free Time Projects
//     {
//       id: 7,
//       title: "Admin Dashboard System",
//       description: "Comprehensive admin panel with user management, analytics, and task coordination features.",
//       detailedDescription: "Feature-rich admin dashboard developed to streamline business operations, featuring user management, analytics dashboards, task coordination, and reporting systems. Built with modern React practices and responsive design principles.",
//       image: "/src/assets/admin-panel.jpg",
//       technologies: ["React", "Bootstrap", "API Integration", "Chart.js", "Responsive Design"],
//       liveUrl: "#",
//       githubUrl: "https://github.com",
//       date: "2023 - 2024",
//       featured: false,
//       type: "freetime",
//       responsibilities: [
//         "Developed complete admin dashboard architecture",
//         "Implemented user management and permission systems",
//         "Created data visualization and analytics components",
//         "Built responsive design for admin workflows"
//       ],
//       challenges: [
//         "Complex state management for admin functionalities",
//         "Real-time data updates and synchronization",
//         "User permission and role-based access control",
//         "Mobile-responsive admin interface design"
//       ],
//       results: [
//         "Improved admin task efficiency by 50%",
//         "Comprehensive user and data management capabilities",
//         "Responsive design for on-the-go administration",
//         "Modular architecture for easy feature expansion"
//       ]
//     },
//     {
//       id: 8,
//       title: "E-Commerce Platform",
//       description: "Full-featured e-commerce solution with product management and shopping cart functionality.",
//       detailedDescription: "Complete e-commerce platform built from ground up, featuring product catalog management, shopping cart, user authentication, order processing, and payment integration. Demonstrates full-stack development capabilities with modern web technologies.",
//       image: "/src/assets/ecommerce.jpg",
//       technologies: ["React", "JavaScript", "CSS3", "Responsive Design", "API Integration"],
//       liveUrl: "#",
//       githubUrl: "https://github.com",
//       date: "2023",
//       featured: false,
//       type: "freetime",
//       responsibilities: [
//         "Developed complete e-commerce frontend",
//         "Implemented shopping cart and checkout processes",
//         "Created product management interfaces",
//         "Built responsive product catalog and displays"
//       ],
//       challenges: [
//         "Shopping cart state management and persistence",
//         "Responsive product catalog with filtering",
//         "User authentication and session management",
//         "Checkout process optimization and UX"
//       ],
//       results: [
//         "Fully functional e-commerce platform",
//         "Optimized mobile shopping experience",
//         "Efficient product management system",
//         "Secure user authentication and data handling"
//       ]
//     },
//     {
//   id: 9,
//   title: "Callvante AI Voice Platform",
//   description: "Next-generation SaaS platform for intelligent AI voice agents handling customer engagement and business automation.",
//   detailedDescription: "Callvante is a comprehensive voice automation platform that empowers businesses with AI voice agents capable of handling bookings, rescheduling, promotions, and customer engagement 24/7. The platform features multi-language support, calendar integrations, and industry-specific solutions for healthcare, restaurants, real estate, and more.",
//   image: "/src/assets/Screenshot 2025-10-08 004748.png",
//   video: "https://drive.google.com/file/d/157yctAIUXQCyrstaxQMT5nP49kCp1HZy/view", // You can add a video reference if available
//   // video: video5, // You can add a video reference if available
//   technologies: ["React", "Node.js", "WebRTC", "AI/ML", "WebSockets", "TypeScript", "Cloud Integration"],
//   liveUrl: "https://www.callvante.com/", // Assuming this is the URL
//   date: "2025",
//   featured: true,
//   type: "react",
//   responsibilities: [
//     "Developed frontend architecture for voice agent management",
//     "Implemented real-time voice communication features",
//     "Integrated calendar systems (Google Calendar, Outlook, Calendly)",
//     "Built multi-language and voice selection capabilities",
//     "Created subscription and billing management system",
//     "Developed analytics dashboard for call metrics and performance"
//   ],
//   challenges: [
//     "Real-time voice processing and low-latency communication",
//     "Multi-calendar synchronization and availability management",
//     "Natural language processing for industry-specific terminology",
//     "Scalability for handling concurrent voice calls",
//     "Data privacy and compliance across different industries"
//   ],
//   results: [
//     "Trusted by 100+ businesses across multiple industries",
//     "Achieved 99.5% accuracy rate in call handling",
//     "Reduced front desk workload by 30+ hours per week for clients",
//     "Supported 10+ languages with local accent variations",
//     "Maintained 99.9% uptime with 24/7 availability"
//   ]
// },{
//   id: 13,
//   title: "TheFutureMed Healthcare Platform",
//   description: "Comprehensive medical education and professional development platform with AI integration.",
//   detailedDescription: "Advanced healthcare platform empowering medical professionals through technology and community. Features include AI-powered medical assistance, comprehensive e-learning systems, interactive e-seminars, job portal, medical communities, and professional networking. The platform serves as a complete ecosystem for medical education, career advancement, and professional collaboration.",
//   image: "/src/assets/Screenshot 2025-10-08 004842.png",
//   video: "https://drive.google.com/file/d/1nXZRTFPnugh9TeExbJyX0YUgh2uA85Zl/view?usp=sharing",
//   technologies: ["React", "Redux", "GraphQL", "TypeScript", "AI Integration", "WebSockets", "Real-time Chat", "Payment Integration"],
//   liveUrl: "https://www.thefuturemed.com/",
//   date: "2025",
//   featured: true,
//   type: "react",
//   responsibilities: [
//     "Developed complete frontend architecture and responsive components",
//     "Implemented state management with Redux for complex application state",
//     "Integrated AI medic agents and real-time communication features",
//     "Built comprehensive e-learning and e-seminar systems",
//     "Created community engagement and networking features",
//     "Developed job portal with advanced filtering and applications",
//     "Implemented secure authentication and user management",
//     "Collaborated with medical experts on educational content structure"
//   ],
//   challenges: [
//     "Managing multiple complex modules (E-Learning, Community, Jobs, Seminars)",
//     "Real-time synchronization for live seminars and community interactions",
//     "HIPAA compliance and secure handling of medical educational data",
//     "Performance optimization with large course libraries and user bases",
//     "Integration of AI medical assistance with accurate medical knowledge",
//     "Scalable architecture for growing medical professional community"
//   ],
//   results: [
//     "Platform adopted by thousands of medical professionals globally",
//     "Successful launch of 50+ certified e-learning courses",
//     "Active community with 10,000+ healthcare professionals",
//     "95% user satisfaction rate for AI medic agents",
//     "200+ successful job placements through the portal",
//     "99.8% platform uptime with scalable infrastructure"
//   ],
// },
// {
//   id: 10,
//   title: "Mint District - Car Wash Service",
//   description: "Comprehensive car wash service platform with customer booking, service management, and real-time scheduling.",
//   detailedDescription: "Mint District is a full-featured car wash service application that enables customers to easily book car wash services, select packages, and manage appointments. The platform includes admin dashboard for service management, employee scheduling, and business analytics.",
//   image: "/src/assets/car-wash.jpg",
//   technologies: ["React", "Bootstrap", "Node.js", "MongoDB", "REST API", "Responsive Design", "Payment Integration"],
//   liveUrl: "https://mintdistrict.example.com",
//   githubUrl: "https://github.com/username/mint-district",
//   date: "2023 - 2024",
//   featured: false,
//   type: "react",
//   responsibilities: [
//     "Developed customer-facing booking interface with service selection",
//     "Implemented admin dashboard for service and appointment management",
//     "Integrated payment processing system for seamless transactions",
//     "Created responsive design optimized for mobile and desktop",
//     "Built real-time scheduling system with calendar integration",
//     "Developed service package management and pricing system"
//   ],
//   challenges: [
//     "Real-time scheduling conflicts and availability management",
//     "Mobile-first design for on-the-go booking convenience",
//     "Payment gateway integration and transaction security",
//     "Service customization with add-ons and package options",
//     "Performance optimization for quick booking process"
//   ],
//   results: [
//     "Reduced booking time by 60% compared to phone reservations",
//     "Increased customer retention with easy rebooking features",
//     "Streamlined admin operations with centralized management",
//     "Achieved 95% mobile booking rate",
//     "Positive customer feedback on user-friendly interface"
//   ]
// },
// {
//   id: 11,
//   title: "Medshop - Medical Supplies",
//   description: "Comprehensive e-commerce platform for medical equipment with advanced filtering, inventory tracking, and multi-supplier integration.",
//   detailedDescription: "Medshop is a specialized online marketplace for medical supplies and equipment, featuring real-time inventory management, supplier API integrations, and advanced product filtering for healthcare professionals. The platform serves hospitals, clinics, and individual practitioners with reliable medical equipment sourcing.",
//   image: "/src/assets/medshop.jpg",
//   technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Supplier API Integration", "Inventory Management", "Payment Gateway"],
//   liveUrl: "https://medshop.example.com",
//   githubUrl: "https://github.com/username/medshop",
//   date: "2025",
//   featured: true,
//   type: "wordpress",
//   responsibilities: [
//     "Developed custom WooCommerce theme for medical equipment showcase",
//     "Implemented real-time inventory synchronization with multiple suppliers",
//     "Created advanced product filtering by medical specialty and equipment type",
//     "Integrated supplier APIs for automated stock updates and pricing",
//     "Built medical professional verification system",
//     "Developed bulk ordering functionality for institutional customers"
//   ],
//   challenges: [
//     "Real-time inventory synchronization across multiple supplier systems",
//     "Medical equipment categorization and specialized filtering",
//     "Handling complex shipping requirements for medical devices",
//     "Regulatory compliance for medical equipment sales",
//     "Managing product variations and compatibility information"
//   ],
//   results: [
//     "Reduced inventory management time by 70% for administrators",
//     "Increased sales conversion with advanced product discovery",
//     "Achieved 99% inventory accuracy with real-time sync",
//     "Expanded supplier network from 3 to 12 partners",
//     "Received positive feedback from medical institutions"
//   ]
// },
// {
//   id: 12,
//   title: "Champion - Sports Brand",
//   description: "Dynamic athletic brand platform featuring product launches, athlete collaborations, and community event management.",
//   detailedDescription: "Champion is a comprehensive sports brand website that showcases athletic apparel, features professional athlete endorsements, and manages event registrations. The platform combines e-commerce functionality with community engagement through events, athlete stories, and brand storytelling.",
//   image: "/src/assets/champion.jpg",
//   technologies: ["WordPress", "WooCommerce", "Event Management", "Athlete Profiles", "Community Features", "E-commerce"],
//   liveUrl: "https://champion.example.com",
//   githubUrl: "https://github.com/username/champion-sports",
//   date: "2025",
//   featured: true,
//   type: "wordpress",
//   responsibilities: [
//     "Developed custom athlete profile system with endorsement management",
//     "Implemented event registration and ticket management system",
//     "Created product launch countdown and limited edition showcases",
//     "Built community features including user-generated content",
//     "Integrated social media feeds and athlete storytelling",
//     "Developed size guides and product recommendation engine"
//   ],
//   challenges: [
//     "Managing high-traffic during product launches and limited releases",
//     "Integrating athlete content with e-commerce functionality",
//     "Event capacity management and registration flow optimization",
//     "Creating engaging user experience for sports enthusiasts",
//     "Mobile optimization for on-the-go event registration"
//   ],
//   results: [
//     "Sold out limited edition releases within hours of launch",
//     "Increased event registration by 45% through streamlined process",
//     "Grew social media engagement by 80% through integrated feeds",
//     "Improved conversion rate with athlete-endorsed product showcases",
//     "Built loyal community with user-generated content features"
//   ]
// },

//   ];

//   // Group projects by type
//   const wordpressProjects = projects.filter(project => project.type === "wordpress");
//   const reactProjects = projects.filter(project => project.type === "react");
//   const freetimeProjects = projects.filter(project => project.type === "freetime");
  
//   // Get featured projects
//   const featuredProjects = projects.filter(project => project.featured);

//   const openProjectDialog = (project: Project, index: number) => {
//     setSelectedProject(project);
//     setCurrentIndex(index);
//     setIsDialogOpen(true);
//   };

//   const navigateProjects = (direction: "prev" | "next") => {
//     const currentProjectIndex = projects.findIndex(p => p.id === selectedProject?.id);
//     let newIndex;
    
//     if (direction === "next") {
//       newIndex = (currentProjectIndex + 1) % projects.length;
//     } else {
//       newIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
//     }
    
//     setSelectedProject(projects[newIndex]);
//     setCurrentIndex(newIndex);
//   };

//   // 3D Lines Background Component
//   const ThreeDLinesBackground = () => (
//     <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
//       {[...Array(15)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute bg-primary"
//           style={{
//             height: '1px',
//             width: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             transform: `rotate(${Math.random() * 180 - 90}deg)`,
//             opacity: Math.random() * 0.5 + 0.1,
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div className="pt-16 relative">
//       <ThreeDLinesBackground />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
//             My <span className="gradient-text">Projects</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             A showcase of professional WordPress and React projects, along with personal initiatives developed during free time to explore new technologies and solutions.
//           </p>
//         </div>

//         {/* Featured Projects */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-bold mb-8 animate-slide-in">Featured <span className="gradient-text">Projects</span></h2>
//           <div className="grid lg:grid-cols-2 gap-8">
//             {featuredProjects.map((project, index) => (
//               <Card 
//                 key={project.id} 
//                 className="card-gradient hover-lift animate-scale-in group cursor-pointer" 
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => openProjectDialog(project, index)}
//               >
//                 <CardHeader>
//                   <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
//                     {project.video ? (
//                       <video 
//                         className="w-full h-full object-cover"
//                         muted
//                         loop
//                         playsInline
//                         preload="metadata"
//                         poster={project.image}
//                       >
//                         <source src={project.video} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     ) : (
//                       <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
//                         Project Preview
//                       </div>
//                     )}
//                     <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
//                       <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
//                         View Details
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-xl">{project.title}</CardTitle>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {project.date}
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground mb-4 leading-relaxed">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.technologies.slice(0, 4).map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className={`bg-primary/10 text-primary border-primary/20 ${
//                           project.type === "wordpress" 
//                             ? "bg-purple-500/10 text-purple-500 border-purple-500/20" 
//                             : "bg-blue-500/10 text-blue-500 border-blue-500/20"
//                         }`}
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                     {project.technologies.length > 4 && (
//                       <Badge variant="outline" className="bg-muted">
//                         +{project.technologies.length - 4} more
//                       </Badge>
//                     )}
//                   </div>
//                   <div className="flex gap-4">
//                     <Button asChild size="sm" className="glow-effect" onClick={(e) => e.stopPropagation()}>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-4 w-4 mr-2" />
//                         Live Demo
//                       </a>
//                     </Button>
//                     {project.githubUrl && (
//                       <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
//                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="h-4 w-4 mr-2" />
//                           Code
//                         </a>
//                       </Button>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* WordPress Projects Section */}
//         <div className="mb-20">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl font-bold animate-slide-in">
//               WordPress <span className="gradient-text">Development</span>
//             </h2>
//             <div className="bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full text-sm">
//               {wordpressProjects.length} Professional Projects
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {wordpressProjects.map((project, index) => (
//               <Card 
//                 key={project.id} 
//                 className="card-gradient hover-lift animate-scale-in cursor-pointer" 
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => openProjectDialog(project, index)}
//               >
//                 <CardHeader>
//                   <div className="flex items-center justify-between mb-2">
//                     <CardTitle className="text-lg">{project.title}</CardTitle>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {project.date}
//                     </div>
//                   </div>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {project.description}
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-1 mb-4">
//                     {project.technologies.slice(0, 3).map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className="text-xs bg-purple-500/10 text-purple-500 border-purple-500/20"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                     {project.technologies.length > 3 && (
//                       <Badge variant="outline" className="text-xs bg-muted">
//                         +{project.technologies.length - 3}
//                       </Badge>
//                     )}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-3 w-3 mr-1" />
//                         Demo
//                       </a>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* React Projects Section */}
//         <div className="mb-20">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl font-bold animate-slide-in">
//               React <span className="gradient-text">Development</span>
//             </h2>
//             <div className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm">
//               {reactProjects.length} Professional Projects
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {reactProjects.map((project, index) => (
//               <Card 
//                 key={project.id} 
//                 className="card-gradient hover-lift animate-scale-in cursor-pointer" 
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => openProjectDialog(project, index)}
//               >
//                 <CardHeader>
//                   <div className="flex items-center justify-between mb-2">
//                     <CardTitle className="text-lg">{project.title}</CardTitle>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {project.date}
//                     </div>
//                   </div>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {project.description}
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-1 mb-4">
//                     {project.technologies.slice(0, 3).map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className="text-xs bg-blue-500/10 text-blue-500 border-blue-500/20"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                     {project.technologies.length > 3 && (
//                       <Badge variant="outline" className="text-xs bg-muted">
//                         +{project.technologies.length - 3}
//                       </Badge>
//                     )}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-3 w-3 mr-1" />
//                         Demo
//                       </a>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Free Time Projects Section */}
//         {freetimeProjects.length > 0 && (
//           <div className="mb-20">
//             <div className="flex items-center justify-between mb-8">
//               <h2 className="text-3xl font-bold animate-slide-in">
//                 Personal <span className="gradient-text">Projects</span>
//               </h2>
//               <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm">
//                 {freetimeProjects.length} Free Time Projects
//               </div>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {freetimeProjects.map((project, index) => (
//                 <Card 
//                   key={project.id} 
//                   className="card-gradient hover-lift animate-scale-in cursor-pointer" 
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                   onClick={() => openProjectDialog(project, index)}
//                 >
//                   <CardHeader>
//                     <div className="flex items-center justify-between mb-2">
//                       <CardTitle className="text-lg">{project.title}</CardTitle>
//                       <div className="flex items-center text-muted-foreground text-sm">
//                         <Calendar className="h-4 w-4 mr-1" />
//                         {project.date}
//                       </div>
//                     </div>
//                     <p className="text-muted-foreground text-sm leading-relaxed">
//                       {project.description}
//                     </p>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex flex-wrap gap-1 mb-4">
//                       {project.technologies.slice(0, 3).map((tech) => (
//                         <Badge 
//                           key={tech} 
//                           variant="secondary" 
//                           className="text-xs bg-green-500/10 text-green-500 border-green-500/20"
//                         >
//                           {tech}
//                         </Badge>
//                       ))}
//                       {project.technologies.length > 3 && (
//                         <Badge variant="outline" className="text-xs bg-muted">
//                           +{project.technologies.length - 3}
//                         </Badge>
//                       )}
//                     </div>
//                     <div className="flex gap-2">
//                       {project.liveUrl !== "#" && (
//                         <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                           <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                             <ExternalLink className="h-3 w-3 mr-1" />
//                             Demo
//                           </a>
//                         </Button>
//                       )}
//                       {project.githubUrl && (
//                         <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
//                           <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                             <Github className="h-3 w-3 mr-1" />
//                             Code
//                           </a>
//                         </Button>
//                       )}
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Project Detail Dialog */}
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//           {selectedProject && (
//             <>
//               <DialogHeader>
//                 <DialogTitle className="text-2xl flex items-center justify-between">
//                   {selectedProject.title}
//                   {/* <Button variant="ghost" size="icon" onClick={() => setIsDialogOpen(false)}>
//                     <X className="h-5 w-5" />
//                   </Button> */}
//                 </DialogTitle>
//               </DialogHeader>
              
//               <div className="grid md:grid-cols-2 gap-6 mt-4">
//                 <div>
//                   <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
//                     {selectedProject.video ? (
//                       <video 
//                         className="w-full h-full object-cover"
//                         controls
//                         muted
//                         playsInline
//                         preload="metadata"
//                         poster={selectedProject.image}
//                       >
//                         <source src={selectedProject.video} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     ) : (
//                       <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
//                         Project Preview
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {selectedProject.technologies.map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className={`${
//                           selectedProject.type === "wordpress" 
//                             ? "bg-purple-500/10 text-purple-500 border-purple-500/20" 
//                             : selectedProject.type === "react"
//                             ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
//                             : "bg-green-500/10 text-green-500 border-green-500/20"
//                         }`}
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
                  
//                   <div className="flex gap-4 mb-6">
//                     {selectedProject.liveUrl !== "#" && (
//                       <Button asChild className="glow-effect">
//                         <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="h-4 w-4 mr-2" />
//                           Visit Live Site
//                         </a>
//                       </Button>
//                     )}
//                     {selectedProject.githubUrl && (
//                       <Button asChild variant="outline">
//                         <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
//                           <Github className="h-4 w-4 mr-2" />
//                           View Code
//                         </a>
//                       </Button>
//                     )}
//                   </div>
                  
//                   <div className="flex items-center text-muted-foreground mb-4">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     Completed: {selectedProject.date}
//                   </div>

//                   <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                     selectedProject.type === "wordpress" 
//                       ? "bg-purple-500/10 text-purple-500" 
//                       : selectedProject.type === "react"
//                       ? "bg-blue-500/10 text-blue-500"
//                       : "bg-green-500/10 text-green-500"
//                   }`}>
//                     {selectedProject.type === "wordpress" && "WordPress Project"}
//                     {selectedProject.type === "react" && "React Project"}
//                     {selectedProject.type === "freetime" && "Personal Project"}
//                   </div>
//                 </div>
                
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
//                   <p className="text-muted-foreground mb-6">
//                     {selectedProject.detailedDescription || selectedProject.description}
//                   </p>
                  
//                   {selectedProject.responsibilities && (
//                     <div className="mb-6">
//                       <h4 className="font-medium mb-2">My Responsibilities</h4>
//                       <ul className="list-disc pl-5 text-muted-foreground space-y-1">
//                         {selectedProject.responsibilities.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
                  
//                   {selectedProject.challenges && (
//                     <div className="mb-6">
//                       <h4 className="font-medium mb-2">Key Challenges</h4>
//                       <ul className="list-disc pl-5 text-muted-foreground space-y-1">
//                         {selectedProject.challenges.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
                  
//                   {selectedProject.results && (
//                     <div>
//                       <h4 className="font-medium mb-2">Results & Impact</h4>
//                       <ul className="list-disc pl-5 text-muted-foreground space-y-1">
//                         {selectedProject.results.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
              
//               <div className="flex justify-between mt-6 pt-4 border-t">
//                 <Button variant="outline" onClick={() => navigateProjects("prev")}>
//                   <ChevronLeft className="h-4 w-4 mr-2" />
//                   Previous Project
//                 </Button>
//                 <Button variant="outline" onClick={() => navigateProjects("next")}>
//                   Next Project
//                   <ChevronRight className="h-4 w-4 ml-2" />
//                 </Button>
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Projects;


// src/pages/Projects.tsx
import { useState } from "react";
import { ExternalLink, Github, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

// Define project interface
interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  video?: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  date: string;
  featured: boolean;
  type: "wordpress" | "react" | "freetime";
  responsibilities?: string[];
  challenges?: string[];
  results?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const projects: Project[] = [
    // WordPress Projects
    // {
    //   id: 1,
    //   title: "Arabi KSA - E-commerce Platform",
    //   description: "Complete e-commerce solution for Saudi Arabian market with Arabic RTL support and payment integration.",
    //   detailedDescription: "Developed a comprehensive e-commerce platform specifically tailored for the Saudi market, featuring Arabic RTL support, multiple payment gateway integrations, and advanced inventory management system. The platform handles high traffic volumes while maintaining optimal performance.",
    //   image: "/src/assets/arabi-ksa.jpg",
    //   technologies: ["WordPress", "WooCommerce", "Payment Gateway", "Arabic RTL", "Elementor Pro", "SEO"],
    //   liveUrl: "https://arabiksa.dsolutions.me/",
    //   date: "2025",
    //   featured: true,
    //   type: "wordpress",
    //   responsibilities: [
    //     "Designed and developed complete e-commerce platform architecture",
    //     "Integrated multiple payment gateways for Saudi market compliance",
    //     "Implemented advanced RTL support for Arabic language",
    //     "Optimized site performance and loading speeds",
    //     "Developed custom WooCommerce extensions"
    //   ],
    //   challenges: [
    //     "Complex RTL language implementation for e-commerce",
    //     "Payment gateway integration with Saudi banking regulations",
    //     "Mobile responsiveness for Arabic content display",
    //     "High-performance optimization for product catalogs"
    //   ],
    //   results: [
    //     "35% increase in online sales within first month of launch",
    //     "45% improvement in page load speed and performance",
    //     "98% positive user feedback on shopping experience",
    //     "Successfully handled 10,000+ monthly visitors"
    //   ]
    // },
    {
      id: 2,
      title: "St Mary's Educational Institution",
      description: "Comprehensive educational website with student portal, course management, and event systems.",
      detailedDescription: "Built a full-featured educational institution website with integrated learning management system, student portal, event calendar, and faculty management. The platform serves students, parents, and faculty with tailored interfaces for each user type.",
      image: "/src/assets/Screenshot 2025-10-08 004304.png",
      video: "https://drive.google.com/file/d/1S8WzOFUc_Ijunoq8UrdR_mW44B3D5O5G/view?usp=sharing",
      // video: video4,
      technologies: ["WordPress", "LearnDash", "Events Calendar", "Student Portal", "Elementor"],
      liveUrl: "https://smis.edu.in/",
      date: "2025",
      featured: true,
      type: "wordpress",
      responsibilities: [
        "Developed complete educational platform architecture",
        "Integrated Learning Management System (LMS)",
        "Created student and faculty portal systems",
        "Implemented event management and calendar functionality"
      ],
      challenges: [
        "Multiple user role management and permissions",
        "LMS integration with existing systems",
        "Secure student data handling",
        "Mobile-friendly educational content delivery"
      ],
      results: [
        "Streamlined student enrollment process by 60%",
        "Improved parent-teacher communication efficiency",
        "Successfully managed 500+ student accounts",
        "Enhanced online learning experience"
      ]
    },
    {
      id: 3,
      title: "Isha's GMP Consultancy",
      description: "Professional consultancy website with service showcases, case studies, and client management.",
      detailedDescription: "Developed a corporate website for a GMP consultancy firm featuring service showcases, detailed case studies, client testimonial systems, and lead generation forms. The design emphasizes professionalism and trust-building elements.",
      image: "/src/assets/Screenshot 2025-10-08 004208.png",
      video: "https://drive.google.com/file/d/1Nbqh0pH2HqXWFAPhY4kLzm-nG3mUpArY/view?usp=sharing",
      // video: video1,
      technologies: ["WordPress", "Elementor Pro", "SEO Optimization", "Contact Forms", "CRM Integration"],
      liveUrl: "https://ishasgmp.com/",
      date: "2025",
      featured: true,
      type: "wordpress",
      responsibilities: [
        "Designed and developed complete corporate website",
        "Implemented lead generation and contact systems",
        "Optimized for search engines and local SEO",
        "Integrated analytics and tracking systems"
      ],
      challenges: [
        "Creating professional corporate identity online",
        "Lead generation optimization for consultancy services",
        "Mobile-responsive design for business users",
        "Integration with existing business processes"
      ],
      results: [
        "40% increase in qualified lead generation",
        "Improved search engine rankings for key terms",
        "Enhanced online presence and brand authority",
        "Streamlined client inquiry process"
      ]
    },
    {
      id: 4,
      title: "MedOrbis Healthcare Platform",
      description: "Advanced healthcare platform with AI integration and medical learning systems.",
      detailedDescription: "Comprehensive medical platform integrating AI technology with healthcare workflows, providing tools for diagnosis support, patient management, medical research, and professional education. Features real-time chat, AI assistance, and subscription management.",
      image: "/src/assets/Screenshot 2025-10-08 004652.png",
      video: "https://drive.google.com/file/d/1y4Vy0zel9CXWgVo-CjKZrEhDwcOzn0ne/view?usp=sharing",
      // video: video2,
      technologies: ["React", "Redux", "GraphQL", "TypeScript", "AI Integration", "WebSockets"],
      liveUrl: "https://www.medorbis.ai/",
      date: "2025",
      featured: true,
      type: "react",
      responsibilities: [
        "Developed core frontend architecture and components",
        "Implemented state management with Redux",
        "Integrated AI services and real-time communication",
        "Created comprehensive testing suites",
        "Collaborated with medical experts on UX design"
      ],
      challenges: [
        "Managing complex state across multiple application sections",
        "Real-time data synchronization for medical information",
        "HIPAA compliance and data security requirements",
        "Performance optimization with large medical datasets"
      ],
      results: [
        "Platform adopted by multiple healthcare institutions",
        "Reduced diagnosis support time by 30% in pilot studies",
        "Achieved 99.9% uptime in production environment",
        "Positive feedback from medical professionals"
      ]
    },
    {
      id: 5,
      title: "MedOrbis AI Assistant",
      description: "AI-powered medical assistant providing intelligent healthcare responses and support.",
      detailedDescription: "Advanced AI assistant specifically designed for the medical field, leveraging natural language processing and machine learning to provide accurate healthcare information, diagnostic support, and clinical assistance to medical professionals.",
      image: "/src/assets/Screenshot 2025-09-12 230521.png",
      video: "https://drive.google.com/file/d/1gtiW0NeDFavC0ELffBF3c7gQ2a5oaPAn/view?usp=sharing",
      // video: video7,
      technologies: ["React", "AI Integration", "WebSockets", "Tailwind CSS", "Node.js", "Real-time Chat"],
      liveUrl: "https://ai-assistant.medorbis.ai/",
      date: "2025",
      featured: true,
      type: "react",
      responsibilities: [
        "Developed AI chat interface and user experience",
        "Integrated with backend AI services and APIs",
        "Implemented real-time messaging with WebSockets",
        "Designed responsive layout for medical workflows"
      ],
      challenges: [
        "Real-time AI response handling and display",
        "Creating intuitive UI for complex medical information",
        "Ensuring HIPAA compliance for patient data",
        "Scalability for multiple concurrent users"
      ],
      results: [
        "90% accuracy in routing medical inquiries appropriately",
        "Successfully deployed and used by healthcare providers",
        "Reduced response time for medical queries by 70%",
        "High user satisfaction among medical professionals"
      ]
    },
    {
      id: 6,
      title: "PMHS Tech Solutions",
      description: "Corporate website for technology solutions company showcasing services and expertise.",
      detailedDescription: "Modern, responsive corporate website for PMHS Tech Solutions featuring service overviews, technical expertise showcases, case studies, client testimonials, and integrated contact systems. The design emphasizes technical capability and professional trust.",
      image: "/src/assets/Screenshot 2025-09-12 230226.png",
      video: "https://drive.google.com/file/d/1geSZoEDQz4SG6Z1jZilM7EXo5mg8AwdI/view?usp=sharing",
      // video: video3,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "SEO"],
      liveUrl: "https://pmhstechsolutions.com/",
      date: "2025",
      featured: true,
      type: "react",
      responsibilities: [
        "Designed and developed complete frontend architecture",
        "Implemented responsive design for all device sizes",
        "Integrated smooth animations and micro-interactions",
        "Optimized for SEO and core web vitals"
      ],
      challenges: [
        "Creating visually appealing design while maintaining professionalism",
        "Implementing complex animations without performance impact",
        "Ensuring cross-browser compatibility",
        "Mobile-first responsive design implementation"
      ],
      results: [
        "45% increase in lead generation compared to previous website",
        "95+ score on Google PageSpeed Insights",
        "Significantly improved user engagement metrics",
        "Enhanced online presence and brand recognition"
      ]
    },

    // Free Time Projects
    {
      id: 7,
      title: "Admin Dashboard System",
      description: "Comprehensive admin panel with user management, analytics, and task coordination features.",
      detailedDescription: "Feature-rich admin dashboard developed to streamline business operations, featuring user management, analytics dashboards, task coordination, and reporting systems. Built with modern React practices and responsive design principles.",
      image: "/src/assets/admin-panel.jpg",
      technologies: ["React", "Bootstrap", "API Integration", "Chart.js", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      date: "2023 - 2024",
      featured: false,
      type: "freetime",
      responsibilities: [
        "Developed complete admin dashboard architecture",
        "Implemented user management and permission systems",
        "Created data visualization and analytics components",
        "Built responsive design for admin workflows"
      ],
      challenges: [
        "Complex state management for admin functionalities",
        "Real-time data updates and synchronization",
        "User permission and role-based access control",
        "Mobile-responsive admin interface design"
      ],
      results: [
        "Improved admin task efficiency by 50%",
        "Comprehensive user and data management capabilities",
        "Responsive design for on-the-go administration",
        "Modular architecture for easy feature expansion"
      ]
    },
    {
      id: 8,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with product management and shopping cart functionality.",
      detailedDescription: "Complete e-commerce platform built from ground up, featuring product catalog management, shopping cart, user authentication, order processing, and payment integration. Demonstrates full-stack development capabilities with modern web technologies.",
      image: "/src/assets/ecommerce.jpg",
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design", "API Integration"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      date: "2023",
      featured: false,
      type: "freetime",
      responsibilities: [
        "Developed complete e-commerce frontend",
        "Implemented shopping cart and checkout processes",
        "Created product management interfaces",
        "Built responsive product catalog and displays"
      ],
      challenges: [
        "Shopping cart state management and persistence",
        "Responsive product catalog with filtering",
        "User authentication and session management",
        "Checkout process optimization and UX"
      ],
      results: [
        "Fully functional e-commerce platform",
        "Optimized mobile shopping experience",
        "Efficient product management system",
        "Secure user authentication and data handling"
      ]
    },
    {
  id: 9,
  title: "Callvante AI Voice Platform",
  description: "Next-generation SaaS platform for intelligent AI voice agents handling customer engagement and business automation.",
  detailedDescription: "Callvante is a comprehensive voice automation platform that empowers businesses with AI voice agents capable of handling bookings, rescheduling, promotions, and customer engagement 24/7. The platform features multi-language support, calendar integrations, and industry-specific solutions for healthcare, restaurants, real estate, and more.",
  image: "/src/assets/Screenshot 2025-10-08 004748.png",
  video: "https://drive.google.com/file/d/157yctAIUXQCyrstaxQMT5nP49kCp1HZy/view?usp=sharing", // You can add a video reference if available
  // video: video5, // You can add a video reference if available
  technologies: ["React", "Node.js", "WebRTC", "AI/ML", "WebSockets", "TypeScript", "Cloud Integration"],
  liveUrl: "https://www.callvante.com/", // Assuming this is the URL
  date: "2025",
  featured: true,
  type: "react",
  responsibilities: [
    "Developed frontend architecture for voice agent management",
    "Implemented real-time voice communication features",
    "Integrated calendar systems (Google Calendar, Outlook, Calendly)",
    "Built multi-language and voice selection capabilities",
    "Created subscription and billing management system",
    "Developed analytics dashboard for call metrics and performance"
  ],
  challenges: [
    "Real-time voice processing and low-latency communication",
    "Multi-calendar synchronization and availability management",
    "Natural language processing for industry-specific terminology",
    "Scalability for handling concurrent voice calls",
    "Data privacy and compliance across different industries"
  ],
  results: [
    "Trusted by 100+ businesses across multiple industries",
    "Achieved 99.5% accuracy rate in call handling",
    "Reduced front desk workload by 30+ hours per week for clients",
    "Supported 10+ languages with local accent variations",
    "Maintained 99.9% uptime with 24/7 availability"
  ]
},{
  id: 13,
  title: "TheFutureMed Healthcare Platform",
  description: "Comprehensive medical education and professional development platform with AI integration.",
  detailedDescription: "Advanced healthcare platform empowering medical professionals through technology and community. Features include AI-powered medical assistance, comprehensive e-learning systems, interactive e-seminars, job portal, medical communities, and professional networking. The platform serves as a complete ecosystem for medical education, career advancement, and professional collaboration.",
  image: "/src/assets/Screenshot 2025-10-08 004842.png",
  video: "https://drive.google.com/file/d/1nXZRTFPnugh9TeExbJyX0YUgh2uA85Zl/view?usp=sharing",
  // video: video6,
  technologies: ["React", "Redux", "GraphQL", "TypeScript", "AI Integration", "WebSockets", "Real-time Chat", "Payment Integration"],
  liveUrl: "https://www.thefuturemed.com/",
  date: "2025",
  featured: true,
  type: "react",
  responsibilities: [
    "Developed complete frontend architecture and responsive components",
    "Implemented state management with Redux for complex application state",
    "Integrated AI medic agents and real-time communication features",
    "Built comprehensive e-learning and e-seminar systems",
    "Created community engagement and networking features",
    "Developed job portal with advanced filtering and applications",
    "Implemented secure authentication and user management",
    "Collaborated with medical experts on educational content structure"
  ],
  challenges: [
    "Managing multiple complex modules (E-Learning, Community, Jobs, Seminars)",
    "Real-time synchronization for live seminars and community interactions",
    "HIPAA compliance and secure handling of medical educational data",
    "Performance optimization with large course libraries and user bases",
    "Integration of AI medical assistance with accurate medical knowledge",
    "Scalable architecture for growing medical professional community"
  ],
  results: [
    "Platform adopted by thousands of medical professionals globally",
    "Successful launch of 50+ certified e-learning courses",
    "Active community with 10,000+ healthcare professionals",
    "95% user satisfaction rate for AI medic agents",
    "200+ successful job placements through the portal",
    "99.8% platform uptime with scalable infrastructure"
  ],
},
{
  id: 10,
  title: "Mint District - Car Wash Service",
  description: "Comprehensive car wash service platform with customer booking, service management, and real-time scheduling.",
  detailedDescription: "Mint District is a full-featured car wash service application that enables customers to easily book car wash services, select packages, and manage appointments. The platform includes admin dashboard for service management, employee scheduling, and business analytics.",
  image: "/src/assets/car-wash.jpg",
  technologies: ["React", "Bootstrap", "Node.js", "MongoDB", "REST API", "Responsive Design", "Payment Integration"],
  liveUrl: "https://mintdistrict.example.com",
  githubUrl: "https://github.com/username/mint-district",
  date: "2023 - 2024",
  featured: false,
  type: "react",
  responsibilities: [
    "Developed customer-facing booking interface with service selection",
    "Implemented admin dashboard for service and appointment management",
    "Integrated payment processing system for seamless transactions",
    "Created responsive design optimized for mobile and desktop",
    "Built real-time scheduling system with calendar integration",
    "Developed service package management and pricing system"
  ],
  challenges: [
    "Real-time scheduling conflicts and availability management",
    "Mobile-first design for on-the-go booking convenience",
    "Payment gateway integration and transaction security",
    "Service customization with add-ons and package options",
    "Performance optimization for quick booking process"
  ],
  results: [
    "Reduced booking time by 60% compared to phone reservations",
    "Increased customer retention with easy rebooking features",
    "Streamlined admin operations with centralized management",
    "Achieved 95% mobile booking rate",
    "Positive customer feedback on user-friendly interface"
  ]
},
// {
//   id: 11,
//   title: "Medshop - Medical Supplies",
//   description: "Comprehensive e-commerce platform for medical equipment with advanced filtering, inventory tracking, and multi-supplier integration.",
//   detailedDescription: "Medshop is a specialized online marketplace for medical supplies and equipment, featuring real-time inventory management, supplier API integrations, and advanced product filtering for healthcare professionals. The platform serves hospitals, clinics, and individual practitioners with reliable medical equipment sourcing.",
//   image: "/src/assets/medshop.jpg",
//   technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Supplier API Integration", "Inventory Management", "Payment Gateway"],
//   liveUrl: "https://medshop.example.com",
//   githubUrl: "https://github.com/username/medshop",
//   date: "2025",
//   featured: true,
//   type: "wordpress",
//   responsibilities: [
//     "Developed custom WooCommerce theme for medical equipment showcase",
//     "Implemented real-time inventory synchronization with multiple suppliers",
//     "Created advanced product filtering by medical specialty and equipment type",
//     "Integrated supplier APIs for automated stock updates and pricing",
//     "Built medical professional verification system",
//     "Developed bulk ordering functionality for institutional customers"
//   ],
//   challenges: [
//     "Real-time inventory synchronization across multiple supplier systems",
//     "Medical equipment categorization and specialized filtering",
//     "Handling complex shipping requirements for medical devices",
//     "Regulatory compliance for medical equipment sales",
//     "Managing product variations and compatibility information"
//   ],
//   results: [
//     "Reduced inventory management time by 70% for administrators",
//     "Increased sales conversion with advanced product discovery",
//     "Achieved 99% inventory accuracy with real-time sync",
//     "Expanded supplier network from 3 to 12 partners",
//     "Received positive feedback from medical institutions"
//   ]
// },
// {
//   id: 12,
//   title: "Champion - Sports Brand",
//   description: "Dynamic athletic brand platform featuring product launches, athlete collaborations, and community event management.",
//   detailedDescription: "Champion is a comprehensive sports brand website that showcases athletic apparel, features professional athlete endorsements, and manages event registrations. The platform combines e-commerce functionality with community engagement through events, athlete stories, and brand storytelling.",
//   image: "/src/assets/champion.jpg",
//   technologies: ["WordPress", "WooCommerce", "Event Management", "Athlete Profiles", "Community Features", "E-commerce"],
//   liveUrl: "https://champion.example.com",
//   githubUrl: "https://github.com/username/champion-sports",
//   date: "2025",
//   featured: true,
//   type: "wordpress",
//   responsibilities: [
//     "Developed custom athlete profile system with endorsement management",
//     "Implemented event registration and ticket management system",
//     "Created product launch countdown and limited edition showcases",
//     "Built community features including user-generated content",
//     "Integrated social media feeds and athlete storytelling",
//     "Developed size guides and product recommendation engine"
//   ],
//   challenges: [
//     "Managing high-traffic during product launches and limited releases",
//     "Integrating athlete content with e-commerce functionality",
//     "Event capacity management and registration flow optimization",
//     "Creating engaging user experience for sports enthusiasts",
//     "Mobile optimization for on-the-go event registration"
//   ],
//   results: [
//     "Sold out limited edition releases within hours of launch",
//     "Increased event registration by 45% through streamlined process",
//     "Grew social media engagement by 80% through integrated feeds",
//     "Improved conversion rate with athlete-endorsed product showcases",
//     "Built loyal community with user-generated content features"
//   ]
// },

  ];

  // Group projects by type
  const wordpressProjects = projects.filter(project => project.type === "wordpress");
  const reactProjects = projects.filter(project => project.type === "react");
  const freetimeProjects = projects.filter(project => project.type === "freetime");
  
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  const openProjectDialog = (project: Project, index: number) => {
    setSelectedProject(project);
    setCurrentIndex(index);
    setIsDialogOpen(true);
  };

  const navigateProjects = (direction: "prev" | "next") => {
    const currentProjectIndex = projects.findIndex(p => p.id === selectedProject?.id);
    let newIndex;
    
    if (direction === "next") {
      newIndex = (currentProjectIndex + 1) % projects.length;
    } else {
      newIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    }
    
    setSelectedProject(projects[newIndex]);
    setCurrentIndex(newIndex);
  };

  // 3D Lines Background Component
  const ThreeDLinesBackground = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-primary"
          style={{
            height: '1px',
            width: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 180 - 90}deg)`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="pt-16 relative">
      <ThreeDLinesBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of professional WordPress and React projects, along with personal initiatives developed during free time to explore new technologies and solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 animate-slide-in">Featured <span className="gradient-text">Projects</span></h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="card-gradient hover-lift animate-scale-in group cursor-pointer" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openProjectDialog(project, index)}
              >
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
                    {project.video ? (
                      <video 
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={project.image}
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
                        Project Preview
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
                        View Details
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className={`bg-primary/10 text-primary border-primary/20 ${
                          project.type === "wordpress" 
                            ? "bg-purple-500/10 text-purple-500 border-purple-500/20" 
                            : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="bg-muted">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild size="sm" className="glow-effect" onClick={(e) => e.stopPropagation()}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* WordPress Projects Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold animate-slide-in">
              WordPress <span className="gradient-text">Development</span>
            </h2>
            <div className="bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full text-sm">
              {wordpressProjects.length} Professional Projects
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wordpressProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="card-gradient hover-lift animate-scale-in cursor-pointer" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openProjectDialog(project, index)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-purple-500/10 text-purple-500 border-purple-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-muted">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* React Projects Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold animate-slide-in">
              React <span className="gradient-text">Development</span>
            </h2>
            <div className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm">
              {reactProjects.length} Professional Projects
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reactProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="card-gradient hover-lift animate-scale-in cursor-pointer" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openProjectDialog(project, index)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-blue-500/10 text-blue-500 border-blue-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-muted">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Free Time Projects Section */}
        {freetimeProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold animate-slide-in">
                Personal <span className="gradient-text">Projects</span>
              </h2>
              <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm">
                {freetimeProjects.length} Free Time Projects
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freetimeProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="card-gradient hover-lift animate-scale-in cursor-pointer" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openProjectDialog(project, index)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs bg-green-500/10 text-green-500 border-green-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-muted">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {project.liveUrl !== "#" && (
                        <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild size="sm" variant="outline" className="flex-1" onClick={(e) => e.stopPropagation()}>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center justify-between">
                  {selectedProject.title}
                  {/* <Button variant="ghost" size="icon" onClick={() => setIsDialogOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button> */}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    {selectedProject.video ? (
                      <Link to={selectedProject.video}>
                      <video 
                        className="w-full h-full object-cover"
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        poster={selectedProject.image}
                      >
                        <source src={selectedProject.image} type="image" />
                        Your browser does not support the video tag.
                      </video>
                      </Link>
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
                        Project Preview
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className={`${
                          selectedProject.type === "wordpress" 
                            ? "bg-purple-500/10 text-purple-500 border-purple-500/20" 
                            : selectedProject.type === "react"
                            ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                            : "bg-green-500/10 text-green-500 border-green-500/20"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mb-6">
                    {selectedProject.liveUrl !== "#" && (
                      <Button asChild className="glow-effect">
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Live Site
                        </a>
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button asChild variant="outline">
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    Completed: {selectedProject.date}
                  </div>

                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    selectedProject.type === "wordpress" 
                      ? "bg-purple-500/10 text-purple-500" 
                      : selectedProject.type === "react"
                      ? "bg-blue-500/10 text-blue-500"
                      : "bg-green-500/10 text-green-500"
                  }`}>
                    {selectedProject.type === "wordpress" && "WordPress Project"}
                    {selectedProject.type === "react" && "React Project"}
                    {selectedProject.type === "freetime" && "Personal Project"}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                  <p className="text-muted-foreground mb-6">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </p>
                  
                  {selectedProject.responsibilities && (
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">My Responsibilities</h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        {selectedProject.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedProject.challenges && (
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Key Challenges</h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        {selectedProject.challenges.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedProject.results && (
                    <div>
                      <h4 className="font-medium mb-2">Results & Impact</h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        {selectedProject.results.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between mt-6 pt-4 border-t">
                <Button variant="outline" onClick={() => navigateProjects("prev")}>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous Project
                </Button>
                <Button variant="outline" onClick={() => navigateProjects("next")}>
                  Next Project
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;