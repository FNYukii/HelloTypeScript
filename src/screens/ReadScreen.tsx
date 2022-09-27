import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import db from '../utilities/Firebase'

import User from '../Entities/User'

function ReadScreen() {

    const [users, setUsers] = useState<User[]>([
        { id: "ID1", displayName: "Ayaka", userName: "Ayaka1234" },
        { id: "ID2", displayName: "Haruto", userName: "Haru34" }
    ])

    return (
        <main>
            <div className="large-container">
                <h2>Read</h2>

                <div>
                    {users.map((user) => (
                        <div key={user.id}>
                            <p>{user.displayName}</p>
                            <p>{user.userName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default ReadScreen