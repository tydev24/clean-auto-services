"use client"

import type React from "react"

import Image from "next/image"
import { Car, MapPin, Phone, Check, Sparkles, Shield, Crown, Mail, Clock, Star, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function HomePage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Merci pour votre message ! Nous vous recontacterons rapidement.")
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image src="/images/logo.png" alt="Clean Auto Services" width={40} height={40} className="rounded-lg" />
              <div>
                <h1 className="font-bold text-lg text-primary">Clean Auto Services</h1>
                <p className="text-xs text-muted-foreground">Nettoyage intérieur voiture</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-foreground hover:text-secondary transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-secondary transition-colors">
                À propos
              </a>
              <a href="#contact" className="text-foreground hover:text-secondary transition-colors">
                Contact
              </a>
              <WhatsAppButton size="sm" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/clean-car-interior-with-water-droplets-and-profess.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-secondary/20 p-2 rounded-full hover:bg-secondary/30 transition-colors duration-300">
                <Car className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
                Service professionnel
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Nettoyage intérieur voiture <span className="text-secondary">à domicile</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-6 text-primary-foreground/90 text-pretty font-medium">
              Sarlat-la-Canéda et dans un rayon de 30 km
            </p>
            <p className="text-lg mb-10 text-primary-foreground/80 max-w-2xl text-pretty leading-relaxed">
              Service haut de gamme adapté à tous types de véhicules. Intervention rapide et professionnelle directement
              chez vous avec un équipement professionnel de dernière génération.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              />
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent font-semibold transition-all transform hover:scale-105"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Voir nos tarifs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-secondary-foreground py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 text-center md:text-left">
            <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <div className="bg-secondary-foreground/10 p-3 rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-semibold text-lg">Sarlat-la-Canéda + 30 km</span>
            </div>
            <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <div className="bg-secondary-foreground/10 p-3 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <a href="tel:0650334116" className="font-semibold hover:underline text-xl">
                06 50 33 41 16
              </a>
            </div>
            <div className="text-sm bg-secondary-foreground/5 px-4 py-2 rounded-full">
              <span className="font-semibold">Intervention rapide</span> •{" "}
              <span className="font-medium">Service professionnel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-24 h-24 bg-secondary rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-primary rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-10 w-20 h-20 bg-secondary/50 rounded-full blur-xl animate-pulse delay-300"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Nos packs de nettoyage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Choisissez le service adapté à vos besoins. Tous nos packs incluent un service à domicile professionnel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pack Éco */}
            <Card className="relative border-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-secondary/10 p-3 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                    <Sparkles className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">Pack Éco</CardTitle>
                <CardDescription className="text-base">Essentiel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm text-muted-foreground font-medium">Citadine</span>
                      <span className="font-bold text-xl text-secondary">50€</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm text-muted-foreground font-medium">Berline</span>
                      <span className="font-bold text-xl text-secondary">60€</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm text-muted-foreground font-medium">SUV/Monospace</span>
                      <span className="font-bold text-xl text-secondary">70€</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground border-b pb-2">
                    Inclus
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Aspirateur habitacle, coffre, tapis",
                      "Dépoussiérage plastiques, tableau de bord, portes",
                      "Nettoyage vitres intérieures",
                      "Nettoyage montants de porte",
                    ].map((service, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="bg-secondary/10 p-1 rounded-full mt-0.5">
                          <Check className="w-3 h-3 text-secondary" />
                        </div>
                        <span className="text-sm leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <WhatsAppButton className="w-full font-semibold" />
              </CardContent>
            </Card>

            {/* Pack Confort */}
            <Card className="relative border-2 border-secondary hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-background to-secondary/5 group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground font-bold px-4 py-1 text-sm shadow-lg animate-bounce">
                  Populaire
                </Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-lg"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-full group-hover:bg-secondary/30 transition-colors duration-300">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">Pack Confort</CardTitle>
                <CardDescription className="text-base">Standard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm text-muted-foreground font-medium">Citadine</span>
                      <span className="font-bold text-xl text-secondary">75€</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm text-muted-foreground font-medium">Berline</span>
                      <span className="font-bold text-xl text-secondary">90€</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm text-muted-foreground font-medium">SUV/Monospace</span>
                      <span className="font-bold text-xl text-secondary">105€</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground border-b pb-2">
                    Pack Éco +
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Détachage sièges et tapis",
                      "Shampoing tapis/moquettes + extracteur",
                      "Nettoyage sièges tissu (extracteur) ou entretien cuir",
                      "Traitement plastiques + finition soignée",
                    ].map((service, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="bg-secondary/10 p-1 rounded-full mt-0.5">
                          <Check className="w-3 h-3 text-secondary" />
                        </div>
                        <span className="text-sm leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <WhatsAppButton className="w-full font-semibold" variant="secondary" />
              </CardContent>
            </Card>

            {/* Pack Premium */}
            <Card className="relative border-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-secondary/10 p-3 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                    <Crown className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">Pack Premium</CardTitle>
                <CardDescription className="text-base">Pro</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm text-muted-foreground font-medium">Citadine</span>
                      <span className="font-bold text-xl text-secondary">100€</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm text-muted-foreground font-medium">Berline</span>
                      <span className="font-bold text-xl text-secondary">120€</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm text-muted-foreground font-medium">SUV/Monospace</span>
                      <span className="font-bold text-xl text-secondary">140€</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground border-b pb-2">
                    Pack Confort +
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Nettoyage vapeur tapis, sièges, moquettes",
                      "Soin cuir complet",
                      "Protection des surfaces (plastiques)",
                    ].map((service, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="bg-secondary/10 p-1 rounded-full mt-0.5">
                          <Check className="w-3 h-3 text-secondary" />
                        </div>
                        <span className="text-sm leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <WhatsAppButton className="w-full font-semibold" />
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-card via-card to-secondary/5 rounded-xl p-8 border-2 border-secondary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-4 flex items-center">
              <div className="bg-secondary/10 p-2 rounded-full mr-3">
                <Star className="w-5 h-5 text-secondary" />
              </div>
              Suppléments possibles
            </h3>
            <p className="text-muted-foreground text-lg">
              Sable, boue, poils d'animaux :{" "}
              <span className="font-bold text-foreground text-xl text-secondary">+10€</span>
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-background via-muted/10 to-background relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">À propos de Clean Auto Services</h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Clean Auto Services, spécialiste du nettoyage intérieur automobile à domicile, propose des services haut
                de gamme adaptés à tous types de véhicules. Intervention à Sarlat-la-Canéda et jusqu'à 30 km autour.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <Star className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service professionnel</h3>
                    <p className="text-sm text-muted-foreground">Équipement professionnel et techniques éprouvées</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Intervention rapide</h3>
                    <p className="text-sm text-muted-foreground">Disponibilité flexible selon vos besoins</p>
                  </div>
                </div>
              </div>
              <WhatsAppButton size="lg" />
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/professional-car-interior-cleaning-service-with-mo.jpg"
                  alt="Service professionnel de nettoyage automobile"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-28 h-28 bg-primary rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-secondary rounded-full blur-2xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Réservez votre intervention</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Contactez-nous pour réserver votre nettoyage automobile à domicile ou pour toute question.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a href="tel:0650334116" className="text-secondary hover:underline">
                        06 50 33 41 16
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Zone d'intervention</p>
                      <p className="text-muted-foreground">Sarlat-la-Canéda et dans un rayon de 30 km</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-semibold mb-3">Réservation rapide</h4>
                <p className="text-muted-foreground mb-4">
                  Pour une réservation immédiate, contactez-nous directement via WhatsApp.
                </p>
                <WhatsAppButton className="w-full" />
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Formulaire de contact</CardTitle>
                <CardDescription>Laissez-nous vos coordonnées et nous vous recontacterons rapidement.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom *
                      </label>
                      <Input id="name" name="name" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Téléphone *
                      </label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Décrivez votre véhicule et vos besoins..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-l from-background via-muted/10 to-background relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Notre zone d'intervention</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Disponible à Sarlat-la-Canéda et dans un rayon de 30 km pour votre service à domicile.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-6">Villes desservies</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-medium">• Sarlat-la-Canéda</p>
                  <p className="font-medium">• Domme</p>
                  <p className="font-medium">• La Roque-Gageac</p>
                  <p className="font-medium">• Beynac-et-Cazenac</p>
                  <p className="font-medium">• Castelnaud-la-Chapelle</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">• Vitrac</p>
                  <p className="font-medium">• Cénac-et-Saint-Julien</p>
                  <p className="font-medium">• Saint-Cyprien</p>
                  <p className="font-medium">• Belvès</p>
                  <p className="font-medium">• Et bien d'autres...</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Zone d'intervention :</strong> Dans un rayon de 30 km autour de Sarlat-la-Canéda.
                  Contactez-nous pour vérifier si votre commune est desservie.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46234.89234567!2d1.2167!3d44.8889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac0e8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSarlat-la-Can%C3%A9da!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zone d'intervention Clean Auto Services"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/3 w-24 h-24 bg-secondary rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-secondary rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/images/logo.png" alt="Clean Auto Services" width={40} height={40} className="rounded-lg" />
                <div>
                  <h3 className="font-bold text-lg">Clean Auto Services</h3>
                  <p className="text-sm text-primary-foreground/80">Nettoyage intérieur voiture</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Spécialiste du nettoyage intérieur automobile à domicile. Service professionnel et haut de gamme à
                Sarlat-la-Canéda et dans un rayon de 30 km.
              </p>
              <div className="flex space-x-4">
                <WhatsAppButton
                  variant="secondary"
                  size="sm"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Nos services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Pack Éco</li>
                <li>Pack Confort</li>
                <li>Pack Premium</li>
                <li>Service à domicile</li>
                <li>Intervention rapide</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:0650334116" className="hover:text-secondary transition-colors">
                    06 50 33 41 16
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>
                    Sarlat-la-Canéda
                    <br />
                    et dans un rayon de 30 km
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">
              © 2025 Clean Auto Services. Tous droits réservés. | Service de nettoyage automobile professionnel
            </p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </main>
  )
}
