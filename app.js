const xlabel=[];
const ylabelJan=[];
const ylabelFeb=[];
const ylabelMar=[];
const ylabelApr=[];
const ylabelMay=[];
const ylabelJun=[];
const ylabelJul=[];
const ylabelAug=[];
const ylabelSep=[];
const ylabelOct=[];
const ylabelNov=[];
const ylabelDec=[];
chartIt();
getData();
async function getData(){
    const response=await fetch('./ZonAnn.Ts+dSST.csv');
    const data=await response.text();
    // console.log(data);

    //for printing row wise
    const table=data.split('\n').slice(1);
    // console.log(table)
    table.forEach(elt=>{
        const columns=elt.split(',');
        const year=columns[0];
        xlabel.push(year);
        const temp=columns[1];
        ylabelJan.push(parseFloat(temp) +14);
        const temp1=columns[2];
        ylabelFeb.push(parseFloat(temp1)+14);
        const temp2=columns[3];
        ylabelMar.push(parseFloat(temp2)+14);
        const temp3=columns[2];
        ylabelApr.push(parseFloat(temp3)+14);
        const temp4=columns[2];
        ylabelMay.push(parseFloat(temp4)+14);
        const temp5=columns[2];
        ylabelJun.push(parseFloat(temp5)+14);
        const temp6=columns[2];
        ylabelJul.push(parseFloat(temp6)+14);
        const temp7=columns[2];
        ylabelAug.push(parseFloat(temp7)+14);
        const temp8=columns[2];
        ylabelSep.push(parseFloat(temp8)+14);
        const temp9=columns[2];
        ylabelOct.push(parseFloat(temp9)+14);
        const temp10=columns[2];
        ylabelNov.push(parseFloat(temp10)+14);
        const temp11=columns[2];
        ylabelDec.push(parseFloat(temp11)+14);
    });
}
async function chartIt(){
    await getData();
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line', 
        data: {
            labels: xlabel,
            datasets: [{
                label: 'Jan',
                data: ylabelJan,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            },
            {
                label: 'Feb',
                data: ylabelFeb,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            },
            {
                label: 'March',
                data: ylabelMar,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            },
            {
                label: 'April',
                data: ylabelApr,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            },
            {
                label: 'May',
                data: ylabelMay,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            },
            {
                label: 'June',
                data: ylabelJun,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            },
            {
                label: 'July',
                data: ylabelJul,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            },
            {
                label: 'August',
                data: ylabelAug,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            },
            {
                label: 'September',
                data: ylabelSep,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            },
            {
                label: 'October',
                data: ylabelOct,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            },
            {
                label: 'November',
                data: ylabelNov,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            },
            {
                label: 'December',
                data: ylabelDec,
                fill:false,
                backgroundColor: [
                    ,
                ],
                borderColor: [
                    ,
                ],
                borderWidth: 1
            }
        ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        // beginAtZero: true
                        callback: function(value,index,values){
                            return value+"℃"
                        }
                    }
                }]
            }
        }
    });
}


