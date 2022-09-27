import React, { useEffect, useState } from 'react'
import { db } from "../utilities/firebase"
import { collection, query, getDocs } from "firebase/firestore"


import User from '../entities/User'

function ReadScreen() {

    // States
    const [users, setUsers] = useState<User[]>([])

    async function read() {
        // Usersコレクション内のドキュメントを読み取り
        const q = query(collection(db, "users"))
        const querySnapshot = await getDocs(q)

        // 配列usersを作成
        let users: User[] = []
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data())

            const id = doc.id
            const displayName = doc.data().displayName
            const userName = doc.data().userName
            const newUser: User = {id: id, displayName: displayName, userName: userName}
            users.push(newUser)
        });

        // Stateに新しいusersを更新
        setUsers(users)
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