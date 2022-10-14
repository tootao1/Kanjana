document.addEventListener('DOMContentLoaded',function (){
    document.querySelector('form').onsubmit = function (){         
        const sensor = document.querySelector('#st_bib').value;   
        if(sensor == "flow"){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
            .then(response => response.json())
            .then(into => {
                console.log(into);
                const arpo = document.querySelector('#st_buil').value;
                    if(arpo == "0"){
                    const inname = into[0];
                        document.querySelector('#l').innerHTML =`sensor= ${inname.name}<br>Type= ${inname.type}<br> `;
                        document.querySelector('#o').innerHTML =`value =  ${inname.value} ${inname.unit}<br>rang= ${inname.range} `;
                        document.querySelector('#v').innerHTML =`plant-site  ${inname["plant-site"]}<br>`;                    
                    }
                    if(arpo == "1"){
                    const inname = into[1];
                    document.querySelector('#l').innerHTML =`sensor= ${inname.name}<br>Type= ${inname.type}<br> `;
                    document.querySelector('#o').innerHTML =`value =  ${inname.value} ${inname.unit}<br>rang= ${inname.range} `;
                    document.querySelector('#v').innerHTML =`plant-site = ${inname["plant-site"]}<br>`;
                    }
                    if(arpo == "2"){
                    const inname = into[2];
                    document.querySelector('#l').innerHTML =`sensor= ${inname.name}<br>Type= ${inname.type}<br> `;
                    document.querySelector('#o').innerHTML =`value =  ${inname.value} ${inname.unit}<br>rang= ${inname.range} `;
                    document.querySelector('#v').innerHTML =`plant-site= ${inname["plant-site"]}<br>`;                       
                    }                    
                })
        .catch(error => {
            console.log('Error:', error);
        });
        return false;
    }

    if(sensor == "level"){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
        .then(response => response.json())
        .then(into => {
            console.log(into);
            const arpo = document.querySelector('#st_buil').value;
                if(arpo == "0"){
                const inname = into[0];
                    document.querySelector('#l').innerHTML =`sensor= ${inname.name}<br>Type= ${inname.type}<br> `;
                    document.querySelector('#o').innerHTML =`value =  ${inname.value} ${inname.unit}<br>rang= ${inname.range} `;
                    document.querySelector('#v').innerHTML =`plant-site = ${inname["plant-site"]}<br>`;                    
                }
                if(arpo== "1"){
                const inname = into[1];
                document.querySelector('#l').innerHTML =`sensor= ${inname.name}<br>Type= ${inname.type}<br> `;
                document.querySelector('#o').innerHTML =`value =  ${inname.value} ${inname.unit}<br>rang= ${inname.range} `;
                document.querySelector('#v').innerHTML =`plant-site = ${inname["plant-site"]}<br>`;
                }
                if(arpo == "2"){
                const inname = into[2];
                document.querySelector('#l').innerHTML =`sensor= ${inname.name}<br>Type= ${inname.type}<br> `;
                document.querySelector('#o').innerHTML =`value =  ${inname.value} ${inname.unit}<br>rang= ${inname.range} `;
                document.querySelector('#v').innerHTML =`plant-site = ${inname["plant-site"]}<br>`;                       
                }                    
            })
    .catch(error => {
        console.log('Error:', error);
    });
    return false;
}
}});

