
export const getVideogames = () => {
  return fetch(
    `/api/videogame/videogames`,
    {
      method: 'GET'
    }
  )
    .then(response =>{ 
      console.log(response)
      return response.json()
    })
    .catch(err => console.log(err))
}


export const read = (videogameId) => {
  return fetch(`/api/videogame/${videogameId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
} 

export const signin = user => {
  return fetch(`/api/auth/signin`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user) // user: 
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const signup = user => {
  return fetch(`/api/auth/signup`, { 
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const authenticate = (data, next) => {
  if(typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
}

export const isAuthenticated = () => {
  if(typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
    //return localStorage.getItem('jwt')
  }
    return false;
}


export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    next();
    return fetch(`/api/auth/signout`, {
      method: 'GET',
    })
      .then(response => {
          console.log('signout',response);
      })
      .catch( err => console.log(err));
  }
}

export const createCategory = ( userId, token, category) => {
  return fetch(`/api/category/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}

export const getCategories = () => {
  return fetch(`/api/category/categories`, {
    method: 'GET'
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}

export const createVideogame = (userId, token, videogame) => {
  return fetch(`/api/videogame/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: videogame
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
} 
