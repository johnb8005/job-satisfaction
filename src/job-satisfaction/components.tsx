import React from "react";

export const Slider = ({
  value,
  onChange,
}: {
  value?: number;
  onChange: (b: number) => void;
}) => {
  return (
    <input
      min={0}
      max={100}
      type="range"
      value={value === undefined ? 50 : value}
      onChange={(v) => {
        const w = Number(v.target.value);

        if (!isNaN(w)) {
          onChange(w);
        }
      }}
    />
  );
};

export const Wrapper = ({
  name,
  children,
}: {
  name: string;
  children: JSX.Element;
}) => (
  <li>
    {name}
    {children}
  </li>
);
