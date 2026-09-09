import React from 'react'
import { portfolioData } from '../data/PortfolioData'
const Services = () => {
  return (
    <section id="services" className="bg-slate-50 px-5 py-20">
    <div className="mx-auto max-w-7xl">
    <h2 className="text-center text-3xl font-bold">
          Our Services
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.services.map((service) => (
           <div key={service} className='rounded-xl bg-white p-6 shadow-sm'>
               <h3 className="text-xl font-semibold">
                {service}
              </h3>
              <p className="mt-3 text-gray-600">
                Professional consultation and
                patient-focused care.
              </p>
           </div>
          )
           )
          }
        </div>
      </div>
      </section>
  )
}

export default Services