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
                                color: '#FFFFFF',
                                backgroundColor : "#6C7D71" ,    
                                justifyContent: 'left', 
                                alignItems: 'center',
                                height: '65px',
                                padding: '15px',
                                boxShadow: '0px 0px 6px 0px #a5a5a5',
                                borderRadius: '1rem'}}> {praticien.type + ' - Dr. ' + praticien.nom + ', ' + praticien.prenom} </div>
                    
                    <div className="container my-5" 
                        style={{display:'flex',
                                backgroundColor : "#B4D1BD" ,    
                                justifyContent: 'left', 
                                alignItems: 'center',
                                boxShadow: '0px 0px 6px 0px #a5a5a5',
                                padding: '15px',
                                borderRadius: '1rem'}}> {praticien.description} </div>
                    
                    </div>
                ))}
        </Fragment>
        
    );
}

export default DispositionEquipe;