export class UserService {
  _usersResouceUrl = "http://77.120.241.80:8911/api/users";
  _userResouceUrl = "http://77.120.241.80:8911/api/user";

  getUsers = async () => {
    const res = await fetch(this._usersResouceUrl);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._usersResouceUrl}, received ${res.status}`
      );
    }

    return await res.json();
  };

  create = async (user) => {
    const res = await fetch(this._usersResouceUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._usersResouceUrl}, received ${res.status}`
      );
    }

    return await res.json();
  };

  delete = async (id) => {
    const url = `${this._userResouceUrl}/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  update = async (user) => {
    const url = `${this._userResouceUrl}/${user.id}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };
}
