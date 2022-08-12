document.querySelector('#BLOG').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();


    let url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`

    xhr.open('GET', url,true)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);

            let output = '';
            for(const element of response) {
                output += `
                    <div style="width: 300px; margin:20px;margin:0.5em;color:red;">
                        <p style="color: red">ID:${element.id}</p>
                        <p style="color: black">NAME:${element.name}</p>
                        <p style="color: black">USERNAME:${element.username}</p>
                        <p style="color: black">EMAIL:${element.email}</p>
                        ADDRESS
                        <p style="color: black">STREET:${element.address.street}</p>
                         <p style="color: black">SUITE:${element.address.suite}</p>
                          <p style="color: black">CITY:${element.address.city}</p>
                        <p style="color: black">ZIPCODE:${element.address.zipcode}</p>
                               <p style="color: black">LATITUDE:${element.address.geo.lat}</p>
 <p style="color: black">LONGITUDE:${element.address.geo.lng}</p>
                        <p style="color: black">PHONE:${element.phone}</p>
                        <p style="color: black">WEBSITE:${element.website}</p>
                        <p style="color: black">COMPANY-NAME:${element.company.name}</p>
                        <p style="color: black">CATCHPHRASE:${element.company.catchPhrase}</p>
                       <p style="color: black">BS:${element.company.bs}</p>
                    </div>
                `
            }

            document.querySelector('#bs').innerHTML = output
        }
    }

    xhr.send()
})