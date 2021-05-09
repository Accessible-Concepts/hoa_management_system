import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';
import './TenantsPage.css';
import TenantAccordion from '../../components/TenantAccordion/TenantAccordion';


function TenantsPage({activeUser, tenants}) {

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    function FilterType(event){
   }

    return (
        <div className="p-tenants">  
         <br/> 
          <input onChange={e => FilterType(e.target.value)} className="form-control rounded" placeholder = "Filter"></input>
          <br/>     
                {tenants.map(tenant => 
                    <div key={tenant.id}>
                         <TenantAccordion tenant={tenant}/>   
                    </div>
                )}   
                 
        </div>
   );
}
export default TenantsPage;