export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Time Spent on{' '}
          <span className="text-[#58a6ff]">Code Reviews</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect GitHub or GitLab to measure review cycle times, surface bottlenecks, and give your engineering team actionable productivity insights — all in one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $10/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to start. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$10</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>GitHub &amp; GitLab integration</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Real-time review time tracking</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Bottleneck detection &amp; alerts</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Team productivity dashboards</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Webhook-powered live updates</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Unlimited repositories</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which platforms are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support GitHub and GitLab. Connect via OAuth or personal access tokens and start tracking review metrics within minutes.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the time tracking work?</h3>
            <p className="text-[#8b949e] text-sm">We use webhooks to capture pull request and merge request events in real-time — from first review request to final approval — giving you accurate cycle time data.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-[#8b949e] text-sm">Yes, you can cancel at any time from your billing portal. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] border-t border-[#21262d] pt-8">
        &copy; {new Date().getFullYear()} Code Review Time Tracker. All rights reserved.
      </footer>
    </main>
  )
}
