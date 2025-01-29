'use server'

import jobPositions from "@/data/job-positions.json";
import { jobDescriptions } from "@/data/job-descriptions";

export async function getJobData(id: string) {
  const position = jobPositions.positions.find((p) => p.id === id);
  const details = jobDescriptions[id];
  return { position, details };
}
