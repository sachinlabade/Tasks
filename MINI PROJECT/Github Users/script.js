fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    document.getElementById("image1").setAttribute("src", data[0].avatar_url)
    document.getElementById("username1").innerHTML = data[0].login
    document.getElementById("visitprofile1").setAttribute("href" ,data[0].html_url)
    // console.log(data[0].html_url)
    document.getElementById("image1.1").setAttribute("src", data[18].avatar_url)
    document.getElementById("username1.1").innerHTML = data[18].login
    document.getElementById("visitprofile1.1").setAttribute("href" ,data[18].html_url)

    document.getElementById("image2").setAttribute("src", data[17].avatar_url)
    document.getElementById("username2").innerHTML = data[17].login
    document.getElementById("visitprofile2").setAttribute("href" ,data[17].html_url)

    document.getElementById("image3").setAttribute("src", data[3].avatar_url)
    document.getElementById("username3").innerHTML = data[3].login
    document.getElementById("visitprofile3").setAttribute("href" ,data[3].html_url)

    document.getElementById("image4").setAttribute("src", data[4].avatar_url)
    document.getElementById("username4").innerHTML = data[4].login
    document.getElementById("visitprofile4").setAttribute("href" ,data[4].html_url)

    document.getElementById("image5").setAttribute("src", data[5].avatar_url)
    document.getElementById("username5").innerHTML = data[5].login
    document.getElementById("visitprofile5").setAttribute("href" ,data[5].html_url)

    document.getElementById("image6").setAttribute("src", data[6].avatar_url)
    document.getElementById("username6").innerHTML = data[6].login
    document.getElementById("visitprofile6").setAttribute("href" ,data[6].html_url)

    document.getElementById("image7").setAttribute("src", data[7].avatar_url)
    document.getElementById("username7").innerHTML = data[7].login
    document.getElementById("visitprofile7").setAttribute("href" ,data[7].html_url)

    document.getElementById("image8").setAttribute("src", data[8].avatar_url)
    document.getElementById("username8").innerHTML = data[8].login
    document.getElementById("visitprofile8").setAttribute("href" ,data[8].html_url)

    document.getElementById("image9").setAttribute("src", data[9].avatar_url)
    document.getElementById("username9").innerHTML = data[9].login
    document.getElementById("visitprofile9").setAttribute("href" ,data[9].html_url)

    document.getElementById("image10").setAttribute("src", data[10].avatar_url)
    document.getElementById("username10").innerHTML = data[10].login
    document.getElementById("visitprofile10").setAttribute("href" ,data[10].html_url)

    document.getElementById("image11").setAttribute("src", data[11].avatar_url)
    document.getElementById("username11").innerHTML = data[11].login
    document.getElementById("visitprofile11").setAttribute("href" ,data[11].html_url)

    document.getElementById("image12").setAttribute("src", data[12].avatar_url)
    document.getElementById("username12").innerHTML = data[12].login
    document.getElementById("visitprofile12").setAttribute("href" ,data[12].html_url)

    document.getElementById("image13").setAttribute("src", data[13].avatar_url)
    document.getElementById("username13").innerHTML = data[13].login
    document.getElementById("visitprofile13").setAttribute("href" ,data[13].html_url)

    document.getElementById("image14").setAttribute("src", data[14].avatar_url)
    document.getElementById("username14").innerHTML = data[14].login
    document.getElementById("visitprofile14").setAttribute("href" ,data[14].html_url)

    document.getElementById("image15").setAttribute("src", data[15].avatar_url)
    document.getElementById("username15").innerHTML = data[15].login
    document.getElementById("visitprofile15").setAttribute("href" ,data[15].html_url)
})
.catch((err)=>console.error(err));