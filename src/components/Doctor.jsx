import React from 'react'
import { clinicData } from '../data/ClinicData'
const Doctor = () => {
  return (
    <section id="about" className="bg-slate-50 px-5 py-20">
    <div className="mx-auto max-w-5xl">
    <p className="font-semibold">About Doctor</p>
    <h2 className="mt-2 text-3xl font-bold">
          {clinicData.doctorName}
        </h2>
        <p className="mt-2">
          {clinicData.qualification}
        </p>
        <p className="mt-6 max-w-3xl leading-8 text-gray-600">
          {clinicData.about}
        </p>
    
    </div>
    </section>
  )
}

export default Doctor