import React, {useEffect, useState} from "react";

const FormulaireContact = () => {
    
    const [horairescentre, setHorairescentre] = useState([]);
    
    const getHorairescentre = async() => {
        try{
            const response = await fetch('http://localhost:5000/contact')
            const data = await response.json()
            
            console.log(data);
            setHorairescentre(data);
        }
        catch (err) {
            console.error(err.message())
        }
    };
    
    useEffect(() => {
        getHorairescentre();
    }, []);
    
    
    return (
       <div style={{
           letterSpacing: '5',
           overflow: 'auto',
           height: '50%',
           width: '50%',
           position: 'relative',
           margin: 'auto',
           marginTop: '10%',
           backgroundColor: '#B4D1BD',
           borderRadius: "1rem",
           textAlign: "left",
           justifyContent: 'center',
           alignItems: 'center', 
           boxShadow: '0px 0px 6px 0px #a5a5a5', 
           padding: '15px'
       }}>
       <form>
           <h2 style={{color: 'white', fontWeight: 'bold', marginTop:'5px', marginLeft:'25px'}}>Contactez-nous</h2> 
           <div style={{marginTop: '5%'}}>
               <div className="mb-3">
                   <label style={{fontSize: '15px', color: 'white', marginLeft: '13%'}}>Numéro de téléphone : +3271159369</label>
                   <label style={{fontSize: '15px', color: 'white', marginLeft: '13%'}}>Horaires : </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Lundi : {horairescentre[0].lundi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Mardi : {horairescentre[0].mardi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Mercredi : {horairescentre[0].mercredi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Jeudi : {horairescentre[0].jeudi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Vendredi : {horairescentre[0].vendredi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Samedi : {horairescentre[0].samedi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Dimanche : {horairescentre[0].dimanche} </label>
                   
               </div>
           </div>
           
        
           
           
          <button type="submit" style={{
              backgroundColor: '#6C7D71', 
              width: '40%',
              margin: 'auto',
              color: 'white',
              borderRadius : '1rem'
          }}>
            Se connecter
          </button>
        
      </form>
       </div>
    );
}

export default FormulaireContact;