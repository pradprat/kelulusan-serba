import React, { useEffect, useState } from "react"; // we need this to make JSX compile
import "./Login.less";

import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import logo_serba from "../assets/images/logo_serba.jpeg";
import logo_jabar from "../assets/images/logo_jabar.jpeg";
import moment from "moment";
import "moment/locale/id";
import dataSiswa from "../assets/data kelulusan.json";
import { CountDown } from "./CountDown";
type LoginProps = { onLoginSuccess: (nisn: string) => any };

export const Login = ({ onLoginSuccess }: LoginProps) => {
    const [itsTime, setitsTime] = useState(false);
    const [siswa, setsiswa] = useState(undefined);
    useEffect(() => {
        moment.locale("id");
        console.log(moment().format("MMMM Do YYYY"));

        return () => {};
    }, []);
    const onFinish = (data: any) => {
        let siswa: any = dataSiswa.find(d => {
            return d.NISN === data.NISN;
        });
        if (siswa === undefined) {
            message.error("Data Siswa Tidak Ditemukan");
        } else {
            setsiswa(siswa);
            // message.success("Login Berhasil");
            onLoginSuccess(siswa);
            // if (moment(siswa["Tanggal Lahir"]).format("DDMMYYYY") === data.password) {
            // } else {
            //     message.error("Password Salah");
            // }
        }
    };
    return (
        <>
            <div className="login-container">
                <div className="logo-container">
                    <img height={80} style={{ margin: "4px 16px" }} src={logo_serba} alt="" />
                    <img height={80} style={{ margin: "4px 16px" }} src={logo_jabar} alt="" />
                </div>
                <h1>SMAN 1 SERANG BARU</h1>
                <h2>KELULUSAN</h2>
                {(!itsTime && (
                    <CountDown
                        deadline={"May 3, 2021 09:00:00"}
                        onItsTime={itsTime => {
                            setitsTime(itsTime);
                        }}
                    ></CountDown>
                )) || (
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="NISN"
                            rules={[
                                {
                                    required: true,
                                    message: "Tidak Boleh Kosong",
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Masukan NISN atau Nomor Induk"
                            />
                        </Form.Item>
                        {/* <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Tanggal Lahir ex. 19052001"
                            />
                        </Form.Item> */}

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                )}
            </div>
        </>
    );
};
