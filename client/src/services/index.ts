export const login_user = async (formData: unknown) => {
    try {
        const res = await fetch('http://localhost:8000/api/login-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("🚀 ~ file: index.ts:14 ~ constlogin_user= ~ error:", error)
    }


}

export const register_user = async (formData: unknown) => {
    try {
        const res = await fetch('http://localhost:8000/api/register-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("🚀 ~ file: index.ts:33 ~ constregister_user= ~ error:", error)
    }
}


export const get_all_users = async (id: unknown , token  : string) => {
    console.log("🚀 ~ file: index.ts:39 ~ constget_all_users= ~ token:", token)
    try {
        const res = await fetch(`http://localhost:8000/api/get-all-users?id=${id}`, {
            method: 'GET',
            headers : {
                'authorization': `Bearer ${token}`
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("🚀 ~ file: index.ts:46 ~ constget_all_users= ~ error:", error)
    }
}


export const getChatData = async (data: any , token  : string) => {
    console.log("🚀 ~ file: index.ts:53 ~ getChatData ~ token:", token)
    const { senderId, receiverId } = data;
    try {
        const res = await fetch(`http://localhost:8000/api/get-user-chat?senderId=${senderId}&receiverId=${receiverId}`, {
            method: 'GET',
            headers : {
                'authorization': `Bearer ${token}`
            },
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("🚀 ~ file: index.ts:60 ~ getChatData ~ error:", error)
    }
}
export const getGroupChatData = async (data: any, token  : string) => {
    console.log("🚀 ~ file: index.ts:66 ~ getGroupChatData ~ token:", token)
    const { senderId, receiverId } = data;
    try {
        const res = await fetch(`http://localhost:8000/api/get-group-chat?senderId=${senderId}&receiverId=${receiverId}`, {
            method: 'GET',
            headers : {
                'authorization': `Bearer ${token}`
            },
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("🚀 ~ file: index.ts:72 ~ getGroupChatData ~ error:", error)
    }
}


export const send_message = async (formData: any , token  : string) => {
console.log("🚀 ~ file: index.ts:81 ~ constsend_message= ~ token:", token)

    try {
        const res = await fetch(`http://localhost:8000/api/send-user-message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("🚀 ~ file: index.ts:90 ~ constsend_message= ~ error:", error)
        console.log('Error at send message (services) : ', error.message);
    }
}



export const create_group  =  async (formData: any , token  : string) => {
    console.log("🚀 ~ file: index.ts:102 ~ constcreate_group= ~ token:", token)
    try {
        const res = await fetch(`http://localhost:8000/api/create-group`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData),
            
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("🚀 ~ file: index.ts:109 ~ constcreate_group= ~ error:", error)
    }
}


export const get_user_group  = async (id: any , token  : string) => {
    console.log("🚀 ~ file: index.ts:120 ~ constget_user_group= ~ token:", token)
    try {
        const res = await fetch(`http://localhost:8000/api/get-user-group?id=${id}`, {
            method: 'GET',
            headers : {
                'authorization': `Bearer ${token}`
            },
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log("🚀 ~ file: index.ts:122 ~ constget_user_group= ~ error:", error)
    }
}


export const send_group_message = async (formData: any , token  : string) => {
    console.log("🚀 ~ file: index.ts:134 ~ constsend_group_message= ~ token:", token)
    
        try {
            const res = await fetch(`http://localhost:8000/api/send-group-message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            return data;
        } catch (error: any) {
            console.log("🚀 ~ file: index.ts:140 ~ constsend_group_message= ~ error:", error)
        }
}