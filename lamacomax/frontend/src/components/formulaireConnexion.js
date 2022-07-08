import React from "react";

/** import {Button, ButtonGroup, Heading, Text, VStack} from "@chakra-ui/react";
import { formSchema } from "@whatsapp-clone/common";
import { Form, Formik } from "formik"; 
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AccountContext } from "../AccountContext";
import TextField from "./TextField"; **/

const FormulaireConnexion = () => {
    /** const { setUtilisateur } = useContext(AccountContext);
    const {error, setError } = useState(null);
    const navigate = useNavigate(); **/
    
    return (
       /** <Formik
            initialValues={{ loginIn: "", motdepasseIn:""}}
            validationSchema={formSchema}
            onClick={(values, action) => {
                const valeurs = {...values};
                action.resetFormulaire();
                fetch("https://localhost:8080/espacedoc", {method : 'POST',
                credentials: 'include', 
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify(valeurs)
            }).catch(err => {
            return;}).then(res => {
                if (!res || !res.ok ||res.status >= 400) { 
                    return;
                }
                return res.json();
                }).then(data => {
                    if(!data) return;
                    setUtilisateur({...data});
                    if(data.status) {
                        setError(data.status);
                    } else if (data.loggedIn) {
                        navigate("/home");
                    }
                });
            }}
            >
            
            <VStack
                as={Form}
                w={{ base: '90%', md: '500px'}}
                m='auto'
                justify='center'
                h='100vh'
                spacing='1rem'>
                
                    <Heading>Se Connecter</Heading>
                    <Text as='p' color='red.500'>
                        {error}
                    </Text>
                    <TextField name='loginIn' placeholder='Entrez votre login' autoComplete='off' label='Login' />
                    <TextField name='motdepasseIn' placeholder='Entrez votre mot de passe' autoComplete='off' label='Mot de passe' />
                    <ButtonGroup pt='1rem'>
                        <Button colorScheme="teal" type='submit'>
                            Se connecter
                        </Button>
                    </ButtonGroup>
            </VStack>
        </Formik> **/
       <div style={{
           letterSpacing: '5',
           overflow: 'auto',
           height: '50%',
           width: '25%',
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
        <h3 style={{fontSize: 'calc(1rem + 0.5vw", minWidth:"300px', color: 'white', fontWeight: 'bold'}}>Se connecter</h3>
           <div style={{marginTop: '5%'}}>
        <div className="mb-3">
          <label style={{fontSize: 'calc(1rem + 0.25vw", minWidth:"300px', color: 'white', marginLeft: '13%'}}>Identifiant</label>
          <input 
              type='text'
              className="form-control"
              placeholder="Entrez votre identifiant"
              style={{
                  margin: 'auto',
                  width: '75%'
            }}
          />
        </div>
        <div className="mb-3">
          <label style={{fontSize: 'calc(1rem + 0.25vw", minWidth:"300px', color: 'white', marginLeft: '13%'}}>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Entrez votre mot de passe"
            style={{
                width: '75%',
                margin: 'auto'
            }}
          />
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

export default FormulaireConnexion;