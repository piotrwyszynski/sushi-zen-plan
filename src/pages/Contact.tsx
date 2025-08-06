import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container py-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our menu, want to place a special order, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full hero-gradient hover:shadow-glow-primary">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Required fields. We'll respond to your inquiry within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      123 Sushi Street<br />
                      Food District, FC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">
                      hello@sushicraft.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Monday - Thursday: 11am - 9pm</p>
                      <p>Friday - Saturday: 11am - 10pm</p>
                      <p>Sunday: 12pm - 8pm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Stay connected with us on social media for the latest updates, behind-the-scenes content, and special offers.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Questions */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Quick Questions?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground text-sm">Catering & Large Orders</p>
                    <p className="text-xs text-muted-foreground">Call us at least 24 hours in advance</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Dietary Restrictions</p>
                    <p className="text-xs text-muted-foreground">Let us know about allergies when ordering</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Delivery Questions</p>
                    <p className="text-xs text-muted-foreground">Available within 10 miles, $3.99 fee</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-16 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How fresh is your fish?</h3>
                  <p className="text-sm text-muted-foreground">
                    We receive fresh fish deliveries daily from trusted suppliers. All seafood is prepared the same day it arrives.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Do you offer vegetarian options?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! We have a variety of vegetarian sushi including cucumber, avocado, and pickled vegetable rolls.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Can I place orders for pickup?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! You can place pickup orders online or by calling us directly. Average preparation time is 15-20 minutes.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Do you cater events?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer catering services for events of all sizes. Contact us at least 24 hours in advance to discuss your needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept all major credit cards, PayPal, Apple Pay, and cash for pickup orders.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How do you ensure food safety?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our kitchen follows strict HACCP guidelines, and all staff are trained in food safety protocols. We maintain temperature logs and use only approved suppliers.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};