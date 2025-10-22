// src/pages/Contact.tsx
import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "prasanthjg56@gmail.com",
      link: "mailto:prasanthjg56@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6382608201",
      link: "tel:+916382608201"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, Karnataka",
      link: null
    }
  ];

  const socialLinks = [
    // {
    //   icon: Github,
    //   name: "GitHub",
    //   url: "https://github.com",
    //   username: "@prasanthjg"
    // },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prasanth2409/",
      username: "/in/prasanthjg"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!formRef.current) {
      toast({
        title: "Error",
        description: "Form reference not found.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
       SERVICE_ID,   // string, not object
  TEMPLATE_ID,  // string, not object
  formRef.current!,
  { publicKey: PUBLIC_KEY } // object with publicKey
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm open to discussing new opportunities, creative ideas, or collaborating on projects.
          </p>
        </div>

        <div className="grid xl:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="xl:col-span-2 animate-slide-in">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project or opportunity..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full glow-effect"
                    disabled={isLoading}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card className="card-gradient mt-8">
              <CardHeader>
                <CardTitle className="text-2xl">My Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 sm:h-80 bg-muted rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1717665894421!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bengaluru Location"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-scale-in">
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon;
                    const content = (
                      <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{info.title}</div>
                          <div className="text-muted-foreground">{info.value}</div>
                        </div>
                      </div>
                    );

                    return info.link ? (
                      <a key={info.title} href={info.link} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={info.title}>
                        {content}
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-2xl">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{social.name}</div>
                          <div className="text-muted-foreground">{social.username}</div>
                        </div>
                      </a>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="card-gradient">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 text-accent mb-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="font-medium">Available for work</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Open to frontend development opportunities and collaborations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;