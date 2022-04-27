import React, {Fragment, useEffect, useState} from "react";

const DispositionEquipe = () => {
    
    const [praticiens, setPraticiens] = useState([]);
    
    const getPraticiens = async() => {
        try{
            const response = await fetch('http://localhost:5000/praticiens')
            const data = await response.json()
            
            console.log(data);
            setPraticiens(data);
        }
        catch (err) {
            console.error(err.message())
        }
    };
    
    useEffect(() => {
        getPraticiens();
    }, []);
    
    return (
        <Fragment>
            {praticiens.map(praticien => (
                <div>
                
                    <div className="container my-5" 
                            style={{display:'flex',
                                position: 'relative',
                                backgroundColor : "#638899" ,    
                                justifyContent: 'left', 
                                alignItems: 'center',
                                height: '85px',
                                padding: '40px',
                                borderRadius: '20px'}}> {praticien.type + ' - Dr. ' + praticien.nom + ', ' + praticien.prenom} </div>
                    
                    <div className="container my-5" 
                        style={{display:'flex',
                                backgroundColor : "#d2e7e3" ,    
                                justifyContent: 'left', 
                                alignItems: 'center',
                                padding: '40px',
                                borderRadius: '20px'}}> {praticien.description} </div>
                    
                    </div>
                ))}
        </Fragment>
        
    );
}

export default DispositionEquipe;