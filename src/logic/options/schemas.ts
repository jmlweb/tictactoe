import * as v from 'valibot';

import { DIFFICULTIES } from './config';

export const DifficultySchema = v.picklist(Object.values(DIFFICULTIES));

export const OptionsSchema = v.object({
  isVsCPU: v.boolean(),
  difficulty: DifficultySchema,
  playerNames: v.tuple([v.string(), v.string()]),
});

export type Options = v.InferOutput<typeof OptionsSchema>;
