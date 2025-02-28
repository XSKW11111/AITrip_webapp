import URI from "../constant/uri";
import { GetTripPlanResponse } from "../type/trip_base";

export const getTripPlanFromAI = async (
  prompt: string,
): Promise<GetTripPlanResponse> => {
  const res = await fetch(URI.getTripPlan, {
    method: "POST",
    body: JSON.stringify({ prompt }),
  });

  return await res.json();
};
