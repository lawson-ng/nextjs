import axios from 'axios'

const host = 'https://api.github.com'

export async function fetchMe(){
    const me = 'abrahamlawson'
    const url = `${host}/users/${me}`
    const response = await axios.get(url).then(res => res.data)
    return response
}