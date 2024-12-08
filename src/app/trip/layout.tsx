"use client"
import Header from "@/components/Header";
import {  } from "@chakra-ui/react";
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        <Header />
        {children}
        </section>;
  }