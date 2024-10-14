import { create } from "zustand";

export const useCampaignStore = create((set) => ({
  allCampaigns: [],
  myCampaign: null,
  addCampaign: (campaign) => {
    //add a campaign locally and also on the backend
  },
  removeCampaign: (campaignId) => {
    //remove campaign
  },
  fetchAllCampaigns: () => {
    //fetch all campaigns
  },
  donateToCampaign: (id, price) => {
    //add fundings to a specific campaign
  },
}))
