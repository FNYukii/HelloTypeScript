import React, { useEffect, useState } from 'react'
import { collection, query, getDocs } from "firebase/firestore"

import { db } from "../utilities/firebase"
import User from '../entities/User'

import progressView from '../images/progressView.svg'

function ReadScreen() {

    // States
    const [users, setUsers] = useState<User[]>([])
    const [isLoaded, setIsloaded] = useState(false)

    async function readUsers() {
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
            const user: User = { id: id, displayName: displayName, userName: userName }
            users.push(user)
        });

        // Stateを更新
        setUsers(users)
        setIsloaded(true)
    }

    useEffect(() => {
        readUsers()
    }, []);

    return (
        <main>
            <div className="large-container">
                <h2>Read</h2>

                {!isLoaded &&
                    <img src={progressView} alt='Progress View' />
                }

                {isLoaded &&
                    <div className='users'>
                        {users.map((user) => (
                            <div key={user.id}>
                                <p>{user.displayName}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </main>
    )
}

export default ReadScreen