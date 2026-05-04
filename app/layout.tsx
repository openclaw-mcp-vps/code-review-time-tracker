import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Review Time Tracker — Track review times across teams',
  description: 'Integrates with GitHub/GitLab to track review times, identify bottlenecks, and provide team productivity insights for engineering managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b37d5f91-c0f5-41ed-a21d-a82eb1005623"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
