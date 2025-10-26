import Card from "@/components/shared/Card";

export const ClientStats = () => {
  const TOOLTIP_DESCRIPTION =
    "Percentage decrease compared to the previous period";
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <Card
        title="Total de Ordenes Generadas"
        amount={50}
        symbol=""
        color="text-black dark:text-white"
        description={TOOLTIP_DESCRIPTION}
      />
      <Card
        title="Suma Total de Pagos"
        amount={2500}
        color="text-green-500"
        description={TOOLTIP_DESCRIPTION}
      />
      <Card
        title="Frecuencia de Actividad (DÍAS)"
        amount={7}
        symbol="≈ "
        color="text-black dark:text-white"
        description={TOOLTIP_DESCRIPTION}
      />
    </div>
  );
};
