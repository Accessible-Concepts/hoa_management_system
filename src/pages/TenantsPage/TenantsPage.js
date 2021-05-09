import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';
import './TenantsPage.css';
import TenantAccordion from '../../components/TenantAccordion/TenantAccordion';
import NewTenantModal from '../../components/NewTenantModal/NewTenantModal';
import { useState } from 'react';


function TenantsPage({activeUser, tenants, onNewTenant, onDeleteTenant}) {
    const [showNewTenantModal, setShowNewTenantModal] = useState(false);
    const [filter, setFilter] = useState("");

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

    console.log (filtertenants);
    $: filtertenants = filtertenants(tenants, filter);

    return (
        <div className="p-tenants">  
          <div className="heading">
          <br/> 
          <input onChange={e => FilterType(e.target.value)} className="form-control rounded" placeholder = "Filter"></input>
          <br/>  
                 <Button variant="link" onClick={() => setShowNewTenantModal(true)}>New Tenant</Button>  
            </div>
            
                {filtertenants.map(filtertenant => 
                    <div key={filtertenant.id}>
                         <TenantAccordion 
                          tenant={filtertenant} 
                          onDelete={onDeleteTenant}
                         />   
                    </div>
                )}   
             <NewTenantModal userId ={activeUser.userId} show={showNewTenantModal} onClose={() => setShowNewTenantModal(false)} onCreate={onNewTenant}/>  
        </div>
   );
}
export default TenantsPage;