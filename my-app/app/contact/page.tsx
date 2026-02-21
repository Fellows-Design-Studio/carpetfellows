import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Yhteydenotto",
  description: "Ota yhteyttä CarpetFellowsiin.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Ota yhteyttä</h1>
          <p className="text-muted-foreground">
            Onko sinulla kysyttävää? Lähetä viesti, niin vastaamme mahdollisimman pian.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Yhteystiedot</h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Sähköposti</p>
                <a href="mailto:info@carpetfellows.com" className="text-primary hover:underline">
                  info@carpetfellows.com
                </a>
              </div>
              
              <div>
                <p className="font-medium">Puhelin</p>
                <p>040 123 4567</p>
              </div>
              
              <div>
                <p className="font-medium">Osoite</p>
                <p>CarpetFellows Oy<br />
                Mattojenkatu 1<br />
                00100 Helsinki</p>
              </div>
              
              <div>
                <p className="font-medium">Aukioloajat</p>
                <p>Ma-Pe: 9-17<br />
                La: 10-14</p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Etunimi</Label>
                <Input id="firstName" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Sukunimi</Label>
                <Input id="lastName" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Sähköposti *</Label>
              <Input id="email" type="email" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Aihe</Label>
              <Input id="subject" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Viesti *</Label>
              <Textarea id="message" rows={5} required />
            </div>
            
            <Button type="submit" className="w-full">Lähetä viesti</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
