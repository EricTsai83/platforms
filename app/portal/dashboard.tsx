"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { rootDomain, protocol } from "@/lib/utils";

type Tenant = {
  subdomain: string;
  emoji: string;
  createdAt: number;
};

function DashboardHeader() {
  // TODO: You can add authentication here with your preferred auth provider

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Subdomain Management</h1>
      <div className="flex items-center gap-4">
        <Link
          href={`${protocol}://${rootDomain}`}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          back to the home page
        </Link>
      </div>
    </div>
  );
}

function TenantGrid({ tenants }: { tenants: Tenant[] }) {
  if (tenants.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <p className="text-gray-500">No subdomains have been created yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tenants.map((tenant) => (
        <Card key={tenant.subdomain}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{tenant.subdomain}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl">{tenant.emoji}</div>
              <div className="text-sm text-gray-500">
                Created:{" "}
                {new Date(tenant.createdAt).toLocaleDateString("zh-TW", {
                  timeZone: "Asia/Taipei",
                })}
              </div>
            </div>
            <div className="mt-4">
              <a
                href={`${protocol}://${tenant.subdomain}.${rootDomain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                Visit subdomain →
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function AdminDashboard({ tenants }: { tenants: Tenant[] }) {
  return (
    <div className="space-y-6 relative p-4 md:p-8">
      <DashboardHeader />
      <TenantGrid tenants={tenants} />
    </div>
  );
}
