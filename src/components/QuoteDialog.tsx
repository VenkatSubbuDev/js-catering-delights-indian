import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "./QuoteForm";

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuoteDialog({ open, onOpenChange }: QuoteDialogProps) {
  const handleFormSubmit = (data: any) => {
    console.log("Quote form submitted:", data);
    // Close dialog after successful submission
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Get Your Custom Quote
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the details below and we'll provide you with a personalized quote for your event within 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <QuoteForm onSubmit={handleFormSubmit} className="mt-6" />
      </DialogContent>
    </Dialog>
  );
}