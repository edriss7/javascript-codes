let populateDogs = async ()=> {
    try {
        //  getting list of all breeds of dogs
        let dogsList = await fetch("https://dog.ceo/api/breeds/list/all");
        let dogs = await dogsList.json();
        await Promise.all([Object.keys(dogs.message).forEach(dog=> populateDog(dog))]);
    } catch(err) {
        console.log(err);
    }
}

let populateDog = async (dog) =>{
    let li = document.createElement('li');
    let image = document.createElement("img");
    // getting random image of a given dog
    let src = await fetch(`https://dog.ceo/api/breed/${dog}/images/random`);
    src = await src.json();
    image.setAttribute("src", src.message);
    image.setAttribute("title", dog);
    image.style.width = "400px";
    image.style.height = "400px";
    image.classList.add("dog");
    li.setAttribute('value', dog);
    li.appendChild(image);
    document.querySelector('#dogs').appendChild(li);
}
populateDogs();

document.querySelector("#dogs").addEventListener('click', (ev)=>{
    if(ev.target.classList.contains("dog")) {
        //  this document get a list of images associated to a given dog
        fetch(`https://dog.ceo/api/breed/${ev.target.title}/images`).then(data => data.json()).then(dogImages => {
            document.querySelector('#dogs').innerHTML = "";
            let button = document.createElement('button');
            button.innerHTML = "Go Home";
            document.querySelector('#dogs').prepend(button);
            button.addEventListener( 'click', () => location.reload());
            let header = document.createElement('h1');
            document.querySelector('body').prepend(header);
            let title = ev.target.title;
            header.innerHTML = title.charAt(0).toUpperCase() + title.slice(1);
            dogImages.message.forEach(dogImage=> {
                let li = document.createElement('li');
                let image = document.createElement("img");
                image.setAttribute("src", dogImage);
                image.style.width = "400px";
                image.style.height = "400px";
                li.appendChild(image);
                document.querySelector('#dogs').appendChild(li);
            })
        })
    }
})
