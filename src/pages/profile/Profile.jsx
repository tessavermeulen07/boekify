import './Profile.css';
import Navigation from '../../navigation/Navigation.jsx';
import Block from '../../components/block/Block.jsx';
import {useEffect, useState, useContext} from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import axios from 'axios';


function Profile() {
    const [profileData, setProfileData] = useState({});
    const { user, isAuth } = useContext(AuthContext);

    useEffect(() => {

        async function fetchProfileData() {
            const token = localStorage.getItem('JWT');

            if (!user || !user.id)

            try {
                const resultUser = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${user.id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                        'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                    },
                });

                //TODO dit is nog hardcoded, hier moet ik nog naar kijken om het dynamisch te maken.
                const resultMember = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/0/members`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                        'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                    },
                })
                setProfileData({
                    user: resultUser.data,
                    member: resultMember.data
                });
                console.log(resultMember, resultUser);
            } catch (e) {
                console.error(e);
            }
        }

        void fetchProfileData();
    }, []);



    return (
        <>
            <Navigation/>

            <section className="main-container-profile">
                <h3>Profile</h3>
                <div className="information-container-profile">
                    <h4>Gegevens:</h4>
                    {/*TODO nog hardcoded daarom "Naam" en "Lid sinds" uitgezet*/}
                    {/*<p><strong>Naam:</strong> {profileData.member && profileData.member[0]?.name}</p>*/}
                    <p><strong>Email:</strong> {user.email}</p>
                    {/*<p><strong>Lid sinds:</strong> {profileData.member && new Date(profileData.member[0]?.joinDate).toLocaleDateString()}</p>*/}

                </div>
            </section>
        </>
    )
}

export default Profile;