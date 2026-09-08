import React from 'react'
import { clinicData } from '../data/ClinicData'
const Contact = () => {
  return (
    <section id='contact' className='px-5 py-5'>
      <div className='mx-auto max-w-5xl text-center'>
      <h2 className="text-3xl font-bold">
          Contact Us
        </h2>
        <p className="mt-4 text-gray-600">
          {clinicData.address}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a href={`tel:${clinicData.phone}`}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white">
            Call Clinic
          </a>
          <a href={`https://wa.me/${clinicData.whatsapp}`}  target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white">
            Whatsapp
          </a>
          <a href={`mailto:${clinicData.email}`} 
            className="rounded-lg bg-blue-600 px-6 py-3 text-white">
            Email
          </a> 
          </div>
      </div>
    </section>
  )
}

export default Contact