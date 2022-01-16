import React, { useEffect, useState } from "react"; // we need this to make JSX compile
import "./CountDown.less";

import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import logo_serba from "../assets/images/logo_serba.jpeg";
import logo_jabar from "../assets/images/logo_jabar.jpeg";
import moment from "moment";
import "moment/locale/id";
import dataSiswa from "../assets/data.json";

type CountDownProps = {
    deadline: string;
    onItsTime: (itsTime: boolean) => any;
};

export const CountDown = ({ deadline, onItsTime }: CountDownProps) => {
    const [days, setdays] = useState(0);
    const [hours, sethours] = useState(0);
    const [minutes, setminutes] = useState(0);
    const [seconds, setseconds] = useState(0);
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = deadline;
    let countDown = new Date(birthday).getTime();
    let interval = null as any;
    useEffect(() => {
        interval = setInterval(() => {
            let now = new Date().getTime(),
                distance = countDown - now;

            setdays(Math.floor(distance / day));
            sethours(Math.floor((distance % day) / hour));
            setminutes(Math.floor((distance % hour) / minute));
            setseconds(Math.floor((distance % minute) / second));

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                // headline.innerText = "It's my birthday!";
                // countdown.style.display = "none";
                // content.style.display = "block";

                clearInterval(interval);
                onItsTime(true);
            }
            //seconds
        }, 0);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <div className="countdown-container">
                <div id="countdown">
                    <ul className="number-container">
                        <li>
                            <span id="days">{days}</span>days
                        </li>
                        <li>
                            <span id="hours">{hours}</span>Hours
                        </li>
                        <li>
                            <span id="minutes">{minutes}</span>Minutes
                        </li>
                        <li>
                            <span id="seconds">{seconds}</span>Seconds
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
