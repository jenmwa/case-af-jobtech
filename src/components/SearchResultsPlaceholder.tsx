import { DigiMediaImage } from '@digi/arbetsformedlingen-react'
import illustration from '/af-illustration.png'

export default function SearchResultsPlaceholder() {
  return (
    <div className='placeholder'>
      <DigiMediaImage
      afUnlazy
      afHeight="300"
      afWidth="300"
      afSrc={illustration}
      afAlt="Illustratino föreställande glad kvinna"
    >
    </DigiMediaImage>
    </div>
  )
}