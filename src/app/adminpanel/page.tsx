"use client";

import AdminPanelSection from "@/components/AdminPanelSection";
import ConnectProvider from "@/components/ConnectProvider";
import React from "react";

export default function AdminPanelPage() {
  return (
    <ConnectProvider>
      <AdminPanelSection />
    </ConnectProvider>
  );
}
