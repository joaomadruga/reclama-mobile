import api from "../api";

export async function getComplaint(CPF) {
    const response = await api.get(`/denuncia/search/${CPF}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
          },
    });
    if (response.status !== 200) throw new Error(response.status);
    
    return response;
}

export async function addComplaint(CPF, title, description, type, address) {
    const response = await api.post(`/denuncia/create`, {"cpf_usuario": CPF, "titulo": title, "descricao": description, "tipo": type, "endereco": address}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}

export async function insertCode(CPF, code) {
    const response = await api.post(`/denuncia/get/code/${CPF}`, {code}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
          },
    });
    if (response.status !== 200) throw new Error(response.status);
    
    return response;
}

export async function deleteCarpool(authToken, id) {
    const response = await api.delete(`/trip/delete/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}

export async function updatePassengerPayment(authToken, updateObj) {
    const response = await api.put(`/trip/passenger/payment/`, updateObj, {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authToken}`
        },
    });
    if (response.status !== 200) throw new Error(response.status);
    return response; 
}