import { useEffect, useState } from 'react'
import User from '../entities/User'

import progressView from '../images/progressView.svg'

import { FireUser } from '../utilities/FireUser'

import styled from 'styled-components'


function ReadScreen() {

    // Styles
    const LargeContainer = styled.div`
        width: 1100px;
        margin: 0 auto;
        padding-top: 16px;
        @media(max-width: 1100px) {
            width: 100%;
            padding-left: 16px;
            padding-right: 16px;
        }
    `

    const UsersCardContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
    `

    const UserCard = styled.div`
        border: 1px solid black;
        padding: 16px;
        margin-right: 8px;
        margin-bottom: 8px;
        cursor: pointer;
        &:hover {
            opacity: 0.4;
        }
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
            <LargeContainer>
                <h2>Read</h2>

                {!isLoaded &&
                    <img src={progressView} alt='Progress View' />
                }

                {isLoaded &&
                    <UsersCardContainer>
                        {users.map((user) => (
                            <UserCard key={user.id}>
                                <p>{user.displayName}</p>
                            </UserCard>
                        ))}
                    </UsersCardContainer>
                }
            </LargeContainer>
        </main>
    )
}

export default ReadScreen