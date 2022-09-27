import React, { useEffect, useState } from 'react'
import { db } from "../utilities/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";


import User from '../entities/User'

function ReadScreen() {

    // Users
    const [users, setUsers] = useState<User[]>([]);

    async function read() {
        // 読み取り
        const q = query(collection(db, "users"));
        const querySnapshot = await getDocs(q);

        // 配列newUsers
        let newUsers: User[] = []
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());

            const id = doc.id
            const displayName = doc.data().displayName
            const userName = doc.data().userName
            const newUser: User = {id: id, displayName: displayName, userName: userName}
            newUsers.push(newUser)
        });

        // Stateを更新
        setUsers(newUsers)
    }

    useEffect(() => {
        read()
    }, []);

    return (
        <main>
            <div className="large-container">
                <h2>Read</h2>

                <div>
                    {users.map((user) => (
                        <div key={user.id}>
                            <p>{user.displayName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default ReadScreen