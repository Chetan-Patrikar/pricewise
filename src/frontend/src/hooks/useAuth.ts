import { useInternetIdentity } from "@caffeineai/core-infrastructure";

export function useAuth() {
  const { identity, loginStatus, login, clear } = useInternetIdentity();

  const isAuthenticated = loginStatus === "success" && !!identity;
  const principal = identity?.getPrincipal().toString() ?? null;

  return {
    isAuthenticated,
    principal,
    loginStatus,
    login,
    logout: clear,
  };
}
