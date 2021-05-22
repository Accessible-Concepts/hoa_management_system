import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';
import './TenantsPage.css';
import TenantAccordion from '../../components/TenantAccordion/TenantAccordion';
import NewTenantModal from '../../components/NewTenantModal/NewTenantModal';
import { useState } from 'react';


function TenantsPage({activeUser, tenants, onNewTenant, onDeleteTenant, onUpdateTenant}) {
    const [showNewTenantModal, setShowNewTenantModal] = useState(false);
    const [filter, setFilter] = useState("");
    const [upstutus, setUpStutus] = useState(false);
    const [uptenant, setUptenants] = useState();

    let location = window.location.href.split('/') ;
    let href =location[location.length-1];
    let hide=false
    if(href !=="tenants"){hide=true}
    if(activeUser){
        if(activeUser.role===false){hide=true}
    }
     
    if(activeUser && activeUser.role===false){hide=true}
    console.log(href);

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
    function FilterType(event){
        setFilter(event);
   }

    let filtertenants = (tenants, filter) => {
        if (!filter) {
            return tenants;
        }
        return tenants.filter((tenant) => {
            const Name = tenant.name.toLowerCase();
            const Email = tenant.email.toLowerCase();
            const Apartment = tenant.apartment.toLowerCase();
            return (Name.includes(filter) || Email.includes(filter) ||Apartment.includes(filter));    
        });      
    };

    
    $: filtertenants = filtertenants(tenants, filter);


    function UpdateStutus (){
        setShowNewTenantModal(true)
        setUpStutus(false);
        setUptenants (false);
    }
    return (
        <Container className="p-tenants">  
          <div className={"heading " + (hide ? 'hide' : '')}>     
            <input onChange={e => FilterType(e.target.value)} placeholder = "Filter"></input>
            <Button  variant="link" onClick={() => UpdateStutus()}>New Tenant</Button>  
        </div>
            <div className="list">
                {filtertenants.map(filtertenant => 
                    <div key={filtertenant.id}>
                         <TenantAccordion 
                           activeUser ={activeUser} 
                            tenant={filtertenant} 
                            onDelete={onDeleteTenant}
                            onUpdate={onUpdateTenant}
                            show= {setShowNewTenantModal} 
                            Stutus ={setUpStutus}
                            uptenant ={setUptenants}
                            
                         />   
                    </div>
                )}  
            </div>     
             <NewTenantModal 
                userId ={activeUser.userId} 
                show={showNewTenantModal} 
                onClose={() => setShowNewTenantModal(false)} 
                onCreate={onNewTenant}
                onUpdate={onUpdateTenant}
                status ={upstutus}
                uptenant ={uptenant}
                />  
        </Container>
   );
}
export default TenantsPage;