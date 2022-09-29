import { useEffect, useState } from 'react'
import User from '../entities/User'

import progressView from '../images/progressView.svg'

import { FireUser } from '../utilities/FireUser'

import styled from 'styled-components'


function ReadScreen() {

    // Styles
    const DetailP = styled.p`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `

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

                <DetailP>hello world</DetailP>

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