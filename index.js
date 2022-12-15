fetch("http://localhost:3000/mechanic")
.then(res => res.json())
.then(function(mechanic){
    // console.log(mechanic)
    mechanic.map(function(mechanic){
        let locations = document.getElementById("list")
        let list = document.createElement("li")
        locations.appendChild(list)
        list.className = "lister"

        list.innerHTML = `${mechanic.location}`

        list.addEventListener("click", showMe)

        function showMe(e){
            const picture = document.getElementById("picture")
            let image = document.getElementById("image")
            let name = document.getElementById("name")
            let age = document.getElementById("age")
            let namee = document.getElementById("namee")
            let agee = document.getElementById("agee")
            let experience = document.getElementById("experience")
            let location = document.getElementById("place")
            let expertise = document.getElementById("expertise")
            let availability = document.getElementById("availability")
            let rating = document.getElementById("rating")
            let tell = document.getElementById("tell")


            image.src = mechanic.image
            name.textContent = mechanic.name
            age.textContent = mechanic.age
            namee.textContent = mechanic.name
            agee.textContent = mechanic.age
            experience.textContent = mechanic.experience
            location.textContent = mechanic.location
            expertise.textContent = mechanic.experties
            availability.textContent = mechanic.availability
            rating.textContent = mechanic.rating
            tell.textContent = mechanic.tel
        }

       
    })
    const input = document.querySelector(".input")
    let myDiv = document.getElementsByClassName("list")
    console.log(myDiv)
    

    input.addEventListener("keyup",filterInput)

    function filterInput(){
        let filterValue = input.value.toUpperCase()
        console.log(filterValue)
        let item = document.querySelectorAll(".lister").textContent
        console.log(item)

        // for(let i = 0; i<item.length; i++){
        //     let span = item[i].querySelector(".lister")
        //     console.log(span)


        //     if(span.innerHTML.toUpperCase().indexOf(filterValue)> -1){
        //         item[i].style.display = "initial"
        //     }
        //     else{
        //         item[i].style.display = "none"
        //     }
        // }

      


        


    }

    
   

   

        
    
})