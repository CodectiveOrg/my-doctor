"use client";

import { ChangeEvent, ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import { SelectOptionType } from "@/types/select-option.type";

import styles from "./radio-filter.module.css";

type Props = {
  title: string;
  name: string;
  options: SelectOptionType[];
  value?: string;
  onChange?: (value: string) => void;
};

export default function RadioFilterComponent({
  title,
  name,
  options,
  value,
  onChange,
}: Props): ReactElement {
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.currentTarget.value);
  };

  return (
    <CardComponent>
      <div className={styles["radio-filter"]}>
        <div className={styles.title}>{title}</div>
        {options.map((x) => (
          <label key={x.value}>
            <input
              type="radio"
              name={name}
              value={x.value}
              checked={x.value === value}
              onChange={inputChangeHandler}
            />
            {x.label}
          </label>
        ))}
      </div>
    </CardComponent>
  );
}
