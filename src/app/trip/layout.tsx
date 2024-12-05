"use client"
import Header from "@/components/Header";

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