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
  showNoResult: boolean;
  setShowNoResult: (value: boolean) => void;
}

export default function SearchEducation({
  setEduResult,
  showNoResult,
  setShowNoResult,
}: ISubmitSearchEduProps) {
  const [searchEduText, setSearchEduText] = useState<string>("");

  const textInput = (e: DigiFormTextareaCustomEvent<HTMLTextAreaElement>) => {
    setSearchEduText(e.target.value);
  };

  const submitSearchEdu = async (e: FormEvent) => {
    e.preventDefault();

    if (searchEduText === "") {
      const result = await getEducations({});
      if (result) {
        setEduResult(result);
        setShowNoResult(false);
      }
    } else {
      const result = await getEducations({ query: searchEduText });
      if (result) {
        if (result.hits > 0) {
          setEduResult(result);
          setShowNoResult(false);
        } else {
          if (!showNoResult) {
            setShowNoResult(true);
          }
        }
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
