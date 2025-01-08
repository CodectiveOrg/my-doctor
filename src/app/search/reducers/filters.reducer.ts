import { FiltersType } from "@/types/filters.type";

export type FiltersAction =
  | {
      type: "updated_filter";
      key: keyof FiltersType;
      value: string;
    }
  | {
      type: "removed_filter";
      key: keyof FiltersType;
    }
  | {
      type: "removed_all";
    };

export function filtersReducer(filters: FiltersType, action: FiltersAction) {
  switch (action.type) {
    case "updated_filter": {
      return { ...filters, [action.key]: action.value };
    }
    case "removed_filter": {
      const clonedFilters = { ...filters };
      delete clonedFilters[action.key];
      return clonedFilters;
    }
    case "removed_all": {
      return {};
    }
  }
}
