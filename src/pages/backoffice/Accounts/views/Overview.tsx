import { useState } from "react";
import { AccountsList } from "../components/AccountsList";
import { AccountPreview } from "./AccountPreview";

export const Overview = () => {
  const [account, setAccount] = useState<string | number>();
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-[.3fr_1fr] gap-2">
        <div className="overflow-x-auto xl:overflow-x-hidden xl:overflow-y-auto xl:h-[500px] px-2">
          <div className="sticky top-0">
            <AccountsList activeAccount={account} changeAccount={setAccount} />
          </div>
        </div>
        <div className="xl:overflow-y-auto xl:h-[500px] pt-6 xl:pt-0 xl:px-2 xl:pb-6">
          <AccountPreview />
        </div>
      </div>
    </div>
  );
};
