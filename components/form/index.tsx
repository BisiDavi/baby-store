import Input from "@/components/form/Input";
import { inputType } from "@/types";
import Textarea from "@/components/form/Textarea";

export function displayForm(input: inputType) {
  switch (input.type) {
    case "input":
      return <Input input={input} />;
    case "textarea":
      return <Textarea input={input} />;
  }
}
