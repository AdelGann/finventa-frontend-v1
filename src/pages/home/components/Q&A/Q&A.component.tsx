import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const Questions = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Encuentra respuestas a las preguntas más comunes sobre Finventa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="multiple" className="space-y-4">
            {questions.map((item, key) => (
              <AccordionItem
                key={key}
                value={`${key}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

const questions = [
  {
    question: "¿Qué es Finventa?",
    answer: "Finventa es un sistema de gestión empresarial completo que te ayuda a administrar clientes, productos, órdenes y finanzas desde una sola plataforma. Diseñado para pequeñas y medianas empresas que buscan profesionalizar sus operaciones.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar Finventa?",
    answer: "No, Finventa está diseñado para ser intuitivo y fácil de usar. Nuestra interfaz es clara y guiada, permitiendo que cualquier persona pueda comenzar a usarla sin necesidad de capacitación técnica especializada.",
  },
  {
    question: "¿Puedo probar Finventa antes de comprar?",
    answer: "Sí, todos nuestros planes incluyen 14 días de prueba gratis con acceso completo a todas las funcionalidades. No necesitas ingresar información de tarjeta de crédito para comenzar tu prueba.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer: "Absolutamente. Utilizamos encriptación de nivel empresarial para proteger toda tu información. Nuestros servidores están certificados y realizamos copias de seguridad automáticas diarias para garantizar que nunca pierdas tus datos.",
  },
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán inmediatamente y solo pagarás la diferencia prorrateada si actualizas a un plan superior.",
  },
  {
    question: "¿Qué tipo de soporte ofrecen?",
    answer: "Ofrecemos soporte por email en todos los planes. Los planes Profesional y Empresarial incluyen soporte prioritario, y el plan Empresarial cuenta con soporte 24/7 y un gestor de cuenta dedicado.",
  },
  {
    question: "¿Puedo integrar Finventa con otras herramientas?",
    answer: "Sí, el plan Profesional y Empresarial incluyen acceso a nuestra API para integraciones personalizadas. También ofrecemos integraciones nativas con las herramientas más populares de contabilidad y comercio electrónico.",
  },
  {
    question: "¿Qué pasa si cancelo mi suscripción?",
    answer: "Puedes cancelar en cualquier momento sin penalización. Tendrás acceso a tus datos durante 30 días después de la cancelación para que puedas exportar toda tu información si lo deseas.",
  },
];
