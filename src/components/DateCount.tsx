import React, { useEffect, useState } from 'react'

type OptionsType = {
    initialValue?: number;
    step?: number;
    min?: number,
    max?: number
}

const DateCount = () => {

    const expiredDay = 3 * 24 * 60 * 60 * 1000;

    const currentDate = new Date();

    const targetDate = new Date(currentDate.getTime() + expiredDay);

    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(calculateRemainingTime());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    function calculateRemainingTime() {
        const diff = targetDate.getTime() - new Date().getTime();

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }

    return (
        <div className="d-flex flex-wrap justify-content-center  justify-content-lg-start gap-2 text-center my-3">
            <div className="fd-bg-primary py-1 px-3 bg-black fw-bold">
                <span className="text-white">-{remainingTime.days}</span>
                <br />
                <span className="fd-color-primary">DAYS</span>
            </div>
            <div className="fd-bg-primary py-1 px-3 bg-black fw-bold">
                <span className="text-white">-{remainingTime.hours}</span>
                <br />
                <span className="fd-color-primary">HOURS</span>
            </div>
            <div className="fd-bg-primary py-1 px-3 bg-black fw-bold">
                <span className="text-white">-{remainingTime.minutes}</span>
                <br />
                <span className="fd-color-primary">MINUTES</span>
            </div>
            <div className="fd-bg-primary py-1 px-3 bg-black fw-bold">
                <span className="text-white">-{remainingTime.seconds}</span>
                <br />
                <span className="fd-color-primary">SEC</span>
            </div>
        </div>
    );
};

export default DateCount;