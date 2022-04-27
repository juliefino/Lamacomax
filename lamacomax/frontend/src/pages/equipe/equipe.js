import React, {useEffect} from 'react';
import DispositionEquipe from "../../components/dispositionEquipe";

const Equipe = () => {
    
    /**useEffect (() => {
        getPraticiens();
    }, []);
    
    const getPraticiens = () => {
        fetch('/api/praticiens', {
            method : 'GET', 
            headers : {'Content-Type': 'application/json', 'Authorization': localStorage.getItem('access_token')},
            
        }).then(response => {
            return response.json();
        });
    }
    
    /* const getPraticiens = () => {
        let data = {
            method: 'GET', 
            headers: {'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem('access_token') },       
        };
        fetch('/api/equipe', data).then((response)) => {
            return response.json()
        }).then((response))
    }
    */
    return(
        <div>
            <DispositionEquipe/> 
        </div>
        
    )
}

export default Equipe;