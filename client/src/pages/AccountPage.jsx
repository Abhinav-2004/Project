import { useContext, useState} from "react";
import {Link,Navigate} from "react-router-dom";
import { UserContext } from "../UserContext";
import {useParams} from "react-router-dom";
import axios from "axios";
export default function AccountPage() {
    const {ready,user,setUser}=useContext(UserContext);
    const[redirect, setRedirect]= useState(null);
    let {subpage} =useParams();
    console.log(subpage);
    if(subpage=== undefined){
        subpage='profile';
    }
    /*if (!ready){
        return 'Loading...';
    }*/

    if (ready && !user && !redirect){
        return <Navigate to={'/login'}/>
    }
    
    async function logout(){
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }
    
    function linkClasses(type=null){
        let classes='py-2 px-6';
        if(type ===subpage){
            classes+=' bg-primary rounded-full text-white';
        }
        return classes;
    }

    if(redirect){
        return <Navigate to ={redirect}/>
    }
    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2 ">
                <Link className = {linkClasses('profile')} to = {'/account/profile'}>My Profile</Link>
                
                <Link className = {linkClasses('bookings')} to = {'/account/bookings'}>My Bookings</Link>
                
                <Link className = {linkClasses('places')} to = {'/account/places'}>My Accomodations</Link>
            </nav>
            {subpage ==='profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})<br/>
                    <button onClick ={logout}className="primary  max-w-sm mt-2">Logout</button>
                </div>
            )}
        </div>
    );
}