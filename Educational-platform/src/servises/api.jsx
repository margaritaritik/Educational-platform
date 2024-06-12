export const BASE_URL='http://localhost:8082';


const errorHandler = async (response) => {
    if (response.status !== 200) {
        const responseData = await response.json();
        throw Error(responseData.message);
    }
};

export const API = {
    auth: {
        login: async (data) => {
            const response = await fetch(`${BASE_URL}/user/`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            await errorHandler(response);
            return await response.json();
        },
        logout: async () => {
            const response = await fetch(`${BASE_URL}/user/`, {
                method: "DELETE",
                credentials: "include",
            });
            await errorHandler(response);
        },
    },
    user: {
        register: async (data) => {
            const response = await fetch(`${BASE_URL}/user/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            await errorHandler(response);
            return await response.json();
        },
        getCurrentUser: async () => {
            
            const response = await fetch(`${BASE_URL}/group`, {
                method: 'GET', 
                headers: { 
                  'Content-Type': 'application/json' 
                } 
            });
            await errorHandler(response);
            return await response.json();
        },
       
    },
};