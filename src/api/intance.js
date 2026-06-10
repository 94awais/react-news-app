import axios from "axios"


const url="https://newsapi.org/v2/everything"

const intance=axios.create({

baseURL:url,

})

export default intance;