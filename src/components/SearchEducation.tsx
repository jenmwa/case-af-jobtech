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
  //setEduResult: (result: IEducations) => void;
  showNoResult: boolean;
  setShowNoResult: (value: boolean) => void;
  //setSearched: (value: boolean) => void;
  setSerachEduData: (value: IEducations | null) => void;
  setIsLoading: (value: boolean) => void;
}

export default function SearchEducation({
  showNoResult,
  setShowNoResult,
  //setSearched,
  setSerachEduData,
  setIsLoading,
}: ISubmitSearchEduProps) {
  const [searchEduText, setSearchEduText] = useState<string>("");

  const textInput = (e: DigiFormTextareaCustomEvent<HTMLTextAreaElement>) => {
    setSearchEduText(e.target.value);
  };

  const submitSearchEdu = async (e: FormEvent) => {
    e.preventDefault();
    //setSearched(true);
    setIsLoading(true);
    if (searchEduText === "") {
      const result = await getEducations({});
      if (result) {
        //setEduResult(result);
        setIsLoading(false);

        setShowNoResult(false);
        setSerachEduData(result);
        setSerachEduData(result);
      }
    } else {
      setIsLoading(true);

      const result = await getEducations({ query: searchEduText });
      if (result) {
        if (result.hits > 0) {
          //setEduResult(result);
          setShowNoResult(false);
          setSerachEduData(result);
          setIsLoading(false);
        } else {
          if (!showNoResult) {
            setShowNoResult(true);
            setIsLoading(false);
          }
        }
      }
    }
  };

  const handleReset = () => {
    setSerachEduData(null);
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
            onAfOnKeyup={textInput}
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
          <DigiButton
            afType="button"
            afVariation={ButtonVariation.SECONDARY}
            onAfOnClick={handleReset}
          >
            Rensa sökresultat
          </DigiButton>
        </form>
      </section>
    </>
  );
}
