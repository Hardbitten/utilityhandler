
// return True if Object is Empty
module.exports.isEmpty = function(value) {
    try {
        return (
            value == null ||
             value == undefined ||
              Object.keys(value).length == 0 ||
              value == ""
              );
    } catch (e) {
        throw e;
    }
}

// Generate UniqueCode numeric and alphabet [ Default Length is 6 ]
module.exports.generateUniqueCode = async (length = 6) => {
    let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "code";
            for (var i = 0; i < length; i++)
                code += data.charAt(Math.floor(Math.random() * data.length))

        return await code;
}

// Generate Verify Code for login
module.exports.generateVerifyCode = async () => {
    return await Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
}

// Shuffle the array param
module.exports.shuffle = (arra1) => {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}


module.exports.addDays = async (date, delimiter, days) => {
    let tmp = date.split(delimiter);
    let year = tmp[0]
    let month = tmp[1]
    let day = tmp[2]
    let dayOfYear = 0
    let newYear = year
    let newMonth = month
    let newDay = day
    let myTmp, newDate
    if (month <= 6) {
        dayOfYear = parseInt((month - 1) * 31) + parseInt(day);
    } else {
        dayOfYear = parseInt(6 * 31) + parseInt((month - 7) * 30) + parseInt(day);
    }
    let newDayOfYear = dayOfYear + days;
    if (newDayOfYear > 365) {
        newYear = parseInt(year) + parseInt(newDayOfYear / 365);
    }
    let myDays = newDayOfYear - (newYear - year) * 365; //شماره روز سال پس از اضافه کردن تعداد روزها
    if (myDays >= (31 * 6)) {
        myTmp = myDays - (31 * 6) //تعداد روزهای پس از شهریور
        if (myTmp > 30) {
            myTmp = parseInt(myTmp / 30) //تعداد ماه های بعد از شهریور
        } else { //اگر در ماه مهر قرار داشت
            myTmp = 0;
        }
        newMonth = 7 + myTmp //محاسبه ماه جدید
        newDay = myDays - (31 * 6) - myTmp * 30 //محاسبه روز جدید
    } else {
        if (myDays == 31) {
            newMonth = parseInt(myDays / 31)
        } else {
            newMonth = parseInt(myDays / 31) + 1
        }
        newDay = myDays - (newMonth - 1) * 31
    }
    newDate = newYear.toString() + "/" + newMonth.toString() + "/" + newDay.toString()
    return await newDate;
}

module.exports.diffDays = async (date1, date2, delimiter = '/') => {
    let tmp = date1.split(delimiter);
    let year1 = tmp[0]
    let month1 = tmp[1]
    let day1 = tmp[2]
    tmp = date2.split(delimiter);
    let year2 = tmp[0]
    let month2 = tmp[1]
    let day2 = tmp[2]
    let dayOfYear1, dayOfYear2
    if (month1 <= 6) {
        dayOfYear1 = parseInt(year1 * 365) + parseInt((month1 - 1) * 31) + parseInt(day1);
    } else {
        dayOfYear1 = parseInt(year1 * 365) + parseInt(6 * 31) + parseInt((month1 - 7) * 30) + parseInt(day1);
    }

    if (month2 <= 6) {
        dayOfYear2 = parseInt(year2 * 365) + parseInt((month2 - 1) * 31) + parseInt(day2);
    } else {
        dayOfYear2 = parseInt(year2 * 365) + parseInt(6 * 31) + parseInt((month2 - 7) * 30) + parseInt(day2);
    }
    return await(dayOfYear2 - dayOfYear1)
}

module.exports.InitInt = (x) => {
    if(parseInt(x) < 10)
        x = '0' + x;
    return x;
}

module.exports.difference = function (a, b) { return Math.abs(a - b); }