import { create } from "zustand";
import { useAccount } from "wagmi";


async function handleLogin(email, password) {
  try {
    const resp = await fetch("/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
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


async function handleRegister(fullName, email, password, walletAddress) {
  try {
    const resp = await fetch("/api/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: ""
      },
      body: JSON.stringify({ fullName, email, password, smartWalletAddress: walletAddress })
    });

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
      console.log(account.message)
      if (!account.ok) {
        set({ user: null, loading: false, error: account.message })
      } else {
        set({ user: account, error: null });
      }

    } catch (error) {
      set({ user: null, error: error.message });
    } finally {
      set({ loading: false })
    }
  },

  register: async (fullName, email, password, address) => {
    set({ loading: true })
    try {
      const account = await handleRegister(fullName, email, password, address);
      if (!account.ok) {
        set({ user: null, error: null, error: account.message });
      } else {
        set({ user: account, error: null });
      }
    } catch (error) {
      console.error('Registration failed:', error);
      set({ user: null, error: error.message });
    } finally {
      set({ loading: false })
    }
  },
  logout: () => set({ user: null, loading: false, error: null }),
}));



export default useAccountStore;
