import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { JsonOutputParser } from "@langchain/core/output_parsers";
export interface format_instructions {
  report: [
    {
      heading: string;
      bulletPoints: [string];
    },
  ];
}

const model = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
});

const output_instruction = `
ONE SHOT JSON OUTPUT EXAMPLE
{
    "report": [
      {
        "heading": "1. Prevalence of Chronic Conditions",
        "bulletPoints": ["Hypertension: 3 out of 4 participants suffer from hypertension. This highlights a trend of high blood pressure in individuals, which could be related to diet, stress, or genetic predispositions.","Type 2 Diabetes: One participant has Type 2 diabetes, and two others have a family history of it. This suggests a genetic component and points to potential preventive measures that could be taken with other members of the family."]
      },
    ]
}`;

const promptTemplate = PromptTemplate.fromTemplate(
  `given the JSON data below generate some useful insights for medical researchers\n
  {big_data}\n\n JSON output instruction:\n{output_instruction}`,
);

export async function POST(request: Request) {
  try {
    const parser = new JsonOutputParser<format_instructions>();
    const body = await request.json();

    const partialedPrompt = await promptTemplate.partial({
      output_instruction: output_instruction,
    });

    const chain = partialedPrompt.pipe(model).pipe(parser);

    const res = await chain.invoke({ big_data: JSON.stringify(body.bigData) });
    console.log(res);

    return new Response(JSON.stringify(res));
  } catch (error) {
    return new Response(JSON.stringify({ message: error }));
  }
}
