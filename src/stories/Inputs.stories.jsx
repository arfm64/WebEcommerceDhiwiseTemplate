import React from "react";

import { Input } from "components";

export default {
  title: "webecommercetemplate/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder0",
  variant: "OutlineBluegray100",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
