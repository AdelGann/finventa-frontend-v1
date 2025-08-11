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
        <TabsList className={tabListClassName}>
          {tabsTrigger.map((item, key) => {
            return <TabsTrigger {...item} key={key} />;
          })}
        </TabsList>
        {tabsContent.map((item, key) => {
          return <TabsContent {...item} key={key} />;
        })}
      </TabsPrimitive>
    </>
  );
};
