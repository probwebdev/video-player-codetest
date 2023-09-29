import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  type TooltipProps as RadixTooltipProps,
} from '@radix-ui/react-tooltip';

import styles from './tooltip.module.css';

export interface TooltipProps extends RadixTooltipProps {
  text: string;
}

export const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <Content className={styles.tooltipContent}>{text}</Content>
        </Portal>
      </Root>
    </Provider>
  );
};
