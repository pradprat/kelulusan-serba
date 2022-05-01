import { Descriptions } from "antd";
import React, { useEffect, useState } from "react"; // we need this to make JSX compile
import "./Lulus.less";
import dataSiswa from "../assets/data kelulusan.json";
type LulusProps = { siswa: any };

export const Lulus = ({ siswa }: LulusProps) => {
    // useEffect(() => {
    //     let siswa = dataSiswa.filter(d => {
    //         return String(d["NISN"]) === String(nisn);
    //     })[0];
    //     console.log(siswa);
    //     console.log(dataSiswa, nisn);

    //     setsiswa(siswa);
    //     return () => {};
    // }, [nisn]);
    return (
        <>
            <div className="lulus-container">
                <h2>PENGUMUMAN KELULUSAN SISWA SMAN 1 SERANG BARU</h2>
                <h3 style={{ textTransform: "capitalize" }}>
                    berdasarkan hasil rapat pleno kelulusan tanggal 02 Mei 2021
                </h3>
                <Descriptions bordered layout="horizontal">
                    <Descriptions.Item label="Nama Siswa" span={24}>
                        {siswa["Nama"]}
                    </Descriptions.Item>
                    <Descriptions.Item label="kelas" span={24}>
                        {siswa["kelas"]}
                    </Descriptions.Item>
                    <Descriptions.Item label="NISN" span={24}>
                        {siswa["NISN"]}
                    </Descriptions.Item>
                    <Descriptions.Item label="No Induk" span={24}>
                        {siswa["No Induk"]}
                    </Descriptions.Item>
                    <Descriptions.Item label="Tempat, Tanggal Lahir" span={24}>
                        {siswa["Tempat Lahir"]}, {siswa["Tanggal Lahir"]}
                    </Descriptions.Item>
                </Descriptions>
                <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
                    dinyatakan <strong>Lulus</strong>
                </h1>
                <p style={{ textAlign: "center", textTransform: "capitalize" }}>
                    surat kelulusan akan dibagikan saat pembagian raport sesuai dengan jadwal yang
                    telah ditentukan
                </p>
            </div>
        </>
    );
};
