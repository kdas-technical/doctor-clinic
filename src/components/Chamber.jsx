import React from 'react'
import { portfolioData } from '../data/PortfolioData'

const Chamber = () => {
  return (
    <section id="chamber" className="px-5 py-20">
    <div className="mx-auto max-w-7xl">

      <h2 className="text-center text-3xl font-bold">
        Chamber Timings
      </h2>

      <div className="mt-10 flex justify-center items-center">
        {portfolioData.chambers.map((chamber) => (
          <div
            key={chamber.name}
            className="rounded-xl border p-6"
          >
            <h3 className="text-xl font-bold">
              {chamber.name}
            </h3>

            <p className="mt-3">
              📍 {chamber.address}
            </p>

            <p className="mt-3">
              📅 {chamber.days}
            </p>

            <p className="mt-3">
              🕒 {chamber.time}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
  )
}

export default Chamber