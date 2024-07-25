import React from "react";
import Image from "next/image";

const PageCreateAccUser = () => {
  return (
    <div className="flex-1" style={{ width: "1235px", height: "56px" }}>
      <header className="bg-[#0D5AA1] p-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Edit Profile</h2>
      </header>

      <div className="bg-white p-12 shadow-lg rounded mt-4 border border-gray-400">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900">Account Type</label>
              <select className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" defaultValue="">
                <option value="" disabled>Select Account Type</option>
                <option value="Karyawan">Karyawan</option>
                <option value="Magang">Magang</option>
                <option value="Freelance">Freelance</option>
              </select>
          </div>


          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900">Division</label>
            <select className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
              <option value="" disabled>Select Division</option>
              <option value="Division1">Division 1</option>
              <option value="Division2">Division 2</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900">Department</label>
            <select className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
              <option value="" disabled>Select Department</option>
              <option value="Dept1">Department 1</option>
              <option value="Dept2">Department 2</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900">Position</label>
            <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Position Title" />
          </div>
        </div>

        <div className="bg-white">
          <div className="flex items-center space-x-4 mb-5 pl-4 pt-5">
            <Image src="/images/user.png" alt="Profile Picture" width={118} height={118} className="rounded-full"/>
              <div className="col-span-2 flex justify-center">
                <div className=" pl-3 mt-5 p-1 bg-white grid grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <button className=" flex border-4 border-blue-900 text-semibold p-1 focus:outline-none focus:border-blue-1000 justify-center rounded" style={{ width: "470px", height: "45px", color: "#0D5AA1"}}>Change Picture</button>
                   </div>
 
                  <div className="flex flex-col">
                    <button className=" flex border-4 border-red-900 text-semibold p-1 focus:outline-none focus:border-red-1000 justify-center rounded" style={{ width: "470px", height: "45px", color: "#CC1307"}}>Delete Picture</button>
                  </div>

                  <div className="col-span-2 flex justify-center">
                    <p>Image must be 1200 x 1200, .png or .jpg</p>
                  </div>      
                </div>      
              </div>
          </div>
        </div>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
          <hr className="border-gray-400 mb-2" />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-900">First Name</label>
              <input type="text" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert First Name" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-900">Last Name</label>
              <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Last Name" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-900">Phone Number</label>
              <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Phone Number" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-900">Personal Email Address</label>
              <input type="email" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Email Address" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-900">NIK</label>
              <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert NIK" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-900">NIP</label>
              <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert NIP" />
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
          <hr className="border-gray-400 mb-2" />
  
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
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium text-gray-900">Street Address</label>
            <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Street Address" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
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

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Documents</h2>
          <hr className="border-gray-400 mb-2" />

          {["Kartu Tanda Pengenal (KTP)", "Nomor Pokok Wajib Pajak (NPWP)", "Employee Agreement Letter", "Certification (Optional)"].map((doc, index) => (
            <div key={index} className="mt-2 p-1 bg-white">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600">{doc}</label>
                <div className="relative flex justify-between items-center border border-gray-400 p-2 rounded cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    id={`file-input-${index}`}
                  />
                  <p className="m-0">Format File must be in .pdf</p>
                  <label
                    className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    Upload Document
                  </label>
                </div>
              </div>
            </div>
          ))}
        </section>


        <section className="mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Create Email Office</label>
              <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Email Office" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Temporary Password</label>
              <input className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500" placeholder="Insert Password" />
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">User Access</h2>
          <hr className="border-gray-400 mb-2" />
          
          <div className="flex flex-col p-1">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex items-center space-x-2 border border-gray-400 p-3 rounded focus:outline-none focus:border-blue-500">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="text-gray-700 text-sm font-medium">BRILIST</span>
              </label>
              <label className="flex items-center space-x-2 border border-gray-400 p-3 rounded focus:outline-none focus:border-blue-500">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="text-gray-700 text-sm font-medium">Sipatuh</span>
              </label>
              <label className="flex items-center space-x-2 border border-gray-400 p-3 rounded focus:outline-none focus:border-blue-500">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="text-gray-700 text-sm font-medium">E-RMS</span>
              </label>
              <label className="flex items-center space-x-2 border border-gray-400 p-3 rounded focus:outline-none focus:border-blue-500">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="text-gray-700 text-sm font-medium">RBA APU PPT</span>
              </label>
              <label className="flex items-center space-x-2 border border-gray-400 p-3 rounded focus:outline-none focus:border-blue-500">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="text-gray-700 text-sm font-medium">SPAMI</span>
              </label>
              <label className="flex items-center space-x-2 border border-gray-400 p-3 rounded focus:outline-none focus:border-blue-500">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="text-gray-700 text-sm font-medium">Laporku</span>
              </label>
            </div>
          </div>
        </section>

        <div className="mt-6 flex flex-col gap-4">
          <button type="button" className="w-full rounded bg-[#0D5AA1] text-white py-2">Save Changes</button>
          <button type="button" className="w-full rounded border border-[#0D5AA1] text-[#0D5AA1] py-2">Reset Changes</button>
        </div>
      </div>
    </div>
  );
  };

export default PageCreateAccUser;
