import React from 'react'

const Users = ({loading,users}) => {
    const mainstyle={display:'grid',
    gridTemplateColumns: 'repeat('+3+','+ 1+'fr)',};
    return loading ? (   
        <div id="main" align="center">
            <img src="https://cdn.dribbble.com/users/553759/screenshots/2340102/11_8---little-loader.gif" alt="Loading"  className="loader"/>
        </div>
        ) : 
        (
          <div id="main" style={mainstyle}>
    
          {users.map(user =>
                      <div className="user_profile" key={user.id}>
                        {
                          console.log(user)
                        }
                        
                          <img src={user.avatar} alt={user.avatar} className="pic"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User ID: {user.id}</p>
                      </div>
            )
          }
          </div>
        )
}

export default Users;