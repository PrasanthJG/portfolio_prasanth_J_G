import { Code, Palette, Database, Globe, Smartphone, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "UI Design", level: 88 },
        { name: "UX Research", level: 75 },
        { name: "Prototyping", level: 82 },
        { name: "Design Systems", level: 90 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Vercel", level: 90 },
        { name: "CI/CD", level: 78 },
        { name: "Testing", level: 85 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 82 },
        { name: "Expo", level: 85 },
        { name: "Mobile UI", level: 80 },
        { name: "App Store", level: 70 },
        { name: "Native APIs", level: 75 },
        { name: "Performance", level: 78 }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "Performance", level: 88 },
        { name: "SEO", level: 85 },
        { name: "Accessibility", level: 82 },
        { name: "PWA", level: 80 },
        { name: "WebSocket", level: 75 },
        { name: "Web APIs", level: 90 }
      ]
    }
  ];

  const tools = [
    "VS Code", "Figma", "GitHub", "Postman", "Chrome DevTools",
    "Slack", "Notion", "Jira", "Adobe Creative Suite", "Terminal"
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains.
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

        {/* Tools Section */}
        <div className="animate-slide-in">
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
        <div className="mt-20 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-8">Experience Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">5+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">15+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;