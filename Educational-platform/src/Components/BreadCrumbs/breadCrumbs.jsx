import React, {useEffect, useState} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styles from './BreadCrumbs.module.css'

 
const BreadCrumbs = (props) => {
   const breadCrumbsList=props.BreadCrumbsNames.slice(0, -1);
   const TypographyLast=props.BreadCrumbsNames.at(-1);

   const ListBreadCrumbs=breadCrumbsList.map(item=>
    <Link color="inherit" href={item.href} onClick={handleClick}>
    {item.name}
  </Link>

   )
   function handleClick(event) {

    console.info(ListBreadCrumbs);
  }
  

    return (
        <div className={styles.breadCrumbs}>

<Breadcrumbs maxItems={6}  aria-label="breadcrumb">
  {ListBreadCrumbs}
  <Typography color="textPrimary">{TypographyLast.name}</Typography>
</Breadcrumbs>
        </div>

        
    );
}

export default BreadCrumbs;