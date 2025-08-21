import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { TabsContent, Tabs as TabsPrimitive, TabsTrigger, TabsList } from '../ui/tabs';
import { TabsProps, TabsTriggerProps, TabsContentProps } from '@radix-ui/react-tabs';

type TabsTriggerType = React.ComponentProps<
  ForwardRefExoticComponent<TabsTriggerProps & RefAttributes<HTMLButtonElement>>
>;
type TabsContentType = React.ComponentProps<
  ForwardRefExoticComponent<TabsContentProps & RefAttributes<HTMLDivElement>>
>;

interface TabsComponentProps
  extends React.ComponentProps<
    ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>
  > {
  tabListClassName?: string;
  tabsTrigger: TabsTriggerType[];
  tabsContent: TabsContentType[];
}

export const Tabs = ({
  tabListClassName,
  tabsTrigger,
  tabsContent,
  ...rest
}: TabsComponentProps) => {
  return (
    <>
      <TabsPrimitive {...rest}>
        <TabsList
          className={`dark:bg-[#1C1B24] shadow dark:shadow-[#20202a] overflow-x-auto whitespace-nowrap flex w-full justify-start p-1 max-w-full ${tabListClassName ?? ''}`}
        >
          {tabsTrigger.map((item, key) => {
            return <TabsTrigger {...item} className={`flex-shrink-0 px-4 ${item.className ?? ""}`} key={key} />;
          })}
        </TabsList>
        {tabsContent.map((item, key) => {
          return <TabsContent {...item} key={key} />;
        })}
      </TabsPrimitive>
    </>
  );
};
