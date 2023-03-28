import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import Instance from '../Axios/axiosinstance'
// import stepone from './stepone'
import Stepone from './stepone'
import Steptwo from './steptwo'
import Swal from 'sweetalert2'


export default function JobForm(props) {
    const [open, setOpen] = useState(false)
    const [Cform, setCform] = useState(1)
    const [ActionBtn,setActionBtn] = useState(false)

    const [inputData, setInputData] = useState({ "Companyname": "", "Jobtitle": "", "Industry": "", "Location": "", "Remotetype": "", "minexp": "", "maxexp": "", "minsalary": "", "maxsalary": "", "totalemployee": "", "applytype": "" })
    const [ErrorObj, setErrorObj] = useState({})

    const cancelButtonRef = useRef(null)

    const UpdateObject = (e, value) => {
        var Obj = { ...inputData, [e]: value }
        setInputData({ ...Obj })

    }
    const ErrorCheck = () => {
        // Object.values(inputData).some()
        var EOBJ = { ...ErrorObj }
        EOBJ['Companyname'] = inputData['Companyname'].trim() == ""
        EOBJ['Jobtitle'] = inputData['Jobtitle'].trim() == ""
        EOBJ['Industry'] = inputData['Industry'].trim() == ""
        setErrorObj(EOBJ)
        if (Object.values(EOBJ).some((es) => es == true)) {

        } else {
            setCform(2)
        }
        // EOBJ['Location'] = inputData['Location'] == ""
        // EOBJ['Remotetype'] = inputData['Remotetype'] == ""
        // EOBJ['minexp'] = inputData['minexp'] ==""||inputData['minexp'] ==0
        // EOBJ['maxexp'] = inputData['maxexp'] ==""||inputData['maxexp'] ==0
        // EOBJ['minsalary'] = inputData['minsalary'] ==""||inputData['minsalary'] ==0
        // EOBJ['maxsalary'] = inputData['maxsalary'] ==""||inputData['maxsalary'] ==0

    }

    useEffect(()=>{
        setInputData(props['updatedata'])
       
    },[props['updatedata']])
    const CreateForm = ()=>{
        setActionBtn(true)

        if(props['type']){
            var Id = inputData['id']

            delete inputData['id']
            Instance.put('company/'+Id,inputData)
            .then((res)=>{
                if(res.status==201 || res.status==200){
                    setOpen(false)
                    Swal.fire(
                        'Success!',
                        'Job Updated Successfully!',
                        'success'
                      )
                      
                    props['statechange']()
                }
            })
        }else{
            Instance.post('company',inputData)
            .then((res)=>{
                if(res.status==201 || res.status==200){
                    setOpen(false)
                    Swal.fire(
                        'Success!',
                        'Job Created Successfully!',
                        'success'
                      )
                    props['statechange'](true)
                }
                
            })
        }
       
    }

    return (
        <div>
      
            {
                props['type']?(
                    <button class="rounded Editablebtn " onClick={()=>{
                        setCform(1)
                        setActionBtn(false)

                        setErrorObj({})
                        setOpen((prev) => !prev)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                ):(
                    <button
                    className="mt-2 inline-flex w-full justify-center rounded-md text-sm font-medium text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
    
                    style={{ padding: "8px 16px 8px 16px", backgroundColor: "#1597E4" }} onClick={() =>{
                        setInputData({ "Companyname": "", "Jobtitle": "", "Industry": "", "Location": "", "Remotetype": "", "minexp": "", "maxexp": "", "minsalary": "", "maxsalary": "", "totalemployee": "", "applytype": "" })
                        setCform(1)
                        setErrorObj({})
                        setActionBtn(false)

                        setOpen((prev) => !prev)}}>Create Job</button>
                )
            }
     

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white  pt-8 pb-20">
                                        <div className="mb-4">
                                            <div className=" text-center sm:mt-0 sm:ml-8 sm:mr-8 sm:text-left">
                                                <Dialog.Title as="h3" className="text-lg  leading-6 text-black-500 ">
                                                    <div class="grid grid-cols-2 gap-4">
                                                        <div className='font-medium	'>Create a job</div>
                                                        <div className='text-end font-medium'>Step {Cform}</div>
                                                    </div>
                                                    <div>

                                                    </div>
                                                </Dialog.Title>
                                                <div className="">
                                                    {
                                                        Cform == 1 ? (<Stepone inputobj={inputData} ErrorObj={ErrorObj} onupdate={UpdateObject} />) : (<Steptwo inputobj={inputData} ErrorObj={ErrorObj} onupdate={UpdateObject} />)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" px-4 pb-8 sm:flex sm:flex-row-reverse ">
                                        {
                                            Cform == 1 ? (
                                                <button
                                                    type="button"
                                                    style={{ backgroundColor: "#1597E4", padding: "8px 16px 8px 16px" }}
                                                    className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                    onClick={ErrorCheck}
                                                >
                                                    Next
                                                </button>
                                            ) : (
                                                <>
                                                    <button
                                                        disabled={ActionBtn}
                                                        type="button"
                                                        style={{ backgroundColor: "#1597E4", padding: "8px 16px 8px 16px" }}
                                                        className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                        onClick={CreateForm}
                                                    >
                                                        Save
                                                    </button>

                                                </>
                                            )
                                        }
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}



