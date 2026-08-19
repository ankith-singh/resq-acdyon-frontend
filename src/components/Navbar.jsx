import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080a0d]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="text-lg font-bold tracking-[0.2em] text-white"
          aria-label="ResQ home"
        >
          RESQ
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#platform"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Platform
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-white/60 transition hover:text-white"
          >
            How it works
          </a>

          <a
            href="#command-center"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Command Center
          </a>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button className="text-sm text-white/60 transition hover:text-white">
            Sign in
          </button>

          <button className="rounded-lg border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">
            Get started →
          </button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="mt-1.5 block h-0.5 w-5 bg-white" />
          <span className="mt-1.5 block h-0.5 w-5 bg-white" />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#080a0d] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="#platform"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/70"
            >
              Platform
            </a>

            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/70"
            >
              How it works
            </a>

            <a
              href="#command-center"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/70"
            >
              Command Center
            </a>

            <button className="w-fit text-sm text-white/70">
              Sign in
            </button>

            <button className="w-fit rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">
              Get started →
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar