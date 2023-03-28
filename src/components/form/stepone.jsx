/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Stepone(props) {
    const [agreed, setAgreed] = useState(false)



    return (
        <div className="isolate bg-white mt-7">
            <form action="#" method="POST" className=" max-w-xl ">
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">

                    <div className="sm:col-span-2 gap-y-1">
                        <label htmlFor="company" className="block text-sm font-medium leading-6 gap-y-1 text-black-900">
                            Job title <span className='text-red-500'>*</span>
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                value={props['inputobj']['Jobtitle']}
                                name="company"
                                placeholder='ex. UX UI Designer'
                                id="company"

                                onChange={(e) => {
                                    props.onupdate("Jobtitle", e.target.value)
                                }}
                                autoComplete="organization"
                                className={` ${props['ErrorObj']['Jobtitle']?" Errorbtn ":""} block w-full rounded-md py-2 px-3.5 text-black-900 ring-1 ring-inset ring-gray-300 placeholder:text-black-400  sm:text-sm sm:leading-6`}
                            />
                            <span class="text-red-500 text-xs ">{props['ErrorObj']['Jobtitle']?"Job Title is Required":""}</span>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-medium leading-6 text-black-900">
                            Company name <span className='text-red-500'>*</span>
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="company"
                                value={props['inputobj']['Companyname']}

                                placeholder='ex. Google'
                                id="company"
                                onChange={(e) => {
                                    props.onupdate("Companyname", e.target.value)
                                }}
                                autoComplete="organization"
                                className={`${props['ErrorObj']['Companyname']?" Errorbtn ":""}  block w-full rounded-md py-2 px-3.5 text-black-900 shadow-sm ring-1  ring-gray-300 placeholder:text-black-400 sm:text-sm sm:leading-6` }
                            />
                            <span className={" text-xs text-red-500 "}>{props['ErrorObj']['Companyname']?"CompanyName is Required":""}</span>

                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-black-900">
                            Industry <span className='text-red-500'>*</span>
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                placeholder='ex. Information Technology'
                                value={props['inputobj']['Industry']}

                                name="Industry"
                                onChange={(e) => {
                                    props.onupdate("Industry", e.target.value)
                                }}
                                id="Industry"
                                autoComplete="email"
                                className={` ${props['ErrorObj']['Industry']?" Errorbtn ":""}  block w-full rounded-md  py-2 px-3.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400  sm:text-sm sm:leading-6 ` }
                            />
                            <span class="text-red-500 text-xs ">{props['ErrorObj']['Industry']?"Industry is Required":""}</span>

                        </div>
                    </div>
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
                            Location
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="first-name"
                                value={props['inputobj']['Location']}

                                placeholder='ex. Chennai'
                                onChange={(e) => {
                                    props.onupdate("Location", e.target.value)
                                }}
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-black-900">
                            Remote type
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="last-name"
                                value={props['inputobj']['Remotetype']}

                                onChange={(e) => {
                                    props.onupdate("Remotetype", e.target.value)
                                }}
                                placeholder='ex. In-office'
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
