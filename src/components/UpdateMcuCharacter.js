import axios from 'axios';
import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import { API_URL } from '../constants';

function UpdateMcuCharacter () {

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();


        let name = e.target.newName.value;
        let debut = e.target.debut.value ? e.target.debut.value : "";
        let debutYear = e.target.debutYear.value? e.target.debutYear.value : "";

        console.log("Update - name:"+name+", debut: " + debut + ", debutYear: " + debutYear);

        try {
                await axios.put(
                    API_URL+"/updateMcuCharacter",
                    {
                        name,
                        debut,
                        debutYear
                    }
                );


                alert("The character has been updated successfully.");

               
                navigate('/');

        }
        catch(e) {
                console.log("error:" + e);
                alert("Something went wrong, character not insterted: " + e);
        }


    }


    return ( 

        <form onSubmit={handleSubmit}>
            <label> Lets update MCU Hero. </label>
            Name:
            <input type="text" name="newName" />
            <br/>
            Debut:
            <input type="text" name="debut" />
            <br/>
            Debut Year:
            <input type="number" name="debutYear" />



            <button>Submit</button>
        </form>

     );
}

export default UpdateMcuCharacter ;