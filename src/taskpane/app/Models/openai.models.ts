/* eslint-disable prettier/prettier */
export interface CompletionRequest {
  model: string;
  prompt: string;
  max_tokens: number;
  top_p: number;
  temperature: number;
  n: number;
  frequency_penalty: number;
  presence_penalty: number;
  stop: string[];
  suffix: string;
}

export interface CompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
}

export interface Choice {
  text: string;
  index: number;
  finish_reason: string;
}
