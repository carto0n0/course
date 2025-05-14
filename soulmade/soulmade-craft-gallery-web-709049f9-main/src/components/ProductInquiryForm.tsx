
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  phone: z.string().min(6, { message: "Введите корректный номер телефона" }),
});

type FormValues = z.infer<typeof formSchema>;

interface ProductInquiryFormProps {
  productName: string;
  onClose: () => void;
}

const ProductInquiryForm = ({ productName, onClose }: ProductInquiryFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Log the form submission data (in a real app, you would send this to a server)
      console.info("Form submitted:", {
        ...data,
        product: productName,
      });
      
      // Show success message
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      // Close the dialog
      onClose();
      
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, попробуйте еще раз позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-1">
      <h2 className="text-xl font-medium mb-4 text-center">
        Заявка на изделие
      </h2>
      <p className="mb-6 text-center text-muted-foreground">
        {productName}
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваше имя</FormLabel>
                <FormControl>
                  <Input placeholder="Введите ваше имя" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input placeholder="+375 XX XXX XX XX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Отмена
            </Button>
            <Button 
              type="submit" 
              className="bg-soulmade-orange hover:bg-soulmade-orange/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductInquiryForm;
