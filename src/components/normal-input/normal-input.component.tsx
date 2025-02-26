import { ComponentProps, ReactElement, forwardRef, ForwardedRef } from "react";

import clsx from "clsx";

import { ButtonComponent } from "@/components/button/button.component";

import styles from "./normal-input.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  onSuffixClick?: ComponentProps<typeof ButtonComponent>["onClick"];
};

function NormalInputComponent(
  {
    label,
    prefixIcon,
    suffixIcon,
    onSuffixClick,
    className,
    ...otherProps
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  return (
    <label className={clsx(styles["normal-input"], className)}>
      <div className={styles["label-text"]}>{label}</div>
      <div className={styles.box}>
        {prefixIcon && (
          <div className={styles["prefix-icon"]}>{prefixIcon}</div>
        )}
        <input ref={ref} {...otherProps} />
        {suffixIcon && (
          <ButtonComponent
            type="button"
            shape="inherit"
            onClick={onSuffixClick}
          >
            <div className={styles["suffix-icon"]}>{suffixIcon}</div>
          </ButtonComponent>
        )}
      </div>
    </label>
  );
}

export default forwardRef(NormalInputComponent);
