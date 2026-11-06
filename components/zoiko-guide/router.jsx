"use client";

// The few react-router APIs the shared Guide code uses (useNavigate, Link, useSearchParams),
// implemented on Next.js navigation so the Guide files stay identical to the platform app's.
import { useCallback } from "react";
import NextLink from "next/link";
import { usePathname, useRouter, useSearchParams as useNextSearchParams } from "next/navigation";

export function useNavigate() {
  const router = useRouter();
  return useCallback((to, { replace = false } = {}) => (replace ? router.replace(to) : router.push(to)), [router]);
}

export function Link({ to, ...rest }) {
  return <NextLink href={to} {...rest} />;
}

export function useSearchParams() {
  const current = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname() || "/";
  const params = new URLSearchParams(current ? current.toString() : "");
  const setParams = (next, { replace = false } = {}) => {
    const query = new URLSearchParams(next).toString();
    const url = query ? `${pathname}?${query}` : pathname;
    if (replace) router.replace(url, { scroll: false });
    else router.push(url, { scroll: false });
  };
  return [params, setParams];
}
