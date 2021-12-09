const BASE_URL = 'http://127.0.0.1:3030';

const postRecipe = async (data) => {
    let response = undefined;
    try {
        response = await fetch(BASE_URL + '/recipe', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    } finally {
        return response;
    }
}

export default { postRecipe };