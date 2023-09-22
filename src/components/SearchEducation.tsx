import {
  FormTextareaVariation,
  FormTextareaValidation,
  ButtonSize,
  ButtonVariation,
} from "@digi/arbetsformedlingen";
import { DigiButton, DigiFormTextarea } from "@digi/arbetsformedlingen-react";
import { FormEvent } from "react";
import { getEducations } from "../services/educationServices";

export default function SearchEducation() {
  // const [ ] = useState()

  const submitSearchEdu = async (e: FormEvent) => {
    e.preventDefault();
    console.log("click");

    const result = await getEducations({});
    console.log(result);
  };

  return (
    <>
      <section>
        <h2>Sök utbildning</h2>
        <form
          onSubmit={(e) => {
            submitSearchEdu(e);
          }}
        >
          <DigiFormTextarea
            afLabel="Beskriv vad du tycker om att göra"
            afVariation={FormTextareaVariation.MEDIUM}
            afValidation={FormTextareaValidation.NEUTRAL}
            afLabelDescription="Lämnas textrutan blank så hämtas alla utbildningar"
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
