import React from 'react';
import './ReadMe.css';
import {Link} from 'react-router-dom';

const ReadMeScreen = () => {
    return (
        <>
<section className="privacy_body_section">
    <div className="privacy_container">
         <div className="privacy_section_heading">
             <h3>privacy</h3> 
       </div>
       <div className="privacy_section_contact_detail">
          <div className="privacy_section_contact_fields">
               <p className="privacy_red_color">Welche Daten werden von uns bei Nutzung unseres Online-Shops erhoben und verarbeitet?</p>
               </div>
               <div className="privacy_section_contact_fields">
                   <p> Wenn Sie eine Anfrage an uns richten oder in unserem Online-Shop Waren bestellen möchten, benötigen und verarbeiten wir bestimmte Daten, 
                       wie insbesondere die Angaben zur von Ihnen ausgewählten oder vorgenommenen Bestellung, zu Ihrer Adresse und E-Mail-Adresse 
                       und zur gewählten Zahlungsweise. Sie haben die Möglichkeit, uns ergänzende Informationen wie eine Telefonnummer 
                       freiwillig zu überlassen, um etwa eine raschere Kontaktaufnahme zu ermöglichen.</p>
                   </div>
                
                       <div className="privacy_section_contact_fields">
                           <p> Wir verarbeiten die uns überlassenen Daten für die Vertragsdurchführung, je nach gewünschter Zahlungsweise 
                               für eine vorvertragliche Prüfung und für eine eventuelle 
                               Bearbeitung von Gewährleistungsansprüchen. Die Rechtsgrundlage hierfür findet sich in Art. 6 Abs. 1 c) und f) DS-GVO.</p>
                           </div>
                           <div className="privacy_section_contact_fields">
                               <p> 
                                   Zudem erhalten die von uns eingesetzten Dienstleister (wie beispielsweise Logistikunternehmen, Zahlungsvermittler) die jeweils notwendigen Daten 
                                   zu Ihrer Person bzw. zu Ihrer Bestellung. Je nach gewählter Zahlungsweise führen wir auch 
                                   Bonitätsprüfungen durch. Ohne zutreffende Angaben personenbezogener Daten können wir eine Annahme von Bestellungen entweder gar nicht 
                                   oder nur unter eingeschränkter Auswahl bei den  Zahlungsweisen anbieten.</p>
                               </div>
                          
              
             <div className="privacy_section_contact_fields">
              
               <p>
                   Wir können die von Ihnen angegebenen Daten zudem verarbeiten, um Sie über weitere interessante Produkte aus unserem 
Portfolio zu informieren oder zu bestimmten Anlässen mit Ihnen in Verbindung zu treten.</p>
              </div>
           
       </div>

       <div className="privacy_down_arrow">
           <Link to="/readme"><i className="fas fa-angle-double-down"></i></Link>
       </div>

      </div> 

   </section> 
        </>
    )
}

export default ReadMeScreen
