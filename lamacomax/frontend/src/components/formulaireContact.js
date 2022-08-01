import React, {useEffect, useState} from "react";
import 'react-notifications/lib/notifications.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import {NotificationContainer, NotificationManager} from 'react-notifications';

const FormulaireContact = () => {
    
    // RECUPERATION HORAIRES CENTRE
    
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
    
    // MAIL FORMULAIRE
    
   const [status, setStatus] = useState("Envoyer mon message");
   const handleSubmit = async (e) => {
       e.preventDefault();
       setStatus("En cours d'envoi ...");
       const { nom, email, message } = e.target.elements;
        
       let details = {
           nom: nom.value,
           email: email.value,
           message: message.value,
       };
        
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
            "Content-Type": "application/json;charset=utf-8",
            }, 
            body: JSON.stringify(details),
        });
        
        setStatus("Envoyer");
        let result = await response.json();
        
        if (result.status === "Message Sent") {
            // NotificationManager.success('Votre message a bien été envoyé, nous vous recontacterons prochainement !')
            toast.success('Votre message a bien été envoyé, nous vous recontacterons prochainement ! ', {
                position: "bottom-right",
                autoClose: 4500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored"
            });
        } else {
            //NotificationManager.error("Une erreur s'est produite, veuillez réessayer");
            toast.error('Une erreur s\'est produite, veuillez réessayer', {
                position: "bottom-right",
                autoClose: 4500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored"
            });
        }
        
        // alert(result.status);
       
        console.log(typeof (result.status));
        console.log(result.status);
  };
    
    return (
        
       <div style={{
           letterSpacing: '5',
           overflow: 'auto',
           height: '50%',
           width: '45%',
           position: 'relative',
           margin: 'auto',
           marginTop: '7%',
           backgroundColor: '#94afd2',
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
                   <label style={{fontSize: '15px', color: 'white', marginLeft: '13%'}}>Numéro de téléphone : +3271******</label>
                   <label style={{fontSize: '15px', color: 'white', marginLeft: '13%'}}>Horaires : </label>
                   {/*
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Lundi : {horairescentre[0].lundi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Mardi : {horairescentre[0].mardi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Mercredi : {horairescentre[0].mercredi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Jeudi : {horairescentre[0].jeudi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Vendredi : {horairescentre[0].vendredi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Samedi : {horairescentre[0].samedi} </label>
                   <label style={{fontSize: '13px', color: 'white', marginLeft: '15%'}}>Dimanche : {horairescentre[0].dimanche} </label>
                   */}
               </div>
           </div>
        
      </form>
           <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="nom" style={{fontSize: '1.5rem', color: 'white', marginLeft: '13%'}}>Nom:</label>
        <input type="text" id="nom" required className="form-control"
            placeholder="Entrez votre nom"
            style={{
                fontSize:'1.3rem',
                width: '75%',
                margin: 'auto'
            }}/>
      </div>
      <div>
        <label htmlFor="email" style={{fontSize: '1.5rem', color: 'white', marginLeft: '13%'}}>Adresse email:</label>
        <input type="email" id="email" required  className="form-control"
            placeholder="Entrez votre adresse email"
            style={{
                fontSize:'1.3rem',
                width: '75%',
                margin: 'auto'
            }}/>
      </div>
      <div>
        <label htmlFor="message" style={{fontSize: '1.5rem', color: 'white', marginLeft: '13%'}}>Message:</label>
        <textarea id="message" required  className="form-control"
            placeholder="Ecrivez votre message ..."
            style={{
                fontSize:'1.3rem',
                width: '75%',
                margin: 'auto'
            }}/>
      </div>
      <button type="submit" style={{
              backgroundColor: '#5e87bb', 
              fontSize: '1.5rem',
              width: '40%',
              margin: 'auto',
              color: 'white',
              borderRadius : '1rem'
          }}>{status}</button>
    </form>
           <ToastContainer
                position="bottom-right"
                theme="colored"
                autoClose={4500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
           />
       </div>
    );
}

export default FormulaireContact;