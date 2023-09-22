import {
  ButtonVariation,
  FormInputType,
  FormInputValidation,
  FormInputVariation,
  FormTextareaValidation,
  FormTextareaVariation,
  FormValidationMessageVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiFormInput,
  DigiFormTextarea,
  DigiFormValidationMessage,
} from "@digi/arbetsformedlingen-react";
import { FormEvent, useState } from "react";
import { ISearchByText } from "../models/ISearchByText";
import {
  DigiFormInputCustomEvent,
  DigiFormTextareaCustomEvent,
} from "@digi/arbetsformedlingen/dist/types/components";

interface ISearchFormProps {
  getWorkData: (search: ISearchByText) => void;
}

export default function SearchForm(props: ISearchFormProps) {
  const descriptionFromLocalStorage = localStorage.getItem(
    "educationDescriptionText"
  );
  const initialTextFreeSearch = descriptionFromLocalStorage
    ? descriptionFromLocalStorage
    : "";

  const [freeSearch, setFreeSearch] = useState<string>(initialTextFreeSearch);
  const [headerSearch, setHeaderSearch] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [inputLength, setInputLength] = useState<number>(0);

  const getWorkTitles = (e: FormEvent) => {
    e.preventDefault();

    if (inputLength < 3) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);

      let search: ISearchByText;

      if (headerSearch === "") {
        search = {
          input_text: freeSearch,
        };
      } else {
        search = {
          input_text: freeSearch,
          input_headline: headerSearch,
        };
      }
      props.getWorkData(search);
      setFreeSearch("");
      setHeaderSearch("");
    }
  };

  function wordCount(s: string) {
    s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
    s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
    return s.split(" ").filter(function (str) {
      return str != "";
    }).length;
  }

  function handleFreeSearch(
    e: DigiFormTextareaCustomEvent<HTMLTextAreaElement>
  ) {
    setFreeSearch(e.target.value);
    setInputLength(wordCount(freeSearch));
  }

  function handleHeaderSearch(e: DigiFormInputCustomEvent<HTMLInputElement>) {
    const newValue = e.target.value as string;
    setHeaderSearch(newValue);
  }

  return (
    <>
      <section>
        <h3>Sök yrken</h3>
        <form onSubmit={(e: FormEvent) => getWorkTitles(e)}>
          <DigiFormTextarea
            afLabel="Vad innehåller utbildningen du är intresserad av?"
            afLabelDescription="Ange minst tre saker du kommer lära dig på utbildningen"
            afVariation={FormTextareaVariation.MEDIUM}
            afValidation={FormTextareaValidation.NEUTRAL}
            afRequired={true}
            onAfOnKeyup={handleFreeSearch}
            afValue={freeSearch}
          ></DigiFormTextarea>
          {!isValid ? (
            <DigiFormValidationMessage
              afVariation={FormValidationMessageVariation.ERROR}
            >
              Du måste ange minst tre ord
            </DigiFormValidationMessage>
          ) : null}
          <DigiFormInput
            afLabel="Vad heter utbildningen?"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}
            afRequired={false}
            onAfOnKeyup={handleHeaderSearch}
            afValue={headerSearch}
          ></DigiFormInput>
          <DigiButton afType="submit" afVariation={ButtonVariation.PRIMARY}>
            Sök
          </DigiButton>
        </form>
      </section>
    </>
  );
}
