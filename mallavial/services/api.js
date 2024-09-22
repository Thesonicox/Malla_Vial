const API_URL = "http://localhost:4000"; 
export const fetchSegmentos = async() => {
  const response = await fetch(`${API_URL}/segmento`);
  if (!response.ok) throw new Error("Error fetching segmentos");
  return await response.json();
}

export const fetchSegmentoById = async (id) => {
  const response = await fetch(`${API_URL}/segmento/${id}`);
  if (!response.ok) throw new Error("Error fetching segmento");
  return await response.json();
};


export  const fetchCalzadaBySegmento = async (segmentoId) => {
  const response = await fetch(`${API_URL}/calzada/${segmentoId}`);
  if (!response.ok) throw new Error("Error fetching calzadas");
  return await response.json();
}

export  const fetchBordilloBySegmento = async(segmentoId) => {
  const response = await fetch(`${API_URL}/bordillo/${segmentoId}`);
  if (!response.ok) throw new Error("Error fetching bordillos");
  return await response.json();
}

export  const addSegmento = async (data) => {
  const response = await fetch(`${API_URL}/segmento`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Error adding segmento");
  return await response.json();
}

export  const deleteSegmento = async (id) =>{
  try {
    const response = await fetch(`${API_URL}/segmento/${id}`, {
      method: 'DELETE',
    });
    // if (!response.ok) throw new Error('Error al eliminar segmento');
    if (response.status === 204) {
      return; // El segmento se eliminó correctamente
    }
    if (!response.ok) {
      throw new Error('Error al eliminar segmento');
    }
      return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
  }
  

export  const updateSegmento = async (id, data) => {
  const response = await fetch(`${API_URL}/segmento/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al actualizar segmento');
  return await response.json();
}

export const updateCalzada = async (id, data) => {
  const response = await fetch(`http://localhost:4000/calzada/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar la calzada");
  }

  return await response.json();
};

export const updateBordillo = async (id, data) => {
  const response = await fetch(`http://localhost:4000/bordillo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar el bordillo");
  }

  return await response.json();
};


export const addCalzada = async (data) => {
  const response = await fetch(`${API_URL}/calzada`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al agregar calzada');
  return await response.json();
};

export const addBordillo = async (data) => {
  const response = await fetch(`${API_URL}/bordillo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al agregar bordillo');
  return await response.json();
};


