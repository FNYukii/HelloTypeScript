import { useEffect, useState } from 'react'
import User from '../entities/User'
import progressView from '../images/progressView.svg'

import { collection, query, onSnapshot } from "firebase/firestore"
import { db } from "../utilities/firebase"

function ReadRealtimeScreen() {

    // States
    const [users, setUsers] = useState<User[]>([])
    const [isLoaded, setIsloaded] = useState(false)

    async function readUsers() {
        // リアルタイムアップデート
        const q = query(collection(db, "users"));
        onSnapshot(q, (querySnapshot) => {
            // Users
            let users: User[] = []
            querySnapshot.forEach((doc) => {
                const id = doc.id
                const displayName = doc.data().displayName
                const userName = doc.data().userName

                const user = { id: id, displayName: displayName, userName: userName }
                users.push(user)
            })

            // Stateを更新
            setUsers(users)
            setIsloaded(true)
        });
    }

    useEffect(() => {
        readUsers()
    }, []);

    return (
        <main>
            <div className="large-container">
                <h2>Read Realtime</h2>

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

export default ReadRealtimeScreen