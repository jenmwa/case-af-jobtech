import { ButtonVariation, FormInputType, FormInputValidation, FormInputVariation, FormTextareaValidation, FormTextareaVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiFormInput, DigiFormTextarea } from "@digi/arbetsformedlingen-react";
import { FormEvent, useState } from "react";

export default function SearchForm() {
  const [freeSearch, setFreeSearch] = useState<string>('');
  const [headerSearch, setHeaderSearch] = useState<string | number>('');

  const getWorkTitles = (e: FormEvent) => {
    e.preventDefault();
    console.log(freeSearch, headerSearch)
  }

  return(
    <section>
      <h3>Sök yrken</h3>
      <form onSubmit={(e: FormEvent) => getWorkTitles(e)}>
        <DigiFormTextarea
          afLabel="Vad innehåller utbildningen du är intresserad av?"
          afVariation={FormTextareaVariation.MEDIUM}
          afValidation={FormTextareaValidation.NEUTRAL}	
          afRequired={true}
          onAfOnChange={(e) => setFreeSearch(e.target.value)}
        >
        </DigiFormTextarea>
        <DigiFormInput
          afLabel="Vad heter utbildningen?"
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.TEXT}
          afValidation={FormInputValidation.NEUTRAL}		
          afRequired={false}	
          onAfOnChange={(e) => setHeaderSearch(e.target.value)}
        >
        </DigiFormInput>
        <DigiButton afType="submit" afVariation={ButtonVariation.PRIMARY}>
          Sök
        </DigiButton>
      </form>
    </section>
  )
}