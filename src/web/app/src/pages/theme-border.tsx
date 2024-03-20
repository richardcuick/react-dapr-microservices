
import styles from './theme-border.less';

import { ThemeProvider } from '@fluentui/react';
import { Fluent2WebLightTheme, Fluent2WebDarkTheme } from '@fluentui/fluent2-theme';

import * as React from 'react';
import { IChartProps, ILineChartProps, LineChart, DataVizPalette } from '@fluentui/react-charting';
import { Toggle } from '@fluentui/react/lib/Toggle';
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  FluentProvider,
  teamsLightTheme,
} from "@fluentui/react-components";
import { Avatar } from "@fluentui/react-components";
import { PresenceBadge } from "@fluentui/react-components";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
  BreadcrumbButton,
} from "@fluentui/react-components";
import { Button } from "@fluentui/react-components";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";


export default function Page() {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Accordion>
      <AccordionItem value="1">
        <AccordionHeader>Accordion Header 1</AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 1</div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionHeader>Accordion Header 2</AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 2</div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionHeader>Accordion Header 3</AccordionHeader>
        <AccordionPanel>
          <div>Accordion Panel 3</div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    <hr/>
    <Avatar aria-label="Guest" />
    <PresenceBadge />
    <hr/>
    <Breadcrumb aria-label="Breadcrumb default example">
      <BreadcrumbItem>
        <BreadcrumbButton>Item 1</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton>
          Item 2
        </BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton>Item 3</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton current>
          Item 4
        </BreadcrumbButton>
      </BreadcrumbItem>
    </Breadcrumb>
    <hr/>
    <Button>Example</Button>
    <hr/>
    <Menu>
    <MenuTrigger disableButtonEnhancement>
      <MenuButton>Example</MenuButton>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem>Item a</MenuItem>
        <MenuItem>Item b</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
  </FluentProvider>
  );
}
