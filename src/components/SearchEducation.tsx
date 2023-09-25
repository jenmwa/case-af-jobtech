/* eslint-disable no-mixed-spaces-and-tabs */
import {
  FormTextareaVariation,
  FormTextareaValidation,
  ButtonSize,
  ButtonVariation,
} from "@digi/arbetsformedlingen";
import { DigiButton, DigiFormRadiobutton, DigiFormSelect, DigiFormTextarea } from "@digi/arbetsformedlingen-react";
import { DigiFormRadiobuttonCustomEvent, DigiFormSelectCustomEvent, DigiFormTextareaCustomEvent} from "@digi/arbetsformedlingen/dist/types/components";
import { FormEvent, useEffect, useState } from "react";
import { getEducations, getEductionForms, getMunicipalities } from "../services/educationServices";
import { IEducationForms, IEducations } from "../models/IEducations";

interface ISubmitSearchEduProps {
  showNoResult: boolean;
  setShowNoResult: (value: boolean) => void;
  setSerachEduData: (value: IEducations | null) => void;
  setIsLoading: (value: boolean) => void;
}

export default function SearchEducation({
  showNoResult,
  setShowNoResult,
  setSerachEduData,
  setIsLoading,
}: ISubmitSearchEduProps) {
  const [searchEduText, setSearchEduText] = useState<string | undefined>(undefined);
  const [educationForms, setEducationForms] = useState<IEducationForms[]>([]);
  const [municipalities, setMunicipalities] = useState<IEducationForms[]>([]);
  const [remote, setRemote] = useState<boolean>(false);
  const [educationForm, setEducationForm] = useState<string | undefined>(undefined);
  const [location, setLocation] = useState<string |undefined>(undefined);

  useEffect(() => {
    if(educationForms.length > 0){
      return
    } else {
      const getEducationFormsFunc = async() => {
        const educationFormsData = await getEductionForms();
        if(educationFormsData){
         setEducationForms(educationFormsData);
        }
      }
      getEducationFormsFunc();
    }
    if(municipalities.length > 0){
      return
    } else {
      const getMunicipalitiesFunc = async() => {
        const municipalitiesData = await getMunicipalities();
        if(municipalitiesData){
         setMunicipalities(municipalitiesData);
        }
      }
      getMunicipalitiesFunc();
    }
  });

  const textInput = (e: DigiFormTextareaCustomEvent<HTMLTextAreaElement>) => {
    if (e.target.value === "") {
      setSearchEduText(undefined);
    } else {
    setSearchEduText(e.target.value);
    }
  };

  const submitSearchEdu = async (e: FormEvent) => {
    e.preventDefault();
    console.log(remote)
      setIsLoading(true);
      const result = await getEducations({ query: searchEduText, distance: remote, education_form: educationForm, municipality_code: location});
      if (result) {
        if (result.hits > 0) {
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
  };

  const handleReset = () => {
    setSerachEduData(null);
  };

  const handleRemote = (e: DigiFormRadiobuttonCustomEvent<HTMLDigiFormRadiobuttonElement>) => {
    console.log(e.target.value)
    console.log('Event object:', e);
    if(e.target.value === "yes"){
      setRemote(true);
    } else if(e.target.value === "no"){
      setRemote(false);
    }
  }

  const handleEduForm = (e: DigiFormSelectCustomEvent<HTMLDigiFormSelectElement>) => {
    if(e.target.value === "all"){
      setEducationForm(undefined)
    } else {
      setEducationForm(e.target.value)
    }
  }

  const handleLocation= (e: DigiFormSelectCustomEvent<HTMLDigiFormSelectElement>) => {
    if(e.target.value === "anywhere"){
      setLocation(undefined);
    } else {
      setLocation(e.target.value);
    }
  }

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
          <label>Vill du läsa på distans?</label>
          <DigiFormRadiobutton
            afLabel="ja"
            afName="remote"
            afValue="yes"
            onAfOnChange={handleRemote}
          >
          </DigiFormRadiobutton>
          <DigiFormRadiobutton
            afLabel="nej"
            afName="remote"
            afValue="no"
            onAfOnChange={handleRemote}
          >
          </DigiFormRadiobutton>
          <DigiFormSelect
	          afLabel="Vilken typ av utbildning vill du läsa?"
	          afPlaceholder="Välj typ av utbildning"
            onAfOnChange={handleEduForm} 
	        >
            <option value="all">Alla</option>
            {educationForms.map((form) => (
              <option key={form.key} value={form.key}>
                {form.value}
              </option>
            )
            )}
          </DigiFormSelect>
          <DigiFormSelect
	          afLabel="Vart vill du studera?"
	          afPlaceholder="Välj stad"
            onAfOnChange={handleLocation} 
	        >
            <option value="anywhere">Hela Sverige</option>
            {municipalities.map((location) => (
              <option key={location.key} value={location.key}>
                {location.value}
              </option>
            )
            )}
          </DigiFormSelect>
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
