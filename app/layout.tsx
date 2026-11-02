import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ARIN330585 Study Planner", description: "Quản lý kế hoạch học tập môn Trí tuệ nhân tạo - HCMUTE" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}