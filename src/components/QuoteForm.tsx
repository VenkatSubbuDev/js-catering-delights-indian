import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Phone, Mail, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface QuoteFormProps {
  onSubmit?: (data: any) => void;
  className?: string;
}

export function QuoteForm({ onSubmit, className }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: undefined as Date | undefined,
    venue: "",
    guestCount: "",
    additionalRequests: ""
  });
  
  const { toast } = useToast();

  const eventTypes = [
    "Wedding Reception",
    "Birthday Party",
    "Corporate Event",
    "Anniversary",
    "Baby Shower",
    "Housewarming",
    "Festival Celebration",
    "Family Gathering",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.eventType || !formData.eventDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const quoteData = {
      ...formData,
      eventDate: formData.eventDate ? format(formData.eventDate, "PPP") : ""
    };

    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours with your customized quote.",
    });

    if (onSubmit) {
      onSubmit(quoteData);
    }

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      eventDate: undefined,
      venue: "",
      guestCount: "",
      additionalRequests: ""
    });
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-medium">
            Full Name *
          </Label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              placeholder="Enter your full name"
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground font-medium">
            Phone Number *
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              placeholder="Enter your phone number"
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              placeholder="Enter your email"
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventType" className="text-foreground font-medium">
            Event Type *
          </Label>
          <Select value={formData.eventType} onValueChange={(value) => updateFormData("eventType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventDate" className="text-foreground font-medium">
            Event Date *
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !formData.eventDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.eventDate ? format(formData.eventDate, "PPP") : "Select event date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formData.eventDate}
                onSelect={(date) => updateFormData("eventDate", date)}
                disabled={(date) => date < new Date()}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guestCount" className="text-foreground font-medium">
            Number of Guests
          </Label>
          <Input
            id="guestCount"
            type="number"
            value={formData.guestCount}
            onChange={(e) => updateFormData("guestCount", e.target.value)}
            placeholder="Expected number of guests"
            min="1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="venue" className="text-foreground font-medium">
          Event Venue/Location
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="venue"
            value={formData.venue}
            onChange={(e) => updateFormData("venue", e.target.value)}
            placeholder="Event venue or location"
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalRequests" className="text-foreground font-medium">
          Additional Requirements
        </Label>
        <Textarea
          id="additionalRequests"
          value={formData.additionalRequests}
          onChange={(e) => updateFormData("additionalRequests", e.target.value)}
          placeholder="Any special dietary requirements, specific dishes, or additional services needed..."
          rows={4}
        />
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full">
        Get My Quote
      </Button>
    </form>
  );
}