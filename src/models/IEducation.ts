export interface IEducation{
  "id": string,
  "education": {
    "identifier": string,
    "resultIsDegree": boolean,
    "expires": string,
    "recommendedPriorKnowledge": [],
    "code": string,
    "description": [
      {
        "lang": string,
        "content": string
      }
    ]
  }
}