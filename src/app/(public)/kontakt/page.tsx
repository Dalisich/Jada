"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceHero from "@/components/sections/ServiceHero";

const contactSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Bitte wählen Sie einen Betreff"),
  message: z.string().min(10, "Bitte geben Sie eine Nachricht ein (min. 10 Zeichen)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+41 52 203 55 02", href: "tel:+41522035502" },
  { icon: Mail, label: "E-Mail", value: "info@jada.ch", href: "mailto:info@jada.ch" },
  { icon: MapPin, label: "Adresse", value: "Werkstrasse 20, 8404 Winterthur" },
  { icon: Clock, label: "Öffnungszeiten", value: "Mo–Fr: 07:00–17:00" },
];

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setSubmitted(true);
  };

  return (
    <>
      <ServiceHero
        title="Kontakt"
        description="Wir sind Ihr Partner für Brandschutz und Isolierungen. Treten Sie mit uns in Verbindung."
        image="https://images.unsplash.com/photo-1516387720-781bd7182ec6?w=1920&q=80"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
      />

      {/* Content Section */}
      <section className="section-padding bg-surface-white relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            
            {/* Contact Info & Map */}
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <span className="text-secondary tracking-[0.2em] text-sm font-semibold uppercase mb-6 block">Erreichbarkeit</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10 tracking-tight">Immer für Sie da.</h2>
                
                <div className="grid gap-8">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="group flex items-start gap-6 p-6 rounded-3xl bg-surface-warm/50 border border-gray-100 hover:border-secondary/20 hover:bg-surface-white hover:shadow-[0_10px_30px_rgba(45,90,158,0.05)] transition-all duration-500">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary text-surface-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                        <info.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary uppercase tracking-widest mb-1 font-bold">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-bold text-primary">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 h-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.5!2d8.727!3d47.497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI5JzQ5LjIiTiA4wrA0Myc0MS4zIkU!5e0!3m2!1sde!2sch!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="JADA Standort"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal className="h-full">
                <div className="bg-surface-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-100 h-full">
                  {submitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-20"
                    >
                      <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mb-10">
                        <CheckCircle className="w-12 h-12 text-secondary" />
                      </div>
                      <h3 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">Nachricht erhalten.</h3>
                      <p className="text-text-secondary text-lg font-light leading-relaxed max-w-sm">
                        Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen. Vielen Dank für Ihr Interesse!
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="mt-12 text-secondary font-bold underline underline-offset-8 decoration-2 hover:text-primary transition-colors"
                      >
                        Noch eine Nachricht senden
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="text-3xl font-extrabold text-primary mb-10 tracking-tight">Anfrage senden.</h3>
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                        <div className="grid md:grid-cols-2 gap-10">
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Vollständiger Name</label>
                            <input
                              type="text"
                              {...register("name")}
                              placeholder="Max Mustermann"
                              className={`w-full px-6 py-4 bg-surface-warm/50 border ${errors.name ? 'border-red-500' : 'border-gray-100'} rounded-2xl focus:bg-surface-white focus:border-secondary transition-all outline-none font-medium`}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">E-Mail Adresse</label>
                            <input
                              type="email"
                              {...register("email")}
                              placeholder="ihre@mail.ch"
                              className={`w-full px-6 py-4 bg-surface-warm/50 border ${errors.email ? 'border-red-500' : 'border-gray-100'} rounded-2xl focus:bg-surface-white focus:border-secondary transition-all outline-none font-medium`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Telefonnummer (Optional)</label>
                            <input
                              type="tel"
                              {...register("phone")}
                              placeholder="+41 00 000 00 00"
                              className="w-full px-6 py-4 bg-surface-warm/50 border border-gray-100 rounded-2xl focus:bg-surface-white focus:border-secondary transition-all outline-none font-medium"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Thema</label>
                            <select
                              {...register("subject")}
                              defaultValue=""
                              className={`w-full px-6 py-4 bg-surface-warm/50 border ${errors.subject ? 'border-red-500' : 'border-gray-100'} rounded-2xl focus:bg-surface-white focus:border-secondary transition-all outline-none font-medium appearance-none`}
                            >
                              <option value="" disabled>Bitte wählen...</option>
                              <option value="daemmungen">Dämmungen & Isolierungen</option>
                              <option value="brandschutz">Baulicher Brandschutz</option>
                              <option value="referenzen">Anfrage zu Referenzen</option>
                              <option value="karriere">Karriere bei JADA</option>
                              <option value="sonstiges">Sonstiges</option>
                            </select>
                            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Ihre Nachricht</label>
                          <textarea
                            rows={6}
                            {...register("message")}
                            placeholder="Beschreiben Sie Ihr Projekt..."
                            className={`w-full px-6 py-4 bg-surface-warm/50 border ${errors.message ? 'border-red-500' : 'border-gray-100'} rounded-[2rem] focus:bg-surface-white focus:border-secondary transition-all outline-none font-medium resize-none`}
                          />
                          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-12 py-5 bg-primary text-surface-white font-bold rounded-2xl hover:bg-secondary hover:text-primary transition-all duration-300 disabled:opacity-50 group shadow-lg shadow-primary/10"
                        >
                          {isSubmitting ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              Senden
                              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section or specialized footer text */}
      <section className="py-20 bg-surface-warm/30 border-t border-gray-100">
         <div className="max-w-[1280px] mx-auto px-6 text-center">
            <p className="text-text-secondary font-medium tracking-widest uppercase text-xs mb-4">Besuchen Sie uns</p>
            <h4 className="text-2xl font-bold text-primary">Wir freuen uns auf Ihren Besuch in Winterthur.</h4>
         </div>
      </section>
    </>
  );
}
