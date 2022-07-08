import React from "react";

const FormulaireContact = () => {
    
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
                    // HORAIRES
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