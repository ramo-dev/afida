import { create } from "zustand";


async function handleLogin(email, password) {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_AFIDA_BASE}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    })

    const data = await resp.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message || "An error occurred during Login");
  }
}


async function handleRegister(fullName, email, password, walletAddress) {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_AFIDA_BASE}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: fullName, email, password, smartWalletAddress: walletAddress })
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


async function handleVerify(walletAddress) {
  try {
    const token = localStorage.getItem('token');

    const resp = await fetch(`${process.env.NEXT_PUBLIC_AFIDA_BASE}/users/verify`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ walletAddress })
    });

    if (!resp.ok) {
      throw new Error('Verification failed');
    }

    const data = await resp.json();
    return data;
  } catch (err) {
    throw new Error(err.message || 'An error occurred during verification');
  }
}







const useAccountStore = create((set) => ({
  user: null,
  error: null,
  loading: false,
  setError: (error) => set({ error }),
  setUser: (user) => set({ user }),
  login: async (email, password) => {
    set({ loading: true })
    try {
      const account = await handleLogin(email, password);
      console.log(account)
      if (!account.token) {
        set({ user: null, loading: false, error: account.message })
      } else {
        localStorage.setItem('token', account.token);
        localStorage.setItem('address', account.address)
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
      if (!account.token) {
        localStorage.setItem('token', account.token);
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

  verify: async (walletAddress) => {
    set({ loading: true });
    try {
      const userData = await handleVerify(walletAddress);
      if (!userData) {
        set({ user: null, loading: false });
      } else {
        set({ user: userData, error: null, loading: false });
        console.log('User verified:', userData);
      }
    } catch (error) {
      set({ user: null, loading: false });
      console.error('Verification failed:', error);
    } finally {
      set({ loading: false });
    }
  },
  logout: () => {
    localStorage.removeItem("address");
    localStorage.removeItem("token");
    set({ user: null, loading: false, error: null })
  },
}));



export default useAccountStore;
