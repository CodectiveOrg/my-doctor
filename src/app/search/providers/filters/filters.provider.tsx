"use client";

import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useState,
} from "react";

import { FiltersType } from "@/app/search/types/filters.type";

type ContextValue = {
  filters: FiltersType;
  changeFilter: <TKey extends keyof FiltersType>(
    key: TKey,
    value: Exclude<FiltersType[TKey], undefined>,
  ) => void;
  removeFilter: <TKey extends keyof FiltersType>(key: TKey) => void;
  clearAll: () => void;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  changeFilter: () => {},
  removeFilter: () => {},
  clearAll: () => {},
});

type Props = PropsWithChildren;

export default function FiltersProvider({ children }: Props): ReactElement {
  const [filters, setFilters] = useState<FiltersType>({});

  const changeFilter = useCallback(
    <TKey extends keyof FiltersType>(
      key: TKey,
      value: Exclude<FiltersType[TKey], undefined>,
    ): void => {
      setFilters((old) => ({ ...old, [key]: value }));
    },
    [],
  );

  const removeFilter = useCallback(
    <TKey extends keyof FiltersType>(key: TKey): void => {
      setFilters((old) => {
        const clone = { ...old };
        delete clone[key];
        return clone;
      });
    },
    [],
  );

  const clearAll = useCallback((): void => {
    setFilters({});
  }, []);

  return (
    <FiltersContext.Provider
      value={{ filters, changeFilter, removeFilter, clearAll }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
