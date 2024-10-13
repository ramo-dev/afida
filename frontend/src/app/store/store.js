import { create } from "zustand";

async function handleLogin(email, password) {
  try {
    const resp = await fetch("url", {
      method: "POST",
      headers: {
        Autharization: ""
      },
      body: JSON.stringify({ email, password })
    })

    const data = await resp.json();
    return data;
  } catch (err) {
    throw new Error(err.message || "An error occurred during Login");
  }
}

async function handleRegister(fullName, email, password) {
  try {
    const resp = await fetch("url", {
      method: "POST",
      headers: {
        Autharization: ""
      },
      body: JSON.stringify({ fullName, email, password })
    })

    const data = await resp.json();
    return data;
  } catch (err) {
    throw new Error(err.message || "An error occurred during Registration");
  }
}

async function handleAddWallet(walletAddress) {
  try {
    const resp = await fetch("url", {
      method: "POST",
      headers: {
        Autharization: ""
      },
      body: { walletAddress }
    })

    const data = await resp.json();

    return data;
  } catch (err) {
    throw new Error("An error occurred when connecting wallet");

  }
}










const useAccountStore = create((set) => ({
  user: null,
  error: null,
  loading: false,
  setError: (error) => set({ error }),
  login: async (email, password) => {
    set({ loading: true })
    try {
      const account = await handleLogin(email, password);
      set({ user: account, loading: false, error: null });
    } catch (error) {
      set({ user: null, loading: false, error: error.message });
    } finally {
      set({ loading: false })
    }
  },

  register: async (fullName, email, password) => {
    set({ loading: true })
    try {
      const account = await handleRegister(fullName, email, password);
      set({ user: account, loading: false });
    } catch (error) {
      console.error('Registration failed:', error);
      set({ user: null, loading: false, error: error.message });
    } finally {
      set({ loading: false })
    }
  },
  logout: () => set({ user: null, loading: false, error: null }),
}));



export default useAccountStore;
