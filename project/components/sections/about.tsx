"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Ruler, Lightbulb, Leaf } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Ruler className="h-6 w-6" />,
      title: "Precision Design",
      description: "Meticulous attention to detail in every architectural project"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Pushing boundaries with creative architectural solutions"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainability",
      description: "Committed to environmentally conscious design practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Currently pursuing my architectural degree at SUNY Delhi, I combine technical expertise with creative vision to create meaningful spaces that enhance human experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}