import React from "react";
import Image from "next/image";

const PageCreateAcount = () => {
  return (
    <div className="flex-1">
      <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Edit Profile</h2>
      </div>

      <div className="flex justify-center mt-2 p-4 border border-gray-400 shadow-lg bg-white rounded-md">
        <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-900">Account Type</label>
              <select className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
                <option value="" disabled selected>Select Account Type</option>
                <option value=""></option>
                <option value=""></option>
                </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-900">Division</label>
              <select className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
                <option value="" disabled selected>Select Division</option>
                <option value=""></option>
                <option value=""></option>
                </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-900">Department</label>
              <select className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
                <option value="" disabled selected>Select Department</option>
                <option value=""></option>
                <option value=""></option>
                </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-900">Position</label>
              <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Position Title"/>
            </div>
        </div>

          <div className="bg-white mt-3 p-2 ">
            <h2 className="text-xl font-semibold mb-2">Profile Picture</h2>
            <hr className="border-gray-400 my-1" /> 
          </div>

            <div className="bg-white">
              <div className="flex items-center space-x-4 mb-5 pl-4 pt-5">
                <Image src="/images/user.png" alt="Profile Picture" width={118} height={188} className="rounded-full"/>
                <div className="col-span-2 flex justify-center">
                  <div className=" pl-2 mt-6 p-1 bg-white grid grid-cols-2 gap-3">
                    <div className="flex flex-col">
                      <button className=" flex border-4 border-blue-900 text-semibold p-2 focus:outline-none focus:border-blue-1000 justify-center rounded" style={{ width: "400px", height: "45px", color: "#0D5AA1"}}>Change Picture</button>
                    </div>
 
                    <div className="flex flex-col">
                      <button className=" flex border-4 border-red-900 text-semibold p-2 focus:outline-none focus:border-red-1000 justify-center rounded" style={{ width: "400px", height: "45px", color: "#CC1307"}}>Delete Picture</button>
                    </div>

                    <div className="col-span-2 flex justify-center">
                      <p>Image must be 1200 x 1200, .png or .jpg</p>
                    </div>      
                  </div>      
                </div>
              </div>
            </div>

          <div className="bg-white mt-3 p-2 "> 
            <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
            <hr className="border-gray-400 my-1" /> 

            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">First Name</label>
                <input type="text" id="firstname" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert First Name"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Last Name</label>
                <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Last Name"/>
              </div>
            </div>

            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Phone Number</label>
                <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Phone Number"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Personal Email Address</label>
                <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Email Address"/>
              </div>
            </div>

            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">NIK</label>
                <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert NIK"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">NIP</label>
                <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert NIP"/>
              </div>
            </div>
          </div>

          <section className="mt-6">
  <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
  <hr className="border-gray-400 mb-2" />
  
  <div className="flex flex-col mb-4">
    <label className="text-sm font-medium text-gray-900">Street Address</label>
    <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Street Address" />
  </div>
  
  <div className="grid md:grid-cols-2 gap-4">
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-900">Gender</label>
      <select className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" defaultValue="">
        <option value="" disabled>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-900">Date of Birth</label>
      <input type="date" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" />
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-900">City</label>
      <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert City" />
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-900">Province</label>
      <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Province" />
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-900">Postal Code</label>
      <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Postal Code" />
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-900">Country</label>
      <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Country" />
    </div>
  </div>
</section>


          <div className="bg-white mt-3 p-2">
            <h2 className="text-xl font-semibold mb-2">Documents</h2>
            <hr className="border-gray-400 my-1" /> 

            <div className="mt-2 p-1 bg-white rounded">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600">Kartu Tanda Pengenal (KTP)</label>
                <div className="flex justify-between items-center border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
                  <p className="m-0">Format File must be in .pdf</p>
                  <button className="rounded text-white" style={{ backgroundColor: "#0D5AA1", width: "145px", height: "35px" }}>Upload Document</button>
                </div>
              </div> 
            </div>

            <div className="mt-2 p-1 bg-white rounded">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600">Nomor Pokok Wajib Pajak (NPWP)</label>
                <div className="flex justify-between items-center border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
                  <p className="m-0">Format File must be in .pdf</p>
                  <button className="rounded text-white" style={{ backgroundColor: "#0D5AA1", width: "145px", height: "35px" }}>Upload Document</button>
                </div>
              </div> 
            </div>

            <div className="mt-2 p-1 bg-white rounded">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600">Employee Agreement Letter</label>
                <div className="flex justify-between items-center border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
                  <p className="m-0">Format File must be in .pdf</p>
                  <button className="rounded text-white" style={{ backgroundColor: "#0D5AA1", width: "145px", height: "35px" }}>Upload Document</button>
                </div>
              </div> 
            </div>

            <div className="mt-2 p-1 bg-white rounded">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600">Certification (Optional)</label>
                <div className="flex justify-between items-center border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
                  <p className="m-0">Format File must be in .pdf</p>
                  <button className="rounded text-white" style={{ backgroundColor: "#0D5AA1", width: "145px", height: "35px" }}>Upload Document</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white mt-3 p-2 ">
            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Create Email Office</label>
                <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Email Office"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Temporarty Password</label>
                <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Password"/>
              </div>
            </div>
          </div>

          <div className="bg-white mt-3 p-2 ">
            <h2 className="text-xl font-semibold mb-2">User Access</h2>
            <hr className="border-gray-400 my-1" /> 

            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <div className="border border-gray-400 p-2 focus:outline-none focus:border-blue-500">SPAMI</div>
              </div>

              <div className="flex flex-col">
              <div className="border border-gray-400 p-2 focus:outline-none focus:border-blue-500">BRILIST</div>
              </div>

              <div className="flex flex-col">
              <div className="border border-gray-400 p-2 focus:outline-none focus:border-blue-500">E-RMS</div>
              </div>
            </div>
          </div>

          <div className="bg-white mt-3 p-2 ">
          <button type="button" className="w-full rounded text-white" style={{ backgroundColor: "#0D5AA1", height: "35px"}}>Save Changes</button>
          <button type="button" className="w-full rounded text-custom-blue" style={{ backgroundColor: "##FFFFFF", color: "#0D5AA1", height: "35px"}}>Reset Changes</button>
          </div>

      </div>
    </div>
  );
};

export default PageCreateAcount;