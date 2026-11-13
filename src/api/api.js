import axios from "axios";

const base = axios.create({
    baseURL: 'https://jekwxfohagnknpkqdgdo.supabase.co',
    headers: {
        apiKey: 'sb_publishable_5H15oY-8n1QtXELqWorURg_FvFk-0Ha',
        'Content-Type': 'application/json'
    }
})

const api = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/rest/v1`
})

export default api;