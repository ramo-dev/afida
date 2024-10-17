import { create } from "zustand";


async function handleAddCampaign(user, data) {
  try {
    //replace with endpoint to store campaigns
    const token = await localStorage.getItem("token")
    const resp = await fetch(`${process.env.AFIDA_BASE}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ user, data })
    })

    const data = await resp.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message || "An error occurred during Login");
  }
}


async function handleRemoveCampaign(campaignId) {
  try {
    const token = await localStorage.getItem("token")
    const resp = await fetch(`${process.env.AFIDA_BASE}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`

      },
      body: JSON.stringify({ campaignId })
    });

    const data = await resp.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message || "An error occurred during Registration");
  }
}


async function handleAddWallet(walletAddress) {
  try {
    const token = await localStorage.getItem("token")

    const resp = await fetch("url", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: { walletAddress }
    })

    const data = await resp.json();

    return data;
  } catch (err) {
    throw new Error("An error occurred when connecting wallet");

  }
}











