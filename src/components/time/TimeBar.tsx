import React, { useEffect, useState } from "react";

interface TimeBarProps {
    currentTime: string; // ISO string
}

const START_DATE = new Date("2002-07-10T00:00:00Z");

export const TimeBar: React.FC<TimeBarProps> = ({ currentTime }) => {
    const [isBlinking, setIsBlinking] = useState(true);

    // Calculate years elapsed
    const now = new Date(currentTime);
    const startYear = START_DATE.getUTCFullYear();
    const startMonth = START_DATE.getUTCMonth();
    const startDay = START_DATE.getUTCDate();

    let yearsElapsed = now.getUTCFullYear() - startYear;
    // If before July 10th this year, don't count this year as elapsed
    if (
        now.getUTCMonth() < startMonth ||
        (now.getUTCMonth() === startMonth && now.getUTCDate() < startDay)
    ) {
        yearsElapsed -= 1;
    }

    // Blink effect for the current year
    useEffect(() => {
        const interval = setInterval(() => setIsBlinking((b) => !b), 1800);
        return () => clearInterval(interval);
    }, []);

    // Render squares
    return (
        <div className="flex space-x-1 w-full mt-1">
        {/* Full years: hash color */}
        {Array.from({ length: yearsElapsed }, (_, i) => {
            const year = startYear + i - 1;
            const yearStr = year.toString();
            return (
                <div
                    key={i}
                    className="w-6 h-6 border border-gray-400 bg-[#000000] text-white text-xs text-center flex flex-col justify-center"
                >
                    {yearStr.slice(2)}
                </div>
            );
        })}
        {/* Current year: blinking hash color */}
        {(() => {
            const year = startYear + yearsElapsed + -1;
            const currentYearStr = year.toString();
            return (
            <div
                className="w-6 h-6 border border-[#FFFFFF] bg-[#000000] text-white text-xs text-center flex flex-col justify-center"
                style={{ backgroundColor: isBlinking ? '#FFFFFF' : '#000000' }}
            >
                {currentYearStr.slice(2)}
            </div>
            );
        })()}
        </div>
    );
};
