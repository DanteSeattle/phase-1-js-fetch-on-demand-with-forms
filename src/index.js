const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        input = e.target.children[1].value;
        id = e.target.children[0].value;
        console.log(input);

        fetch(`http://localhost:3000/movies/${input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });
};

document.addEventListener('DOMContentLoaded', init);