
export interface IEducations {
  hits: number,
  result: IEducation[]
}

interface IEducation {
  education: {
    identifier: string,
    subject: [
      {
        code: string,
        name: string,
        type: string
      }
    ],
    description: [
      {
        content: string,
      }
    ],
    title: [
      {
        content: string
      }
    ],
    text_enrichments_results: {
      enriched_candidates: {
        occupations: [
          string
        ]
      },
    },
    id: string
  }
}