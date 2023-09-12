import React from 'react'

const DoctorDetails = () => {
  return (<section>
      <div className="max-w-[11170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src="" alt="" className="w-full" />
              </figure>
            </div>
            <div>
              <span className="bg-[#CCF0F3] text-irisBlueColor py-1 lg:py-2 px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                Sergeon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails