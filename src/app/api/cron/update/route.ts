import { NextResponse } from "next/server";
import { sourceAdapters } from "@/lib/sources";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return NextResponse.json({ ok: false, error: "CRON_SECRET is not configured" }, { status: 503 });
  if (request.headers.get("authorization") !== `Bearer ${secret}`) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const results = await Promise.all(sourceAdapters.map(async (adapter) => {
    try {
      const records = await adapter.fetch();
      return { source: adapter.name, count: records.length, ok: true };
    } catch {
      return { source: adapter.name, count: 0, ok: false };
    }
  }));

  return NextResponse.json({ ok: true, persisted: false, message: "Adapters checked. GitHub Actions persists daily data.", results });
}
