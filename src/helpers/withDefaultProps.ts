// eslint-disable-next-line no-unused-vars
import { ComponentType } from "react";

export const withDefaultProps = <P extends Record<string, unknown>, DP extends Partial<P> = Partial<P>>(
  defaultProps: DP,
  component: ComponentType<P>
): ComponentType<Partial<DP> & Pick<P, Exclude<keyof P, keyof DP>>> => {
  type PropsExcludingDefaults = Pick<P, Exclude<keyof P, keyof DP>>;

  type RecomposedProps = Partial<DP> & PropsExcludingDefaults;

  component.defaultProps = defaultProps;

  return (component as ComponentType<unknown>) as ComponentType<RecomposedProps>;
};
