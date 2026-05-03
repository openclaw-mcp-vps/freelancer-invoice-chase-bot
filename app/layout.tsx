import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceChaser — Automatically Chase Overdue Freelance Invoices',
  description: 'Stop chasing clients manually. InvoiceChaser sends automated escalating follow-up emails for overdue invoices so you get paid faster.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="33abde19-8331-4680-9098-97238be737cf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
