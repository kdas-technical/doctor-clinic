import React from 'react'
import { clinicData } from '../data/ClinicData'
const Hero = () => {
  return (
    <section id="home" className="bg-slate-50 px-5 py-20">
    <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
    <div>
          <p className="mb-3 font-semibold">
            Professional Medical Care
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            {clinicData.doctorName}
          </h1>

          <h2 className="mt-4 text-2xl">
            {clinicData.specialty}
          </h2>

          <p className="mt-5 max-w-xl text-gray-600">
            Trusted healthcare with patient-focused
            consultation and treatment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#appointment"
              className="rounded-lg bg-black px-6 py-3 text-white"
            >
              Book Appointment
            </a>

            <a
              href={`https://wa.me/${clinicData.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border px-6 py-3"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-80 w-80 items-center justify-center rounded-3xl bg-gray-200">
            Doctor Photo
          </div>
        </div>
    </div>
    </section>
  )
}

export default Hero