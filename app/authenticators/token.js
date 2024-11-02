import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(data) {
    return Promise.resolve(data);
  },

  async authenticate(username, password) {
    const apiUrl = 'http://localhost:3001/api/v1/login';

    const reqBody = JSON.stringify({
      user: {
        email: username,
        password: password,
      },
    });

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: reqBody,
    });

    if (response.ok) {
      const token = response.headers.get('Authorization');
      const responseData = await response.json();
      return Promise.resolve({
        token,
        responseData,
      });
    } else {
      let error = await response.text();
      return Promise.reject(error);
    }
  },

  invalidate(data) {
    return Promise.resolve(null);
  },
});
