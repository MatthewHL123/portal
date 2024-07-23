import React from "react";

const PageUserManagement = () => {
    const data = [
        { Id: 376423, Display: 'Budi Setyawan', Email: 'budi@brilife.co.id', Divisi: 'Manajemen Risiko', JenisAkun: 'Karyawan', SyncType: '' },
        { Id: 376423, Display: 'Budi Setyawan', Email: 'budi@brilife.co.id', Divisi: 'Kepatuhan', JenisAkun: 'Karyawan', SyncType: '' },
        { Id: 376423, Display: 'Budi Setyawan', Email: 'budi@brilife.co.id', Divisi: 'Akuntansi dan Keuangan', JenisAkun: 'Magang', SyncType: '' },
        { Id: 376423, Display: 'Budi Setyawan', Email: 'budi@brilife.co.id', Divisi: 'Asuransi Jiwa Kredit', JenisAkun: 'Karyawan', SyncType: '' },
        { Id: 376423, Display: 'Budi Setyawan', Email: 'budi@brilife.co.id', Divisi: 'Teknologi Informasi', JenisAkun: 'Freelance', SyncType: '' },
        { Id: 376423, Display: 'Budi Setyawan', Email: 'budi@brilife.co.id', Divisi: 'Manajemen Risiko', JenisAkun: 'Karyawan', SyncType: '' },
        { Id: 376423, Display: 'Budi Setyawan', Email: 'budi@brilife.co.id', Divisi: 'Kepatuhan', JenisAkun: 'Karyawan', SyncType: '' },
        { Id: 376423, Display: 'Budi Setyawan', Email: 'budi@brilife.co.id', Divisi: 'Akuntansi dan Keuangan', JenisAkun: 'Magang', SyncType: '' },
        { Id: 376423, Display: 'Budi Setyawan', Email: 'budi@brilife.co.id', Divisi: 'Asuransi Jiwa Kredit', JenisAkun: 'Karyawan', SyncType: '' },
        { Id: 376423, Display: 'Budi Setyawan', Email: 'budi@brilife.co.id', Divisi: 'Teknologi Informasi', JenisAkun: 'Freelance', SyncType: '' },
      ];

    return (
        <div className="flex-1" style={{ width: "1250px", height: "56px" }}>
            <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
                <h2 className="font-semibold text-white">User Management</h2>
            </div>

            <div className="flex-1 mt-2 p-3 border border-gray-400 bg-white rounded">
                <div className="flex justify-center">
                    <div className="flex gap-3">
                        <button className="border border-gray bg-[#0D5AA1] p-2 justify-center rounded" style={{ width: "580px", height: "40px", color: "white" }}>Active User</button>
                        <button className="border border-[#F7A06C] bg-white p-2 justify-center rounded" style={{ width: "580px", height: "40px", color: "#F7A06C" }}>Inactive User</button>
                    </div>
                </div>

                <div className="flex justify-center p-3">
                    <div className="flex gap-3">
                        <input className="border border-gray-400 bg-white p-2 justify-center rounded" style={{ width: "536px", height: "40px" }} placeholder="Search (Username, Division, etc...)"></input>
                        <a href="/createuserpage" >
                        <button className="border border-gray-400 bg-white p-2 justify-center rounded" style={{ width: "280px", height: "40px" }}>Create User</button>
                        </a>
                        <select className="border border-gray-400 bg-white p-2 justify-center text-center rounded" style={{ width: "200px", height: "40px" }}>
                            <option value="" disabled selected>Select By</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <button className="border border-gray-400 bg-white p-2 justify-center rounded" style={{ width: "120px", height: "40px" }}>Refresh</button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <table className="border border border-gray-400 w-full max-w-[1175px] mx-auto">
                        <thead>
                            <tr>
                                <th className="border border-gray-400 p-2 text-center bg-[#0D5AA1] text-white">Id</th>
                                <th className="border border-gray-400 p-2 text-center bg-[#0D5AA1] text-white">Display Name</th>
                                <th className="border border-gray-400 p-2 text-center bg-[#0D5AA1] text-white">Email</th>
                                <th className="border border-gray-400 p-2 text-center bg-[#0D5AA1] text-white">Divisi</th>
                                <th className="border border-gray-400 p-2 text-center bg-[#0D5AA1] text-white">Jenis Akun</th>
                                <th className="border border-gray-400 p-2 text-center bg-[#0D5AA1] text-white">Sync Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                    <td className="p-2 text-center">{item.Id}</td>
                                    <td className="p-2 text-center">{item.Display}</td>
                                    <td className="p-2 text-center">{item.Email}</td>
                                    <td className="p-2 text-center">{item.Divisi}</td>
                                    <td className="p-2 text-center">{item.JenisAkun}</td>
                                    <td className="p-2 text-center">{item.SyncType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center">
                    <div className="flex gap-3 mt-3 p-5">
                        <button className="border border-gray-400 bg-white p-1 justify-item-center rounded" style={{ width: "35px", height: "35px" }}>1</button>
                        <button className="border border-gray-400 bg-white p-1 justify-item-center rounded" style={{ width: "35px", height: "35px" }}>2</button>
                        <p className="justify-center" style={{ fontSize: "30px" }}>...</p>
                        <button className="border border-gray-400 bg-white p-1 justify-item-center rounded" style={{ width: "35px", height: "35px" }}>9</button>
                        <button className="border border-gray-400 bg-white p-1 justify-item-center rounded" style={{ width: "35px", height: "35px" }}>10</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageUserManagement;