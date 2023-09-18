import {
  ButtonVariation,
  FormInputType,
  FormInputValidation,
  FormInputVariation,
  FormTextareaValidation,
  FormTextareaVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiFormInput,
  DigiFormTextarea,
} from "@digi/arbetsformedlingen-react";
import { FormEvent, useEffect, useState } from "react";
import { ISearchByText } from "../models/ISearchByText";

interface ISearchFormProps {
  getWorkData: (search: ISearchByText) => void;
}
export default function SearchForm(props: ISearchFormProps) {
  const [freeSearch, setFreeSearch] = useState<string>("");
  const [headerSearch, setHeaderSearch] = useState<string>("");

  const getWorkTitles = async (e: FormEvent) => {
    e.preventDefault();

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
  };

  useEffect(() => {}, [freeSearch, headerSearch]);

  return (
    <section>
      <h3>Sök yrken</h3>
      <form onSubmit={(e: FormEvent) => getWorkTitles(e)}>
        <DigiFormTextarea
          afLabel="Vad innehåller utbildningen du är intresserad av?"
          afLabelDescription="Ange minst tre saker du kommer lära dig på utbildningen"
          afVariation={FormTextareaVariation.MEDIUM}
          afValidation={FormTextareaValidation.NEUTRAL}
          afRequired={true}
          onAfOnChange={(e) => setFreeSearch(e.target.value)}
        ></DigiFormTextarea>
        <DigiFormInput
          afLabel="Vad heter utbildningen?"
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.TEXT}
          afValidation={FormInputValidation.NEUTRAL}
          afRequired={false}
          onAfOnChange={(e) => setHeaderSearch(JSON.stringify(e.target.value))}
        ></DigiFormInput>
        <DigiButton afType="submit" afVariation={ButtonVariation.PRIMARY}>
          Sök
        </DigiButton>
      </form>
    </section>
  );
}
