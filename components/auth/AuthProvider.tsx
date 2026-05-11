"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { User } from "@/types/auth.types";

// type User = Record<string, any> | null;

type AuthContext = {
  user: User | null;
  setUser: (u: User) => void;
  logout: () => void;
};

const Auth = createContext<AuthContext>({
  user: null,
  setUser: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const match = document.cookie.match(/(?:^|; )user=([^;]+)/);
    if (match && match[1]) {
      try {
        const parsed = JSON.parse(decodeURIComponent(match[1]));
        setUser(parsed);
      } catch (e) {
        setUser(null);
      }
    }
  }, []);

  const logout = () => {
    document.cookie = 'user=; Path=/; Max-Age=0';
    setUser(null);
    router.push('/');
  };

  return (
    <Auth.Provider value={{ user, setUser, logout }}>
      {children}
    </Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth);

export default AuthProvider;
