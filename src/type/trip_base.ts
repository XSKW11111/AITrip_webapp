export type Trip = {
  name?: string;
  description?: string;
  date?: string;
  image?: string;
};

export type GetTripPlanResponse = {
  travelPlan?: Trip[];
};
