'use strict';
export const days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
]

export const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec"
]

export const getDate = function(dateUnix, timezone){
    const date = new Date((dateUnix + timezone) * 1000);
    const day = days[date.getUTCDay()];
    const month = months[date.getUTCMonth()];

    return `${day} ${date.getUTCDate()}, ${month}`
}

export const getTimes = function(timeUnix, timezone){
    const date = new Date((timeUnix + timezone) *1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >=12 ? 'PM' : 'AM';

    return `${hours % 12 || 12}:${minutes} ${period} `
}

export const mps_to_kmh = mps =>{
    const mph = mps * 3600;
    return mph / 1000
}

export const aqiText = {
    1: {
        level: "Good",
        message: 'Air quality is satisfactory, and air pollution poses little or no risk.',
    },
    2: {
        level: "Fair",
        message: 'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.',
    },
    3: {
        level: "Moderate",
        message: 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.',
    },
    4: {
        level: "Poor",
        message: 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.',
    },
    5: {
        level: "Very Poor",
        message: 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.',
    }
}