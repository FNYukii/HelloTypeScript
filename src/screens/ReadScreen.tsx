import { useEffect, useState } from 'react'
import User from '../entities/User'

import progressView from '../images/progressView.svg'

import { FireUser } from '../utilities/FireUser'

function ReadScreen() {

    // States
    const [users, setUsers] = useState<User[]>([])
    const [isLoaded, setIsloaded] = useState(false)

    async function readUsers() {
        // usersを読み取り
        let users = await FireUser.readUsers()

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
                    <img src={progressView} alt='Progress View'/>
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