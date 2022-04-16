import React from "react";
import {useState} from "react";
import axios from "axios";

export const UserRepository = ({user}) => {
    
    
    const [users, setUser] = useState([]);
    

    React.useEffect(() => {
        const fetchData = async () =>{
            const response = await axios.get("http://localhost:8080/api/react/student/v1/get");
            setUser(response.data);
        }
        fetchData();
    }, []);

/*
    function deleteUser(id){
        const del = async () =>{
            path = "http://localhost:8080/api/react/student/v1/delete?id=";
            path.append(id);
            const response = await axios.delete(path);
            console.log(response);
        }
    }
    */

    



    return(<div>
                { users.map(user => 
                    <div>
                        <div key = {user.id}>{user.id}</div>
                        <div key = {user.name}>{user.name}</div>
                        <div key = {user.lastname}>{user.lastname}</div>

                        
                    </div>
                    )}
                    
            </div>)


}