import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import Netimg from "../../Asset/images/one.png"
import Instance from '../Axios/axiosinstance'

import JobForm from '../form/register'
import Swal from 'sweetalert2'


export default function ApplyCard(props) {
    const [JobList, setJobList] = useState([])

    const ListJobs = () => {
        Instance.get("company")
            .then((res) => {
                // console.log(res)
                if (res.status == 200) {
                    setJobList(res['data'])
                }
            })
    }

    const DeleteJob = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                Instance.delete("company/"+id)
                .then((res) => {
                    // console.log(res)
                    if (res.status == 200) {
                        ListJobs()
                        // setJobList(res['data'])
                        Swal.fire(
                            'Deleted!',
                            'Job has been deleted.',
                            'success'
                          )
                    }
                })
            
            }
          })
    }

    useEffect(() => {
        
        ListJobs()
    }, [props['statechange']])

    return (
        <div className="grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  sm:grid-cols-1 p-4 gap-2">
            {
                JobList.map((item, index) => (
                    <div className=''>
                        <div className="max-w-full	shadow-lg  bg-white dark:bg-gray-800 rounded-lg border  mb-6 py-3 pl-4 pr-4">
                            <div className="flex ">
                                <div className='max-w-sm pr-2 '>
                                    <img src={Netimg}></img>
                                </div>
                                <div className='max-w-full grow'>
                                    <div>
                                        <span className='font-normal text-xl text-black'>{item['Jobtitle']} </span>

                                    </div>
                                    <div>
                                        <span className='text-base font-medium	 text-black '>{item['Companyname']?item['Companyname']:"-"} - {item['Industry']?item['Industry']:"-"}</span>
                                    </div>
                                    <div className='mb-6'>
                                        <span className='text-base font-normal text-gray-500'>{item['Location']?item['Location']:" - "} {"(" + (item.Remotetype?item.Remotetype:"-") + ")"}</span>

                                    </div>
                                    <div>
                                        <span className='text-base font-normal text-black'>Part-Time (9.00 am - 5 pm IST)</span>
                                    </div>
                                    <div className='mt-2'>
                                        <span className='text-base font-normal text-black'>Experiance ({item['minexp']?item['minexp']:" - "} - {item['maxexp']?item['maxexp']:"-"} Years)</span>
                                    </div>
                                    <div className='mt-2'>
                                        <span className='text-base font-normal text-black'>INR ($) {item['minsalary']?item['minsalary']:" - "} - {item['maxsalary']?item['maxsalary']:"-"} / Month </span>
                                    </div>

                                    <div className='mt-2'>
                                        <span className='text-base font-normal text-black'>{item['totalemployee']?item['totalemployee']:" - "} employees</span>
                                    </div>
                                    <div className='mt-8'>
                                        <div class="flex">
                                            <div className={`${item['applytype']=="Externalapply"?"hidden":""} pr-6`}>
                                                <button
                                                    style={{ padding: "8px 16px 8px 16px", backgroundColor: "#1597E4" }}
                                                    type="submit"
                                                    className="rounded-md text-sm text-white font-medium"
                                                >
                                                    Apply Now
                                                </button>
                                            </div>
                                            <div className={`${item['applytype']=="Quickapply"?"hidden":""}`}>
                                                <button
                                                    style={{ padding: "8px 16px 8px 16px", color: "#1597E4",border:"1px solid #1597E4" }}
                                                    type="submit"
                                                    className="rounded-md text-sm text-white font-medium"
                                                >
                                                    External Apply
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex max-w-full '>

                                    <span className='pr-3'>
                                        <JobForm statechange={()=>{
                                            ListJobs()
                                        }} type={true} updatedata={item} />
                                    </span>
                                    <span>

                                        <button class="rounded Deletebtn" onClick={()=>{
                                            DeleteJob(item['id'])
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
