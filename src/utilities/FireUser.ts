import User from '../entities/User'

import { collection, query, getDocs } from "firebase/firestore"
import { db } from "../utilities/firebase"

export class FireUser {

    static async readUsers(): Promise<User[]> {
        // usersコレクション内のドキュメントを読み取り
        const q = query(collection(db, "users"))
        const querySnapshot = await getDocs(q)

        // 配列usersを作成
        let users: User[] = []
        querySnapshot.forEach((doc) => {
            const id = doc.id
            const displayName = doc.data().displayName
            const userName = doc.data().userName

            const user = { id: id, displayName: displayName, userName: userName}
            users.push(user)
        })
        
        return users
    }
}