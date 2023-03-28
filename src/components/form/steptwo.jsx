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

export default function Steptwo(props) {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="isolate bg-white mt-7">
            <form action="#" method="POST" className=" max-w-xl ">
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 ">
                            Experiance
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="first-name"
                                value={props['inputobj']['minexp']}

                                placeholder='Minimum'
                                onChange={(e) => {
                                    var rex=/^[0-9]+$/
                                    if(e.target.value==""||rex.test(e.target.value)){
                                    props.onupdate("minexp", e.target.value)
                                    }
                                }}
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mt-7">
                            <input
                                type="text"
                                name="last-name"
                                value={props['inputobj']['maxexp']}

                                placeholder='Maximun'
                                onChange={(e) => {
                                    var rex=/^[0-9]+$/
                                    if(e.target.value==""||rex.test(e.target.value)){
                                    props.onupdate("maxexp", e.target.value)
                                    }
                                }}
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 ">
                            Salary
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="first-name"
                                value={props['inputobj']['minsalary']}

                                placeholder='Minimun'
                                onChange={(e) => {
                                   
                                    var rex=/^[0-9]+$/
                                    if(e.target.value==""||rex.test(e.target.value)){
                                        props.onupdate("minsalary", e.target.value)
                                    }
                                }}
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mt-7">
                            <input
                                type="text"
                                value={props['inputobj']['maxsalary']}

                                name="last-name"
                                placeholder='Maximum'
                                onChange={(e) => {
                                    var rex=/^[0-9]+$/
                                    if(e.target.value==""||rex.test(e.target.value)){
                                        props.onupdate("maxsalary", e.target.value)
                                    }
                                    
                                }}
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Total employee
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                placeholder='ex. 100'
                                name="email"
                                value={props['inputobj']['totalemployee']}

                                onChange={(e) => {
                                    props.onupdate("totalemployee", e.target.value)
                                }}
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div >
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Apply Type
                        </label>
                    </div>
                    <div className="flex sm:col-span-2">

                        <div className="flex items-center mr-0.5">

                            <input
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                checked={props['inputobj']['applytype']=="Quickapply"}
                                onChange={(e)=>{
                                    props.onupdate("applytype", "Quickapply")
                                    // console.log(e.target.checked)
                                }}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                                htmlFor="push-everything"
                                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                            >
                                Quick Apply
                            </label>
                        </div>
                        <div className="flex items-center ml-4">
                            <input
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                checked={props['inputobj']['applytype']=="Externalapply"}

                                onChange={(e)=>{
                                    props.onupdate("applytype", "Externalapply")

                                    // console.log(e.target.checked)
                                }}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                                htmlFor="push-everything"
                                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                            >
                                External Apply
                            </label>
                        </div>

                    </div>


                </div>
            </form>
        </div>
    )
}
