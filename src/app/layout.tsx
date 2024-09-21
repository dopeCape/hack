"use client";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const navBarSkipList = ["/", "/signin", "/signup"];
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {!navBarSkipList.includes(pathName) && (
            <>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </>
          )}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
