import Reac, { useEffect, useState } from 'react';
import './ChallengeTaskHeader.scss'; // We'll add styles here
import { getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';

const ChallengeTaskHeader = () => {

    const { challengeId } = useParams()

    const [challengeData, setChallengeData] = useState(null);

    useEffect(() => {
        async function getChallengeData() {

            const docRef = doc(db, "Challenges", challengeId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data()
                setChallengeData(data);
            }
        }

        getChallengeData()
    }, [challengeId])

    if (!challengeData){
        return (
            <div>loading...</div>
        )
    }


    return (
        <div className="header-container">
            <div className="header-content">
                <h1 className="header-title">{challengeData.task}</h1>
                <p className="header-description">
                    {challengeData.detailedProblem.description}
                </p>
            </div>
        </div>
    );
}

export default ChallengeTaskHeader;
