import React from "react";
import Image from "next/image";

const EditProfile = () => {
  return (
    <div className="flex-1">
      <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Edit Profile</h2>
      </div>

      <div className="flex justify-center mt-2 p-4 border border-gray-300 shadow-lg bg-white rounded-md">
        <div className="mt-4 p-3 bg-white" style={{ width: "1000px", backgroundColor: "#FFFFFF"}}>
          <div className="bg-white mt-3 p-2 ">
            <h2 className="text-xl font-semibold mb-2">Profile Picture</h2>
            <hr className="border-gray-400 my-1" /> 
          </div>

            <div className="bg-white">
              <div className="flex items-center space-x-4 mb-5 pl-4 pt-5">
                <Image src="/images/user.png" alt="Profile Picture" width={118} height={188} className="rounded-full"/>
                <div className="col-span-2 flex justify-center">
                  <div className=" pl-6 mt-6 p-1 bg-white grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <div className=" flex border border-blue-900 p-2 focus:outline-none focus:border-blue-1000 justify-center rounded" style={{ width: "390px", height: "40px", color: "#0D5AA1"}}>Change Picture</div>
                    </div>
 
                    <div className="flex flex-col">
                      <div className=" flex border border-red-900 p-2 focus:outline-none focus:border-red-1000 justify-center rounded" style={{ width: "390px", height: "40px", color: "#CC1307"}}>Delete Picture</div>
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
                <input type="text" id="firstname" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Last Name</label>
                <input type="text" id="lastname" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>
            </div>

            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Phone Number</label>
                <input type="text" id="phonenumber" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Office Email</label>
                <input type="text" id="officeemail" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>
            </div>

            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Personal Email Address</label>
                <input type="text" id="personalemailaddress" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>
 
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">NIK</label>
                <input type="text" id="nik" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">NIP</label>
                <input type="text" id="nip" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>
            </div>
          </div>

          <div className="bg-white mt-3 p-2 ">
            <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
            <hr className="border-gray-400 my-1" /> 

            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Gender</label>
                <select id="gender" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-gray-400">
                  <option value=" "></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Date of Birth</label>
                <input type="date" id="dateofbirth" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>
            </div>

            <div className="mt-2 p-1 bg-white rounded">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Street Address</label>
                <input type="text" id="streetaddress" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div> 
            </div>

            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">City</label>
                <input type="text" id="city" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Province</label>
                <input type="text" id="province" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>
            </div>

            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Postal Code</label>
                <input type="text" id="postalcode" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Country</label>
                <input type="text" id="country" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>
            </div>
          </div>

          <div className="bg-white mt-3 p-2 ">
            <h2 className="text-xl font-semibold mb-2">Documents</h2>
            <hr className="border-gray-400 my-1" /> 

            <div className="mt-2 p-1 bg-white rounded">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600">Kartu Tanda Pengenal (KTP)</label>
                  <div type="text" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
                    <p>Format File must in .pdf
                    <button type="button" className="w-full rounded text-white" style={{ backgroundColor: "#0D5AA1", width: "145px", height: "35px"}}>Upload Document</button></p>
                  </div> 
              </div> 
            </div>

            <div className="mt-2 p-1 bg-white rounded">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600">Nomor Pokok Wajib Pajak (NPWP)</label>
                <div type="text" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
                <p>Format File must in .pdf
                <button type="button" className="w-full rounded text-white" style={{ backgroundColor: "#0D5AA1", width: "145px", height: "35px"}}>Upload Document</button></p>
                </div>
              </div> 
            </div>

            <div className="mt-2 p-1 bg-white rounded">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600">Emplyoyee Agreement Letter</label>
                <div type="text" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
                <p>Format File must in .pdf
                <button type="button" className="w-full rounded text-white" style={{ backgroundColor: "#0D5AA1", width: "145px", height: "35px"}}>Upload Document</button></p>
                </div>
              </div> 
            </div>

            <div className="mt-2 p-1 bg-white rounded">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600">Certification (Optional)</label>
                <div type="text" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500">
                <p >Format File must in .pdf
                <button type="button" className="w-full rounded text-white" style={{ backgroundColor: "#0D5AA1", width: "145px", height: "35px"}}>Upload Document</button></p>
                </div>
              </div> 
            </div>
          </div>

          <div className="bg-white mt-3 p-2 ">
            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Account Type</label>
                <input type="text" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Division</label>
                <input type="text" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>

              <div className="flex flex-col justify-content: flex-end">
                <label className="text-sm font-medium text-gray-700">Department</label>
                <input type="text" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>
            </div>
          </div>

          <div className="bg-white mt-3 p-2 ">
            <div className="mt-2 p-1 bg-white rounded grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-900">Username</label>
                <input type="text" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Change Password</label>
                <input type="text" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Confirm Change Password</label>
                <input type="text" className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500"/>
              </div>
            </div>
          </div>

          <div className="bg-white mt-3 p-2 ">
            <h2 className="text-xl font-semibold mb-2">UserACC</h2>
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
    </div>
  );
};



export default EditProfile;