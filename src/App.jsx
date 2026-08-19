import { motion } from "framer-motion";
import Navbar from './components/Navbar'

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#080a0d] text-white">
      <Navbar />

      <main>
        <section className="flex min-h-screen items-center px-5 pt-24 sm:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-[#ff6b3d]">
                REAL-TIME DISASTER RESPONSE
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                When every second matters,
                <span className="block text-white/45">
                  know where help is needed.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                ResQ gives response teams one live view of camps, volunteers,
                incidents and resources—so they can coordinate faster when it
                matters most.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#command-center"
                  className="rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Explore Command Center →
                </a>

                <a
                  href="#how-it-works"
                  className="rounded-lg border border-white/10 px-6 py-3 text-center text-sm text-white/65 transition hover:border-white/25 hover:text-white"
                >
                  See how it works
                </a>
              </div>
            </div>
          </div>
        </section>

        <motion.section
        id="command-center"
        className="border-t border-white/10 px-5 py-24 sm:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        >
        
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#ff6b3d]">
                COMMAND CENTER
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                One operational view.
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1014]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="text-sm font-medium">ResQ Operations</span>

                <span className="flex items-center gap-2 text-xs text-white/50">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  SYSTEM OPERATIONAL
                </span>
              </div>

              <div className="grid lg:grid-cols-[180px_1fr]">
                <aside className="hidden border-r border-white/10 p-4 lg:block">
                  <div className="space-y-2 text-sm">
                    <div className="rounded-lg bg-white/10 px-3 py-2 text-white">
                      Overview
                    </div>
                    <div className="px-3 py-2 text-white/45">Incidents</div>
                    <div className="px-3 py-2 text-white/45">Camps</div>
                    <div className="px-3 py-2 text-white/45">Volunteers</div>
                    <div className="px-3 py-2 text-white/45">Resources</div>
                  </div>
                </aside>

                <div className="p-4 sm:p-6">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      ['12', 'Active camps'],
                      ['87', 'Available volunteers'],
                      ['4', 'Active incidents'],
                      ['82%', 'Medical resources'],
                    ].map(([value, label]) => (
                      <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                        <div className="text-2xl font-semibold">{value}</div>
                        <div className="mt-1 text-xs text-white/40">
                          {label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                    <div className="relative min-h-[360px] overflow-hidden rounded-xl border border-white/10 bg-[#11161b]">
                      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />

                      <div className="absolute left-[25%] top-[30%] h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,.7)]" />
                      <div className="absolute left-[58%] top-[24%] h-3 w-3 rounded-full bg-[#ff6b3d] shadow-[0_0_20px_rgba(255,107,61,.7)]" />
                      <div className="absolute left-[70%] top-[65%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,.7)]" />
                      <div className="absolute left-[38%] top-[72%] h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,.7)]" />

                      <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-xs text-white/50 backdrop-blur">
                        LIVE OPERATIONAL MAP · DEMO DATA
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-xl border border-white/10 p-5">
                        <div className="text-xs uppercase tracking-wider text-white/35">
                          Active incident
                        </div>

                        <div className="mt-3 text-lg font-medium">
                          Medical support required
                        </div>

                        <div className="mt-2 text-sm text-white/45">
                          Sector 04 · Response team requested
                        </div>

                        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-[72%] rounded-full bg-[#ff6b3d]" />
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/10 p-5">
                        <div className="text-xs uppercase tracking-wider text-white/35">
                          Resource availability
                        </div>

                        <div className="mt-4 space-y-4">
                          <div>
                            <div className="mb-2 flex justify-between text-xs">
                              <span className="text-white/55">Food</span>
                              <span>64%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-white/10">
                              <div className="h-full w-[64%] rounded-full bg-white/70" />
                            </div>
                          </div>

                          <div>
                            <div className="mb-2 flex justify-between text-xs">
                              <span className="text-white/55">Shelter</span>
                              <span>91%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-white/10">
                              <div className="h-full w-[91%] rounded-full bg-emerald-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-center text-xs text-white/25">
                    Interface demonstration — fictional operational data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section id="platform" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
              {[
                [
                  '01',
                  'Live Situation Awareness',
                  'See camps, incidents and response teams in one operational view.',
                ],
                [
                  '02',
                  'Volunteer Coordination',
                  'Understand team availability and deployment locations.',
                ],
                [
                  '03',
                  'Resource Visibility',
                  'Know where critical supplies are available and where shortages are developing.',
                ],
                [
                  '04',
                  'Faster Decisions',
                  'Give command teams the information they need without switching between systems.',
                ],
              ].map(([number, title, description]) => (
                <article
                  key={number}
                  className="bg-[#0d1014] p-7 sm:p-10"
                >
                  <div className="text-xs text-[#ff6b3d]">{number}</div>
                  <h3 className="mt-8 text-xl font-medium">{title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-t border-white/10 px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#ff6b3d]">
              HOW IT WORKS
            </p>

            <div className="mt-12 grid gap-12 md:grid-cols-3">
              {[
                ['01', 'CONNECT', 'Bring response data into one operational view.'],
                ['02', 'UNDERSTAND', 'See incidents, camps, people and resources.'],
                ['03', 'RESPOND', 'Coordinate the right people to the right place.'],
              ].map(([number, title, description]) => (
                <article key={number}>
                  <div className="text-sm text-white/30">{number}</div>
                  <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/45">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#ff6b3d]">
              RESQ
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
              Build a clearer picture of the crisis.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45">
              Give your response teams one place to see what&apos;s happening
              and act.
            </p>

            <a
              href="#command-center"
              className="mt-9 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Explore the platform →
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm font-bold tracking-[0.2em]">RESQ</span>

          <div className="flex flex-wrap gap-5 text-xs text-white/40">
            <a href="#platform">Platform</a>
            <a href="#how-it-works">How it works</a>
            <a href="#command-center">Command Center</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App