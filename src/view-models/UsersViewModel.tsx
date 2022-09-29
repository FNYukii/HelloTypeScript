import { useEffect, useState } from 'react'
import User from '../entities/User'

import progressView from '../images/progressView.svg'

import { FireUser } from '../utilities/FireUser'

import { collection, query, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "../utilities/firebase"
