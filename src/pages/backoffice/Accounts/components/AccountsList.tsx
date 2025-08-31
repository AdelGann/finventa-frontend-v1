import Card from "@/components/shared/Card";

export const AccountsList = ({
  changeAccount,
  activeAccount,
}: {
  activeAccount: number | string | undefined;
  changeAccount: (id: number | string) => void;
}) => {
  return (
    <div className="xl:max-w-[450px]">
      <div className="flex xl:flex-col pb-2 gap-4 w-full">
        {Accounts.map((item, key) => (
          <div
            key={key}
            className="flex-1 min-w-[200px] xl:flex-0 xl:min-w-auto"
          >
            <Card
              onClick={() => changeAccount(key)}
              title={`${item.title} - ${item.account_type}`}
              amount={item.amount}
              isActive={activeAccount === key}
              color={
                item.amount > 0
                  ? undefined
                  : item.amount < 0
                    ? "text-red-500"
                    : "text-gray-500"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Accounts = [
  { title: "Principal", amount: 1500, account_type: "Principal" },
  { title: "Caja 1", amount: -500, account_type: "Recaudadora" },
  { title: "Bills", amount: -20, account_type: "Otra" },
  { title: "Caja 1", amount: -500, account_type: "Recaudadora" },
  { title: "Caja 1", amount: -500, account_type: "Recaudadora" },
  { title: "Bills", amount: -20, account_type: "Otra" },
  { title: "Bills", amount: -20, account_type: "Otra" },
];
