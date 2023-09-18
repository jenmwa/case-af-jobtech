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
import { FormEvent, useState } from "react";
import { matchByText } from "../services/matchByTextServices";
import { ISearchByText } from "../models/ISearchByText";
import { ResultSummary } from "./ResultSummary";

import { ISearchResults } from "../models/ISearchResults";
//import { WithContext as ReactTags } from 'react-tag-input';

// interface ITags {
//   id: string,
//   text: string
// }

export default function SearchForm() {
  const [freeSearch, setFreeSearch] = useState<string>("");
  const [headerSearch, setHeaderSearch] = useState<string>("");
  const [data, setData] = useState<ISearchResults>({});

  // const [tags, setTags] = useState<ITags[]>([]);

  // const handleDelete = i => {
  //   setTags(tags.filter((tag, index) => index !== i));
  // };

  // const handleAddition = tag => {
  //   setTags([...tags, tag]);
  //   console.log(tags)
  // };

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

    const results = await matchByText(search);
    if (results) {
      setData(results);
    }
    // console.log(freeSearch, headerSearch, results);
  };
  console.log(data);

  return (
    <>
      <section>
        <h3>Sök yrken</h3>
        <form onSubmit={(e: FormEvent) => getWorkTitles(e)}>
          {/* <h2>Ange minst tre saker du kommer lära dig på utbildningen</h2> */}
          {/* <ReactTags
tags={tags}
handleDelete={handleDelete}
handleAddition={handleAddition}
inputFieldPosition="bottom"
placeholder="tryck 'enter' för att lägga till"
required={true}/> */}
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
            onAfOnChange={(e) =>
              setHeaderSearch(JSON.stringify(e.target.value))
            }
          ></DigiFormInput>
          <DigiButton afType="submit" afVariation={ButtonVariation.PRIMARY}>
            Sök
          </DigiButton>
        </form>
      </section>
      <ResultSummary data={data}></ResultSummary>
    </>
  );
}
