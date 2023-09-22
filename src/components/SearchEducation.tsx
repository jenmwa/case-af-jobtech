import {
  FormTextareaVariation,
  FormTextareaValidation,
  ButtonSize,
  ButtonVariation,
} from "@digi/arbetsformedlingen";
import { DigiButton, DigiFormTextarea } from "@digi/arbetsformedlingen-react";
import { DigiFormTextareaCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { FormEvent, useState } from "react";
import { getEducations } from "../services/educationServices";
import { IEducations } from "../models/IEducations";

interface ISubmitSearchEduProps {
  setEduResult: (result: IEducations) => void;
}

export default function SearchEducation({
  setEduResult,
}: ISubmitSearchEduProps) {
  const [searchEduText, setSearchEduText] = useState<string>("");
  const textInput = (e: DigiFormTextareaCustomEvent<HTMLTextAreaElement>) => {
    setSearchEduText(e.target.value);
    console.log(searchEduText, "textquery");
  };

  const submitSearchEdu = async (e: FormEvent) => {
    e.preventDefault();
    if (searchEduText === "") {
      const result = await getEducations({});
      if (result) {
        setEduResult(result);
        console.log("tom", result);
      }
    } else {
      const result = await getEducations({ query: searchEduText });
      if (result) {
        setEduResult(result);
        console.log("tom", result);
      }
    }
  };

  return (
    <>
      <section>
        <h2>Sök utbildning</h2>
        <form
          onSubmit={(e: FormEvent) => {
            submitSearchEdu(e);
          }}
        >
          <DigiFormTextarea
            afLabel="Beskriv vad du tycker om att göra"
            afVariation={FormTextareaVariation.MEDIUM}
            afValidation={FormTextareaValidation.NEUTRAL}
            afLabelDescription="Lämnas textrutan blank så hämtas alla utbildningar"
            onAfOnChange={textInput}
            afValue={searchEduText}
          ></DigiFormTextarea>
          <DigiButton
            afSize={ButtonSize.MEDIUM}
            afVariation={ButtonVariation.PRIMARY}
            afFullWidth={false}
            afType="submit"
          >
            Sök utbildning
          </DigiButton>
        </form>
      </section>
    </>
  );
}
