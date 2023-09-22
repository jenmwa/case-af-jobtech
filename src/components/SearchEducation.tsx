import {
  FormTextareaVariation,
  FormTextareaValidation,
  ButtonSize,
  ButtonVariation,
} from "@digi/arbetsformedlingen";
import { DigiButton, DigiFormTextarea } from "@digi/arbetsformedlingen-react";

export default function SearchEducation() {
  return (
    <>
      <section>
        <h2>Sök utbildning</h2>
        <article>
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
          >
            Sök utbildning
          </DigiButton>
        </article>
      </section>
    </>
  );
}
