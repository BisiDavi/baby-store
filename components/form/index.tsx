import Input from "@/components/form/Input";
import { inputType } from "@/types";

interface Props {
  input: inputType;
}

export function displayForm(input: inputType) {
  switch (input.type) {
    case "input":
      return <Input input={input} />;
  }
}