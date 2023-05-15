import axios from "../axios";

export const useEmployee = {
    create: (state) => axios.post("/staff/auth/signup", state),
    list: (num = 1) => axios.get(`/staff?page=${num}`, {
        headers: {
            "Authorization": `Bearer ${
                localStorage.getItem('token')
            }`
        }
    }),

    isactive: (state) => axios.post(`staff/activate`, state, {
        headers: {
            "Authorization": `Bearer ${
                localStorage.getItem('token')
            }`
        }
    }),

    delete: (id) => axios.delete(`/staff/${id}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}`}
    })
}
