"use client";

import { ReactElement, useContext } from "react";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

export default function DegreeFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "degree", value });
  };

  return (
    <RadioFilterComponent
      title="درجه علمی"
      name="degree"
      options={[
        { value: "فلوشیپ", label: "فلوشیپ" },
        { value: "فوق تخصص", label: "فوق تخصص" },
        { value: "دکترای تخصصی", label: "دکترای تخصصی" },
        { value: "متخصص", label: "متخصص" },
        { value: "دکتری", label: "دکتری" },
        { value: "کارشناس ارشد", label: "کارشناس ارشد" },
        { value: "کارشناس", label: "کارشناس" },
      ]}
      value={filters.degree}
      onChange={changeHandler}
    />
  );
}
