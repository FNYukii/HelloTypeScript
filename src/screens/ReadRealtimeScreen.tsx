import { useEffect, useState } from 'react'
import User from '../entities/User'
import progressView from '../images/progressView.svg'

import { collection, query, onSnapshot } from "firebase/firestore"
import { db } from "../utilities/firebase"

function ReadRealtimeScreen() {

    // States
    const [users, setUsers] = useState<User[]>([])
    const [isLoaded, setIsloaded] = useState(false)

    useEffect(() => {
        // クエリを作成
        const q = query(collection(db, "users"));

        // スナップショットリスナー実行
        const unsub = onSnapshot(q, (querySnapshot) => {
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
        })

        // アンマウント時にスナップショットリスナーを停止
        return unsub
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