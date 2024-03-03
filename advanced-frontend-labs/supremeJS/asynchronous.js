class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        })
}

// Запрашивается логин, пока github не вернёт существующего пользователя.
function getGithubUser() {
    let name = prompt("Введите логин?", "iliakan");

    return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {
            alert(`Полное имя: ${user.name}.`);
            return user;
        })
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                return demoGithubUser();
            } else {
                throw err;
            }
        });
}


//getGithubUser();

//////////////////////////////// my code below this line

async function newGetGithubUser(){
    let conditionForLoop = false;
    while(!conditionForLoop){
        let name = prompt("Enter the login", "iliakan");
        try{
            var user = await loadJson(`https://api.github.com/users/${name}`)
            if(user){
                alert(`Полное имя: ${user.name}.`);
                conditionForLoop = true;
            }
        }
        catch (err) {
            if (err instanceof HttpError && err.response.status == 404){
                alert("This user does not exist, please re-enter the name.");
            }
            else throw err;
        }
    }
}

newGetGithubUser();