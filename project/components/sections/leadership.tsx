"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, BookOpen } from "lucide-react";

export function Leadership() {
  const experiences = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Secretary of Architecture Club",
      period: "2024 - Present",
      description: "Leading administrative responsibilities and organizing events for the SUNY Delhi Architecture Club"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Student Representative",
      period: "2023 - Present",
      description: "Representing student interests in departmental meetings and initiatives"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Academic Excellence",
      period: "2022 - Present",
      description: "Maintaining strong academic performance while participating in extracurricular activities"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Leadership & Involvement</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Taking initiative and making meaningful contributions to the architectural community at SUNY Delhi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    {experience.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                  <p className="text-sm text-primary mb-4">{experience.period}</p>
                  <p className="text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}