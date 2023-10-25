import { db } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

function handler(req, res) {
    if(req.method === 'POST') {
        const userEmail = req.body.email;
        if(!userEmail || !userEmail.includes('@')) {
            res.status(404).json({ message: "User Email isn't valid"});
            return;
        }
        try {
            const docRef = addDoc(collection(db, 'newsletter'), {
                email: userEmail
            });
            console.log('Document written width ID: ', docRef.id);
            res.status(201).json({ message: "User email save successfully."});
            return;
        }catch (err) {
            console.log(`Error adding document ${err}`);
            res.status(500).json({ message: `Error adding document ${err}`});
            return;
        }
        
    }
}

export default handler;