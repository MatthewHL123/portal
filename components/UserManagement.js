import React from 'react';

const UserManagement = () => {
  const data = [
    { Id: 1, Display: 'Budi Setyawan', Divisi: 'Manajemen Risiko', JenisAkun: 'Karyawan', SyncType: '' },
    { Id: 2, Display: 'Budi Setyawan', Divisi: 'Kepatuhan', JenisAkun: 'Karyawan', SyncType: '' },
    { Id: 3, Display: 'Budi Setyawan', Divisi: 'Akuntansi dan Keuangan', JenisAkun: 'Magang', SyncType: '' },
    { Id: 4, Display: 'Budi Setyawan', Divisi: 'Asuransi Jiwa Kredit', JenisAkun: 'Karyawan', SyncType: '' },
    { Id: 5, Display: 'Budi Setyawan', Divisi: 'Teknologi Informasi', JenisAkun: 'Freelance', SyncType: '' },
  ];

  return (
    <div className="w-[800px] h-[318px] border border-gray-400 bg-white rounded">
      <a href="/usermanagementpage">
      <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">User Management</h2>
          <button className="bg-[#F06E21] text-white px-2 py-1" style={{ width: "200px", height: "32px" }}>Show All</button>
      </div>
      </a>

      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-center bg-[#0D5AA1] text-white">Display Name</th>
            <th className="border border-gray-300 p-2 text-center bg-[#0D5AA1] text-white">Divisi</th>
            <th className="border border-gray-300 p-2 text-center bg-[#0D5AA1] text-white">Jenis Akun</th>
            <th className="border border-gray-300 p-2 text-center bg-[#0D5AA1] text-white">Sync Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="p-2 text-center">{item.Display}</td>
              <td className="p-2 text-center">{item.Divisi}</td>
              <td className="p-2 text-center">{item.JenisAkun}</td>
              <td className="p-2 text-center">{item.SyncType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
